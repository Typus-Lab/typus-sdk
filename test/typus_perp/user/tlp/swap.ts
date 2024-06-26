import configs from "../../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { swap } from "../../../../utils/typus_perp/lp-pool/functions";
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
    const FROM_TOKEN = "USDT";
    const TO_TOKEN = "USDC";
    const NETWORK = "TESTNET";

    const pythClient = createPythClient(provider, NETWORK);
    await updatePyth(pythClient, tx, [FROM_TOKEN, TO_TOKEN]);
    const fromToken = tokenType[NETWORK][FROM_TOKEN];
    const toToken = tokenType[NETWORK][TO_TOKEN];

    const coins = (
        await provider.getCoins({
            owner: address,
            coinType: fromToken,
        })
    ).data.map((coin) => coin.coinObjectId);

    const destination = coins.pop()!;

    if (coins.length > 0) {
        tx.mergeCoins(destination, coins);
    }

    const [coin] = tx.splitCoins(destination, ["100000000"]);

    const token = swap(tx, [fromToken, toToken], {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.LP_POOL_REGISTRY,
        pythState: pythStateId[NETWORK],
        clock: CLOCK,
        index: BigInt(0),
        oracleFromToken: priceInfoObjectIds[NETWORK][FROM_TOKEN],
        oracleToToken: priceInfoObjectIds[NETWORK][TO_TOKEN],
        fromCoin: coin,
        minToAmount: BigInt(0),
    });

    tx.transferObjects([token], address);

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: address,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("SwapEvent"))[0].parsedJson);

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
    // https://testnet.suivision.xyz/txblock/8TDGppninwYxBqpNtao3mMa936nemU3rdMqA8xesJREA
})();
