import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "config.json";
import { getCloseStrategyTx, getUserStrategies } from "src/auto-bid";
import { getVaults } from "src/typus-dov-single-v2";
import "src/utils/load_env";
const config = configs.TESTNET;

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    let packageId = config.PACKAGE.DOV_SINGLE;
    let strategy_pool = config.OBJECT.STRATEGY_POOL;

    let vaults = await getVaults(provider, config.PACKAGE.DOV_SINGLE, config.REGISTRY.DOV_SINGLE, []);

    let user = keypair.toSuiAddress();
    let strategies = await getUserStrategies(provider, config.PACKAGE.DOV_SINGLE, config.REGISTRY.DOV_SINGLE, strategy_pool, user);

    var transactionBlock = new TransactionBlock();

    for (let strategy of strategies) {
        if (strategy.status != "active") {
            let vault = vaults[strategy.vault_index];
            let typeArguments = [vault.info.depositToken, vault.info.bidToken];
            transactionBlock = getCloseStrategyTx(
                gasBudget,
                packageId,
                typeArguments,
                config.REGISTRY.DOV_SINGLE,
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
