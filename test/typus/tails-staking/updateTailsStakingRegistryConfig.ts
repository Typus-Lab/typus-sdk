import { getUpdateTailsStakingRegistryConfigTx } from "src/typus/tails-staking";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let IMaxStakeAmount = "0";
    let IStakeTailsFee = "1";
    let ITransferTailsFee = "2";
    let IDailySignUpExp = "3";
    let IDailySignUpFee = "4";

    let tx = getUpdateTailsStakingRegistryConfigTx(config, new Transaction(), {
        index: IDailySignUpFee,
        value: "0",
    });

    let result = await provider.signAndExecuteTransaction({ signer: keypair, transaction: tx });
    console.log(result);
})();
