import { REGISTRY, PORTFOLIO_PACKAGE, MODULE } from "../../../constants";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, devnetConnection, testnetConnection, Connection } from "@mysten/sui.js";
import { PortfolioVault } from "../../../utils/portfolio/single-collateral/fetchData";
import { getVaultDataFromRegistry } from "../../../utils/portfolio/single-collateral/getVaultData";
import { getUnsubscribeTx } from "../../../utils/portfolio/single-collateral/user/getUnsubscribeTx";
const connection = new Connection({
    fullnode: "https://node.shinami.com:443/api/v1/sui_testnet_c702de54dad05016124f2cfabc1de7e8",
});
const provider = new JsonRpcProvider(connection); //for read only operations
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let index = "3";
    let share = "100000";

    let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider, index);
    let portfolioVault = portfolioVaults[0];
    console.log(portfolioVault);
    let typeArguments = portfolioVault.typeArgs;

    let gasBudget = 1000000000;
    let transactionBlock = await getUnsubscribeTx(gasBudget, PORTFOLIO_PACKAGE, MODULE, REGISTRY, typeArguments, index, [share]);
    await signer.signAndExecuteTransactionBlock({ transactionBlock });
})();
