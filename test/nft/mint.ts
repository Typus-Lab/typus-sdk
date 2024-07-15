import "../load_env";
import configs from "../../config.json";
import { getMintTx, getPool } from "../../src";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
const config = configs.TESTNET;

// Generate a new Ed25519 Keypair
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});

const gasBudget = 100000000;
const necklace = "typus";

(async () => {
    const pool = config[necklace];

    const address = keypair.toSuiAddress();
    console.log(address);

    const objs = await provider.getOwnedObjects({
        owner: address,
        options: { showType: true, showContent: true },
    });
    // console.log(objs);

    const wlTokens = objs.data.filter(
        (obj) =>
            // @ts-ignore
            obj.data?.type?.startsWith(config.PACKAGE_ORIGIN.NFT) && obj.data?.content?.fields.for == pool
    );

    // console.log(wlTokens);

    const poolData = await getPool(provider, pool);

    console.log(poolData);

    if (wlTokens.length > 0) {
        const wlToken = wlTokens[0].data?.objectId!;

        let transactionBlock = await getMintTx(gasBudget, config.PACKAGE_ORIGIN.NFT, config.OBJECT.NFT_TRANSFER_POLICY, pool, wlToken);

        const result = await provider.signAndExecuteTransactionBlock({
            signer: keypair,
            transactionBlock,
        });
        console.log({ result });
    }
})();
