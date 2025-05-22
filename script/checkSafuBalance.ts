import { getVaultData } from "src/typus-safu";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let results = await getVaultData(config, {
        indexes: [...Array(30).keys()].map((n) => {
            return n.toString();
        }),
    });
    for (var result of Object.values(results)) {
        let vault = result[0];
        let total =
            BigInt(vault.shareSupply.active_share) +
            BigInt(vault.shareSupply.deactivating_share) +
            BigInt(vault.shareSupply.warmup_share) +
            BigInt(vault.shareSupply.inactive_share);
        let balance = (await provider.getDynamicFields({ parentId: vault.id })).data.filter((v) => v.name.value === "deposit_balance")[0];
        let balanceObj = (await provider.getObject({ id: balance.objectId, options: { showContent: true } })).data;
        // @ts-ignore
        let balanceValue = balanceObj.content.fields.value;
        // console.log(balanceValue);
        // console.log(String(total));
        console.log(vault.info.index + ":", balanceValue === String(total));
        if (balanceValue !== String(total)) {
            console.log(balanceValue);
            console.log(String(total));
        }
    }
})();
