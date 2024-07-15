import "../load_env";
import config from "../../config_v2.json";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { getTailsIds, getkioskOwnerCaps } from "../../utils/typus-nft/fetch";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getSwitchNftTx } from "../../utils/nft-staking/user-entry";
import { getProfitSharing } from "../../utils/tails-exp-dice/fetch";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

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
            let res_1 = await getProfitSharing(provider, config.diceProfitSharing);

            let transactionBlock = await getSwitchNftTx(
                gasBudget,
                config.PACKAGE.DOV_SINGLE,
                config.REGISTRY.DOV_SINGLE,
                personalKioskRulePackageId,
                nft,
                [res_1.tokenType]
            );

            const result = await provider.signAndExecuteTransactionBlock({
                signer: keypair,
                transactionBlock,
            });
            console.log(result);
        }
    }
})();
