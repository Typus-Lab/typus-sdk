import { TEST_MNEMONIC, REGISTRY, PORTFOLIO_PACKAGE } from "../../constants";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, devnetConnection } from "@mysten/sui.js";
import { getAuthorizedUpdateUpcomingVaultConfigTx } from "../../utils/portfolio/authorized/getAuthorizedUpdateUpcomingVaultConfigTx";
const provider = new JsonRpcProvider(devnetConnection); //for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

(async () => {
  let typeArguments = [
    "0x8ccdddc0e8d9287953375ae83cda731d7c75e0ec::btc::BTC",
    "0x8ccdddc0e8d9287953375ae83cda731d7c75e0ec::btc::BTC",
    "0x8ccdddc0e8d9287953375ae83cda731d7c75e0ec::btc::BTC",
  ];
  let index = "0";
  let strikeIncrement = "20000000000";
  let decaySpeed = "1";
  let initialPrice = "12176899";
  let finalPrice = "1791643";
  let auctionDurationInMs = "1800000";

  let strikePct = ["10254"];
  let weight = ["1"];
  let isBuyer = [false];

  let gasBudget = 100000;
  let claimTx = await getAuthorizedUpdateUpcomingVaultConfigTx(
    gasBudget,
    PORTFOLIO_PACKAGE,
    REGISTRY,
    typeArguments,
    index,
    strikePct,
    weight,
    isBuyer,
    strikeIncrement,
    decaySpeed,
    initialPrice,
    finalPrice,
    auctionDurationInMs
  );

  let res = await signer.signAndExecuteTransactionBlock(claimTx);
  console.log(res);
})();
