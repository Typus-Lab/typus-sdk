import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getLiquidationPrice, getUserPositions, createPythClient, NETWORK } from "../../../src";
import "../../../src/utils/load_env";

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
