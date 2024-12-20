import { getShareData, getVaultData } from "src/typus-safu";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";
import { getVaults } from "src/typus-dov-single-v2";
import { assetToDecimal, typeArgToAsset } from "src/constants";
import { getFund } from "src/typus-launch/funding-vault";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let user = "0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee";
    console.log(user);

    // 1. Get number of safu vaults
    let provider = new SuiClient({ url: config.rpcEndpoint });
    // Request: 1
    let registry = await provider.getObject({ id: config.registry.safu.safu, options: { showContent: true } });
    // @ts-ignore
    const n = registry.data.content.fields.num_of_vault as number;
    // console.log(n);
    const indexes = Array.from({ length: n }, (_, i) => i.toString());
    // 2. Get user's shares through view function
    // Request: 1
    const shares = await getShareData(config, {
        user,
        indexes: indexes.slice(),
    });
    // console.log(JSON.stringify(shares, null, 2));

    // 2.1 Filter out vaults with no shares
    const user_indexes: string[] = [];
    for (let index of indexes) {
        if (shares[index].length > 0) {
            user_indexes.push(index);
        }
    }

    // 3. Get vault data through view function
    // Request: 1
    const safu_vaults = await getVaultData(config, {
        indexes: user_indexes.slice(),
    });
    // console.log(JSON.stringify(safu_vaults, null, 2));

    // 4. Get related Dov for Safu Vault
    // HINT: we can use the same result from `getDepositShares` line 31
    const dov_indexes: string[] = [];
    for (let index of user_indexes) {
        let vault = safu_vaults[index][0];
        dov_indexes.push(vault.info.portfolio_vault_index);
    }
    const dov_vaults = await getVaults(config, { indexes: dov_indexes });

    // 4. Aggregate data and display
    for (let index of user_indexes) {
        let share = shares[index];
        let safu_vault = safu_vaults[index][0];
        let bid = safu_vaults[index][1];
        let dov_vault = dov_vaults[safu_vault.info.portfolio_vault_index];

        // console.log(`Vault ${index}:`);
        // console.log(`  Share: ${JSON.stringify(share, null, 2)}`);
        // console.log(`  Safu: ${JSON.stringify(safu_vault, null, 2)}`);
        // console.log(`  Bid: ${JSON.stringify(bid, null, 2)}`);
        // console.log(`  Dov: ${JSON.stringify(dov_vault, null, 2)}`);

        let vault_name: string;
        if (safu_vault.config.utilization_rate_bp == "0") {
            vault_name = dov_vault.depositVault.metadata.split("-")[1] + " All Weather";
        } else {
            let split = dov_vault.depositVault.metadata.split("-");
            split.pop();
            if (Number(dov_vault.info.optionType) % 2 == 0) {
                split.push("Bull");
            } else {
                split.push("Bear");
            }
            vault_name = split.join(" ");
        }
        console.log(`Vault: ${vault_name}`);

        let d_balance =
            (Number(share[0].share.active_share) +
                Number(share[0].share.deactivating_share) +
                Number(share[0].share.inactive_share) +
                Number(share[0].share.warmup_share)) /
            10 ** Number(safu_vault.info.token_decimal);

        let d_token = typeArgToAsset(safu_vault.depositToken);

        console.log(`  Balance: ${d_balance} ${d_token}`);

        let rewardTokens = safu_vault.rewardToken;
        if (rewardTokens.length > 0) {
            console.log(`  Reward:`);
            for (let i = 0; i < rewardTokens.length; i++) {
                let rewardToken = rewardTokens[i];
                let token = typeArgToAsset(rewardToken);
                let reward = Number(share[0].share.reward_share[i]) / 10 ** Number(assetToDecimal(token)!);

                console.log(`   ${reward} ${token}`);
            }
        }
    }
    // 5. Get funding vault balance
    let vaults = await getFund(config, { indexes: ["0"], user });
    const deposit = vaults["0"].reduce((acc, cur) => {
        acc += Number(cur.balance) / 1000000000;
        return acc;
    }, 0);
    console.log(`Vault: 19JAN25 All Weather`);
    console.log(`Balance: ${deposit} SUI`);
})();
