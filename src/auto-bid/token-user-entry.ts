import { Transaction } from "@mysten/sui/transactions";
import { getTokenRegistry } from "src/typus-dov-single-v2/token-user-entry";
import { TypusConfig } from "src/utils";

export function getTokenNewStrategyTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        typusTokenType: string;
        vaultIndex: string;
        signalIndex: string;
        coins: string[];
        amount: string;
        size: string;
        pricePercentage: string;
        maxTimes: string;
        targetRounds: string[];
    }
) {
    let typusTokenRegistry = getTokenRegistry(config, input.typusTokenType);
    let tToken = tx.moveCall({
        target: `${input.typusTokenType.split("::")[0]}::${input.typusTokenType.split("::")[1]}::mint`,
        arguments: [
            tx.object(typusTokenRegistry),
            tx.makeMoveVec({ elements: input.coins.map((id) => tx.object(id)) }),
            tx.pure.u64(input.amount),
        ],
    });

    tx.moveCall({
        target: `${config.package.dovSingle}::auto_bid::new_strategy`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(config.registry.dov.autoBid),
            tx.pure.u64(input.vaultIndex),
            tx.pure.u64(input.signalIndex),
            tx.pure.u64(input.size),
            tx.pure.u64(input.pricePercentage),
            tx.pure.u64(input.maxTimes),
            tx.pure.vector("u64", input.targetRounds),
            tToken,
        ],
    });

    return tx;
}

export function getTokenUpdateStrategyTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        typusTokenType: string;
        vaultIndex: string;
        signalIndex: string;
        strategyIndex: string;
        coins: string[];
        amount: string;
        size: string | null;
        pricePercentage: string | null;
        maxTimes: string | null;
        targetRounds: string[];
    }
) {
    let typusTokenRegistry = getTokenRegistry(config, input.typusTokenType);
    let [tToken] = tx.moveCall({
        target: `${input.typusTokenType.split("::")[0]}::${input.typusTokenType.split("::")[1]}::mint`,
        arguments: [
            tx.object(typusTokenRegistry),
            tx.makeMoveVec({ elements: input.coins.map((id) => tx.object(id)) }),
            tx.pure.u64(input.amount),
        ],
    });

    tx.moveCall({
        target: `${config.package.dovSingle}::auto_bid::update_strategy`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(config.registry.dov.autoBid),
            tx.pure.u64(input.vaultIndex),
            tx.pure.u64(input.signalIndex),
            tx.pure.u64(input.strategyIndex),
            tx.pure.option("u64", input.size),
            tx.pure.option("u64", input.pricePercentage),
            tx.pure.option("u64", input.maxTimes),
            tx.pure.vector("u64", input.targetRounds),
            tx.makeMoveVec({ elements: [tToken] }),
        ],
    });

    return tx;
}

export function getTokenCloseStrategyTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        typusTokenType: string;
        vaultIndex: string;
        signalIndex: string;
        strategyIndex: string;
        user: string;
    }
) {
    let typusTokenRegistry = getTokenRegistry(config, input.typusTokenType);
    let [d_token, b_token] = tx.moveCall({
        target: `${config.package.dovSingle}::auto_bid::close_strategy`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(config.registry.dov.autoBid),
            tx.pure.u64(input.vaultIndex),
            tx.pure.u64(input.signalIndex),
            tx.pure.u64(input.strategyIndex),
        ],
    });

    if (input.typeArguments[0] == input.typusTokenType) {
        let token = tx.moveCall({
            target: `${input.typusTokenType.split("::")[0]}::${input.typusTokenType.split("::")[1]}::burn`,
            arguments: [tx.object(typusTokenRegistry), d_token],
        });
        tx.transferObjects([tx.object(token)], input.user);
    } else {
        tx.transferObjects([d_token], input.user);
    }

    if (input.typeArguments[1] == input.typusTokenType) {
        let token = tx.moveCall({
            target: `${input.typusTokenType.split("::")[0]}::${input.typusTokenType.split("::")[1]}::burn`,
            arguments: [tx.object(typusTokenRegistry), b_token],
        });
        tx.transferObjects([tx.object(token)], input.user);
    } else {
        tx.transferObjects([b_token], input.user);
    }

    return tx;
}

export function getTokenWithdrawProfitStrategyTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        typusTokenType: string;
        vaultIndex: string;
        signalIndex: string;
        strategyIndex: string;
        user: string;
    }
) {
    let typusTokenRegistry = getTokenRegistry(config, input.typusTokenType);
    let d_token = tx.moveCall({
        target: `${config.package.dovSingle}::auto_bid::withdraw_profit`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(config.registry.dov.autoBid),
            tx.pure.u64(input.vaultIndex),
            tx.pure.u64(input.signalIndex),
            tx.pure.u64(input.strategyIndex),
        ],
    });

    if (input.typeArguments[0] == input.typusTokenType) {
        let token = tx.moveCall({
            target: `${input.typusTokenType.split("::")[0]}::${input.typusTokenType.split("::")[1]}::burn`,
            arguments: [tx.object(typusTokenRegistry), d_token],
        });
        tx.transferObjects([tx.object(token)], input.user);
    } else {
        tx.transferObjects([d_token], input.user);
    }

    return tx;
}
