import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let transactionBlock = new TransactionBlock();

    // issue_manager_cap
    let managerCap = transactionBlock.moveCall({
        target: `${config.package.typus}::ecosystem::issue_manager_cap`,
        arguments: [transactionBlock.object(config.version.typus)],
    });

    // function call
    // transactionBlock.moveCall({
    //     target: `${config.package.typus}::tails_staking::public_exp_down`,
    //     arguments: [
    //         transactionBlock.object(managerCap),
    //         transactionBlock.object(config.version.typus),
    //         transactionBlock.object(config.registry.typus.tailsStaking),
    //         transactionBlock.pure(tails),
    //         transactionBlock.pure(amount),
    //     ],
    // });

    // burn_manager_cap
    transactionBlock.moveCall({
        target: `${config.package.typus}::ecosystem::burn_manager_cap`,
        arguments: [transactionBlock.object(config.version.typus), transactionBlock.object(managerCap)],
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
