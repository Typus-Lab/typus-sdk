import { TypusConfig } from "src/utils";
import { getWhitelistMap } from "src/typus-nft";
import "src/utils/load_env";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
const config = TypusConfig.default("MAINNET");

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const client = new SuiClient({ url: config.rpcEndpoint });

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

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
