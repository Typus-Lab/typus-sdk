import "src/utils/load_env";
import { getNewBidTx } from "src/typus-dov-single-v2";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let user = signer.toSuiAddress();

    let depositToken = "0x2::sui::SUI";
    let bidToken = "0x2::sui::SUI";
    let typeArguments = [depositToken, bidToken];
    let index = "1";
    let coins = (await provider.getCoins({ owner: user, coinType: depositToken })).data.map((coin) => coin.coinObjectId);
    let size = "1000000000";
    let premium_required = "1000000000";

    let transaction = getNewBidTx(config, new Transaction(), {
        typeArguments,
        index,
        coins,
        size,
        premium_required,
        user,
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
