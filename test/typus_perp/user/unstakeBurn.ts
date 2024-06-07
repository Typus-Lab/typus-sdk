import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { burnLp } from "../../../utils/typus_perp/lp-pool/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../constants";
import { LiquidityPool, Registry } from "../../../utils/typus_perp/lp-pool/structs";
import { SuiPriceServiceConnection, SuiPythClient } from "@pythnetwork/pyth-sui-js";
import { unstake } from "../../../utils/typus_perp/stake-pool/functions";

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

    // const [coin] = tx.splitCoins(tx.gas, ["1000000000"]);

    const cToken = "0xa38dad920880f81ea514de6db007d3a84e9116a29c60b3e69bbe418c2d9f553c::usdt::USDT";
    const oracle = config.PRICE_INFO_OBJECT_USDT;

    const coins = (
        await provider.getCoins({
            owner: address,
            coinType: cToken,
        })
    ).data.map((coin) => coin.coinObjectId);

    console.log(coins.length);

    const destination = coins.pop()!;

    if (coins.length > 0) {
        tx.mergeCoins(destination, coins);
    }

    const [coin] = tx.splitCoins(destination, ["1000000000"]);

    const lpCoin = unstake(tx, "0x" + lpPool.lpTokenType.name, {
        version: config.TYPUS_PERP_VERSION,
        registry: config.TYPUS_PERP_STAKE_POOL_REGISTRY,
        index: BigInt(0),
        userShareId: BigInt(0),
        clock: CLOCK,
    });

    burnLp(tx, [cToken, "0x" + lpPool.lpTokenType.name], {
        version: config.TYPUS_PERP_VERSION,
        registry: config.TYPUS_PERP_LP_POOL_REGISTRY,
        treasuryCaps: config.TYPUS_PERP_TREASURY_CAPS,
        index: BigInt(0),
        pythState: config.PYTH_STATE,
        oracle,
        coin: lpCoin,
        clock: CLOCK,
    });

    // tx.transferObjects([lpCoin], address);

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
