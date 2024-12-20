import { TypusConfig } from "src/utils";
import { getWhitelistMap } from "src/typus-nft";
import { SuiClient } from "@mysten/sui/client";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    const client = new SuiClient({ url: config.rpcEndpoint });
    const address = "0xdbe178c2c8c8ca8b5789bbc85c1398ec3470817a1d462e6ca443e24bc3ddf54d";

    const objs = await client.getOwnedObjects({
        owner: address,
        options: { showType: true, showContent: true },
    });
    // console.log(objs);

    const wlTokens = objs.data.filter((obj) => obj.data?.type! == `${config.packageOrigin.nft}::typus_nft::Whitelist`);
    // console.log(wlTokens);

    const wlTokensFor = await getWhitelistMap(config, wlTokens);
    console.log(wlTokensFor);
})();
