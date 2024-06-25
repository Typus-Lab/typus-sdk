import "../load_env";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import * as fs from "fs";

// Generate a new Ed25519 Keypair

import mnemonic from "../../mnemonic.json";
const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.NFT));

const provider = new SuiClient({
    url: "https://fullnode.mainnet.sui.io:443",
});

const gasBudget = 500000000;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    const transactionBlock = new TransactionBlock();

    const addresses = [
        "0x78fe054243da91df1b027e6f8edb2b3a5d6f29e7193740fa33af5f3085f95584",
        "0x9106540a21f12648c63ba9a846fd8d0ff923ae4ea4d5cb64b4d8a82e33b4e092",
        "0xa6cc517e6bca309fc067d3fe73f685c05e74fa54fd4b3e19c48ef8894f0ef061",
        "0xaf5373ea593d2506ae7caeba15e2332186f176f67119dac821955fc16a23cdc2",
        "0xd8370b8e732671933bd2c62b1bdb1eff71647765127b3e4cb9a10f1ee8dcfafa",
    ];

    var n = 0;

    for (let address of addresses) {
        const ns = transactionBlock.moveCall({
            // target: `0xe177697e191327901637f8d2c5ffbbde8b1aaac27ec1024c4b62d1ebd1cd7430::subdomains::new`,
            target: `0xdacfd7c1176a68137b38a875d76a2f65d277596d2c632881931d926b16de2698::subdomain_proxy::new`,
            arguments: [
                transactionBlock.object("0x6e0ddefc0ad98889c04bab9639e512c21766c5e6366f89e696956d9be6952871"),
                transactionBlock.object("0x79d966530d85fe94e9f71b4870013ce5d18a05b8995f3b84b16ad19b673f8ae9"),
                transactionBlock.object("0x6"),
                transactionBlock.pure(`00${n}.cranker1.typus.sui`),
                transactionBlock.pure("1874341370059"),
                transactionBlock.pure(true),
                transactionBlock.pure(true),
            ],
        });
        transactionBlock.transferObjects([ns], address);
        n += 1;
    }

    transactionBlock.setGasBudget(gasBudget);

    const res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
