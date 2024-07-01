import { SuiClient } from "@mysten/sui.js/client";
import { MarketRegistry, Markets, SymbolMarket } from "../trading/structs";

export async function getMarkets(provider: SuiClient, config: { REGISTRY: { MARKET_REGISTRY: string } }): Promise<Markets[]> {
    // const marketRegistry = await MarketRegistry.fetch(provider, config.REGISTRY.MARKET_REGISTRY);
    // console.log(marketRegistry);
    // MarketRegistry {
    //   '$typeName': '0x1a05edb0e5e670196de98fbbf544180d129dd4ec11c3c57f742badf0304650d::trading::MarketRegistry',
    //   '$fullTypeName': '0x1a05edb0e5e670196de98fbbf544180d129dd4ec11c3c57f742badf0304650d::trading::MarketRegistry',
    //   '$typeArgs': [],
    //   id: '0x6e11e468b50b1665b930020ea8223bdcc7c86024f85d51021a06dd4ee0e27905',
    //   referralRegistry: '0xd5c597256ac6acac8cbd52369b4fd87712b964686266f2e790b4f381edfb2b89',
    //   numMarket: 1n,
    //   u64Padding: []
    // }

    const dynamicFields = await provider.getDynamicFields({
        parentId: config.REGISTRY.MARKET_REGISTRY,
    });

    const markets: Markets[] = [];

    for (const field of dynamicFields.data) {
        const market = await Markets.fetch(provider, field.objectId);
        // console.log(market);
        markets.push(market);
    }
    return markets;
}

export async function getSymbolMarkets(provider: SuiClient, market: Markets): Promise<Map<string, SymbolMarket>> {
    const symbolMarkets = new Map<string, SymbolMarket>();

    const dynamicFields = await provider.getDynamicFields({
        parentId: market.symbolMarkets.id,
    });

    for (const field of dynamicFields.data) {
        const symbolMarket = await SymbolMarket.fetch(provider, field.objectId);
        // @ts-ignore
        const key = field.name.value.name;
        // console.log(key);
        // console.log(symbolMarket);
        symbolMarkets.set(key, symbolMarket);
    }

    return symbolMarkets;
}
