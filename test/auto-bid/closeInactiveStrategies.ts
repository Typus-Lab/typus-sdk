import "src/utils/load_env";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";
import { getCloseStrategyTx, getUserStrategies } from "src/auto-bid";
import { getVaults } from "src/typus-dov-single-v2";

(async () => {
    let config = TypusConfig.default("TESTNET");
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let user = keypair.toSuiAddress();

    let vaults = await getVaults(config, { indexes: [] });
    let strategies = await getUserStrategies(config, { user });

    let transactionBlock = new TransactionBlock();

    for (let strategy of strategies) {
        if (strategy.status != "active") {
            let vault = vaults[strategy.vault_index];
            let typeArguments = [vault.info.depositToken, vault.info.bidToken];
            transactionBlock = getCloseStrategyTx(config, new TransactionBlock(), {
                typeArguments,
                vaultIndex: strategy.vault_index,
                signalIndex: strategy.signal_index,
                // @ts-ignore
                strategyIndex: strategy.strategyIndex,
                user: keypair.toSuiAddress(),
            });
        }
    }
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
