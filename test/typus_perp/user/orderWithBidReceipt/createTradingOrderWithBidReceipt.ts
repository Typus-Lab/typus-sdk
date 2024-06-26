import configs from "../../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { createTradingOrderWithBidReceipt } from "../../../../utils/typus_perp/trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../../constants";
import { LiquidityPool, Registry } from "../../../../utils/typus_perp/lp-pool/structs";
import { updateWithPyth } from "../../../../utils/oracle/updateWithPyth";
import "../../../load_env";
import { createPythClient, updatePyth } from "../../../../utils/pyth/pythClient";
import { priceInfoObjectIds } from "../../../../utils/pyth/constant";
import { tokenType } from "../../../../utils/token";
import { getSplitBidReceiptTx } from "../../../../utils/typus-dov-single-v2/user-entry";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    const lpPoolRegistry = await Registry.fetch(provider, config.REGISTRY.LP_POOL_REGISTRY);
    console.log(lpPoolRegistry);

    const dynamicFields = await provider.getDynamicFields({
        parentId: lpPoolRegistry.liquidityPoolRegistry,
    });

    const field = dynamicFields.data[0];
    const lpPool = await LiquidityPool.fetch(provider, field.objectId);
    console.log(lpPool);

    let tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    // INPUTS
    const TOKEN = "USDC";
    const BASE_TOKEN = "SOL";
    const QUOTE_TOKEN = "USDC";
    const NETWORK = "TESTNET";

    const pythClient = createPythClient(provider, NETWORK);
    await updatePyth(pythClient, tx, [TOKEN, BASE_TOKEN]);
    const cToken = tokenType[NETWORK][TOKEN];
    const baseToken = tokenType[NETWORK][BASE_TOKEN];

    updateWithPyth(
        config.ORACLE,
        tx,
        "0x0edabd97c679967e00d508c766fb4be0195890f96343bd3a58e10fa5e8063c96",
        pythStateId[NETWORK],
        priceInfoObjectIds[NETWORK][BASE_TOKEN],
        priceInfoObjectIds[NETWORK][QUOTE_TOKEN]
    );

    // split bid receipt

    // getSplitBidReceiptTx({
    //     tx,
    //     typusFrameworkOriginPackageId: config,
    //     typusDovSinglePackageId: "",
    //     typusDovSingleRegistry: "",
    //     typeArguments: [],
    //     index: "",
    //     receipts: [],
    //     share: "",
    //     recipient: "",
    // });

    createTradingOrderWithBidReceipt(tx, [cToken, baseToken], {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.MARKET_REGISTRY,
        poolRegistry: config.REGISTRY.LP_POOL_REGISTRY,
        marketIndex: BigInt(0),
        poolIndex: BigInt(0),
        pythState: pythStateId[NETWORK],
        oracleCToken: priceInfoObjectIds[NETWORK][TOKEN],
        oracleTradingSymbol: priceInfoObjectIds[NETWORK][BASE_TOKEN],
        clock: CLOCK,
        typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
        typusUserRegistry: config.REGISTRY.USER,
        typusLeaderboardRegistry: config.REGISTRY.LEADERBOARD,
        isLong: false,
        isStopOrder: false,
        triggerPrice: BigInt(100000000),
        dovRegistry: config.DOV_REGISTRY,
        typusOracle: "0x0edabd97c679967e00d508c766fb4be0195890f96343bd3a58e10fa5e8063c96",
        collateralBidReceipt: "0xc899a4e27bdaeb0c6a99a37cbd9aedbabbea0548815af83fcdd2b11ec9b7a532",
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
    // https://testnet.suivision.xyz/txblock/9BwZRXhRqYxeP6k3NavsVX1yQQjTfJbPBYijDPfaPHPH
})();
