import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TypusConfig } from "src/utils";
import { getUserStrategies } from "src/auto-bid";
import "src/utils/load_env";
const config = TypusConfig.default("TESTNET");

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: config.rpcEndpoint,
});
const gasBudget = 100000000;

(async () => {
    let strategy_pool = config.object.strategyPool;
    let user = keypair.toSuiAddress();
    // let user = "0x8b21d27b7de562512b71ced257825f61fe51f2802e2896312ddc32764ed28cd5";
    let strategies = await getUserStrategies(provider, config.package.dovSingle, config.registry.dov.dovSingle, strategy_pool, user);
    console.log(strategies);
})();
