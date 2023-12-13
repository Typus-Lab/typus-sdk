import "./load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { Network, TurbosSdk } from "turbos-clmm-sdk";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";

// Choose one way
export const sdk = new TurbosSdk(Network.mainnet);
const clientMnemonic = String(process.env.CLIENT_MNEMONIC); // 0xfdfc223abec70fccf517642b22ab26f13abadf7650211d56c123d1c941104434
const typusMnemonic = String(process.env.TYPUS_MNEMONIC); // 0xfa27437f36c319fcfd6ca8a41a365dbe507c4023ff8d463f4bc70683d38b0496
const mnemonic1 = String(process.env.MNEMONIC1); // 0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0
const mnemonic2 = String(process.env.MNEMONIC2); // 0x134e0e062e3445787fb6246d893ec4545eb675f30827bcba89f3727a4e0c705f
const USDC = "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN";
const FUD = "0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD";

(async () => {
    const pools = await sdk.pool.getPools();
    const targetPools = pools
        .filter((pool) => pool.types.includes("0x2::sui::SUI") && pool.types.includes(FUD))
        .sort((a, b) => Number(b.liquidity) - Number(a.liquidity));
    console.log(pools.length + " " + targetPools.length);
    const fudPool = targetPools[0];
    console.log(JSON.stringify(fudPool));
    await Promise.all([
        // turbosSwap(FUD, clientMnemonic, "5000000000000", "10"),
        // turbosSwap(FUD, typusMnemonic, "29800000000000", "10"),
        // turbosSwap(FUD, mnemonic1, "1000000000", "1"),
        // turbosSwap(FUD, mnemonic2, "1000000000", "1"),
        // turbosSwap(FUD, typusMnemonic, "29800000000000", "10"),
    ]);
})();

export async function turbosSwap(targetCoin, mnemonic, amount, slippage) {
    var result = "";
    const keypair = Ed25519Keypair.deriveKeypair(mnemonic);
    const provider = new SuiClient({
        url: getFullnodeUrl("mainnet"),
    });
    const address = keypair.toSuiAddress();
    result += address + "\n";

    const pools = await sdk.pool.getPools();
    const targetPools = pools
        .filter((pool) => pool.types.includes("0x2::sui::SUI") && pool.types.includes(targetCoin))
        .sort((a, b) => Number(b.liquidity) - Number(a.liquidity));
    result += pools.length + " " + targetPools.length + "\n";
    const fudPool = targetPools[0];
    result += JSON.stringify(fudPool) + "\n";

    if (fudPool) {
        const pool = fudPool?.id.id;

        var a2b = true;
        var amountSpecifiedIsInput = true;
        if (fudPool?.types[1] == "0x2::sui::SUI") {
            a2b = false;
            amountSpecifiedIsInput = false;
        }

        const swapResult = await sdk.trade.computeSwapResult({
            pools: [
                {
                    pool,
                    a2b,
                },
            ],
            address,
            amountSpecified: amount,
            amountSpecifiedIsInput,
        });

        const transactionBlock = await sdk.trade.swap({
            routes: [{ pool, a2b, nextTickIndex: sdk.math.bitsToNumber(swapResult[0].tick_current_index.bits) }],
            coinTypeA: fudPool?.types[0],
            coinTypeB: fudPool?.types[1],
            address,
            amountA: swapResult[0].amount_a,
            amountB: swapResult[0].amount_b,
            amountSpecifiedIsInput,
            slippage: slippage,
        });

        const txHash = await provider.signAndExecuteTransactionBlock({
            signer: keypair,
            transactionBlock,
        });
        result += "https://suivision.xyz/txblock/" + txHash.digest;
    }

    console.log(result);
}
