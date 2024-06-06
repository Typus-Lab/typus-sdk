import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { createTradingOrder } from "../../../utils/typus_perp/trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../constants";
import { LiquidityPool, Registry } from "../../../utils/typus_perp/lp-pool/structs";
import { SuiPriceServiceConnection, SuiPythClient } from "@pythnetwork/pyth-sui-js";
import "../../load_env";

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

    // @ts-ignore
    const client = new SuiPythClient(provider, config.PYTH_STATE, config.WORMHOLE_STATE);

    const connection = new SuiPriceServiceConnection("https://hermes-beta.pyth.network");

    const priceIDs = [
        // You can find the IDs of prices at https://pyth.network/developers/price-feed-ids
        "0x50c67b3fd225db8912a424dd4baed60ffdde625ed2feaaf283724f9608fea266", // SUI/USD price ID
        "0x1fc18861232290221461220bd4e2acd1dcdfbc89c84092c93c18bdc7756c1588", // USDT/USD price ID
    ];

    const priceFeedUpdateData = await connection.getPriceFeedsUpdateData(priceIDs);

    // @ts-ignore
    const priceInfoObjectIds = await client.updatePriceFeeds(tx, priceFeedUpdateData, priceIDs);
    // console.log(priceInfoObjectIds);

    const cToken = "0xa38dad920880f81ea514de6db007d3a84e9116a29c60b3e69bbe418c2d9f553c::usdt::USDT";

    const BASE_TOKEN = "0x2::sui::SUI";

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

    createTradingOrder(tx, [cToken, BASE_TOKEN], {
        version: config.TYPUS_PERP_VERSION,
        registry: config.TYPUS_PERP_MARKET_REGISTRY,
        poolRegistry: config.TYPUS_PERP_LP_POOL_REGISTRY,
        marketIndex: BigInt(0),
        poolIndex: BigInt(0),
        pythState: config.PYTH_STATE,
        oracleCToken: config.PRICE_INFO_OBJECT_USDT,
        oracleTradingSymbol: config.PRICE_INFO_OBJECT_SUI,
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
        triggerPrice: BigInt(1),
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
