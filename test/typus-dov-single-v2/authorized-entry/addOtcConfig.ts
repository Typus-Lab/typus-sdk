import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { addOtcConfig } from "src/typus-dov-single-v2/otc-entry";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    let users = [
        "0x978f65df8570a075298598a9965c18de9087f9e888eb3430fe20334f5c554cfd",
        "0xdc72506f269feb89822c13e66b282bc52c5724c27e575a04cbec949a13671d13",
        "0xb6b29d18c728503fb59cc59ecbe52611d26b2746b2cedc8d38cabf81428cae6c",
    ];
    for (let user of users) {
        await addOtcConfig(config, transaction, {
            user,
            index: "41",
            round: "2",
            size: "1000010000",
            price: "210000",
            fee_bp: "0",
            expiration_ts_ms: "1750492800000",
        });
    }
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
