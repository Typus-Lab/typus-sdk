import "../load_env";
import config from "../../config_v2.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getUserStrategies, getVaults } from "../../utils/auto-bid/view-function";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});
const gasBudget = 100000000;

(async () => {
    let strategy_pool = "0x6e62ea389e67302a49aa4bf19850456ec732045c1e0776323588576a6071da7d";

    let user = keypair.toSuiAddress();
    // let user = "0x978f65df8570a075298598a9965c18de9087f9e888eb3430fe20334f5c554cfd";

    let strategies = await getUserStrategies(provider, config.SINGLE_COLLATERAL_PACKAGE, strategy_pool, user);
    console.log(strategies);
})();
