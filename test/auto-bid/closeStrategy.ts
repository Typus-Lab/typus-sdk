import "src/utils/load_env";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TypusConfig } from "src/utils";
import { getCloseStrategyTx } from "src/auto-bid";
import { TransactionBlock } from "@mysten/sui.js/dist/cjs/transactions";

(async () => {
    let config = TypusConfig.default("TESTNET");
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let depositToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC";
    let bidToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC";
    let typeArguments = [depositToken, bidToken];
    let vaultIndex = "40";
    let signalIndex = "0";
    let strategyIndex = "0";

    let transactionBlock = getCloseStrategyTx(config, new TransactionBlock(), {
        typeArguments,
        vaultIndex,
        signalIndex,
        strategyIndex,
        user: keypair.toSuiAddress(),
    });
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
