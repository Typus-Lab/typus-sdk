import { TransactionBlock, TransactionObjectArgument } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";

export function getRaiseFundTx(input: {
    tx: TransactionBlock;
    typusEcosystemVersion: string;
    typusUserRegistry: string;
    typusLeaderboardRegistry: string;
    typusFrameworkOriginPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typusTokenPackageId: string;
    typusTokenRegistry: string;
    typusTokenType: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    raiseCoins: string[];
    raiseAmount: string;
    raiseFromPremium: boolean;
    raiseFromInactive: boolean;
    user: string;
}) {
    let typusToken = input.tx.moveCall({
        target: `${input.typusTokenPackageId}::${input.typusTokenType.split("::")[1]}::mint`,
        arguments: [
            input.tx.object(input.typusTokenRegistry),
            input.tx.makeMoveVec({ objects: input.raiseCoins }),
            input.tx.pure(input.raiseAmount),
        ],
    });
    let typusTokenBalance = input.tx.moveCall({
        target: `0x2::coin::into_balance`,
        typeArguments: [input.typusTokenType],
        arguments: [input.tx.object(typusToken)],
    });
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tds_user_entry::public_raise_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusUserRegistry),
            input.tx.object(input.typusLeaderboardRegistry),
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((receipt) => input.tx.object(receipt)),
            }),
            input.tx.object(typusTokenBalance),
            input.tx.pure(input.raiseFromPremium),
            input.tx.pure(input.raiseFromInactive),
            input.tx.object(CLOCK),
        ],
    });
    input.tx.transferObjects([input.tx.object(result[0])], input.user);

    return input.tx;
}

export function getReduceFundTx(input: {
    tx: TransactionBlock;
    typusEcosystemVersion: string;
    typusUserRegistry: string;
    typusLeaderboardRegistry: string;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    typusTokenPackageId: string;
    typusTokenRegistry: string;
    typusTokenType: string;
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    reduceFromWarmup: string;
    reduceFromActive: string;
    reduceFromPremium: boolean;
    reduceFromInactive: boolean;
    reduceFromIncentive: boolean;
    user: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tds_user_entry::public_reduce_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusUserRegistry),
            input.tx.object(input.typusLeaderboardRegistry),
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((receipt) => input.tx.object(receipt)),
            }),
            input.tx.pure(input.reduceFromWarmup),
            input.tx.pure(input.reduceFromActive),
            input.tx.pure(input.reduceFromPremium),
            input.tx.pure(input.reduceFromInactive),
            input.tx.pure(input.reduceFromIncentive),
            input.tx.object(CLOCK),
        ],
    });
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });
    if (input.typeArguments[0] == input.typusTokenType) {
        let typusToken = input.tx.moveCall({
            target: `0x2::coin::from_balance`,
            typeArguments: [input.typeArguments[0]],
            arguments: [input.tx.object(result[1])],
        });
        let token = input.tx.moveCall({
            target: `${input.typusTokenPackageId}::${input.typusTokenType.split("::")[1]}::burn`,
            arguments: [input.tx.object(input.typusTokenRegistry), input.tx.object(typusToken)],
        });
        input.tx.transferObjects([input.tx.object(token)], input.user);
    } else {
        input.tx.moveCall({
            target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
            typeArguments: [input.typeArguments[0]],
            arguments: [input.tx.object(result[1]), input.tx.pure(input.user)],
        });
    }
    if (input.typeArguments[1] == input.typusTokenType) {
        let typusToken = input.tx.moveCall({
            target: `0x2::coin::from_balance`,
            typeArguments: [input.typeArguments[1]],
            arguments: [input.tx.object(result[2])],
        });
        let token = input.tx.moveCall({
            target: `${input.typusTokenPackageId}::${input.typusTokenType.split("::")[1]}::burn`,
            arguments: [input.tx.object(input.typusTokenRegistry), input.tx.object(typusToken)],
        });
        input.tx.transferObjects([input.tx.object(token)], input.user);
    } else {
        input.tx.moveCall({
            target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
            typeArguments: [input.typeArguments[1]],
            arguments: [input.tx.object(result[2]), input.tx.pure(input.user)],
        });
    }
    if (input.typeArguments[2] == input.typusTokenType) {
        let typusToken = input.tx.moveCall({
            target: `0x2::coin::from_balance`,
            typeArguments: [input.typeArguments[2]],
            arguments: [input.tx.object(result[3])],
        });
        let token = input.tx.moveCall({
            target: `${input.typusTokenPackageId}::${input.typusTokenType.split("::")[1]}::burn`,
            arguments: [input.tx.object(input.typusTokenRegistry), input.tx.object(typusToken)],
        });
        input.tx.transferObjects([input.tx.object(token)], input.user);
    } else {
        input.tx.moveCall({
            target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
            typeArguments: [input.typeArguments[2]],
            arguments: [input.tx.object(result[3]), input.tx.pure(input.user)],
        });
    }

    return input.tx;
}

export function getDepositTx(input: {
    tx: TransactionBlock;
    typusEcosystemVersion: string;
    typusUserRegistry: string;
    typusLeaderboardRegistry: string;
    typusFrameworkOriginPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    mfudPackageId: string;
    mfudRegistry: string;
    mfudAmount: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
    coins: string[];
}) {
    let mfud = input.tx.moveCall({
        target: `${input.mfudPackageId}::mfud::mint`,
        arguments: [
            input.tx.object(input.mfudRegistry),
            input.tx.makeMoveVec({ objects: input.coins.map((id) => input.tx.object(id)) }),
            input.tx.pure(input.mfudAmount),
        ],
    });
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tds_user_entry::public_deposit`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusUserRegistry),
            input.tx.object(input.typusLeaderboardRegistry),
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({ objects: [mfud] }),
            input.tx.pure(input.mfudAmount),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((id) => input.tx.object(id)),
            }),
            input.tx.object(CLOCK),
        ],
    });
    input.tx.moveCall({
        target: `0x1::vector::destroy_empty`,
        typeArguments: ["0x2::coin::Coin<" + input.typeArguments[0] + ">"],
        arguments: [input.tx.object(result[0])],
    });
    input.tx.transferObjects([input.tx.object(result[1])], input.user);

    return input.tx;
}

export function getNewBidTx(input: {
    tx: TransactionBlock;
    typusEcosystemVersion: string;
    typusUserRegistry: string;
    tgldRegistry: string;
    typusLeaderboardRegistry: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    mfudPackageId: string;
    mfudRegistry: string;
    typeArguments: string[];
    index: string;
    coins: string[];
    size: string;
    premium_required: string;
    user: string;
}) {
    let mfud = input.tx.moveCall({
        target: `${input.mfudPackageId}::mfud::mint`,
        arguments: [
            input.tx.object(input.mfudRegistry),
            input.tx.makeMoveVec({ objects: input.coins.map((id) => input.tx.object(id)) }),
            input.tx.pure(input.premium_required),
        ],
    });
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tds_user_entry::public_bid`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusEcosystemVersion),
            input.tx.object(input.typusUserRegistry),
            input.tx.object(input.tgldRegistry),
            input.tx.object(input.typusLeaderboardRegistry),
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({ objects: [mfud] }),
            input.tx.pure(input.size),
            input.tx.pure("0x6"),
        ],
    });
    input.tx.transferObjects([input.tx.object(result[0])], input.user);
    let fud_coin = input.tx.moveCall({
        target: `${input.mfudPackageId}::mfud::burn`,
        arguments: [input.tx.object(input.mfudRegistry), input.tx.object(result[1])],
    });
    input.tx.transferObjects([input.tx.object(fud_coin)], input.user);
    return input.tx;
}

export function getExerciseTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    mfudPackageId: string;
    mfudRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tds_user_entry::exercise`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusBidReceipt`,
                objects: input.receipts.map((receipt) => input.tx.object(receipt)),
            }),
        ],
    });
    let mfud_coin = input.tx.moveCall({
        target: `0x2::coin::from_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [input.tx.object(result[0])],
    });
    let fud_coin = input.tx.moveCall({
        target: `${input.mfudPackageId}::mfud::burn`,
        arguments: [input.tx.object(input.mfudRegistry), input.tx.object(mfud_coin)],
    });
    input.tx.transferObjects([input.tx.object(fud_coin)], input.user);

    return input.tx;
}

export function getRebateTx(input: {
    tx: TransactionBlock;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    mfudPackageId: string;
    mfudRegistry: string;
    typeArgument: string;
    user: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tds_user_entry::rebate`,
        typeArguments: [input.typeArgument],
        arguments: [input.tx.object(input.typusDovSingleRegistry)],
    });
    let balance = input.tx.moveCall({
        target: `0x1::option::destroy_some`,
        typeArguments: [`0x2::balance::Balance<${input.typeArgument}>`],
        arguments: [input.tx.object(result[0])],
    });
    let mfud_coin = input.tx.moveCall({
        target: `0x2::coin::from_balance`,
        typeArguments: [input.typeArgument],
        arguments: [input.tx.object(balance)],
    });
    let fud_coin = input.tx.moveCall({
        target: `${input.mfudPackageId}::mfud::burn`,
        arguments: [input.tx.object(input.mfudRegistry), input.tx.object(mfud_coin)],
    });
    input.tx.transferObjects([input.tx.object(fud_coin)], input.user);

    return input.tx;
}

export function getNewStrategyTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[], // D_TOKEN, B_TOKEN
    registry: string,
    strategy_pool: string,
    vault_index: string,
    signal_index: string,
    coins: string[],
    mfudPackageId: string,
    mfudRegistry: string,
    mfudAmount: string,
    size: string,
    price_percentage: string,
    max_times: string,
    target_rounds: string[]
) {
    let tx = new TransactionBlock();

    let input_coin = tx.moveCall({
        target: `${mfudPackageId}::mfud::mint`,
        arguments: [tx.object(mfudRegistry), tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }), tx.pure(mfudAmount)],
    });

    tx.moveCall({
        target: `${packageId}::auto_bid::new_strategy`,
        typeArguments,
        arguments: [
            tx.object(registry),
            tx.object(strategy_pool),
            tx.pure(vault_index),
            tx.pure(signal_index),
            tx.pure(size),
            tx.pure(price_percentage),
            tx.pure(max_times),
            tx.pure(target_rounds),
            input_coin,
        ],
    });

    tx.setGasBudget(gasBudget);

    return tx;
}

export function getUpdateStrategyTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[], // D_TOKEN, B_TOKEN
    registry: string,
    strategy_pool: string,
    vault_index: string,
    signal_index: string,
    strategy_index: string,
    coins: string[],
    mfudPackageId: string,
    mfudRegistry: string,
    mfudAmount: string,
    size: string | null,
    price_percentage: string | null,
    max_times: string | null,
    target_rounds: string[]
) {
    let tx = new TransactionBlock();

    let [input_coin] = tx.moveCall({
        target: `${mfudPackageId}::mfud::mint`,
        arguments: [tx.object(mfudRegistry), tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }), tx.pure(mfudAmount)],
    });

    tx.moveCall({
        target: `${packageId}::auto_bid::update_strategy`,
        typeArguments,
        arguments: [
            tx.object(registry),
            tx.object(strategy_pool),
            tx.pure(vault_index),
            tx.pure(signal_index),
            tx.pure(strategy_index),
            tx.pure(size ? [size] : []),
            tx.pure(price_percentage ? [price_percentage] : []),
            tx.pure(max_times ? [max_times] : []),
            tx.pure(target_rounds),
            tx.makeMoveVec({ objects: [input_coin] }),
        ],
    });

    tx.setGasBudget(gasBudget);

    return tx;
}

export function getCloseStrategyTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[], // D_TOKEN, B_TOKEN
    registry: string,
    strategy_pool: string,
    vault_index: string,
    signal_index: string,
    strategy_index: string,
    mfudPackageId: string,
    mfudRegistry: string,
    sender: string
) {
    let tx = new TransactionBlock();

    let [d_token, b_token] = tx.moveCall({
        target: `${packageId}::auto_bid::close_strategy`,
        typeArguments,
        arguments: [tx.object(registry), tx.object(strategy_pool), tx.pure(vault_index), tx.pure(signal_index), tx.pure(strategy_index)],
    });

    if (typeArguments[0].endsWith("MFUD")) {
        let fud_coin = tx.moveCall({
            target: `${mfudPackageId}::mfud::burn`,
            arguments: [tx.object(mfudRegistry), d_token],
        });
        tx.transferObjects([tx.object(fud_coin)], sender);
    } else {
        tx.transferObjects([d_token], sender);
    }

    if (typeArguments[1].endsWith("MFUD")) {
        let fud_coin = tx.moveCall({
            target: `${mfudPackageId}::mfud::burn`,
            arguments: [tx.object(mfudRegistry), b_token],
        });
        tx.transferObjects([tx.object(fud_coin)], sender);
    } else {
        tx.transferObjects([b_token], sender);
    }

    tx.setGasBudget(gasBudget);

    return tx;
}

export function getWithdrawProfitStrategyTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[], // D_TOKEN, B_TOKEN
    registry: string,
    strategy_pool: string,
    vault_index: string,
    signal_index: string,
    strategy_index: string,
    mfudPackageId: string,
    mfudRegistry: string,
    sender: string,
    txBlock?: TransactionBlock
) {
    let tx = txBlock ? txBlock : new TransactionBlock();

    let d_token = tx.moveCall({
        target: `${packageId}::auto_bid::withdraw_profit`,
        typeArguments,
        arguments: [tx.object(registry), tx.object(strategy_pool), tx.pure(vault_index), tx.pure(signal_index), tx.pure(strategy_index)],
    });

    if (typeArguments[0].endsWith("MFUD")) {
        let fud_coin = tx.moveCall({
            target: `${mfudPackageId}::mfud::burn`,
            arguments: [tx.object(mfudRegistry), d_token],
        });
        tx.transferObjects([tx.object(fud_coin)], sender);
    } else {
        tx.transferObjects([d_token], sender);
    }

    tx.setGasBudget(gasBudget);

    return tx;
}
