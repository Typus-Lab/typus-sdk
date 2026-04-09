import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { updateOracleWithSignatureTx } from "src/utils/oracle";
import { tokenType } from "src/constants";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    const provider = config.gRpcClient();

    // Test with SUI token
    let token = tokenType["MAINNET"]["TYPUS"];
    let oracleContract = config.package.oracle;

    console.log("Testing oracle update with signature...");
    console.log("Token:", token);
    console.log("Oracle Contract:", oracleContract);

    let transaction = new Transaction();

    // Update oracle with signature
    transaction = await updateOracleWithSignatureTx("MAINNET", transaction, oracleContract, token);

    let res = await provider.signAndExecuteTransaction({
        signer,
        transaction,
        include: {
            showEffects: true,
            showObjectChanges: true,
        },
    });

    console.log("Transaction result:");
    console.log(JSON.stringify(res, null, 2));
})();
