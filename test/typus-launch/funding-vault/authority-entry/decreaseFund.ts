import "src/utils/load_env";
import { decreaseFund } from "src/typus-launch/funding-vault";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let user = signer.toSuiAddress();

    let transaction = new Transaction();

    decreaseFund(config, transaction, {
        typeArguments: ["0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"],
        index: "0",
        amount: "1000000000",
        recipient: user,
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
