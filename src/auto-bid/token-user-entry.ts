import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

export function getTokenNewStrategyTx(
    config: TypusConfig,
    tx: TransactionBlock,
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
    let typusTokenRegistry = "";
    switch (input.typusTokenType.split("::")[1]) {
        case "mfud":
            typusTokenRegistry = config.registry.token.mfud;
            break;
        default:
            console.log("No such token exists!");
            break;
    }
    let tToken = tx.moveCall({
        target: `${input.typusTokenType.split("::")[0]}::${input.typusTokenType.split("::")[1]}::mint`,
        arguments: [
            tx.object(typusTokenRegistry),
            tx.makeMoveVec({ objects: input.coins.map((id) => tx.object(id)) }),
            tx.pure(input.amount),
        ],
    });

    tx.moveCall({
        target: `${config.package.dovSingle}::auto_bid::new_strategy`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(config.registry.dov.autoBid),
            tx.pure(input.vaultIndex),
            tx.pure(input.signalIndex),
            tx.pure(input.size),
            tx.pure(input.pricePercentage),
            tx.pure(input.maxTimes),
            tx.pure(input.targetRounds),
            tToken,
        ],
    });

    return tx;
}

export function getTokenUpdateStrategyTx(
    config: TypusConfig,
    tx: TransactionBlock,
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
    let typusTokenRegistry = "";
    switch (input.typusTokenType.split("::")[1]) {
        case "mfud":
            typusTokenRegistry = config.registry.token.mfud;
            break;
        default:
            console.log("No such token exists!");
            break;
    }
    let [tToken] = tx.moveCall({
        target: `${input.typusTokenType.split("::")[0]}::${input.typusTokenType.split("::")[1]}::mint`,
        arguments: [
            tx.object(typusTokenRegistry),
            tx.makeMoveVec({ objects: input.coins.map((id) => tx.object(id)) }),
            tx.pure(input.amount),
        ],
    });

    tx.moveCall({
        target: `${config.package.dovSingle}::auto_bid::update_strategy`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(config.registry.dov.autoBid),
            tx.pure(input.vaultIndex),
            tx.pure(input.signalIndex),
            tx.pure(input.strategyIndex),
            tx.pure(input.size ? [input.size] : []),
            tx.pure(input.pricePercentage ? [input.pricePercentage] : []),
            tx.pure(input.maxTimes ? [input.maxTimes] : []),
            tx.pure(input.targetRounds),
            tx.makeMoveVec({ objects: [tToken] }),
        ],
    });

    return tx;
}

export function getTokenCloseStrategyTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        typusTokenType: string;
        vaultIndex: string;
        signalIndex: string;
        strategyIndex: string;
        user: string;
    }
) {
    let typusTokenRegistry = "";
    switch (input.typusTokenType.split("::")[1]) {
        case "mfud":
            typusTokenRegistry = config.registry.token.mfud;
            break;
        default:
            console.log("No such token exists!");
            break;
    }
    let [d_token, b_token] = tx.moveCall({
        target: `${config.package.dovSingle}::auto_bid::close_strategy`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(config.registry.dov.autoBid),
            tx.pure(input.vaultIndex),
            tx.pure(input.signalIndex),
            tx.pure(input.strategyIndex),
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
    tx: TransactionBlock,
    input: {
        typeArguments: string[]; // D_TOKEN, B_TOKEN
        typusTokenType: string;
        vaultIndex: string;
        signalIndex: string;
        strategyIndex: string;
        user: string;
    }
) {
    let typusTokenRegistry = "";
    switch (input.typusTokenType.split("::")[1]) {
        case "mfud":
            typusTokenRegistry = config.registry.token.mfud;
            break;
        default:
            console.log("No such token exists!");
            break;
    }
    let d_token = tx.moveCall({
        target: `${config.package.dovSingle}::auto_bid::withdraw_profit`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(config.registry.dov.autoBid),
            tx.pure(input.vaultIndex),
            tx.pure(input.signalIndex),
            tx.pure(input.strategyIndex),
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
