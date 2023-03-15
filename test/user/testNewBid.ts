
import { TEST_MNEMONIC, REGISTRY, PORTFOLIO_PACKAGE, TIME_ORACLE, DOGE_ORACLE } from "../../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, devnetConnection } from '@mysten/sui.js';

import { PortfolioVault } from "../../utils/fetchData";
import { getVaultDataFromRegistry } from "../../utils/getVaultData";
import { getNewBidTx } from "../../utils/portfolio/user/getNewBidTx";
const provider = new JsonRpcProvider(devnetConnection); //for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

(async () => {
    let size = "100000000";
    let index = "0"

    let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);
    let portfolioVault = portfolioVaults.find(portfolioVault => portfolioVault.info.index == index)!;
    console.log(portfolioVault)

    let bToken = portfolioVault.typeArgs[1];
    let typeArguments = portfolioVault.typeArgs;
    let coinObjs = await provider.selectCoinSetWithCombinedBalanceGreaterThanOrEqual(await signer.getAddress(), BigInt(size), bToken);

    // @ts-ignore
    let coins = coinObjs.map(coin => coin.details.reference.objectId.toString())

    let gasBudget = 100000
    let tx = await getNewBidTx(gasBudget, PORTFOLIO_PACKAGE, REGISTRY, typeArguments, index, DOGE_ORACLE, TIME_ORACLE, coins, size);

    let res = await signer.executeMoveCall(tx);
    console.log(res)
})()
