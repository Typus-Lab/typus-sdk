import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";
import { getCloseStrategyTx, getUserStrategies } from "src/auto-bid";
import { getVaults } from "src/typus-dov-single-v2";
import "src/utils/load_env";

const config = TypusConfig.default("TESTNET");

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const provider = new SuiClient({
    url: config.rpcEndpoint,
});
const gasBudget = 100000000;

(async () => {
    let packageId = config.package.dovSingle;
    let strategy_pool = config.object.strategyPool;

    let vaults = await getVaults(provider, config.package.dovSingle, config.registry.dov.dovSingle, []);

    let user = keypair.toSuiAddress();
    let strategies = await getUserStrategies(provider, config.package.dovSingle, config.registry.dov.dovSingle, strategy_pool, user);

    var transactionBlock = new TransactionBlock();

    for (let strategy of strategies) {
        if (strategy.status != "active") {
            let vault = vaults[strategy.vault_index];
            let typeArguments = [vault.info.depositToken, vault.info.bidToken];
            transactionBlock = getCloseStrategyTx(
                gasBudget,
                packageId,
                typeArguments,
                config.registry.dov.dovSingle,
                strategy_pool,
                strategy.vault_index,
                strategy.signal_index,
                // @ts-ignore
                strategy.strategy_index,
                keypair.toSuiAddress(),
                transactionBlock
            );
        }
    }

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
