import { TransactionBlock, TransactionObjectArgument } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";

export function getDepositTx(input: {
    tx: TransactionBlock;
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
        target: `${input.typusDovSinglePackageId}::tails_staking::deposit`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({ objects: [mfud] }),
            input.tx.pure(input.mfudAmount),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((id) => input.tx.object(id)),
            }),
            input.tx.pure(CLOCK),
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

export function getWithdrawTx(input: {
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
    amount?: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tails_staking::withdraw`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((id) => input.tx.object(id)),
            }),
            input.tx.pure(input.amount ? [input.amount] : []),
            input.tx.pure(CLOCK),
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
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [input.tx.object(result[1]), input.tx.pure(input.user)],
    });

    return input.tx;
}

export function getUnsubscribeTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
    amount?: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tails_staking::unsubscribe`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((id) => input.tx.object(id)),
            }),
            input.tx.pure(input.amount ? [input.amount] : []),
            input.tx.pure(CLOCK),
        ],
    });
    input.tx.transferObjects([input.tx.object(result[0])], input.user);

    return input.tx;
}

export function getCompoundTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tails_staking::compound`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((id) => input.tx.object(id)),
            }),
            input.tx.object(CLOCK),
        ],
    });
    input.tx.transferObjects([input.tx.object(result[0])], input.user);

    return input.tx;
}

export function getClaimTx(input: {
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
        target: `${input.typusDovSinglePackageId}::tds_user_entry::claim`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((id) => input.tx.object(id)),
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
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [input.tx.object(result[1]), input.tx.pure(input.user)],
    });

    return input.tx;
}

export function getHarvestTx(input: {
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
        target: `${input.typusDovSinglePackageId}::tds_user_entry::harvest`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((id) => input.tx.object(id)),
            }),
        ],
    });
    let mfud_coin = input.tx.moveCall({
        target: `0x2::coin::from_balance`,
        typeArguments: [input.typeArguments[1]],
        arguments: [input.tx.object(result[0])],
    });
    let fud_coin = input.tx.moveCall({
        target: `${input.mfudPackageId}::mfud::burn`,
        arguments: [input.tx.object(input.mfudRegistry), input.tx.object(mfud_coin)],
    });
    input.tx.transferObjects([input.tx.object(fud_coin)], input.user);
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [input.tx.object(result[1]), input.tx.pure(input.user)],
    });

    return input.tx;
}

export function getRedeemTx(input: {
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
        target: `${input.typusDovSinglePackageId}::tds_user_entry::redeem`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((id) => input.tx.object(id)),
            }),
        ],
    });
    let mfud_coin = input.tx.moveCall({
        target: `0x2::coin::from_balance`,
        typeArguments: [input.typeArguments[2]],
        arguments: [input.tx.object(result[0])],
    });
    let fud_coin = input.tx.moveCall({
        target: `${input.mfudPackageId}::mfud::burn`,
        arguments: [input.tx.object(input.mfudRegistry), input.tx.object(mfud_coin)],
    });
    input.tx.transferObjects([input.tx.object(fud_coin)], input.user);
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [input.tx.object(result[1]), input.tx.pure(input.user)],
    });

    return input.tx;
}

export function getNewBidTx(input: {
    tx: TransactionBlock;
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
        target: `${input.typusDovSinglePackageId}::tails_staking::new_bid`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({ objects: [mfud] }),
            input.tx.pure(input.size),
            input.tx.pure("0x6"),
        ],
    });
    input.tx.transferObjects([input.tx.object(result[0])], input.user);

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
        typeArguments: ["0x2::balance::Balance<" + input.typeArgument + ">"],
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
