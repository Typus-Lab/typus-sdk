import "../load_env";
import config from "../../config.json";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiClient } from "@mysten/sui.js/client";
import { Signer } from "@mysten/sui.js/dist/cjs/cryptography";
import { getTails, getTailsIds } from "../../utils/typus-nft/fetch";

import { Keypair } from "@mysten/sui.js/dist/cjs/cryptography";
//const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const suiClient = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    // const address = await keypair.toSuiAddress();
    const address = "0xdc72506f269feb89822c13e66b282bc52c5724c27e575a04cbec949a13671d13";
    console.log(address);
    const kioskClient = new KioskClient({
        client: suiClient,
        network: Network.MAINNET,
    });

    let kiosks = await kioskClient.getOwnedKiosks({ address });
    let data = kiosks.kioskOwnerCaps;

    console.log(kiosks);
    const tailsIds = await getTailsIds(suiClient, Network.MAINNET, config, kiosks);
    console.log(tailsIds);

    const tails = await getTails(
        suiClient,
        tailsIds.map((tailsId) => tailsId.nftId)
    );
    console.log(tails);
})();
