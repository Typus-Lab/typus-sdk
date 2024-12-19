import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { TypusConfig } from "src/utils";
import { createPythClient, updatePyth } from "src/utils";

import mnemonic from "../../../../mnemonic.json";

(async () => {
    let keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let tx = new Transaction();
    let pythClient = createPythClient(provider, "TESTNET");
    let priceInfoObjectIds = await updatePyth(pythClient, tx, ["SUI", "USDC", "USDT", "BTC", "ETH", "SOL", "CETUS", "NAVX", "SCA"]);
    console.log(priceInfoObjectIds);

    let res = await provider.signAndExecuteTransaction({
        signer: keypair,
        transaction: tx,
        options: {
            showEffects: true,
            showEvents: true,
        },
    });
    console.log(res);

    // https://suivision.xyz/txblock/7NZUby1ezhc6tN8EkT4vkTDEQ7XZMyHcDxd42GfJZzQo
})();
