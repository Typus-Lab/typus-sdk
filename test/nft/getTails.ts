import "../load_env";
import config from "../../mainnet.json";
import { KioskClient, Network } from "@mysten/kiosk";
// import { fetchKiosk, getOwnedKiosks } from "@mysten/kiosk/src/query/kiosk";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { getTails, getTailsIds, getkioskOwnerCaps, kioskOwnerCap } from "../../utils/typus-nft/fetch";
// import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

// const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: getFullnodeUrl("mainnet"),
});

(async () => {
    const address = "0xcfab9630428513ebd2f39dd5e00fde44f87a9f6fb968baf9be0baee64c4a4eb4";
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
        network: Network.MAINNET,
    });

    const tailsIds = await getTailsIds(kioskClient, config, kioskOwnerCaps);
    console.log(tailsIds);
    console.log(tailsIds.length);

    // Get Tails Detail

    // const tails = await getTails(
    //     provider,
    //     tailsIds.map((x) => x.nftId)
    // );
    // console.log(tails);
    // console.log(tails.length);
})();
