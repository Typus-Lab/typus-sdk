import "../load_env";
import config from "../../config.json";
import { getMintTx } from "../../utils/typus-nft/user-entry";
import { getPool } from "../../utils/typus-nft/fetch";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

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
            obj.data?.type?.startsWith(config.NFT_PACKAGE_ORIGIN) && obj.data?.content?.fields.for == pool
    );

    // console.log(wlTokens);

    const poolData = await getPool(provider, pool);

    console.log(poolData);

    if (wlTokens.length > 0) {
        const wlToken = wlTokens[0].data?.objectId!;

        let transactionBlock = await getMintTx(gasBudget, config.NFT_PACKAGE_ORIGIN, config.NFT_TRANSFER_POLICY, pool, wlToken);

        const result = await provider.signAndExecuteTransactionBlock({
            signer: keypair,
            transactionBlock,
        });
        console.log({ result });
    }
})();
