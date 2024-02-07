import "../../load_env";
import config from "../../../config_v2.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getCloseStrategyTx } from "../../../utils/typus-dov-single-v2/mfud-user-entry";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

// import mnemonic from "../../mnemonic.json";

// const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));

const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});
const gasBudget = 100000000;

(async () => {
    let fudToken = "0x461efa7ee5aa1b27e44450d79e2104e7fc0991461e9eb1c2a3fc1f44cd554856::fud::FUD";
    let mFudToken = "0x7755ff79f0f27256c73e6c197e25b407ef6d4b9bd6e1af8cdd50fef28f84712c::mfud::MFUD";

    let packageId = config.SINGLE_COLLATERAL_PACKAGE;
    let typeArguments = [mFudToken, mFudToken];
    let strategy_pool = config.STRATEGY_POOL;

    let vault_index = "38";
    let signal_index = "0";

    const strategy_index = "0";

    var transactionBlock = getCloseStrategyTx(
        gasBudget,
        packageId,
        typeArguments,
        config.SINGLE_COLLATERAL_REGISTRY,
        strategy_pool,
        vault_index,
        signal_index,
        strategy_index,
        config.TYPUS_TOKEN_PACKAGE,
        config.TYPUS_TOKEN_MFUD_REGISTRY,
        keypair.toSuiAddress()
    );
    var res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
