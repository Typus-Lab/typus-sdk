import "../../../src/utils/load_env";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import * as fs from "fs";

// Generate a new Ed25519 Keypair

import mnemonic from "../../../mnemonic.json";
const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.NFT));

const provider = new SuiClient({
    url: "https://fullnode.mainnet.sui.io:443",
});

const gasBudget = 500000000;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    const raw = fs.readFileSync("tailsDynamicField.csv", "utf-8");
    const _dataArray: Array<any> = JSON.parse(raw);
    const dataArray = _dataArray.splice(0, 179);

    var i = 0;

    while (dataArray.length > 0) {
        const inputs = dataArray.splice(0, 50);
        // console.log(inputs.length);
        i += inputs.length;
        console.log(i);

        const transactionBlock = new TransactionBlock();

        for (let input of inputs) {
            transactionBlock.moveCall({
                target: `0xe177697e191327901637f8d2c5ffbbde8b1aaac27ec1024c4b62d1ebd1cd7430::subdomains::new_leaf`,
                arguments: [
                    transactionBlock.object("0x6e0ddefc0ad98889c04bab9639e512c21766c5e6366f89e696956d9be6952871"),
                    transactionBlock.object("0xe3698afbdcc91b2ea55c547646a3ce8ced64301a103c2387e0e20be11f277632"),
                    transactionBlock.object("0x6"),
                    transactionBlock.pure(`${input.number.padStart(4, 0)}.tails-by-typus.sui`),
                    transactionBlock.pure(input.id),
                ],
            });
            transactionBlock.setGasBudget(gasBudget);
        }
        const res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
        console.log(res);

        await sleep(5000);
    }
})();
