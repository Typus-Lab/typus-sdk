import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getRebateTx } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

const config = TypusConfig.default("TESTNET");
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const user = signer.toSuiAddress();
const provider = new SuiClient({ url: config.rpcEndpoint });

(async () => {
    let transactionBlock = new TransactionBlock();
    transactionBlock = getRebateTx({
        tx: transactionBlock,
        typusFrameworkPackageId: config.package.framework,
        typusDovSinglePackageId: config.package.dovSingle,
        typusDovSingleRegistry: config.registry.dov.dovSingle,
        typeArgument: config.token.sui,
        user,
    });
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });

    console.log(res);
})();
