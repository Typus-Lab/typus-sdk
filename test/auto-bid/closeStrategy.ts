import "src/utils/load_env";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { TypusConfig } from "src/utils";
import { getCloseStrategyTx } from "src/auto-bid";
import { Transaction } from "@mysten/sui/dist/cjs/transactions";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let depositToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC";
    let bidToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC";
    let typeArguments = [depositToken, bidToken];
    let vaultIndex = "40";
    let signalIndex = "0";
    let strategyIndex = "0";

    let transaction = getCloseStrategyTx(config, new Transaction(), {
        typeArguments,
        vaultIndex,
        signalIndex,
        strategyIndex,
        user: keypair.toSuiAddress(),
    });

    let res = await provider.signAndExecuteTransaction({ signer: keypair, transaction });
    console.log(res);
})();
