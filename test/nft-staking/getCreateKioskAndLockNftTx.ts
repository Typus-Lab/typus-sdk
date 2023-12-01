import "../load_env";
import config from "../../config_v2.json";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getCreateKioskAndLockNftTx } from "../../utils/nft-staking/user-entry";

const network = "testnet";
const keypair = Ed25519Keypair.deriveKeypair("");
const provider = new SuiClient({
    url: getFullnodeUrl(network),
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

    const tailsIds = datas.filter((data) => {
        // console.log(data);
        // @ts-ignore
        return data.data?.type! == `${config.NFT_PACKAGE}::typus_nft::Tails`;
    });
    // console.log(objs);

    if (tailsIds.length > 0) {
        let nft = tailsIds[0];

        const kioskClient = new KioskClient({
            client: provider,
            network: network as Network,
        });

        let transactionBlock = await getCreateKioskAndLockNftTx(
            kioskClient,
            gasBudget,
            config.NFT_PACKAGE,
            config.NFT_TRANSFER_POLICY,
            nft.data?.objectId!,
            address
        );

        let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });

        console.log(res);
    }
})();
