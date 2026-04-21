import { TypusConfig } from "src/utils";
import { KioskClient } from "@mysten/kiosk";
import { getTails, getTailsIds, kioskOwnerCap } from "src/typus-nft";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    const address = "0xdbe178c2c8c8ca8b5789bbc85c1398ec3470817a1d462e6ca443e24bc3ddf54d";
    console.log(address);


    const kioskClient = new KioskClient({
        client: config.graphQlClient(),
        network: config.network,
    });

    // TODO: use pagination to get all kioskOwnerCaps
    const ownedKiosks = await kioskClient.getOwnedKiosks({ address });
    // console.log(ownedKiosks)

    const kioskOwnerCaps = ownedKiosks.kioskOwnerCaps.map((x) => {
        return {
            kioskId: x.kioskId,
            objectId: x.objectId,
            isPersonal: x.isPersonal,
        } as kioskOwnerCap;
    });

    const tailsIds = await getTailsIds(kioskClient, config.packageOrigin.nft, kioskOwnerCaps);
    console.log(tailsIds);
    console.log(tailsIds.length);

    // Get Tails Detail

    const tails = await getTails(
        config.graphQlClient(),
        tailsIds.map((x) => x.nftId)
    );
    console.log(tails);
    console.log(tails.length);
})();
