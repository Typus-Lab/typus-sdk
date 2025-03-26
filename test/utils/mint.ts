import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { TypusConfig, getMintTokenTx } from "src/utils";
import { TOKEN, tokenRegistry, tokenType } from "src/constants";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let token: TOKEN = "wUSDC";
    let packageId = tokenType["TESTNET"][token].split("::")[0];
    let moduleName = tokenType["TESTNET"][token].split("::")[1];
    let registry = tokenRegistry["TESTNET"][token]!;
    let amount = 1000000000000000;

    let transaction = await getMintTokenTx(packageId, registry, moduleName, amount);
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
