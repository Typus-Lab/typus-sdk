import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { getSetAirdropTx } from "src/typus/airdrop";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transactionBlock = await getSetAirdropTx(config, new TransactionBlock(), {
        typeArguments: [config.token.typus],
        key: "typus_airdrop",
        coins: ["0xa633dd0101ae7b95ba675de8a12a7c9aad420054f4bcf7fcd23bd9d099fc2920"],
        amount: "100",
        users: ["0x978f65df8570a075298598a9965c18de9087f9e888eb3430fe20334f5c554cfd"],
        values: ["100"],
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
