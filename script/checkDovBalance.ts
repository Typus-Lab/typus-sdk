import { TypusConfig } from "src/utils";
import { getVaults } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui/client";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let indexes = ["88", "63"];
    let vaults = await getVaults(config, { indexes });
    for (var vault of Object.values(vaults)) {
        let balances = (await provider.getDynamicFields({ parentId: vault.depositVault.id })).data;
        let withIncentiveBalance = false;
        let balanceData = "";
        for (var balance of balances
            .filter((balance) => balance.objectType.includes("balance::Balance"))
            .sort((a, b) => (a.bcsName > b.bcsName ? -1 : 1))) {
            let balanceObj = (await provider.getObject({ id: balance.objectId, options: { showContent: true } })).data;
            // @ts-ignore
            let name = String.fromCharCode.apply(null, Array.from(balanceObj.content.fields.name));
            // @ts-ignore
            balanceData += name + ": " + balanceObj.content.fields.value + "\n";
            if (name === "incentive_balance") {
                withIncentiveBalance = true;
            }
        }
        let shareData = "";
        shareData += "deactivating_balance: " + vault.depositVault.deactivatingShareSupply + "\n";
        if (withIncentiveBalance) {
            shareData += "incentive_balance: " + vault.depositVault.incentiveShareSupply + "\n";
        }
        shareData += "inactive_balance: " + vault.depositVault.inactiveShareSupply + "\n";
        shareData += "warmup_balance: " + vault.depositVault.warmupShareSupply + "\n";
        shareData += "active_balance: " + vault.depositVault.activeShareSupply + "\n";
        shareData += "premium_balance: " + vault.depositVault.premiumShareSupply + "\n";
        // console.log(balanceData);
        // console.log(shareData);
        // console.log(balanceData.length);
        // console.log(shareData.length);
        console.log(vault.info.index + ":", shareData === balanceData);
        if (shareData !== balanceData) {
            console.log(shareData);
            console.log(balanceData);
        }
    }
})();
