import { SuiPriceServiceConnection, SuiPythClient } from "@pythnetwork/pyth-sui-js";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import configs from "../../../config.json";

import mnemonic from "../../../mnemonic.json";

// Get the Stable Hermes service URL from https://docs.pyth.network/price-feeds/api-instances-and-providers/hermes
const connection = new SuiPriceServiceConnection("https://hermes-beta.pyth.network");

const config = configs.TESTNET;

const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));

const priceIDs = [
    // You can find the IDs of prices at https://pyth.network/developers/price-feed-ids
    // "0x50c67b3fd225db8912a424dd4baed60ffdde625ed2feaaf283724f9608fea266", // SUI/USD price ID
    // "0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722", // USDC/USD price ID
    // "0x1fc18861232290221461220bd4e2acd1dcdfbc89c84092c93c18bdc7756c1588", // USDT/USD price ID
    // "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace", // BTC/USD price ID
    // "0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6", // ETH/USD price ID
    // "0xfe650f0367d4a7ef9815a593ea15d36593f0643aaaf0149bb04be67ab851decd", // SOL/USD price ID
    // "0xcb324dafd531712dd31c39969ae0246ee4c6ae167257bcf8ac27e28ca35e6a0c", // CETUS/USD price ID
    // "0x946292ad3f481f36f5e558726cf4974e2a7a34598bf15d2abe3619e7b6a8db91", // NAVX/USD price ID
    "0xeacabc6304d11fc10a757f63286ef44415d8e91b7a1a525ae94a7ec9398b73f3" // SCA/USD price ID
];

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

// Get the state IDs of the Pyth and Wormhole contracts from
// https://docs.pyth.network/price-feeds/contract-addresses/sui
const wormholeStateId = "0x31358d198147da50db32eda2562951d53973a0c0ad5ed738e9b17d88b213d790";
const pythStateId = "0x243759059f4c3111179da5878c12f68d612c21a8d54d85edc86164bb18be1c7c";

(async () => {
    // @ts-ignore
    const client = new SuiPythClient(provider, pythStateId, wormholeStateId);
    const tx = new TransactionBlock();

    const priceFeedUpdateData = await connection.getPriceFeedsUpdateData(priceIDs);

    // @ts-ignore
    const priceInfoObjectIds = await client.updatePriceFeeds(tx, priceFeedUpdateData, priceIDs);
    console.log(priceInfoObjectIds);

    const res = await provider.signAndExecuteTransactionBlock({
        signer: keypair,
        transactionBlock: tx,
        options: {
            showEffects: true,
            showEvents: true,
        },
    });
    console.log(res);

    // https://suivision.xyz/txblock/7NZUby1ezhc6tN8EkT4vkTDEQ7XZMyHcDxd42GfJZzQo
})();
