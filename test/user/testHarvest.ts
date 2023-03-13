import { TEST_MNEMONIC, REGISTRY, TESTNET_RPC_ENDPOINT, PORTFOLIO_PACKAGE } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { PortfolioVault } from "../utils/fetchData";
import { getVaultDataFromRegistry } from "../utils/getVaultData";
import { getHarvestTx } from "../utils/portfolio/user/getHarvestTx";
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

(async () => {
    let index = "0"

    let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);
    let portfolioVault = portfolioVaults.find(portfolioVault => portfolioVault.info.index == index)!;
    let typeArguments = portfolioVault.typeArgs;
    console.log(portfolioVault)

    let gasBudget = 100000;
    let claimTx: any = await getHarvestTx(
        gasBudget, PORTFOLIO_PACKAGE, REGISTRY, typeArguments, index);
    await signer.executeMoveCall(claimTx);
})()
