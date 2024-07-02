import { SuiClient } from "@mysten/sui.js/client";
import { LiquidityPool, Registry } from "./lp-pool/structs";
import { MarketRegistry, Markets, SymbolMarket } from "./trading/structs";
import { getUserOrders as _getUserOrders, getUserPositions as _getUserPositions } from "./trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { readVecOrder, readVecPosition, readVecShares } from "./readVec";
import { TradingOrder, Position } from "./position/structs";
import { getUserShares } from "./stake-pool/functions";
import { LpUserShare } from "./stake-pool/structs";

export async function getLpPools(provider: SuiClient, config: { REGISTRY: { LP_POOL_REGISTRY: string } }): Promise<LiquidityPool[]> {
    const lpPoolRegistry = await Registry.fetch(provider, config.REGISTRY.LP_POOL_REGISTRY);
    // console.log(lpPoolRegistry);

    const dynamicFields = await provider.getDynamicFields({
        parentId: lpPoolRegistry.liquidityPoolRegistry,
    });

    const lpPools: LiquidityPool[] = [];

    for (const field of dynamicFields.data) {
        const lpPool = await LiquidityPool.fetch(provider, field.objectId);
        // console.log(lpPool);
        lpPools.push(lpPool);
    }

    return lpPools;
}

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

export async function getUserOrders(
    provider: SuiClient,
    config: { OBJECT: { TYPUS_PERP_VERSION: string }; REGISTRY: { MARKET_REGISTRY: string } },
    user: string
) {
    let tx = new TransactionBlock();

    _getUserOrders(tx, {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.MARKET_REGISTRY,
        marketIndex: BigInt(0),
        user,
    });

    let res = await provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx });
    // console.log(res);

    // @ts-ignore
    const returnValues = res.results[0].returnValues[0][0];
    // console.log(returnValues);

    const orders: TradingOrder[] = readVecOrder(Uint8Array.from(returnValues));
    // console.log(orders);
    return orders;
}

export async function getUserPositions(
    provider: SuiClient,
    config: { OBJECT: { TYPUS_PERP_VERSION: string }; REGISTRY: { MARKET_REGISTRY: string } },
    user: string
) {
    let tx = new TransactionBlock();

    _getUserPositions(tx, {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.MARKET_REGISTRY,
        marketIndex: BigInt(0),
        user,
    });

    let res = await provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx });
    // console.log(res);

    // @ts-ignore
    const returnValues = res.results[0].returnValues[0][0];
    // console.log(returnValues);

    const positions: Position[] = readVecPosition(Uint8Array.from(returnValues));
    // console.log(positions);
    return positions;
}

export async function getUserStake(
    provider: SuiClient,
    config: { REGISTRY: { STAKE_POOL_REGISTRY: string } },
    user: string
): Promise<LpUserShare[]> {
    let tx = new TransactionBlock();

    getUserShares(tx, {
        registry: config.REGISTRY.STAKE_POOL_REGISTRY,
        index: BigInt(0),
        user,
    });

    let res = await provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx });
    // console.log(res);

    if (res.results) {
        // @ts-ignore
        const returnValues = res.results[0].returnValues[0][0];
        // console.log(returnValues);

        const stake: LpUserShare[] = readVecShares(Uint8Array.from(returnValues));
        // console.log(stake);
        // console.log(stake[0].deactivatingShares);
        // console.log(stake[0].lastIncentivePriceIndex);
        return stake;
    } else {
        return [];
    }
}
