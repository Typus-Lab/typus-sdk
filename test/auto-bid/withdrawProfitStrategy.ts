import "../load_env";
import config from "../../config_v2.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getWithdrawProfitStrategyTx } from "../../utils/auto-bid/user-entry";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});
const gasBudget = 100000000;

(async () => {
    let depositToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC";
    let bidToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC";

    let packageId = config.SINGLE_COLLATERAL_PACKAGE;
    let typeArguments = [depositToken, bidToken];
    let strategy_pool = config.STRATEGY_POOL;

    let vault_index = "22";
    let signal_index = "0";
    let strategy_index = "1";

    let transactionBlock = getWithdrawProfitStrategyTx(
        gasBudget,
        packageId,
        typeArguments,
        config.SINGLE_COLLATERAL_REGISTRY,
        strategy_pool,
        vault_index,
        signal_index,
        strategy_index,
        keypair.toSuiAddress()
    );
    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
