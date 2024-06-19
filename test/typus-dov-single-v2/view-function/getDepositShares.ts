import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getDepositShares, getVaults } from "../../../utils/typus-dov-single-v2/view-function";
import { typeArgToAsset, assetToDecimal } from "../../../utils/token";

const config = configs.TESTNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const user = "0xb6b29d18c728503fb59cc59ecbe52611d26b2746b2cedc8d38cabf81428cae6c";

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

    const receipts = datas
        .filter((obj) => obj.data?.type! == `${config.PACKAGE_ORIGIN.FRAMEWORK}::vault::TypusDepositReceipt`)
        .map((obj) => obj.data?.objectId!);
    console.log(receipts);

    const depositShares = await getDepositShares(
        provider,
        config.PACKAGE_ORIGIN.FRAMEWORK,
        config.PACKAGE.DOV_SINGLE,
        config.REGISTRY.DOV_SINGLE,
        receipts,
        user
    );
    console.log(JSON.stringify(depositShares, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));

    // const keys = Object.keys(depositShares);
    // // console.log(keys);

    // const vaults = await getVaults(provider, config.PACKAGE.DOV_SINGLE, config.REGISTRY.DOV_SINGLE, keys);
    // // console.log(JSON.stringify(vaults, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));

    // const symbolMap = new Map<string, [number, number]>();

    // for (const key of keys) {
    //     const depositShare = depositShares[key];
    //     const vault = vaults[key];

    //     // balance

    //     const deposit =
    //         Number(depositShare.activeSubVaultUserShare) +
    //         Number(depositShare.warmupSubVaultUserShare) +
    //         Number(depositShare.deactivatingSubVaultUserShare) +
    //         Number(depositShare.inactiveSubVaultUserShare);

    //     const depositToken = typeArgToAsset(vault.depositVault.depositToken);
    //     const deposit_amount = deposit / 10 ** Number(vault.info.dTokenDecimal);
    //     // console.log(depositToken, deposit_amount);

    //     if (symbolMap.has(depositToken)) {
    //         const [balance, rewards] = symbolMap.get(depositToken)!;
    //         symbolMap.set(depositToken, [balance + deposit_amount, rewards]);
    //     } else {
    //         symbolMap.set(depositToken, [deposit_amount, 0]);
    //     }

    //     // rewards

    //     const premiumToken = typeArgToAsset(vault.depositVault.bidToken);
    //     const premium = Number(depositShare.premiumSubVaultUserShare) / 10 ** Number(vault.info.bTokenDecimal);
    //     // console.log(premiumToken, premium);

    //     if (symbolMap.has(premiumToken)) {
    //         const [balance, rewards] = symbolMap.get(premiumToken)!;
    //         symbolMap.set(premiumToken, [balance, rewards + premium]);
    //     } else {
    //         symbolMap.set(premiumToken, [0, premium]);
    //     }

    //     if (vault.depositVault.incentiveToken) {
    //         const incentiveToken = typeArgToAsset(vault.depositVault.incentiveToken);
    //         const incentive = Number(depositShare.incentiveShare) / 10 ** Number(assetToDecimal(incentiveToken));
    //         console.log(incentiveToken, incentive);

    //         if (symbolMap.has(incentiveToken)) {
    //             const [balance, rewards] = symbolMap.get(incentiveToken)!;
    //             symbolMap.set(incentiveToken, [balance, rewards + incentive]);
    //         } else {
    //             symbolMap.set(incentiveToken, [0, incentive]);
    //         }
    //     } else {
    //         // premiumToken
    //         const incentive = Number(depositShare.incentiveShare) / 10 ** Number(vault.info.bTokenDecimal);
    //         // console.log(premiumToken, premium);

    //         if (symbolMap.has(premiumToken)) {
    //             const [balance, rewards] = symbolMap.get(premiumToken)!;
    //             symbolMap.set(premiumToken, [balance, rewards + incentive]);
    //         } else {
    //             symbolMap.set(premiumToken, [0, incentive]);
    //         }
    //     }
    // }

    // console.log(symbolMap);
})();
