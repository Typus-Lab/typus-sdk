import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";
import { LiquidityPool } from "../lp-pool/structs";
import { burnLp, mintLp, updateLiquidityValue, swap as _swap } from "../lp-pool/functions";
import { harvestPerUserShare, stake, unstake, unsubscribe as _unsubscribe } from "../stake-pool/functions";
import { PythClient, updatePyth, priceInfoObjectIds, pythStateId, TypusConfig } from "../../utils";
import { tokenType, typeArgToAsset, TOKEN } from "../../constants";
import { NETWORK } from "..";

export async function mintStakeLp(
    config: TypusConfig,
    tx: TransactionBlock,
    pythClient: PythClient,
    input: {
        lpPool: LiquidityPool;
        coins: string[];
        cTOKEN: TOKEN;
        amount: string;
        userShareId: string | null;
    }
): Promise<TransactionBlock> {
    // update pyth oracle
    const tokens = input.lpPool.tokenPools.map((p) => typeArgToAsset("0x" + p.tokenType.name));

    await updatePyth(pythClient, tx, tokens);
    const cToken = tokenType[NETWORK][input.cTOKEN];

    for (let token of tokens) {
        updateLiquidityValue(tx, tokenType[NETWORK][token], {
            version: config.version.perp,
            registry: config.registry.perp.lpPool,
            index: BigInt(0),
            pythState: pythStateId[NETWORK],
            oracle: priceInfoObjectIds[NETWORK][token],
            clock: CLOCK,
        });
    }

    var coin;

    if (input.cTOKEN == "SUI") {
        [coin] = tx.splitCoins(tx.gas, [input.amount]);
    } else {
        const destination = input.coins.pop()!;

        if (input.coins.length > 0) {
            tx.mergeCoins(destination, input.coins);
        }

        [coin] = tx.splitCoins(destination, [input.amount]);
    }

    const lpCoin = mintLp(tx, [cToken, config.token.tlp], {
        version: config.version.perp,
        registry: config.registry.perp.lpPool,
        treasuryCaps: config.object.tlpTreasuryCap,
        index: BigInt(0),
        pythState: pythStateId[NETWORK],
        oracle: priceInfoObjectIds[NETWORK][input.cTOKEN],
        coin,
        clock: CLOCK,
    });

    stake(tx, config.token.tlp, {
        version: config.version.perp,
        registry: config.registry.perp.stakePool,
        index: BigInt(0),
        lpToken: lpCoin,
        clock: CLOCK,
        userShareId: input.userShareId ? BigInt(input.userShareId) : null,
    });

    return tx;
}

export async function unstakeBurn(
    config: TypusConfig,
    tx: TransactionBlock,
    pythClient: PythClient,
    input: {
        lpPool: LiquidityPool;
        cTOKEN: TOKEN;
        userShareId: string;
        share: string | null;
        user: string;
    }
): Promise<TransactionBlock> {
    // update pyth oracle
    const tokens = input.lpPool.tokenPools.map((p) => typeArgToAsset("0x" + p.tokenType.name));

    await updatePyth(pythClient, tx, tokens);
    const cToken = tokenType[NETWORK][input.cTOKEN];
    const oracle = priceInfoObjectIds[NETWORK][input.cTOKEN];

    for (let token of tokens) {
        updateLiquidityValue(tx, tokenType[NETWORK][token], {
            version: config.version.perp,
            registry: config.registry.perp.lpPool,
            index: BigInt(0),
            pythState: pythStateId[NETWORK],
            oracle: priceInfoObjectIds[NETWORK][token],
            clock: CLOCK,
        });
    }

    const lpCoin = unstake(tx, config.token.tlp, {
        version: config.version.perp,
        registry: config.registry.perp.stakePool,
        index: BigInt(0),
        userShareId: BigInt(input.userShareId),
        clock: CLOCK,
        unstakedShares: input.share ? BigInt(input.share) : null,
    });

    const coin = burnLp(tx, [cToken, config.token.tlp], {
        version: config.version.perp,
        registry: config.registry.perp.lpPool,
        treasuryCaps: config.object.tlpTreasuryCap,
        index: BigInt(0),
        pythState: pythStateId[NETWORK],
        oracle,
        coin: lpCoin,
        clock: CLOCK,
    });

    tx.transferObjects([coin], input.user);

    return tx;
}

export async function swap(
    config: TypusConfig,
    tx: TransactionBlock,
    pythClient: PythClient,
    input: {
        coins: string[];
        FROM_TOKEN: TOKEN;
        TO_TOKEN: TOKEN;
        amount: string;
        user: string;
    }
): Promise<TransactionBlock> {
    await updatePyth(pythClient, tx, [input.FROM_TOKEN, input.TO_TOKEN]);
    const fromToken = tokenType[NETWORK][input.FROM_TOKEN];
    const toToken = tokenType[NETWORK][input.TO_TOKEN];

    var coin;

    if (input.FROM_TOKEN == "SUI") {
        [coin] = tx.splitCoins(tx.gas, [input.amount]);
    } else {
        const destination = input.coins.pop()!;

        if (input.coins.length > 0) {
            tx.mergeCoins(destination, input.coins);
        }

        [coin] = tx.splitCoins(destination, [input.amount]);
    }

    const token = _swap(tx, [fromToken, toToken], {
        version: config.version.perp,
        registry: config.registry.perp.lpPool,
        pythState: pythStateId[NETWORK],
        clock: CLOCK,
        index: BigInt(0),
        oracleFromToken: priceInfoObjectIds[NETWORK][input.FROM_TOKEN],
        oracleToToken: priceInfoObjectIds[NETWORK][input.TO_TOKEN],
        fromCoin: coin,
        minToAmount: BigInt(0),
    });

    tx.transferObjects([token], input.user);

    return tx;
}

export async function unsubscribe(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        userShareId: string;
        share: string | null;
    }
): Promise<TransactionBlock> {
    _unsubscribe(tx, config.token.tlp, {
        version: config.version.perp,
        registry: config.registry.perp.stakePool,
        index: BigInt(0),
        userShareId: BigInt(input.userShareId),
        clock: CLOCK,
        unsubscribedShares: input.share ? BigInt(input.share) : null,
    });
    return tx;
}

export async function harvest(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        userShareId: string;
    }
): Promise<TransactionBlock> {
    harvestPerUserShare(tx, "0x2::sui::SUI", {
        version: config.version.perp,
        registry: config.registry.perp.stakePool,
        index: BigInt(0),
        userShareId: BigInt(input.userShareId),
        clock: CLOCK,
    });
    return tx;
}
