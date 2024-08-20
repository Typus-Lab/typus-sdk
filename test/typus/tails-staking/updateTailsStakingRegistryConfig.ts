import { getUpdateTailsStakingRegistryConfigTx } from "src/typus/tails-staking";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

const config = TypusConfig.default("TESTNET");
const provider = new SuiClient({
    url: config.rpcEndpoint,
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
        typusPackageId: config.package.typus,
        typusEcosystemVersion: config.version.typus,
        typusTailsStakingRegistry: config.registry.typus.tailsStaking,
        index: IDailySignUpExp,
        value: "10",
    });
    tx.setGasBudget(100000000);
    let result = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(result);
})();
