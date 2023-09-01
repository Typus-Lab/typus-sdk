import "../load_env";
import config from "../../nft_config.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import { getPoolMap, PoolData, getWhitelistMap } from "../../utils/typus-nft/fetch";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    const objs = await provider.getOwnedObjects({
        owner: address,
        options: { showType: true, showContent: true },
    });
    // console.log(objs);

    const wlTokens = objs.data.filter((obj) => obj.data?.type! == `${config.PACKAGE}::typus_nft::Whitelist`);
    // console.log(wlTokens);

    const wlTokensFor = await getWhitelistMap(config, wlTokens);
    console.log(wlTokensFor);
})();
