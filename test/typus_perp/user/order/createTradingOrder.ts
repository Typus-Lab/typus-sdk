import configs from "../../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { createTradingOrder } from "../../../../utils/typus_perp/trading/functions";
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

    const coins = (
        await provider.getCoins({
            owner: address,
            coinType: cToken,
        })
    ).data.map((coin) => coin.coinObjectId);

    const destination = coins.pop()!;

    if (coins.length > 0) {
        tx.mergeCoins(destination, coins);
    }

    const [coin] = tx.splitCoins(destination, ["100000000"]);

    createTradingOrder(tx, [cToken, baseToken], {
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
        linkedPositionId: null,
        collateral: coin,
        reduceOnly: false,
        isLong: true,
        isStopOrder: false,
        size: BigInt(1000000000000),
        triggerPrice: BigInt(100000000),
    });

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: address,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("CreateTradingOrderEvent"))[0].parsedJson);
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("RealizeFundingEvent"))); // if the order is not filled, there will be no RealizeFundingEvent
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("OrderFilledEvent"))); // if the order is not filled, there will be no OrderFilledEvent

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
})();
