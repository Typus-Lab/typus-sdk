import "src/utils/load_env";
import { getExerciseTx } from "src/typus-dov-single-v2";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = TypusConfig.default("TESTNET");
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let depositToken = "0x2::sui::SUI";
    let bidToken = "0x2::sui::SUI";
    let typeArguments = [depositToken, bidToken];
    let index = "0";
    let receipts = [];
    let user = signer.toSuiAddress();

    let transactionBlock = await getExerciseTx(config, new TransactionBlock(), { typeArguments, index, receipts, user });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
