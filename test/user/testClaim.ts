import { TEST_MNEMONIC, REGISTRY, PORTFOLIO_PACKAGE, MODULE } from "../../constants";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, devnetConnection } from "@mysten/sui.js";
import { getClaimTx } from "../../utils/portfolio/user/getClaimTx";
import { PortfolioVault } from "../../utils/fetchData";
import { getVaultDataFromRegistry } from "../../utils/getVaultData";
const provider = new JsonRpcProvider(devnetConnection); //for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

(async () => {
  let index = "0";

  let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider);
  let portfolioVault = portfolioVaults.find(
    (portfolioVault) => portfolioVault.info.index == index
  )!;
  let typeArguments = portfolioVault.typeArgs;
  console.log(portfolioVault);

  let gasBudget = 100000;
  let transactionBlock = await getClaimTx(
    gasBudget,
    PORTFOLIO_PACKAGE,
    MODULE,
    REGISTRY,
    typeArguments,
    index
  );
  await signer.signAndExecuteTransactionBlock({ transactionBlock });
})();
