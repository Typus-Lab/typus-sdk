import "../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "./config.json";

const config = configs.TESTNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    let transactionBlock = new TransactionBlock();
    let target = `0x2::clock::timestamp_ms` as any;
    transactionBlock.moveCall({
        target,
        typeArguments: [],
        arguments: [transactionBlock.pure("0x6")],
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock, sender: user })).results;

    console.log(JSON.stringify(results));
    // console.log(JSON.stringify(results, null, 2));
})();
