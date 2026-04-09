import { TypusConfig } from "src/utils";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { getTailsIds, getkioskOwnerCaps } from "src/typus-nft";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    const provider = config.gRpcClient();

    const address = "0xdbe178c2c8c8ca8b5789bbc85c1398ec3470817a1d462e6ca443e24bc3ddf54d";
    console.log(address);

    var result = await provider.listOwnedObjects({
        owner: address,
        include: { content: true },
    });

    var datas = result.data;

    while (result.hasNextPage) {
        result = await provider.listOwnedObjects({
            owner: address,
            include: { content: true },
            cursor: result.cursor,
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
