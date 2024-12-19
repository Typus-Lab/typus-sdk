import { SuiPriceServiceConnection, SuiPythClient } from "@pythnetwork/pyth-sui-js";
import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { TypusConfig } from "src/utils";

import mnemonic from "../../../../mnemonic.json";

// Get the Stable Hermes service URL from https://docs.pyth.network/price-feeds/api-instances-and-providers/hermes
let connection = new SuiPriceServiceConnection("https://hermes-beta.pyth.network");
let priceIDs = [
    // You can find the IDs of prices at https://pyth.network/developers/price-feed-ids
    // "0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b", // BTC/USD price ID
    "0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722", // USDC
    "0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6", // ETH
    "0xfe650f0367d4a7ef9815a593ea15d36593f0643aaaf0149bb04be67ab851decd", // SOL
    "0x1fc18861232290221461220bd4e2acd1dcdfbc89c84092c93c18bdc7756c1588", // USDT
    "0xcb324dafd531712dd31c39969ae0246ee4c6ae167257bcf8ac27e28ca35e6a0c", // CETUS
    "0x946292ad3f481f36f5e558726cf4974e2a7a34598bf15d2abe3619e7b6a8db91", // NAVX
    "0xeacabc6304d11fc10a757f63286ef44415d8e91b7a1a525ae94a7ec9398b73f3", // SCA
];
// Get the state IDs of the Pyth and Wormhole contracts from
// https://docs.pyth.network/price-feeds/contract-addresses/sui
let pythStateId = "0x243759059f4c3111179da5878c12f68d612c21a8d54d85edc86164bb18be1c7c";
let wormholeStateId = "0x31358d198147da50db32eda2562951d53973a0c0ad5ed738e9b17d88b213d790";

(async () => {
    let keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    // @ts-ignore
    let client = new SuiPythClient(provider, pythStateId, wormholeStateId);
    let tx = new Transaction();

    let priceFeedUpdateData = await connection.getPriceFeedsUpdateData(priceIDs);

    let pythPackageId = await client.getPythPackageId();
    console.log("Pyth package ID:", pythPackageId);

    // @ts-ignore
    // letpriceInfoObjectIds = await client.updatePriceFeeds(tx, priceFeedUpdateData, priceIDs);

    let priceInfoObjectIds = await client.createPriceFeed(tx, priceFeedUpdateData);

    let res = await provider.signAndExecuteTransaction({
        signer: keypair,
        transaction: tx,
        options: {
            showEffects: true,
            showEvents: true,
        },
    });
    console.log(res);

    // https://testnet.suivision.xyz/txblock/DmXouy51A9WuxHKTqQLwdEUsq6L5K6y5mHuzWaxUwsqb
})();
