import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getMintTx, getPool } from "src/typus-nft";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/dist/cjs/transactions";
let config = TypusConfig.default("TESTNET");

// Generate a new Ed25519 Keypair
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
let provider = new SuiClient({ url: config.rpcEndpoint });

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
            obj.data?.type?.startsWith(config.packageOrigin.nft) && obj.data?.content?.fields.for == pool
    );

    // console.log(wlTokens);

    const poolData = await getPool(provider, pool);

    console.log(poolData);

    if (wlTokens.length > 0) {
        const wlToken = wlTokens[0].data?.objectId!;

        let transactionBlock = await getMintTx(config, new TransactionBlock(), { pool, whitelist_token: wlToken });

        const result = await provider.signAndExecuteTransactionBlock({
            signer: keypair,
            transactionBlock,
        });
        console.log({ result });
    }
})();
