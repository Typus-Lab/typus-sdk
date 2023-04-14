import { TEST_MNEMONIC, REGISTRY, PORTFOLIO_PACKAGE, MODULE } from "../../../constants";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import { getDepositTx } from "../../../utils/portfolio/single-collateral/user/getDepositTx";
import { PortfolioVault } from "../../../utils/portfolio/single-collateral/fetchData";
import { getVaultDataFromRegistry } from "../../../utils/portfolio/single-collateral/getVaultData";
const connection = new Connection({ fullnode: "https://rpc-testnet.suiscan.xyz:443" });
const provider = new JsonRpcProvider(connection); //for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

(async () => {
  let depositAmount = "100000000";
  let index = "1";

  let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider, index);
  let portfolioVault = portfolioVaults.find(
    (portfolioVault) => portfolioVault.info.index == index
  )!;
  //   console.log(portfolioVault);

  let dToken = portfolioVault.typeArgs[0];
  let typeArguments = portfolioVault.typeArgs;

  let vaultIndex = portfolioVault.info.index;
  let coinObjs = await provider.getCoins({ owner: await signer.getAddress(), coinType: dToken });
  //   console.log(coinObjs);

  let coins = coinObjs.data.map((coin) => coin.coinObjectId);

  console.log("test for deposit, try to deposit " + coins + " for " + depositAmount + " ...");
  let gasBudget = 100000000;
  let transactionBlock = await getDepositTx(
    gasBudget,
    PORTFOLIO_PACKAGE,
    MODULE,
    REGISTRY,
    typeArguments,
    vaultIndex,
    coins,
    depositAmount
  );
  //   console.log(transactionBlock.blockData);

  let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
  console.log(res);
})();
