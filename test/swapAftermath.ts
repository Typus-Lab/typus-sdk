import "./load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { Network, TurbosSdk } from "turbos-clmm-sdk";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Aftermath } from "aftermath-ts-sdk";

// Choose one way
export const sdk = new TurbosSdk(Network.mainnet);
const clientMnemonic = String(process.env.CLIENT_MNEMONIC); // 0xfdfc223abec70fccf517642b22ab26f13abadf7650211d56c123d1c941104434
const typusMnemonic = String(process.env.TYPUS_MNEMONIC); // 0xfa27437f36c319fcfd6ca8a41a365dbe507c4023ff8d463f4bc70683d38b0496
const mnemonic1 = String(process.env.MNEMONIC1); // 0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0
const mnemonic2 = String(process.env.MNEMONIC2); // 0x134e0e062e3445787fb6246d893ec4545eb675f30827bcba89f3727a4e0c705f
const USDC = "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN";
const FUD = "0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD";

(async () => {
    const router = new Aftermath("MAINNET").Router();
    const route = await router.getCompleteTradeRouteGivenAmountIn({
        coinInType: "0x2::sui::SUI",
        coinOutType: FUD,
        coinInAmount: BigInt("1000000000"),
    });
    console.log(route);
    await Promise.all([
        // swapAftermath(FUD, clientMnemonic, "5000000000000", 0.1),
        // swapAftermath(FUD, typusMnemonic, "29800000000000", 0.1),
        // swapAftermath(USDC, mnemonic1, "1000000000", 0.01),
        // swapAftermath(USDC, mnemonic2, "1000000000", 0.01),
    ]);
})();

export async function swapAftermath(targetCoin, mnemonic, amount, slippage) {
    var result = "";

    const provider = new SuiClient({
        url: "https://sui-mainnet.public.blastapi.io/",
    });

    const keypair = Ed25519Keypair.deriveKeypair(mnemonic);

    const router = new Aftermath("MAINNET").Router();

    const address = keypair.toSuiAddress();
    result += address + "\n";

    const route = await router.getCompleteTradeRouteGivenAmountIn({
        coinInType: "0x2::sui::SUI",
        coinOutType: targetCoin,
        coinInAmount: amount,
    });
    result += JSON.stringify(route, null, 2) + "\n";

    const transactionBlock = await router.getTransactionForCompleteTradeRoute({
        walletAddress: address,
        completeRoute: route,
        slippage,
    });

    const txHash = await provider.signAndExecuteTransactionBlock({
        signer: keypair,
        // @ts-ignore
        transactionBlock,
    });
    result += "https://suivision.xyz/txblock/" + txHash.digest;

    console.log(result);
}
