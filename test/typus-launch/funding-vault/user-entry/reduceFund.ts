import "src/utils/load_env";
import { reduceFund } from "src/typus-launch/funding-vault";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    const provider = config.gRpcClient();
    let user = signer.toSuiAddress();

    let transaction = new Transaction();

    reduceFund(config, transaction, {
        typeArguments: ["0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"],
        index: "0",
        reduceFromFund: "3000000000",
        reduceFromRefund: true,
        user,
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
