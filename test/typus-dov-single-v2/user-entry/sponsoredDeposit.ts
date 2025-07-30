import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { getRaiseFundTx } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { tokenType } from "src/constants";
import { getSponsoredTx } from "src/utils/sponsoredTx";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    config.sponsored = true; // before getRaiseFundTx

    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let sender = signer.toSuiAddress();
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transaction = getRaiseFundTx(config, new Transaction(), {
        typeArguments: [tokenType["MAINNET"].SUI, tokenType["MAINNET"].SUI],
        index: "1",
        raiseCoins: (await provider.getCoins({ owner: sender, coinType: tokenType["MAINNET"].SUI })).data.map((coin) => coin.coinObjectId),
        raiseAmount: "10000000000",
        receipts: [],
        raiseFromPremium: false,
        raiseFromInactive: false,
        user: sender,
    });
    // For normal Tx
    // let res = await provider.signAndExecuteTransaction({ signer, transaction });

    // For Sponsored Tx
    let sponsoredResponse = await getSponsoredTx(provider, sender, transaction);
    let senderSig = await Transaction.from(sponsoredResponse?.txBytes).sign({ signer }); // wallet sign
    let res = await provider.executeTransactionBlock({
        transactionBlock: sponsoredResponse?.txBytes,
        signature: [senderSig?.signature, sponsoredResponse?.sponsorSig],
    });
    console.log(res);
})();
