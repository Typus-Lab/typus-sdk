import { TypusConfig } from "src/utils";
import { getOtcTx } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import "src/utils/load_env";
const config = TypusConfig.default("TESTNET");

const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({ url: config.rpcEndpoint });

(async () => {
    let depositToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::btc::BTC";
    let bidToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::btc::BTC";
    let gasBudget = 100000000;
    let packageId = config.package.dovSingle;
    let typeArguments = [depositToken, bidToken];
    let registry = config.registry.dov.dovSingle;
    let index = "0";
    let coins = (await provider.getCoins({ owner: signer.toSuiAddress(), coinType: depositToken })).data.map((coin) => coin.coinObjectId);
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
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
