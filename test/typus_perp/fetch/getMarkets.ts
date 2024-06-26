import configs from "../../../config.json";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { MarketRegistry, Markets, SymbolMarket } from "../../../utils/typus_perp/trading/structs";

import mnemonic from "../../../mnemonic.json";
const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    const marketRegistry = await MarketRegistry.fetch(provider, config.REGISTRY.MARKET_REGISTRY);
    console.log(marketRegistry);

    const dynamicFields = await provider.getDynamicFields({
        parentId: config.REGISTRY.MARKET_REGISTRY,
    });

    for (const field of dynamicFields.data) {
        const market = await Markets.fetch(provider, field.objectId);
        console.log(market);

        const dynamicFields = await provider.getDynamicFields({
            parentId: market.symbolMarkets.id,
        });

        for (const field of dynamicFields.data) {
            const symbolMarket = await SymbolMarket.fetch(provider, field.objectId);
            // @ts-ignore
            console.log(field.name.value.name);
            console.log(symbolMarket);
        }
    }
})();
