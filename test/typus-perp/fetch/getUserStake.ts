import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getUserStake } from "src/typus-perp";
import "src/utils/load_env";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = TypusConfig.default("TESTNET");

const provider = new SuiClient({
    url: config.rpcEndpoint,
});

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    const stakes = await getUserStake(provider, config, user);
    console.log(stakes);
    // unsubscribedTsMs, unlockedTsMs in deactivatingShares
})();
