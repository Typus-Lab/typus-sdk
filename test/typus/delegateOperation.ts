import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";
import { getStakingInfo } from "src/typus/tails-staking";
import { TypusConfig } from "src/utils";
import * as fs from "fs";
import { getUserMetadata } from "src/typus/user";
import mnemonic from "mnemonic.json";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC_2));
    let transaction = new Transaction();

    let users = [];

    var raw = fs.readFileSync("tailsDynamicField.csv", "utf-8");
    var tailsToDynamicFieldArray = JSON.parse(raw);

    let tails: string[] = [];

    for (const user of users) {
        let result = await getStakingInfo(config, {
            user,
        });

        tails = tails.concat(result.tails);
    }
    const stakeInfos = tailsToDynamicFieldArray.filter((x) => tails.includes(x.number));
    console.log(stakeInfos);
    console.log(tails);
    console.log(tails.length);

    // issue_manager_cap
    let managerCap = transaction.moveCall({
        target: `${config.package.typus}::ecosystem::issue_manager_cap`,
        arguments: [transaction.object(config.version.typus)],
    });

    var total = 0;
    // function call
    for (const stakeInfo of stakeInfos) {
        transaction.moveCall({
            target: `${config.package.typus}::tails_staking::public_exp_down`,
            arguments: [
                transaction.object(managerCap),
                transaction.object(config.version.typus),
                transaction.object(config.registry.typus.tailsStaking),
                transaction.pure.address(stakeInfo.id),
                transaction.pure.u64(stakeInfo.exp),
            ],
        });

        total += Number(stakeInfo.exp);
    }

    for (const user of users) {
        let result = await getUserMetadata(config, {
            user,
        });

        // console.log(result);

        if (result.length == 0) {
            continue;
        }

        let exp = Number(result[1]);

        transaction.moveCall({
            target: `${config.package.typus}::user::remove_tails_exp_amount`,
            arguments: [
                transaction.object(managerCap),
                transaction.object(config.version.typus),
                transaction.object(config.registry.typus.user),
                transaction.pure.address(user),
                transaction.pure.u64(exp),
            ],
        });
        total += exp;
    }

    // burn_manager_cap
    transaction.moveCall({
        target: `${config.package.typus}::ecosystem::burn_manager_cap`,
        arguments: [transaction.object(config.version.typus), transaction.object(managerCap)],
    });

    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);

    console.log(total);
})();
