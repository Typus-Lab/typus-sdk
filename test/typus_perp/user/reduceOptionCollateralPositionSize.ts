import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { reduceOptionCollateralPositionSize } from "../../../utils/typus_perp/trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../constants";
import { LiquidityPool, Registry } from "../../../utils/typus_perp/lp-pool/structs";
import { updateWithPyth } from "../../../utils/oracle/updateWithPyth";
import "../../load_env";
import { createPythClient, updatePyth } from "../../../utils/pyth/pythClient";
import { priceInfoObjectIds } from "../../../utils/pyth/constant";
import { tokenType } from "../../../utils/token";
import { getSplitBidReceiptTx } from "../../../utils/typus-dov-single-v2/user-entry";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    const lpPoolRegistry = await Registry.fetch(provider, config.TYPUS_PERP_LP_POOL_REGISTRY);
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
    const bToken = tokenType[NETWORK][TOKEN];
    const baseToken = tokenType[NETWORK][BASE_TOKEN];

    updateWithPyth(
        config.ORACLE,
        tx,
        "0x0edabd97c679967e00d508c766fb4be0195890f96343bd3a58e10fa5e8063c96",
        config.PYTH_STATE,
        priceInfoObjectIds[NETWORK][BASE_TOKEN],
        priceInfoObjectIds[NETWORK][QUOTE_TOKEN]
    );

    reduceOptionCollateralPositionSize(tx, [cToken, bToken, baseToken], {
        version: config.TYPUS_PERP_VERSION,
        registry: config.TYPUS_PERP_MARKET_REGISTRY,
        poolRegistry: config.TYPUS_PERP_LP_POOL_REGISTRY,
        marketIndex: BigInt(0),
        poolIndex: BigInt(0),
        pythState: config.PYTH_STATE,
        oracleCToken: priceInfoObjectIds[NETWORK][TOKEN],
        oracleTradingSymbol: priceInfoObjectIds[NETWORK][BASE_TOKEN],
        clock: CLOCK,
        typusEcosystemVersion: config.TYPUS_VERSION,
        typusUserRegistry: config.USER_REGISTRY,
        typusLeaderboardRegistry: config.LEADERBOARD_REGISTRY,
        dovRegistry: config.DOV_REGISTRY,
        typusOracle: "0x0edabd97c679967e00d508c766fb4be0195890f96343bd3a58e10fa5e8063c96",
        positionId: BigInt(1),
        orderSize: null,
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
})();
