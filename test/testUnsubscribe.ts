import { TEST_MNEMONIC, REGISTRY, PORTFOLIO_PACKAGE } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { PortfolioVault } from "../utils/fetchData";
import { getVaultDataFromRegistry } from "../utils/getVaultData";
import { getUnsubscribeTx } from "../utils/portfolio/user/getUnsubscribeTx";
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

(async () => {
    let index = "0"
    let share = "100000000";

    let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);
    let portfolioVault = portfolioVaults.find(portfolioVault => portfolioVault.info.index == index)!;
    let typeArguments = portfolioVault.typeArgs;
    console.log(portfolioVault)

    let gasBudget = 100000;
    let claimTx: any = await getUnsubscribeTx(
        gasBudget, PORTFOLIO_PACKAGE, REGISTRY, typeArguments, index, [share]);
    await signer.executeMoveCall(claimTx);
})()
