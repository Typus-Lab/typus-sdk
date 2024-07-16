import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import configs from "../../config.json";
import { getUserStrategies } from "../../src";
import "../../src/utils/load_env";
const config = configs.TESTNET;

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    let strategy_pool = config.OBJECT.STRATEGY_POOL;
    let user = keypair.toSuiAddress();
    // let user = "0x8b21d27b7de562512b71ced257825f61fe51f2802e2896312ddc32764ed28cd5";
    let strategies = await getUserStrategies(provider, config.PACKAGE.DOV_SINGLE, config.REGISTRY.DOV_SINGLE, strategy_pool, user);
    console.log(strategies);
})();
