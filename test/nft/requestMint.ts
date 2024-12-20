import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getIsWhitelistTx, getRequestMintTx, getDiscountPool, getMintHistory } from "src/typus-nft";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/dist/cjs/transactions";

(async () => {
    const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    const pool = "0x7e3172a59cdde0ba50abd57ca82bd4dd9427b1a5ae3b3d386da0db251402aaae";

    let user = keypair.toSuiAddress();
    console.log(user);

    const poolData = await getDiscountPool(provider, pool);
    console.log(poolData);

    const remaining = poolData.num;
    console.log("remaining: " + remaining);

    var transaction = await getIsWhitelistTx(config, new Transaction(), { pool, user });

    let results = (await provider.devInspectTransactionBlock({ transaction, sender: user })).results;
    // @ts-ignore
    const isWhitelist = results![0].returnValues[0][0] == 1;
    console.log("isWhitelist: " + isWhitelist);

    const seed = "2"; // 0,1,2

    var transaction = await getRequestMintTx(config, new Transaction(), { pool, seed, price: poolData.price });

    const result = await provider.signAndExecuteTransaction({
        signer: keypair,
        transaction,
        options: { showEvents: true },
    });
    console.log({ result });

    if (result.events!.length > 0) {
        const vrf_input = result.events![0].parsedJson!["vrf_input"];
        console.log(vrf_input);

        const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

        while (true) {
            const res = await getMintHistory(provider, config.packageOrigin.nft, vrf_input);
            if (res) {
                console.log(res);
                break;
            }
            await sleep(5000);
        }
    } else {
        console.log("Mint Failed");
    }
})();
