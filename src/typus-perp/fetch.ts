import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { bcs } from "@mysten/bcs";

import { LiquidityPool } from "./typus_perp/lp-pool/structs";
import { Markets, SymbolMarket } from "./typus_perp/trading/structs";
import { TradingOrder, Position } from "./typus_perp/position/structs";
import {
    getUserOrders as _getUserOrders,
    getUserPositions as _getUserPositions,
    getEstimatedLiquidationPrice,
} from "./typus_perp/trading/functions";

import { getUserShares } from "./typus_stake_pool/stake-pool/functions";
import { LpUserShare, StakePool } from "./typus_stake_pool/stake-pool/structs";

import { CLOCK } from "src/constants";
import { tokenType, typeArgToToken } from "src/constants";
import { priceInfoObjectIds, pythStateId, PythClient, updatePyth, TypusConfig } from "src/utils";

import { NETWORK } from ".";
import { readVecOrder, readVecPosition, readVecShares } from "./readVec";

export async function getLpPools(config: TypusConfig): Promise<LiquidityPool[]> {
    // const lpPoolRegistry = await Registry.fetch(provider, config.registry.LP_POOL);
    // console.log(lpPoolRegistry);

    let provider = new SuiClient({ url: config.rpcEndpoint });
    let dynamicFields = await provider.getDynamicFields({
        parentId: config.registry.perp.liquidityPool,
    });

    let lpPools: LiquidityPool[] = [];

    for (const field of dynamicFields.data) {
        let lpPool = await LiquidityPool.fetch(provider, field.objectId);
        // console.log(lpPool);
        lpPools.push(lpPool);
    }

    return lpPools;
}

export async function getStakePools(config: TypusConfig): Promise<StakePool[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let dynamicFields = await provider.getDynamicFields({
        parentId: config.registry.perp.stakePool,
    });

    let stakePools: StakePool[] = [];

    for (const field of dynamicFields.data) {
        let stakePool = await StakePool.fetch(provider, field.objectId);
        // console.log(stakePool);
        stakePools.push(stakePool);
    }

    return stakePools;
}

export async function getMarkets(config: TypusConfig): Promise<Markets[]> {
    // const marketRegistry = await MarketRegistry.fetch(provider, config.registry.perp.market);
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

    let provider = new SuiClient({ url: config.rpcEndpoint });
    let dynamicFields = await provider.getDynamicFields({
        parentId: config.registry.perp.market,
    });

    let markets: Markets[] = [];

    for (const field of dynamicFields.data) {
        let market = await Markets.fetch(provider, field.objectId);
        // console.log(market);
        markets.push(market);
    }
    return markets;
}

export async function getSymbolMarkets(provider: SuiClient, market: Markets): Promise<Map<string, SymbolMarket>> {
    let symbolMarkets = new Map<string, SymbolMarket>();

    let dynamicFields = await provider.getDynamicFields({
        parentId: market.symbolMarkets.id,
    });

    for (const field of dynamicFields.data) {
        let symbolMarket = await SymbolMarket.fetch(provider, field.objectId);
        // @ts-ignore
        let key = field.name.value.name;
        // console.log(key);
        // console.log(symbolMarket);
        symbolMarkets.set(key, symbolMarket);
    }

    return symbolMarkets;
}

export async function getUserOrders(config: TypusConfig, user: string) {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let tx = new Transaction();

    _getUserOrders(tx, {
        version: config.version.perp.perp,
        registry: config.registry.perp.market,
        marketIndex: BigInt(0),
        user,
    });

    let res = await provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx });
    // console.log(res);

    // @ts-ignore
    let returnValues = res.results[0].returnValues[0][0];
    // console.log(returnValues);

    let orders: TradingOrder[] = readVecOrder(Uint8Array.from(returnValues));
    // console.log(orders);
    return orders;
}

export async function getUserPositions(config: TypusConfig, user: string) {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let tx = new Transaction();

    _getUserPositions(tx, {
        version: config.version.perp.perp,
        registry: config.registry.perp.market,
        marketIndex: BigInt(0),
        user,
    });

    let res = await provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx });
    // console.log(res);

    // @ts-ignore
    let returnValues = res.results[0].returnValues[0][0];
    // console.log(returnValues);

    let positions: Position[] = readVecPosition(Uint8Array.from(returnValues));
    // console.log(positions);
    return positions;
}

export async function getUserStake(config: TypusConfig, user: string): Promise<LpUserShare[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let tx = new Transaction();

    getUserShares(tx, {
        registry: config.registry.perp.stakePool,
        index: BigInt(0),
        user,
    });

    let res = await provider.devInspectTransactionBlock({ sender: user, transactionBlock: tx });
    // console.log(res);

    if (res.results) {
        // @ts-ignore
        let returnValues = res.results[0].returnValues[0][0];
        // console.log(returnValues);

        let stake: LpUserShare[] = readVecShares(Uint8Array.from(returnValues));
        // console.log(stake);
        // console.log(stake[0].deactivatingShares);
        // console.log(stake[0].lastIncentivePriceIndex);
        return stake;
    } else {
        return [];
    }
}

export async function getLiquidationPrice(
    config: TypusConfig,
    pythClient: PythClient,
    input: {
        positions: Position[];
        user: string;
    }
) {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let tx = new Transaction();

    let pythTokens: string[] = [];

    for (let position of input.positions) {
        // parse from Position
        let TOKEN = typeArgToToken(position.collateralToken.name);
        let BASE_TOKEN = typeArgToToken(position.symbol.baseToken.name);
        pythTokens.push(TOKEN);
        pythTokens.push(BASE_TOKEN);
    }

    await updatePyth(pythClient, tx, Array.from(new Set(pythTokens)));

    for (let position of input.positions) {
        // parse from Position
        let TOKEN = typeArgToToken(position.collateralToken.name);
        let BASE_TOKEN = typeArgToToken(position.symbol.baseToken.name);

        let cToken = tokenType[NETWORK][TOKEN];
        let baseToken = tokenType[NETWORK][BASE_TOKEN];

        getEstimatedLiquidationPrice(tx, [cToken, baseToken], {
            version: config.version.perp.perp,
            registry: config.registry.perp.market,
            poolRegistry: config.registry.perp.lpPool,
            marketIndex: BigInt(0),
            poolIndex: BigInt(0),
            pythState: pythStateId[NETWORK],
            oracleCToken: priceInfoObjectIds[NETWORK][TOKEN],
            oracleTradingSymbol: priceInfoObjectIds[NETWORK][BASE_TOKEN],
            clock: CLOCK,
            positionId: position.positionId,
        });
    }

    let res = await provider.devInspectTransactionBlock({ sender: input.user, transactionBlock: tx });
    // console.log(res);

    let prices = res.results?.slice(-input.positions.length).map((x) => bcs.u64().parse(Uint8Array.from(x.returnValues![0][0])));
    // console.log(prices);
    return prices;
}
