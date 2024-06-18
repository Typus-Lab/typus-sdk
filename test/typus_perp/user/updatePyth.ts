import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import configs from "../../../config.json";
import { createPythClient, updatePyth } from "../../../utils/pyth/pythClient";

import mnemonic from "../../../mnemonic.json";

const config = configs.TESTNET;

const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const tx = new TransactionBlock();

    const pythClient = createPythClient(provider, "TESTNET");
    const priceInfoObjectIds = await updatePyth(pythClient, tx, ["SUI", "USDC", "USDT", "BTC", "ETH", "SOL", "CETUS", "NAVX", "SCA"]);
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
