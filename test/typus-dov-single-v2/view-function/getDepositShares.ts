import { SuiClient } from "@mysten/sui.js/client";
import { assetToDecimal, typeArgToAsset } from "src/constants";
import { getDepositShares, getVaults } from "src/typus-dov-single-v2";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let user = "0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee";

    var temp = await provider.getOwnedObjects({
        owner: user,
        options: { showType: true, showContent: true },
    });
    var datas = temp.data;
    while (temp.hasNextPage) {
        temp = await provider.getOwnedObjects({
            owner: user,
            options: { showType: true, showContent: true },
            cursor: temp.nextCursor,
        });
        datas = datas.concat(temp.data);
    }
    let receipts = datas
        .filter((obj) => obj.data?.type! == `${config.packageOrigin.framework}::vault::TypusDepositReceipt`)
        .map((obj) => obj.data?.objectId!);
    console.log(receipts);

    let depositShares = await getDepositShares(config, {
        receipts,
        user,
    });
    // console.log(JSON.stringify(depositShares, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));

    let keys = Object.keys(depositShares.depositShare);
    // console.log(keys);

    let vaults = await getVaults(config, { indexes: keys });
    // console.log(JSON.stringify(vaults, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));

    let symbolMap = new Map<string, [number, number]>();

    for (let key of keys) {
        let depositShare = depositShares.depositShare[key];
        let vault = vaults[key];

        // balance

        let deposit =
            Number(depositShare.activeSubVaultUserShare) +
            Number(depositShare.warmupSubVaultUserShare) +
            Number(depositShare.deactivatingSubVaultUserShare) +
            Number(depositShare.inactiveSubVaultUserShare);

        let depositToken = typeArgToAsset(vault.depositVault.depositToken);
        let deposit_amount = deposit / 10 ** Number(vault.info.dTokenDecimal);
        // console.log(depositToken, deposit_amount);

        if (symbolMap.has(depositToken)) {
            let [balance, rewards] = symbolMap.get(depositToken)!;
            symbolMap.set(depositToken, [balance + deposit_amount, rewards]);
        } else {
            symbolMap.set(depositToken, [deposit_amount, 0]);
        }

        // rewards

        let premiumToken = typeArgToAsset(vault.depositVault.bidToken);
        let premium = Number(depositShare.premiumSubVaultUserShare) / 10 ** Number(vault.info.bTokenDecimal);
        // console.log(premiumToken, premium);

        if (symbolMap.has(premiumToken)) {
            let [balance, rewards] = symbolMap.get(premiumToken)!;
            symbolMap.set(premiumToken, [balance, rewards + premium]);
        } else {
            symbolMap.set(premiumToken, [0, premium]);
        }

        if (vault.depositVault.incentiveToken) {
            let incentiveToken = typeArgToAsset(vault.depositVault.incentiveToken);
            let incentive = Number(depositShare.incentiveShare) / 10 ** Number(assetToDecimal(incentiveToken));
            console.log(incentiveToken, incentive);

            if (symbolMap.has(incentiveToken)) {
                let [balance, rewards] = symbolMap.get(incentiveToken)!;
                symbolMap.set(incentiveToken, [balance, rewards + incentive]);
            } else {
                symbolMap.set(incentiveToken, [0, incentive]);
            }
        } else {
            // premiumToken
            let incentive = Number(depositShare.incentiveShare) / 10 ** Number(vault.info.bTokenDecimal);
            // console.log(premiumToken, premium);

            if (symbolMap.has(premiumToken)) {
                let [balance, rewards] = symbolMap.get(premiumToken)!;
                symbolMap.set(premiumToken, [balance, rewards + incentive]);
            } else {
                symbolMap.set(premiumToken, [0, incentive]);
            }
        }

        console.log(
            `Vault:${vault.depositVault.metadata}`,
            `Balance: ${deposit_amount} ${depositToken}`,
            `Rewards: ${premium} ${premiumToken}`
        );
    }

    console.log(symbolMap);
})();
