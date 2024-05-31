import { SuiPriceServiceConnection, SuiPythClient } from "@pythnetwork/pyth-sui-js";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import configs from "../../../config.json";

import mnemonic from "../../../mnemonic.json";

// Get the Stable Hermes service URL from https://docs.pyth.network/price-feeds/api-instances-and-providers/hermes
const connection = new SuiPriceServiceConnection("https://hermes.pyth.network");

const config = configs.MAINNET;

const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));

const priceIDs = [
    // You can find the IDs of prices at https://pyth.network/developers/price-feed-ids
    "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43", // BTC/USD price ID
    "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace", // ETH/USD price ID
];

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

// Get the state IDs of the Pyth and Wormhole contracts from
// https://docs.pyth.network/price-feeds/contract-addresses/sui
const wormholeStateId = "0xaeab97f96cf9877fee2883315d459552b2b921edc16d7ceac6eab944dd88919c";
const pythStateId = "0x1f9310238ee9298fb703c3419030b35b22bb1cc37113e3bb5007c99aec79e5b8";

(async () => {
    // @ts-ignore
    const client = new SuiPythClient(provider, pythStateId, wormholeStateId);
    const tx = new TransactionBlock();

    const priceFeedUpdateData = await connection.getPriceFeedsUpdateData(priceIDs);

    // @ts-ignore
    const priceInfoObjectIds = await client.updatePriceFeeds(tx, priceFeedUpdateData, priceIDs);

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
