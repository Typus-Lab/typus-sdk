import {
  TEST_MNEMONIC,
  REGISTRY,
  PORTFOLIO_PACKAGE,
  TIME_ORACLE,
  DOGE_ORACLE,
  MODULE,
  testnetConnection,
} from "../../constants";
import { JsonRpcProvider, Ed25519Keypair, RawSigner } from "@mysten/sui.js";

import { PortfolioVault } from "../../utils/fetchData";
import { getVaultDataFromRegistry } from "../../utils/getVaultData";
import { getNewBidTx } from "../../utils/portfolio/user/getNewBidTx";
const provider = new JsonRpcProvider(testnetConnection); //for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

(async () => {
  let size = "330000000";
  let index = "1";

  let portfolioVaults: PortfolioVault[] = await getVaultDataFromRegistry(REGISTRY, provider, index);
  let portfolioVault = portfolioVaults[0];
  console.log(portfolioVault);

  let bToken = portfolioVault.typeArgs[1];
  let typeArguments = portfolioVault.typeArgs;
  let coinObjs = await provider.getCoins({ owner: await signer.getAddress(), coinType: bToken });
  //   console.log(coinObjs);

  let coins = coinObjs.data.map((coin) => coin.coinObjectId);

  let gasBudget = 100000;
  let transactionBlock = await getNewBidTx(
    gasBudget,
    PORTFOLIO_PACKAGE,
    MODULE,
    REGISTRY,
    typeArguments,
    index,
    DOGE_ORACLE,
    TIME_ORACLE,
    coins,
    size
  );

  let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
  console.log(res);
})();
