import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getLiquidationPrice, getUserPositions } from "../../../utils/typus_perp/fetch";
import "../../load_env";
import { createPythClient } from "../../../utils/pyth/pythClient";
import { NETWORK } from "../../../utils/typus_perp";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    const positions = await getUserPositions(provider, config, user);
    console.log(positions);

    const pythClient = createPythClient(provider, NETWORK);

    const liquidationPrices = await getLiquidationPrice(provider, config, {
        pythClient,
        positions,
        user,
    });
    console.log(liquidationPrices);
})();
