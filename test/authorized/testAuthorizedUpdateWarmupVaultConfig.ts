import { TEST_MNEMONIC, REGISTRY, PORTFOLIO_PACKAGE, TIME_ORACLE } from "../../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, devnetConnection } from '@mysten/sui.js';
import { getAuthorizedUpdateWarmupVaultConfigTx } from "../../utils/portfolio/authorized/getAuthorizedUpdateWarmupVaultConfigTx";
const provider = new JsonRpcProvider(devnetConnection);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

(async () => {
    let typeArguments = ["0x8ccdddc0e8d9287953375ae83cda731d7c75e0ec::btc::BTC", "0x8ccdddc0e8d9287953375ae83cda731d7c75e0ec::btc::BTC", "0x8ccdddc0e8d9287953375ae83cda731d7c75e0ec::btc::BTC"];
    let index = "0";
    let strikeIncrement = "20000000000";
    let decaySpeed = "1";
    let initialPrice = "12176899";
    let finalPrice = "1791643";
    let auctionDurationInMs = "1800000";

    let gasBudget = 100000;
    let claimTx: any = await getAuthorizedUpdateWarmupVaultConfigTx(
        gasBudget, PORTFOLIO_PACKAGE, typeArguments, REGISTRY,
        index,
        strikeIncrement,
        decaySpeed,
        initialPrice,
        finalPrice,
        auctionDurationInMs,
    );

    let res = await signer.executeMoveCall(claimTx);
    console.log(res)
})()
