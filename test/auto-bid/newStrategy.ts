import "src/utils/load_env";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { TypusConfig } from "src/utils";
import { getNewStrategyTx } from "src/auto-bid";
import { Transaction } from "@mysten/sui/transactions";
import { tokenType } from "src/constants";
import mnemonic from "mnemonic.json";

(async () => {
    let NETWORK: "MAINNET" | "TESTNET" = "TESTNET";
    let config = await TypusConfig.default(NETWORK, null);
    let keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let depositToken = tokenType[NETWORK]["TYPUS"];
    let bidToken = tokenType[NETWORK]["TYPUS"];
    let typeArguments = [depositToken, bidToken];
    let vaultIndex = "29";
    let signalIndex = "0";
    let coins = (await provider.getCoins({ owner: keypair.toSuiAddress(), coinType: bidToken })).data.map((coin) => coin.coinObjectId);
    let amount = "1000000000000";
    let size = "100000000000";
    let pricePercentage = "40";
    let maxTimes = "10";
    let targetRounds = [];

    let transaction = await getNewStrategyTx(config, new Transaction(), {
        typeArguments,
        vaultIndex,
        signalIndex,
        coins,
        amount,
        size,
        pricePercentage,
        maxTimes,
        targetRounds,
    });

    let res = await provider.signAndExecuteTransaction({ signer: keypair, transaction });
    console.log(res);
})();
