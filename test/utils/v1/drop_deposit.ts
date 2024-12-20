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

    const raw = fs.readFileSync("v1.csv", "utf-8");
    const lines = raw.split("\n");
    const headers = lines.shift();
    console.log(headers);
    console.log(lines.length);
    const shares = lines
        .map((l) => {
            let x = l.split(",");
            return {
                index: parseInt(x[0]),
                tag: parseInt(x[1]),
                user: x[2],
                exists: x[3] === "true",
                value: parseFloat(x[4]),
            } as Share;
        })
        .filter((s) => !s.exists);
    console.log(shares.length);

    for (let index of [4, 6, 12, 13]) {
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
                if (index == 4 && tag == 0 && round < 171) {
                    round++;
                    continue;
                }
                console.log(`index:${index}, tag:${tag}, round:${round}, _users:${_users.length}`);
                try {
                    let tx = new Transaction();
                    drop_deposit(tx, index, tag, _users);
                    let res = await provider.signAndExecuteTransaction({ signer, transaction: tx });
                    console.log(res);
                    round++;
                } catch (e) {
                    sleep(5000);
                }
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
        target: `0xb34aa383cdde6230fb41efb9b114a45f5e7e3fe37a47a8c58d0d412ba5d3a950::typus_dov_single::drop_deposit_nodes`,
        typeArguments: [],
        arguments: [
            tx.object("0xb44c0fa1ab40f7699be3dce02475965a636ed850348435abb3b797b273f6c551"),
            tx.pure(index),
            tx.pure(tag),
            tx.pure(users),
        ],
    });
}

//   13 => { d_token: 'SUI', b_token: 'SUI' },
//   12 => { d_token: 'SUI', b_token: 'SUI' },
//   6 => { d_token: 'CETUS', b_token: 'CETUS' },
//   4 => { d_token: 'SUI', b_token: 'SUI' },
//   0 => { d_token: 'SUI', b_token: 'SUI' },

// 0 0 224142
// 0 1 224142
// 0 2 222025
// 0 3 197785
// 4 0 479360
// 4 1 479360
// 4 2 472164
// 4 3 471743
// 6 0 37410
// 6 1 37410
// 6 2 37314
// 6 3 35433
// 12 0 59071
// 12 1 59071
// 12 2 58873
// 12 3 49995
// 13 0 75072
// 13 1 75072
// 13 2 74923
// 13 3 69243
