import "../load_env";
import config from "../../config_v2.json";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { getTailsIds, getkioskOwnerCaps } from "../../utils/typus-nft/fetch";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getTransferNftTx } from "../../utils/nft-staking/user-entry";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

const receiver = "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9";

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
            let transactionBlock = await getTransferNftTx(
                gasBudget,
                config.SINGLE_COLLATERAL_PACKAGE,
                config.SINGLE_COLLATERAL_REGISTRY,
                personalKioskRulePackageId,
                nft,
                receiver
            );

            let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });

            console.log(res);
        }
    }
})();
