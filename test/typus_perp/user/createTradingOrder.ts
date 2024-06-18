import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { createTradingOrder } from "../../../utils/typus_perp/trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../constants";
import { LiquidityPool, Registry } from "../../../utils/typus_perp/lp-pool/structs";
import "../../load_env";
import { createPythClient, updatePyth } from "../../../utils/pyth/pythClient";
import { tokenType } from "../../../utils/token";
import { priceInfoObjectIds } from "../../../utils/pyth/constant";

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
    const TOKEN = "USDT";
    const BASE_TOKEN = "SUI";
    const NETWORK = "TESTNET";

    const pythClient = createPythClient(provider, NETWORK);
    await updatePyth(pythClient, tx, [TOKEN, BASE_TOKEN]);
    const cToken = tokenType[NETWORK][TOKEN];
    const baseToken = tokenType[NETWORK][BASE_TOKEN];

    const coins = (
        await provider.getCoins({
            owner: address,
            coinType: cToken,
        })
    ).data.map((coin) => coin.coinObjectId);

    const balance = tx.moveCall({
        target: `${config.FRAMEWORK}::utils::extract_balance`,
        typeArguments: [cToken],
        arguments: [tx.makeMoveVec({ objects: coins.map((coin) => tx.object(coin)) }), tx.pure("1000000000")],
    });

    createTradingOrder(tx, [cToken, baseToken], {
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
        linkedPositionId: null,
        collateral: balance,
        reduceOnly: false,
        isLong: true,
        isStopOrder: false,
        size: BigInt(1000000000000),
        triggerPrice: BigInt(200000000),
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
