import { TransactionBlock } from "@mysten/sui.js/transactions";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TypusConfig } from "src/utils";
import { createPythClient, updatePyth } from "src/utils";

import mnemonic from "../../../../mnemonic.json";

let config = TypusConfig.default("TESTNET");

let keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));

let provider = new SuiClient({ url: config.rpcEndpoint });

(async () => {
    let tx = new TransactionBlock();

    let pythClient = createPythClient(provider, "TESTNET");
    let priceInfoObjectIds = await updatePyth(pythClient, tx, ["SUI", "USDC", "USDT", "BTC", "ETH", "SOL", "CETUS", "NAVX", "SCA"]);
    console.log(priceInfoObjectIds);

    let res = await provider.signAndExecuteTransactionBlock({
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
