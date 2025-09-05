import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { reduceFund } from "src/typus-hedge";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { tokenType } from "src/constants";

(async () => {
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = signer.toSuiAddress();
    let network: any = "TESTNET";
    let config = await TypusConfig.default(network, null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    // INPUT
    let mainToken = tokenType[network].SUI;
    let hedgeToken = tokenType[network].SUI;

    let transaction = new Transaction();
    reduceFund(config, transaction, {
        typeArguments: [mainToken, hedgeToken],
        index: "2",
        reduceMainFromWarmup: "50000",
        reduceHedgeFromWarmup: "600",
        reduceMainFromActive: "0",
        reduceHedgeFromActive: "0",
        reduceFromInactive: false,
        feeAmount: "0",
        user,
    });
    // transaction.setGasBudget(10000000000);
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
