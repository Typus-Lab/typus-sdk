
import { TEST_MNEMONIC, REGISTRY, PORTFOLIO_PACKAGE } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { PortfolioVault } from "../utils/fetchData";
import { getVaultDataFromRegistry } from "../utils/getVaultData";
import { getWithdrawTx } from "../utils/portfolio/user/getWithdrawTx";
const provider = new JsonRpcProvider(Network.DEVNET); //for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

(async () => {
    let share = "100000000";

    let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);
    let portfolioVault = portfolioVaults[0];
    console.log(portfolioVault)

    let typeArguments = portfolioVault.typeArgs;
    let vaultIndex = portfolioVault.info.index;

    let gasBudget = 100000
    let depositTx: any = await getWithdrawTx(gasBudget, PORTFOLIO_PACKAGE, REGISTRY, typeArguments, vaultIndex, share);
    let res = await signer.executeMoveCall(depositTx);
    console.log(res)
})()
