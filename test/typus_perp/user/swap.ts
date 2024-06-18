import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { swap } from "../../../utils/typus_perp/lp-pool/functions";
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
    const FROM_TOKEN = "USDT";
    const TO_TOKEN = "SUI";
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
        oracleFromToken: priceInfoObjectIds[NETWORK][FROM_TOKEN],
        oracleToToken: priceInfoObjectIds[NETWORK][TO_TOKEN],
        fromBalance: balance,
        minToAmount: BigInt(0),
    });

    tx.transferObjects([token], address);

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
    // https://testnet.suivision.xyz/txblock/8TDGppninwYxBqpNtao3mMa936nemU3rdMqA8xesJREA
})();
