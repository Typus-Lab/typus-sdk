import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { getClaimAirdropTx, getAirdrop } from "src/typus/airdrop";
import { TypusConfig } from "src/utils";
import mnemonic from "mnemonic.json";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let amount = await getAirdrop(config, {
        typeArguments: [config.token.typus],
        key: "typus_airdrop",
        user: signer.toSuiAddress(),
    });
    console.log(`Claiming ${Number(amount[1]) / 10 ** 9} TYPUS...`);

    let transactionBlock = getClaimAirdropTx(config, new TransactionBlock(), {
        typeArguments: [config.token.typus],
        key: "typus_airdrop",
        user: signer.toSuiAddress(),
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
