import "../load_env";
import config from "../../config_v2.json";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getUnstakeNftTx } from "../../utils/nft-staking/user-entry";
import { getkioskOwnerCaps } from "../../utils/typus-nft/fetch";

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

    // const kiosks = await kioskClient.getOwnedKiosks({ address });
    const typeArguments = ["0x2::sui::SUI"];
    const personalKioskRulePackageId = kioskClient.getRulePackageId("personalKioskRulePackageId");

    if (kioskOwnerCaps.length > 0) {
        // let kioskOwnerCap = kiosks.kioskOwnerCaps.filter((k) => !k.isPersonal!)[0];
        const kioskOwnerCap = kioskOwnerCaps.filter((k) => k.isPersonal!)[0];

        let transactionBlock = await getUnstakeNftTx(
            gasBudget,
            config.SINGLE_COLLATERAL_PACKAGE,
            config.SINGLE_COLLATERAL_REGISTRY,
            typeArguments,
            kioskOwnerCap,
            personalKioskRulePackageId
        );

        let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });

        console.log(res);
    }
})();
