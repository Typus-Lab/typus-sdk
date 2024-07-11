import "@/utils/load_env";
import { getOtcTx } from "../../../utils/typus-dov-single-v2/authorized-entry";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import config from "../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let depositToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::btc::BTC";
    let bidToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::btc::BTC";
    let gasBudget = 100000000;
    let packageId = config.PACKAGE;
    let typeArguments = [depositToken, bidToken];
    let registry = config.REGISTRY;
    let index = "0";
    let coins = (await provider.getCoins({ owner: await signer.getAddress(), coinType: depositToken })).data.map(
        (coin) => coin.coinObjectId
    );
    let deliveryPrice = "201592";
    let deliverySize = "1000000000";
    let bidderBidValue = "2015920";
    let bidderFeeBalanceValue = "201592";
    let incentiveBidValue = "0";
    let incentiveFeeBalanceValue = "0";
    let depositorIncentiveValue = "0";

    let transactionBlock = await getOtcTx(
        gasBudget,
        packageId,
        typeArguments,
        registry,
        index,
        coins,
        deliveryPrice,
        deliverySize,
        bidderBidValue,
        bidderFeeBalanceValue,
        incentiveBidValue,
        incentiveFeeBalanceValue,
        depositorIncentiveValue
    );
    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
