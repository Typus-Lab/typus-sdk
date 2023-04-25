import { REGISTRY, PORTFOLIO_PACKAGE, MODULE } from "../../../constants";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, devnetConnection } from "@mysten/sui.js";
import { PortfolioVault } from "../../../utils/portfolio/single-collateral/fetchData";
import { getVaultDataFromRegistry } from "../../../utils/portfolio/single-collateral/getVaultData";
import { getWithdrawTx } from "../../../utils/portfolio/single-collateral/user/getWithdrawTx";
const provider = new JsonRpcProvider(devnetConnection); //for read only operations
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let share = "50000000";
    let index = "1";

    let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);
    let portfolioVault = portfolioVaults.find((portfolioVault) => portfolioVault.info.index == index)!;
    console.log(portfolioVault);

    let typeArguments = portfolioVault.typeArgs;
    let vaultIndex = portfolioVault.info.index;

    let gasBudget = 100000000;
    let transactionBlock = await getWithdrawTx(gasBudget, PORTFOLIO_PACKAGE, MODULE, REGISTRY, typeArguments, vaultIndex, [share]);
    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
