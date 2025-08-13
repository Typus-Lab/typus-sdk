import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { TypusConfig, getMintTokenTx, splitCoin } from "src/utils";
import { assetToDecimal, TOKEN, tokenRegistry, tokenType } from "src/constants";
import { Transaction } from "@mysten/sui/transactions";
import mne from "mnemonic.json";

(async () => {
    let network: "MAINNET" | "TESTNET" = "MAINNET";
    let config = await TypusConfig.default(network, null);
    let signer = Ed25519Keypair.deriveKeypair(String(mne.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let token: TOKEN = "SUI";

    let recipients: [string, number][] = [
        ["0x88e1a0dbe78c08cd1c8bd69070c8acf55f129f67428a433c51abf0b96e067332", 300901731700],
        ["0x6b48f5a10cfe256dfd1bb479830a022e3cc0cbd3f86796bf9ec128ae2f4d26c4", 238702735900],
        ["0x748c94927dd8d8a6b793c56c681ed68364648c78d958fe147f6a915adc247fe2", 165949380100],
        ["0xf611c1026b8413978b2086dfded8be9438836cac910774f09153c021bfc8a185", 165437032500],
        ["0x50f8f314717399628dae9b78aa151a56f9b57e296a9c4bf70e64ad6b82e96a04", 129009119800],
    ];

    // coins
    let coins = (
        await provider.getCoins({
            owner: signer.toSuiAddress(),
            coinType: tokenType[network][token],
        })
    ).data.map((coin) => coin.coinObjectId);
    console.log("coins.length", coins.length);

    let total_amount = recipients.reduce((acc, x) => acc + x[1], 0);
    console.log("recipients", recipients.length, "total_amount", total_amount / 10 ** assetToDecimal(token)!);

    let tx = new Transaction();

    let coin_arg = splitCoin(tx, tokenType[network][token], coins, total_amount.toString());

    let vec = recipients.map((x) => tx.pure.u64(x[1]));

    let splitRes = tx.splitCoins(coin_arg, vec);

    for (let i = 0; i < recipients.length; i++) {
        tx.transferObjects([splitRes[i]], recipients[i][0]);
    }

    tx.moveCall({ target: `0x2::coin::destroy_zero`, arguments: [coin_arg], typeArguments: [tokenType[network][token]] });

    let res = await provider.signAndExecuteTransaction({ signer, transaction: tx });
    console.log(res);
})();
