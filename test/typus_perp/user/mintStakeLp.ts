import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { mintLp, updateLiquidityValue } from "../../../utils/typus_perp/lp-pool/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../constants";
import { LiquidityPool, Registry } from "../../../utils/typus_perp/lp-pool/structs";
import { createPythClient, updatePyth } from "../../../utils/pyth/pythClient";
import { tokenType } from "../../../utils/token";
import { stake } from "../../../utils/typus_perp/stake-pool/functions";
import { priceIDs, priceInfoObjectIds } from "../../../utils/pyth/constant";

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

    // const [coin] = tx.splitCoins(tx.gas, ["1000000000"]);
    // const cToken = "0xa38dad920880f81ea514de6db007d3a84e9116a29c60b3e69bbe418c2d9f553c::usdt::USDT";

    // INPUT
    const NETWORK = "TESTNET";
    const TOKEN = "USDC";
    const tokens = ["SUI", "USDC", "USDT"];

    const pythClient = createPythClient(provider, NETWORK);
    await updatePyth(pythClient, tx, tokens);
    const cToken = tokenType[NETWORK][TOKEN];

    for (let token of tokens) {
        updateLiquidityValue(tx, tokenType[NETWORK][token], {
            version: config.TYPUS_PERP_VERSION,
            registry: config.TYPUS_PERP_LP_POOL_REGISTRY,
            index: BigInt(0),
            pythState: config.PYTH_STATE,
            oracle: priceInfoObjectIds[NETWORK][token],
            clock: CLOCK,
        });
    }

    // coins
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

    const [coin] = tx.splitCoins(destination, ["100000000000"]);

    const lpCoin = mintLp(tx, [cToken, "0x" + lpPool.lpTokenType.name], {
        version: config.TYPUS_PERP_VERSION,
        registry: config.TYPUS_PERP_LP_POOL_REGISTRY,
        treasuryCaps: config.TYPUS_PERP_TREASURY_CAPS,
        index: BigInt(0),
        pythState: config.PYTH_STATE,
        oracle: priceInfoObjectIds[NETWORK][TOKEN],
        coin,
        clock: CLOCK,
    });

    stake(tx, "0x" + lpPool.lpTokenType.name, {
        version: config.TYPUS_PERP_VERSION,
        registry: config.TYPUS_PERP_STAKE_POOL_REGISTRY,
        index: BigInt(0),
        lpToken: lpCoin,
        clock: CLOCK,
    });

    // tx.transferObjects([lpCoin], address);

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
})();
