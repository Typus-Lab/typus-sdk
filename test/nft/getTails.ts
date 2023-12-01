import "../load_env";
import config from "../../config_v2.json";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { getTailsIds } from "../../utils/typus-nft/fetch";
// import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

// const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});

(async () => {
    const address = "0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee";
    console.log(address);
    const kioskClient = new KioskClient({
        client: provider,
        network: Network.MAINNET,
    });

    const tailsIds = await getTailsIds(kioskClient, config, address);
    console.log(tailsIds);
})();
