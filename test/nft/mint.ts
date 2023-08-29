import "../load_env";
import { SuiClient } from "@mysten/sui.js/client";
import config from "../../nft_config.json";
import { getMintTx } from "../../utils/typus-nft/user-entry";
import { getPool } from "../../utils/typus-nft/fetch";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const client = new SuiClient({ url: config.RPC_ENDPOINT });
const gasBudget = 100000000;
const address = keypair.toSuiAddress();
const necklace = "typus";

(async () => {
    const pool = config[necklace];

    console.log(address);

    const objs = await client.getOwnedObjects({
        owner: address,
        options: { showType: true, showContent: true },
    });
    // console.log(objs);

    const wlTokens = objs.data.filter(
        (obj) =>
            // @ts-ignore
            obj.data?.type?.startsWith(config.PACKAGE) && obj.data?.content?.fields.for == pool
    );

    // console.log(wlTokens);

    const poolData = await getPool(client, pool);

    console.log(poolData);

    if (wlTokens.length > 0) {
        const wlToken = wlTokens[0].data?.objectId!;

        let transactionBlock = await getMintTx(gasBudget, config.PACKAGE, pool, wlToken);

        let res = await client.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });

        console.log(res);
    }
})();
