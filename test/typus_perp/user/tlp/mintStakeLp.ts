import configs from "../../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { mintLp, updateLiquidityValue } from "../../../../utils/typus_perp/lp-pool/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../../constants";
import { LiquidityPool, Registry } from "../../../../utils/typus_perp/lp-pool/structs";
import { createPythClient, updatePyth } from "../../../../utils/pyth/pythClient";
import { tokenType, typeArgToAsset } from "../../../../utils/token";
import { stake } from "../../../../utils/typus_perp/stake-pool/functions";
import { priceIDs, priceInfoObjectIds, pythStateId } from "../../../../utils/pyth/constant";
import { mintStakeLp } from "../../../../utils/typus_perp/user/tlp";
import { NETWORK } from "../../../../utils/typus_perp";

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
    // console.log(lpPoolRegistry);

    const dynamicFields = await provider.getDynamicFields({
        parentId: lpPoolRegistry.liquidityPoolRegistry,
    });

    const field = dynamicFields.data[0];
    const lpPool = await LiquidityPool.fetch(provider, field.objectId);
    // console.log(lpPool);

    // INPUT
    const cTOKEN = "USDT";
    const cToken = tokenType[NETWORK][cTOKEN];

    // coins
    const coins = (
        await provider.getCoins({
            owner: address,
            coinType: cToken,
        })
    ).data.map((coin) => coin.coinObjectId);
    console.log(coins.length);

    let tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    tx = await mintStakeLp(provider, config, {
        tx: new TransactionBlock(),
        lpPool,
        coins,
        cTOKEN,
        amount: "1000000",
        userShareId: null,
    });

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: address,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("MintLpEvent")));

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
})();
