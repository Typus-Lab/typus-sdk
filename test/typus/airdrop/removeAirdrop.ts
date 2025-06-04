import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { getRemoveAirdropTx } from "src/typus/airdrop";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";
import { tokenType } from "src/constants";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC_2));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transaction = await getRemoveAirdropTx(config, new Transaction(), {
        typeArguments: [tokenType["MAINNET"]["SUI"]],
        key: "trading_competition",
        sender: signer.toSuiAddress(),
    });

    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
