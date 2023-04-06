import { TEST_MNEMONIC, REGISTRY, PORTFOLIO_PACKAGE, TIME_ORACLE } from "../../constants";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, devnetConnection } from "@mysten/sui.js";
import { getAuthorizedNewPortfolioVaultTx } from "../../utils/portfolio/authorized/getAuthorizedNewPortfolioVaultTx";
const provider = new JsonRpcProvider(devnetConnection); //for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

(async () => {
  let typeArguments = [
    "0x8ccdddc0e8d9287953375ae83cda731d7c75e0ec::btc::BTC",
    "0x8ccdddc0e8d9287953375ae83cda731d7c75e0ec::btc::BTC",
    "0x8ccdddc0e8d9287953375ae83cda731d7c75e0ec::btc::BTC",
  ];
  let optionType = "0";
  let period = "0";
  let activationTsMs = "1678694400000";
  let expirationTsMs = "1678780800000";
  let dTokenDecimal = "9";
  let bTokenDecimal = "9";
  let oTokenDecimal = "9";
  let capacity = "1000000000000";
  let strikePct = ["10254"];
  let weight = ["1"];
  let isBuyer = [false];
  let strikeIncrement = "20000000000";
  let lotSize = "100000";
  let decaySpeed = "1";
  let initialPrice = "12176899";
  let finalPrice = "1791643";
  let auctionDurationInMs = "3600000";
  let whitelist = [];
  let leverage = "100";
  let hasNext = true;

  let gasBudget = 100000;
  let claimTx = await getAuthorizedNewPortfolioVaultTx(
    gasBudget,
    PORTFOLIO_PACKAGE,
    REGISTRY,
    typeArguments,
    TIME_ORACLE,
    optionType,
    period,
    activationTsMs,
    expirationTsMs,
    dTokenDecimal,
    bTokenDecimal,
    oTokenDecimal,
    capacity,
    strikePct,
    weight,
    isBuyer,
    strikeIncrement,
    lotSize,
    decaySpeed,
    initialPrice,
    finalPrice,
    auctionDurationInMs,
    whitelist,
    leverage,
    hasNext
  );

  let res = await signer.signAndExecuteTransactionBlock(claimTx);
  console.log(res);
})();
