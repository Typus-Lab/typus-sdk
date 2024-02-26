import "../load_env";
import config from "../../config_v2.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getCloseStrategyTx } from "../../utils/auto-bid/user-entry";
import { getVaults } from "../../utils/typus-dov-single-v2/view-function";
import { getUserStrategies } from "../../utils/auto-bid/view-function";
import { TransactionBlock } from "@mysten/sui.js/transactions";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});
const gasBudget = 100000000;

(async () => {
    let packageId = config.SINGLE_COLLATERAL_PACKAGE;
    let strategy_pool = config.STRATEGY_POOL;

    let vaults = await getVaults(provider, config.SINGLE_COLLATERAL_PACKAGE, config.SINGLE_COLLATERAL_REGISTRY, []);

    let user = keypair.toSuiAddress();
    let strategies = await getUserStrategies(
        provider,
        config.SINGLE_COLLATERAL_PACKAGE,
        config.SINGLE_COLLATERAL_REGISTRY,
        strategy_pool,
        user
    );

    var transactionBlock = new TransactionBlock();

    for (let strategy of strategies) {
        if (strategy.status != "active") {
            let vault = vaults[strategy.vault_index];
            let typeArguments = [vault.info.depositToken, vault.info.bidToken];
            transactionBlock = getCloseStrategyTx(
                gasBudget,
                packageId,
                typeArguments,
                config.SINGLE_COLLATERAL_REGISTRY,
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
