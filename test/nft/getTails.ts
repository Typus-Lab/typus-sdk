import { TypusConfig } from "src/utils";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiClient } from "@mysten/sui.js/client";
import { getTailsIds, getkioskOwnerCaps } from "src/typus-nft";
import "src/utils/load_env";

const config = TypusConfig.default("MAINNET");

const provider = new SuiClient({
    url: config.rpcEndpoint,
});

(async () => {
    const address = "0xdbe178c2c8c8ca8b5789bbc85c1398ec3470817a1d462e6ca443e24bc3ddf54d";
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

    const tailsIds = await getTailsIds(kioskClient, config.packageOrigin.nft, kioskOwnerCaps);
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
