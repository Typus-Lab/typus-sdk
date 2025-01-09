import "src/utils/load_env";
import { SuiClient } from "@mysten/sui/client";
import { TypusConfig } from "src/utils";
import * as fs from "fs";
import { typeArgToAsset } from "src/constants";
import { Transaction } from "@mysten/sui/transactions";
import mnemonic from "mnemonic.json";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";

(async () => {
    let config = await TypusConfig.default("MAINNET", "https://sui-mainnet.blastapi.io:443/df8b799c-1e3b-4309-b289-ddfb76cc090d");
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    console.log(signer.toSuiAddress().toString());

    const parentId = "0xb44c0fa1ab40f7699be3dce02475965a636ed850348435abb3b797b273f6c551";

    // var result = await provider.getDynamicFields({
    //     parentId,
    //     cursor: null,
    // });

    // const vaults = new Map<number, Vault>();

    // result.data.forEach((x) => {
    //     if (x.objectType.includes("PortfolioVault")) {
    //         let tokens = x.objectType.split("<")[1].split(", ");

    //         let vault: Vault = {
    //             d_token: typeArgToAsset(tokens[0]),
    //             b_token: typeArgToAsset(tokens[1]),
    //         };
    //         vaults.set(Number(x.name.value), vault);
    //     }
    // });

    // console.log(vaults);
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const raw = fs.readFileSync("v1_deposit.csv", "utf-8");
    const lines = raw.split("\n");
    const headers = lines.shift();
    console.log(headers);
    console.log(lines.length);
    const shares = lines.map((l) => {
        let x = l.split(",");
        return {
            index: parseInt(x[0]),
            tag: parseInt(x[1]),
            user: x[2],
            exists: x[3] === "true",
            value: parseFloat(x[4]),
        } as Share;
    });
    console.log(shares.length);

    for (let index of [0, 16, 4, 2, 8, 7, 17, 5, 15, 6, 14, 12, 13, 9]) {
        // for (let tag = 0; tag < 4; tag++) {
        //     let users = shares.filter((s) => s.index == index && s.tag == tag).map((s) => s.user);
        //     console.log(`${index} ${tag} ${users.length}`);
        // }
        // tag 0~3
        for (let tag = 0; tag < 4; tag++) {
            let users = shares.filter((s) => s.index == index && s.tag == tag).map((s) => s.user);
            console.log(`index:${index}, tag:${tag}, users:${users.length}`);
            var round = 0;
            // if (index == 0 && tag < 2) {
            //     round++;
            //     continue;
            // }
            // index:4, tag:0, round:171, _users:500
            while (users.length > 0) {
                let _users = users.splice(0, Math.min(500, users.length));
                // if (index == 4 && tag == 0 && round < 171) {
                //     round++;
                //     continue;
                // }
                console.log(`index:${index}, tag:${tag}, round:${round}, _users:${_users.length}`);
                // try {
                let tx = new Transaction();
                drop_deposit(tx, index, tag, _users);
                let res = await provider.signAndExecuteTransaction({ signer, transaction: tx });
                console.log(res);
                round++;
                // } catch (e) {
                //     sleep(5000);
                // }
            }
        }
    }
})();

interface Share {
    index: number;
    tag: number;
    user: string;
    exists: boolean;
    value: number;
}

interface Vault {
    d_token: string;
    b_token: string;
}

function drop_deposit(tx: Transaction, index: number, tag: number, users: string[]) {
    tx.moveCall({
        target: `0x1e67528d8020969a03c8ab800e5ccab9341ef9cb70de26439f965a7f961cea07::typus_dov_single::force_drop_deposit_nodes`,
        typeArguments: [],
        arguments: [
            tx.object("0xb44c0fa1ab40f7699be3dce02475965a636ed850348435abb3b797b273f6c551"),
            tx.pure.u64(index),
            tx.pure.u8(tag),
            tx.pure.vector("address", users),
        ],
    });
}
