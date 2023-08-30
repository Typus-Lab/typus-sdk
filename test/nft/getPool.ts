import "../load_env";
import config from "../../nft_config.json";
import { getPool } from "../../utils/typus-nft/fetch";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";

// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));

const necklaces = [
    "none",
    "bucket_protocol",
    "kriya_dex",
    "cetus_protocol",
    "ethos_wallet",
    "typus",
    "mysten_labs",
    "navi_protocol",
    "scallop_sui",
    "shinami_corp",
    "studio_mirai",
    "sui_frens",
    "sui_network",
    "blockvision",
];

(async () => {
    for (let necklace of necklaces) {
        const pool = config[necklace];
        const poolData = await getPool(provider, pool);
        console.log(necklace);
        console.log(poolData);
    }
})();
