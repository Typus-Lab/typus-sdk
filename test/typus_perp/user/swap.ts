import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { swap } from "../../../utils/typus_perp/lp-pool/functions";
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
        "0x1fc18861232290221461220bd4e2acd1dcdfbc89c84092c93c18bdc7756c1588", // USDT/USD price ID
        "0x50c67b3fd225db8912a424dd4baed60ffdde625ed2feaaf283724f9608fea266", // SUI/USD price ID
    ];

    const priceFeedUpdateData = await connection.getPriceFeedsUpdateData(priceIDs);

    // @ts-ignore
    const priceInfoObjectIds = await client.updatePriceFeeds(tx, priceFeedUpdateData, priceIDs);
    // console.log(priceInfoObjectIds);

    const fromToken = "0xa38dad920880f81ea514de6db007d3a84e9116a29c60b3e69bbe418c2d9f553c::usdt::USDT";
    const toToken = "0x2::sui::SUI";

    const coins = (
        await provider.getCoins({
            owner: address,
            coinType: fromToken,
        })
    ).data.map((coin) => coin.coinObjectId);

    const balance = tx.moveCall({
        target: `${config.FRAMEWORK}::utils::extract_balance`,
        typeArguments: [fromToken],
        arguments: [tx.makeMoveVec({ objects: coins.map((coin) => tx.object(coin)) }), tx.pure("1000000")],
    });

    const token = swap(tx, [fromToken, toToken], {
        version: config.TYPUS_PERP_VERSION,
        registry: config.TYPUS_PERP_LP_POOL_REGISTRY,
        pythState: config.PYTH_STATE,
        clock: CLOCK,
        index: BigInt(0),
        oracleFromToken: priceInfoObjectIds[0],
        oracleToToken: priceInfoObjectIds[1],
        fromBalance: balance,
        minToAmount: BigInt(0),
    });

    tx.transferObjects([token], address);

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
