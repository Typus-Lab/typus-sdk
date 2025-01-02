import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let transaction = new Transaction();

    // issue_manager_cap
    let managerCap = transaction.moveCall({
        target: `${config.package.typus}::ecosystem::issue_manager_cap`,
        arguments: [transaction.object(config.version.typus)],
    });

    // function call
    // transaction.moveCall({
    //     target: `${config.package.typus}::tails_staking::public_exp_down`,
    //     arguments: [
    //         transaction.object(managerCap),
    //         transaction.object(config.version.typus),
    //         transaction.object(config.registry.typus.tailsStaking),
    //         transaction.pure(tails),
    //         transaction.pure(amount),
    //     ],
    // });

    // burn_manager_cap
    transaction.moveCall({
        target: `${config.package.typus}::ecosystem::burn_manager_cap`,
        arguments: [transaction.object(config.version.typus), transaction.object(managerCap)],
    });

    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
