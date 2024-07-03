import { getUpdateTailsStakingRegistryConfigTx } from "../../../utils/tails-staking/authorized-entry";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import * as readline from "readline/promises";
import configs from "../../../config.json";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

const config = configs.TESTNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const IMaxStakeAmount = "0";
const IStakeTailsFee = "1";
const ITransferTailsFee = "2";
const IDailySignUpExp = "3";

(async () => {
    let tx = new TransactionBlock();
    tx = getUpdateTailsStakingRegistryConfigTx({
        tx,
        typusPackageId: config.PACKAGE.TYPUS,
        typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
        typusTailsStakingRegistry: config.REGISTRY.TAILS_STAKING,
        index: IDailySignUpExp,
        value: "10",
    });
    tx.setGasBudget(100000000);
    let result = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(result);
})();
