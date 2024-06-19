import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { burnLp, updateLiquidityValue } from "../../../utils/typus_perp/lp-pool/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../constants";
import { LiquidityPool, Registry } from "../../../utils/typus_perp/lp-pool/structs";
import { SuiPriceServiceConnection, SuiPythClient } from "@pythnetwork/pyth-sui-js";
import { unstake } from "../../../utils/typus_perp/stake-pool/functions";
import { tokenType, typeArgToAsset } from "../../../utils/token";
import { createPythClient, updatePyth } from "../../../utils/pyth/pythClient";
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

    // INPUT
    const NETWORK = "TESTNET";
    const TOKEN = "USDC";

    const cToken = tokenType[NETWORK][TOKEN];
    const oracle = priceInfoObjectIds[NETWORK][TOKEN];

    // update pyth oracle
    const tokens = lpPool.tokenPools.map((p) => typeArgToAsset("0x" + p.tokenType.name));

    const pythClient = createPythClient(provider, NETWORK);
    await updatePyth(pythClient, tx, tokens);

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

    const lpBalance = unstake(tx, "0x" + lpPool.lpTokenType.name, {
        version: config.TYPUS_PERP_VERSION,
        registry: config.TYPUS_PERP_STAKE_POOL_REGISTRY,
        index: BigInt(0),
        userShareId: BigInt(0),
        clock: CLOCK,
    });

    // balance to coin
    const lpCoin = tx.moveCall({
        target: `0x2::coin::from_balance`,
        typeArguments: ["0x" + lpPool.lpTokenType.name],
        arguments: [lpBalance],
    });

    const coin = burnLp(tx, [cToken, "0x" + lpPool.lpTokenType.name], {
        version: config.TYPUS_PERP_VERSION,
        registry: config.TYPUS_PERP_LP_POOL_REGISTRY,
        treasuryCaps: config.TYPUS_PERP_TREASURY_CAPS,
        index: BigInt(0),
        pythState: config.PYTH_STATE,
        oracle,
        coin: lpCoin,
        clock: CLOCK,
    });

    tx.transferObjects([coin], address);

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: address,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("BurnLpEvent")));

    // let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    // console.log(res);
    // https://testnet.suivision.xyz/txblock/4sSFtXE15BUQqz6k3z4xrQwFUa4wRev1TaX3L5DUL9jh
})();