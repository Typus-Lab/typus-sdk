import "src/utils/load_env";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";
import * as fs from "fs";

// Generate a new Ed25519 Keypair

import mnemonic from "../../../mnemonic.json";
const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.NFT));

let provider = new SuiClient({
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

        const transaction = new Transaction();

        for (let input of inputs) {
            transaction.moveCall({
                target: `0xe177697e191327901637f8d2c5ffbbde8b1aaac27ec1024c4b62d1ebd1cd7430::subdomains::new_leaf`,
                arguments: [
                    transaction.object("0x6e0ddefc0ad98889c04bab9639e512c21766c5e6366f89e696956d9be6952871"),
                    transaction.object("0xe3698afbdcc91b2ea55c547646a3ce8ced64301a103c2387e0e20be11f277632"),
                    transaction.object("0x6"),
                    transaction.pure(`${input.number.padStart(4, 0)}.tails-by-typus.sui`),
                    transaction.pure(input.id),
                ],
            });
        }
        const res = await provider.signAndExecuteTransaction({ signer: keypair, transaction });
        console.log(res);

        await sleep(5000);
    }
})();
