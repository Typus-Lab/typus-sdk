import "../load_env";
import config from "../../mainnet.json";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { getTailsIds, kioskOwnerCap } from "../../utils/typus-nft/fetch";
// import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

// const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: getFullnodeUrl("mainnet"),
});

(async () => {
    const address = "0xd104a8b922834635ace5a16fc464b7857f3efe6bf7776ee3ceb6636a8b2b7d2e";
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

    const kioskOwnerCaps: kioskOwnerCap[] = [];

    for (let data of datas) {
        if (data.data?.type == "0x2::kiosk::KioskOwnerCap") {
            // console.log(data.data?.content);
            // @ts-ignore
            const fields = data.data.content.fields;
            kioskOwnerCaps.push({ objectId: fields.id.id, kioskId: fields.for });
        }
    }

    console.log(kioskOwnerCaps);

    const kioskClient = new KioskClient({
        client: provider,
        network: Network.MAINNET,
    });

    const tailsIds = await getTailsIds(kioskClient, config, address, kioskOwnerCaps);
    console.log(tailsIds);
})();
