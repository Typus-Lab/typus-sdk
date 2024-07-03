import { burnLp, mintLp, updateLiquidityValue } from "../lp-pool/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../constants";
import { LiquidityPool } from "../lp-pool/structs";
import { PythClient, createPythClient, updatePyth } from "../../pyth/pythClient";
import { tokenType, typeArgToAsset, TOKEN } from "../../token";
import { stake, unstake } from "../stake-pool/functions";
import { swap as _swap } from "../lp-pool/functions";
import { unsubscribe as _unsubscribe } from "../stake-pool/functions";
import { priceInfoObjectIds, pythStateId } from "../../pyth/constant";
import { NETWORK } from "..";

export async function mintStakeLp(
    config: {
        REGISTRY: { LP_POOL_REGISTRY: string; TREASURY_CAPS: string; STAKE_POOL_REGISTRY: string };
        OBJECT: { TYPUS_PERP_VERSION: string };
        TOKEN: { TLP: string };
    },
    input: {
        pythClient: PythClient;
        tx: TransactionBlock;
        lpPool: LiquidityPool;
        coins: string[];
        cTOKEN: TOKEN;
        amount: string;
        userShareId: string | null;
    }
): Promise<TransactionBlock> {
    // update pyth oracle
    const tokens = input.lpPool.tokenPools.map((p) => typeArgToAsset("0x" + p.tokenType.name));

    await updatePyth(input.pythClient, input.tx, tokens);
    const cToken = tokenType[NETWORK][input.cTOKEN];

    for (let token of tokens) {
        updateLiquidityValue(input.tx, tokenType[NETWORK][token], {
            version: config.OBJECT.TYPUS_PERP_VERSION,
            registry: config.REGISTRY.LP_POOL_REGISTRY,
            index: BigInt(0),
            pythState: pythStateId[NETWORK],
            oracle: priceInfoObjectIds[NETWORK][token],
            clock: CLOCK,
        });
    }

    var coin;

    if (input.cTOKEN == "SUI") {
        [coin] = input.tx.splitCoins(input.tx.gas, [input.amount]);
    } else {
        const destination = input.coins.pop()!;

        if (input.coins.length > 0) {
            input.tx.mergeCoins(destination, input.coins);
        }

        [coin] = input.tx.splitCoins(destination, [input.amount]);
    }

    const lpCoin = mintLp(input.tx, [cToken, config.TOKEN.TLP], {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.LP_POOL_REGISTRY,
        treasuryCaps: config.REGISTRY.TREASURY_CAPS,
        index: BigInt(0),
        pythState: pythStateId[NETWORK],
        oracle: priceInfoObjectIds[NETWORK][input.cTOKEN],
        coin,
        clock: CLOCK,
    });

    stake(input.tx, config.TOKEN.TLP, {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.STAKE_POOL_REGISTRY,
        index: BigInt(0),
        lpToken: lpCoin,
        clock: CLOCK,
        userShareId: input.userShareId ? BigInt(input.userShareId) : null,
    });

    return input.tx;
}

export async function unstakeBurn(
    config: {
        REGISTRY: { LP_POOL_REGISTRY: string; TREASURY_CAPS: string; STAKE_POOL_REGISTRY: string };
        OBJECT: { TYPUS_PERP_VERSION: string };
        TOKEN: { TLP: string };
    },
    input: {
        pythClient: PythClient;
        tx: TransactionBlock;
        lpPool: LiquidityPool;
        cTOKEN: TOKEN;
        userShareId: string;
        share: string | null;
        user: string;
    }
): Promise<TransactionBlock> {
    // update pyth oracle
    const tokens = input.lpPool.tokenPools.map((p) => typeArgToAsset("0x" + p.tokenType.name));

    await updatePyth(input.pythClient, input.tx, tokens);
    const cToken = tokenType[NETWORK][input.cTOKEN];
    const oracle = priceInfoObjectIds[NETWORK][input.cTOKEN];

    for (let token of tokens) {
        updateLiquidityValue(input.tx, tokenType[NETWORK][token], {
            version: config.OBJECT.TYPUS_PERP_VERSION,
            registry: config.REGISTRY.LP_POOL_REGISTRY,
            index: BigInt(0),
            pythState: pythStateId[NETWORK],
            oracle: priceInfoObjectIds[NETWORK][token],
            clock: CLOCK,
        });
    }

    const lpCoin = unstake(input.tx, config.TOKEN.TLP, {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.STAKE_POOL_REGISTRY,
        index: BigInt(0),
        userShareId: BigInt(input.userShareId),
        clock: CLOCK,
        unstakedShares: input.share ? BigInt(input.share) : null,
    });

    const coin = burnLp(input.tx, [cToken, config.TOKEN.TLP], {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.LP_POOL_REGISTRY,
        treasuryCaps: config.REGISTRY.TREASURY_CAPS,
        index: BigInt(0),
        pythState: pythStateId[NETWORK],
        oracle,
        coin: lpCoin,
        clock: CLOCK,
    });

    input.tx.transferObjects([coin], input.user);

    return input.tx;
}

export async function swap(
    config: {
        REGISTRY: { LP_POOL_REGISTRY: string; TREASURY_CAPS: string; STAKE_POOL_REGISTRY: string };
        OBJECT: { TYPUS_PERP_VERSION: string };
        TOKEN: { TLP: string };
    },
    input: {
        pythClient: PythClient;
        tx: TransactionBlock;
        coins: string[];
        FROM_TOKEN: TOKEN;
        TO_TOKEN: TOKEN;
        amount: string;
        user: string;
    }
): Promise<TransactionBlock> {
    await updatePyth(input.pythClient, input.tx, [input.FROM_TOKEN, input.TO_TOKEN]);
    const fromToken = tokenType[NETWORK][input.FROM_TOKEN];
    const toToken = tokenType[NETWORK][input.TO_TOKEN];

    var coin;

    if (input.FROM_TOKEN == "SUI") {
        [coin] = input.tx.splitCoins(input.tx.gas, [input.amount]);
    } else {
        const destination = input.coins.pop()!;

        if (input.coins.length > 0) {
            input.tx.mergeCoins(destination, input.coins);
        }

        [coin] = input.tx.splitCoins(destination, [input.amount]);
    }

    const token = _swap(input.tx, [fromToken, toToken], {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.LP_POOL_REGISTRY,
        pythState: pythStateId[NETWORK],
        clock: CLOCK,
        index: BigInt(0),
        oracleFromToken: priceInfoObjectIds[NETWORK][input.FROM_TOKEN],
        oracleToToken: priceInfoObjectIds[NETWORK][input.TO_TOKEN],
        fromCoin: coin,
        minToAmount: BigInt(0),
    });

    input.tx.transferObjects([token], input.user);

    return input.tx;
}

export async function unsubscribe(
    config: {
        REGISTRY: { LP_POOL_REGISTRY: string; TREASURY_CAPS: string; STAKE_POOL_REGISTRY: string };
        OBJECT: { TYPUS_PERP_VERSION: string };
        TOKEN: { TLP: string };
    },
    input: {
        tx: TransactionBlock;
        userShareId: string;
        share: string | null;
    }
): Promise<TransactionBlock> {
    _unsubscribe(input.tx, config.TOKEN.TLP, {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.STAKE_POOL_REGISTRY,
        index: BigInt(0),
        userShareId: BigInt(input.userShareId),
        clock: CLOCK,
        unsubscribedShares: input.share ? BigInt(input.share) : null,
    });
    return input.tx;
}
