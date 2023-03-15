
import { TEST_MNEMONIC, REGISTRY, PORTFOLIO_PACKAGE } from "../../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, devnetConnection } from '@mysten/sui.js';
import { getDepositTx } from "../../utils/portfolio/user/getDepositTx";
import { PortfolioVault } from "../../utils/fetchData";
import { getVaultDataFromRegistry } from "../../utils/getVaultData";
const provider = new JsonRpcProvider(devnetConnection); //for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

(async () => {
    let depositAmount = "100000000";
    let index = "0"

    let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);
    let portfolioVault = portfolioVaults.find(portfolioVault => portfolioVault.info.index == index)!;
    console.log(portfolioVault)

    let dToken = portfolioVault.typeArgs[0];
    let typeArguments = portfolioVault.typeArgs;

    let vaultIndex = portfolioVault.info.index;
    let coinObjs = await provider.selectCoinSetWithCombinedBalanceGreaterThanOrEqual(await signer.getAddress(), BigInt(depositAmount), dToken);

    // @ts-ignore
    let coins = coinObjs.map(coin => coin.details.reference.objectId.toString())
    console.log("test for deposit, try to deposit " + coins + " for " + depositAmount + " ...")
    let gasBudget = 100000
    let depositTx: any = await getDepositTx(gasBudget, PORTFOLIO_PACKAGE, REGISTRY, typeArguments, vaultIndex, coins, depositAmount);
    let res = await signer.executeMoveCall(depositTx);
    console.log(res)
})()
