import configs from "../../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { releaseCollateral } from "../../../../utils/typus_perp/trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../../constants";
import { LiquidityPool, Registry } from "../../../../utils/typus_perp/lp-pool/structs";
import "../../../load_env";
import { createPythClient, updatePyth } from "../../../../utils/pyth/pythClient";
import { tokenType } from "../../../../utils/token";
import { priceInfoObjectIds, pythStateId } from "../../../../utils/pyth/constant";

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
    const TOKEN = "USDT";
    const BASE_TOKEN = "SUI";
    const NETWORK = "TESTNET";

    const pythClient = createPythClient(provider, NETWORK);
    await updatePyth(pythClient, tx, [TOKEN, BASE_TOKEN]);
    const cToken = tokenType[NETWORK][TOKEN];
    const baseToken = tokenType[NETWORK][BASE_TOKEN];

    const coin = releaseCollateral(tx, [cToken, baseToken], {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.MARKET_REGISTRY,
        poolRegistry: config.REGISTRY.LP_POOL_REGISTRY,
        marketIndex: BigInt(0),
        poolIndex: BigInt(0),
        pythState: pythStateId[NETWORK],
        oracleCToken: priceInfoObjectIds[NETWORK][TOKEN],
        oracleTradingSymbol: priceInfoObjectIds[NETWORK][BASE_TOKEN],
        clock: CLOCK,
        positionId: BigInt(4),
        releaseAmount: BigInt(899591197 - 817607418),
    });

    tx.transferObjects([coin], address);

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
