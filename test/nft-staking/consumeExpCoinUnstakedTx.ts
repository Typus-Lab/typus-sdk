import "../load_env";
import config from "../../config_v2.json";
import { consumeExpCoinUnstakedTx } from "../../utils/nft-staking/user-entry";
import { KioskClient, Network } from "@mysten/kiosk";
import { getTailsIds, getkioskOwnerCaps } from "../../utils/typus-nft/fetch";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

const amount = "1000";

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    var result = await provider.getOwnedObjects({
        owner: address,
        options: { showType: true, showContent: true },
    });

    var datas = result.data;

    while (result.hasNextPage) {
        result = await provider.getOwnedObjects({
            owner: address,
            options: { showType: true, showContent: true },
            cursor: result.nextCursor,
        });
        datas = datas.concat(result.data);
    }

    const kioskOwnerCaps = getkioskOwnerCaps(datas);
    // console.log(kioskOwnerCaps);

    const kioskClient = new KioskClient({
        client: provider,
        network: Network.TESTNET,
    });

    const personalKioskRulePackageId = kioskClient.getRulePackageId("personalKioskRulePackageId");

    const tailsIds = await getTailsIds(kioskClient, config, kioskOwnerCaps);
    console.log(tailsIds);
    console.log(tailsIds.length);

    if (tailsIds.length > 0) {
        let nft = tailsIds.find((x) => x.isPersonal);

        if (nft) {
            const coinType = `${config.EXP_GUESS_PACKAGE_ORIGIN}::tails_exp::TAILS_EXP`;

            let coins = (await provider.getCoins({ owner: address, coinType })).data.map((coin) => coin.coinObjectId);
            // console.log(coins);

            let transactionBlock = await consumeExpCoinUnstakedTx(
                gasBudget,
                config.SINGLE_COLLATERAL_PACKAGE,
                [coinType],
                config.SINGLE_COLLATERAL_REGISTRY,
                personalKioskRulePackageId,
                nft,
                coins,
                amount
            );

            const result = await provider.signAndExecuteTransactionBlock({
                signer: keypair,
                transactionBlock,
            });
            console.log(result);
        }
    }
})();
