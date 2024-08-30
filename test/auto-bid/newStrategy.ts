import "src/utils/load_env";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TypusConfig } from "src/utils";
import { getNewStrategyTx } from "src/auto-bid";
import { TransactionBlock } from "@mysten/sui.js/dist/cjs/transactions";

(async () => {
    let config = await TypusConfig.default("TESTNET");
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let depositToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC";
    let bidToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC";
    let typeArguments = [depositToken, bidToken];
    let vaultIndex = "40";
    let signalIndex = "0";
    let coins = (await provider.getCoins({ owner: keypair.toSuiAddress(), coinType: bidToken })).data.map((coin) => coin.coinObjectId);
    let amount = "10000000000";
    let size = "30000000000";
    let pricePercentage = "40";
    let maxTimes = "10";
    let targetRounds = [];

    let transactionBlock = await getNewStrategyTx(config, new TransactionBlock(), {
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
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
