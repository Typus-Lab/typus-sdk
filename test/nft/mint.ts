import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getMintTx, getPool } from "src/typus-nft";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/dist/cjs/transactions";

const necklace = "typus";

(async () => {
    const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

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

        let transaction = await getMintTx(config, new Transaction(), { pool, whitelist_token: wlToken });

        const result = await provider.signAndExecuteTransaction({
            signer: keypair,
            transaction,
        });
        console.log({ result });
    }
})();
