import "../../../test/load_env";
import { getPortfolioVaults } from "../../typus-dov-single/portfolio-vault";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import config from "../../../config.json";
import { getBatchClaimHarvestWithdrawTx } from "../../typus-dov-single/user-entry";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let gasBudget = 100000000;
    let index = "0";

    let portfolioVaults = await getPortfolioVaults(
        provider,
        config.SINGLE_COLLATERAL_REGISTRY,
        config.SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY,
        config.SINGLE_COLLATERAL_BID_VAULT_REGISTRY
    );
    let transactionBlock = await getBatchClaimHarvestWithdrawTx(
        gasBudget,
        config.SINGLE_COLLATERAL_PACKAGE,
        config.SINGLE_COLLATERAL_REGISTRY,
        config.SINGLE_COLLATERAL_AC_REGISTRY,
        [{ typeArguments: [portfolioVaults[index].typeArgs[0]], index: portfolioVaults[index].info.index }],
        [{ typeArguments: [portfolioVaults[index].typeArgs[1]], index: portfolioVaults[index].info.index }],
        [{ typeArguments: portfolioVaults[index].typeArgs, index: portfolioVaults[index].info.index }]
    );

    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
