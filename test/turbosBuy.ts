import "./load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { Network, TurbosSdk } from "turbos-clmm-sdk";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Decimal } from "turbos-clmm-sdk";

// Choose one way
export const sdk = new TurbosSdk(Network.mainnet);

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const provider = new SuiClient({
    url: getFullnodeUrl("mainnet"),
});

(async () => {
    const targetCoin = "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN"; // USDC
    // const targetCoin = "0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD";

    const address = keypair.toSuiAddress();
    console.log(address);

    const pools = await sdk.pool.getPools();
    console.log(pools.length);

    const targetPools = pools
        .filter((pool) => pool.types.includes("0x2::sui::SUI") && pool.types.includes(targetCoin))
        .sort((a, b) => Number(b.liquidity) - Number(a.liquidity));
    console.log(targetPools.length);

    const fudPool = targetPools[0];
    console.log(fudPool);

    if (fudPool) {
        const pool = fudPool?.id.id;

        var a2b = true;
        var amountSpecifiedIsInput = true;
        if (fudPool?.types[1] == "0x2::sui::SUI") {
            a2b = false;
            amountSpecifiedIsInput = false;
        }
        console.log(fudPool?.types[1]);

        const swapResult = await sdk.trade.computeSwapResult({
            pools: [
                {
                    pool,
                    a2b,
                },
            ],
            address,
            amountSpecified: "900000000",
            amountSpecifiedIsInput,
        });
        console.log(swapResult[0]);

        const transactionBlock = await sdk.trade.swap({
            routes: [{ pool, a2b, nextTickIndex: sdk.math.bitsToNumber(swapResult[0].tick_current_index.bits) }],
            coinTypeA: fudPool?.types[0],
            coinTypeB: fudPool?.types[1],
            address,
            amountA: swapResult[0].amount_a,
            amountB: swapResult[0].amount_b,
            amountSpecifiedIsInput,
            slippage: "5",
        });
        console.log(transactionBlock);

        const result = await provider.signAndExecuteTransactionBlock({
            signer: keypair,
            transactionBlock,
        });
        console.log(result);
    }
})();
