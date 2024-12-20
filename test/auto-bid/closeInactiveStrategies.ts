import "src/utils/load_env";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { getCloseStrategyTx, getUserStrategies } from "src/auto-bid";
import { getVaults } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let user = keypair.toSuiAddress();

    let vaults = await getVaults(config, { indexes: [] });
    let strategies = await getUserStrategies(config, { user });

    let transaction = new Transaction();

    for (let strategy of strategies) {
        if (strategy.status != "active") {
            let vault = vaults[strategy.vault_index];
            let typeArguments = [vault.info.depositToken, vault.info.bidToken];
            transaction = getCloseStrategyTx(config, new Transaction(), {
                typeArguments,
                vaultIndex: strategy.vault_index,
                signalIndex: strategy.signal_index,
                // @ts-ignore
                strategyIndex: strategy.strategyIndex,
                user: keypair.toSuiAddress(),
            });
        }
    }
    let res = await provider.signAndExecuteTransaction({ signer: keypair, transaction });
    console.log(res);
})();
