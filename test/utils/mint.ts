import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { TypusConfig, getMintTokenTx } from "src/utils";
import { tokenType } from "src/constants";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let packageId = tokenType["TESTNET"].BLUB.split("::")[0];
    let moduleName = tokenType["TESTNET"].BLUB.split("::")[1];
    let registry = "0xd470dbb74ae3f4cea5b39f1edaf729145fcdc8da023c81346fce1c1de046e6e4";
    let amount = 1000000000000000;

    let transaction = await getMintTokenTx(packageId, registry, moduleName, amount);
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
