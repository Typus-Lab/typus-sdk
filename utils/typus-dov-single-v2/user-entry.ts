import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";

/**
    public fun deposit<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        coins: vector<Coin<D_TOKEN>>,
        amount: u64,
        receipts: vector<TypusDepositReceipt>,
        clock: &Clock,
        ctx: &mut TxContext,
    )
*/
export function getDepositTx(
    tx: TransactionBlock,
    typusFrameworkOriginPackageId: string,
    typusFrameworkPackageId: string,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    coins: string[],
    amount: string,
    receipts: string[],
    user: string,
    usingSponsoredGasCoin = false
) {
    if (
        !usingSponsoredGasCoin &&
        (typeArguments[0] == "0x2::sui::SUI" ||
            typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI")
    ) {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
        let result = tx.moveCall({
            target: `${packageId}::tails_staking::deposit`,
            typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(index),
                tx.makeMoveVec({ objects: [coin] }),
                tx.pure(amount),
                tx.makeMoveVec({
                    type: `${typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                    objects: receipts.map((id) => tx.object(id)),
                }),
                tx.pure(CLOCK),
            ],
        });
        tx.moveCall({
            target: `${typusFrameworkPackageId}::utils::transfer_coins`,
            typeArguments: [typeArguments[0]],
            arguments: [tx.object(result[0]), tx.pure(user)],
        });
        tx.transferObjects([tx.object(result[1])], user);
    } else {
        let result = tx.moveCall({
            target: `${packageId}::tails_staking::deposit`,
            typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(index),
                tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }),
                tx.pure(amount),
                tx.makeMoveVec({
                    type: `${typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                    objects: receipts.map((id) => tx.object(id)),
                }),
                tx.pure(CLOCK),
            ],
        });
        tx.moveCall({
            target: `${typusFrameworkPackageId}::utils::transfer_coins`,
            typeArguments: [typeArguments[0]],
            arguments: [tx.object(result[0]), tx.pure(user)],
        });
        tx.transferObjects([tx.object(result[1])], user);
    }

    return tx;
}

/**
    public fun withdraw<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        share: Option<u64>,
        clock: &Clock,
        ctx: &mut TxContext,
    )
*/
export function getWithdrawTx(
    tx: TransactionBlock,
    typusFrameworkOriginPackageId: string,
    typusFrameworkPackageId: string,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    receipts: string[],
    user: string,
    share?: string
) {
    let result = tx.moveCall({
        target: `${packageId}::tails_staking::withdraw`,
        typeArguments,
        arguments: [
            tx.object(registry),
            tx.pure(index),
            tx.makeMoveVec({
                type: `${typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: receipts.map((id) => tx.object(id)),
            }),
            tx.pure(share ? [share] : []),
            tx.pure(CLOCK),
        ],
    });
    tx.moveCall({
        target: `${typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [typeArguments[0]],
        arguments: [tx.object(result[0]), tx.pure(user)],
    });
    tx.moveCall({
        target: `${typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [tx.object(result[1]), tx.pure(user)],
    });

    return tx;
}

/**
    public fun unsubscribe<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        share: Option<u64>,
        clock: &Clock,
        ctx: &mut TxContext,
    )
*/
export function getUnsubscribeTx(
    tx: TransactionBlock,
    typusFrameworkOriginPackageId: string,
    typusFrameworkPackageId: string,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    receipts: string[],
    user: string,
    share?: string
) {
    let result = tx.moveCall({
        target: `${packageId}::tails_staking::unsubscribe`,
        typeArguments,
        arguments: [
            tx.object(registry),
            tx.pure(index),
            tx.makeMoveVec({
                type: `${typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: receipts.map((id) => tx.object(id)),
            }),
            tx.pure(share ? [share] : []),
            tx.pure(CLOCK),
        ],
    });
    tx.moveCall({
        target: `${typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [tx.object(result[0]), tx.pure(user)],
    });

    return tx;
}

/**
    public fun compound<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        clock: &Clock,
        ctx: &mut TxContext,
    )
*/
export function getCompoundTx(
    tx: TransactionBlock,
    typusFrameworkOriginPackageId: string,
    typusFrameworkPackageId: string,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    receipts: string[],
    user: string
) {
    let result = tx.moveCall({
        target: `${packageId}::tails_staking::compound`,
        typeArguments: typeArguments,
        arguments: [
            tx.object(registry),
            tx.pure(index),
            tx.makeMoveVec({
                type: `${typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: receipts.map((id) => tx.object(id)),
            }),
            tx.object(CLOCK),
        ],
    });
    tx.moveCall({
        target: `${typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [tx.object(result[0]), tx.pure(user)],
    });

    return tx;
}

/**
    public fun claim<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        ctx: &mut TxContext,
    )
*/
export function getClaimTx(
    tx: TransactionBlock,
    typusFrameworkOriginPackageId: string,
    typusFrameworkPackageId: string,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    receipts: string[],
    user: string
) {
    let result = tx.moveCall({
        target: `${packageId}::tds_user_entry::claim`,
        typeArguments,
        arguments: [
            tx.object(registry),
            tx.pure(index),
            tx.makeMoveVec({
                type: `${typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: receipts.map((id) => tx.object(id)),
            }),
        ],
    });
    tx.moveCall({
        target: `${typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [typeArguments[0]],
        arguments: [tx.object(result[0]), tx.pure(user)],
    });
    tx.moveCall({
        target: `${typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [tx.object(result[1]), tx.pure(user)],
    });

    return tx;
}

/**
    public fun harvest<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        ctx: &mut TxContext,
    )
*/
export function getHarvestTx(
    tx: TransactionBlock,
    typusFrameworkOriginPackageId: string,
    typusFrameworkPackageId: string,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    receipts: string[],
    user: string
) {
    let result = tx.moveCall({
        target: `${packageId}::tds_user_entry::harvest`,
        typeArguments: typeArguments,
        arguments: [
            tx.object(registry),
            tx.pure(index),
            tx.makeMoveVec({
                type: `${typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: receipts.map((id) => tx.object(id)),
            }),
        ],
    });
    tx.moveCall({
        target: `${typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [typeArguments[1]],
        arguments: [tx.object(result[0]), tx.pure(user)],
    });
    tx.moveCall({
        target: `${typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [tx.object(result[1]), tx.pure(user)],
    });

    return tx;
}

/**
    public fun redeem<D_TOKEN, B_TOKEN, I_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        ctx: &mut TxContext,
    )
*/
export function getRedeemTx(
    tx: TransactionBlock,
    typusFrameworkOriginPackageId: string,
    typusFrameworkPackageId: string,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    receipts: string[],
    user: string
) {
    let result = tx.moveCall({
        target: `${packageId}::tds_user_entry::redeem`,
        typeArguments: typeArguments,
        arguments: [
            tx.object(registry),
            tx.pure(index),
            tx.makeMoveVec({
                type: `${typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: receipts.map((id) => tx.object(id)),
            }),
        ],
    });
    tx.moveCall({
        target: `${typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [typeArguments[2]],
        arguments: [tx.object(result[0]), tx.pure(user)],
    });
    tx.moveCall({
        target: `${typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [tx.object(result[1]), tx.pure(user)],
    });

    return tx;
}

/**
    public(friend) entry fun new_bid<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        coins: vector<Coin<B_TOKEN>>,
        size: u64,
        clock: &Clock,
        ctx: &mut TxContext,
    )
*/
export function getNewBidTx(
    tx: TransactionBlock,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    coins: string[],
    size: string,
    premium_required: string, // fe float * b_token_decimal
    user: string,
    usingSponsoredGasCoin = false
) {
    if (
        !usingSponsoredGasCoin &&
        (typeArguments[1] == "0x2::sui::SUI" ||
            typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI")
    ) {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(premium_required)]);
        let result = tx.moveCall({
            target: `${packageId}::tails_staking::new_bid`,
            typeArguments,
            arguments: [tx.object(registry), tx.pure(index), tx.makeMoveVec({ objects: [coin] }), tx.pure(size), tx.pure("0x6")],
        });
        tx.transferObjects([tx.object(result[0])], user);
    } else {
        let result = tx.moveCall({
            target: `${packageId}::tails_staking::new_bid`,
            typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(index),
                tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }),
                tx.pure(size),
                tx.pure("0x6"),
            ],
        });
        tx.transferObjects([tx.object(result[0])], user);
    }

    return tx;
}

/**
    public(friend) entry fun exercise<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusBidReceipt>,
        ctx: &mut TxContext,
    )
*/
export function getExerciseTx(
    tx: TransactionBlock,
    typusFrameworkOriginPackageId: string,
    typusFrameworkPackageId: string,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    receipts: string[],
    user: string
) {
    let result = tx.moveCall({
        target: `${packageId}::tds_user_entry::exercise`,
        typeArguments: typeArguments,
        arguments: [
            tx.object(registry),
            tx.pure(index),
            tx.makeMoveVec({
                type: `${typusFrameworkOriginPackageId}::vault::TypusBidReceipt`,
                objects: receipts.map((id) => tx.object(id)),
            }),
        ],
    });
    tx.moveCall({
        target: `${typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [typeArguments[0]],
        arguments: [tx.object(result[0]), tx.pure(user)],
    });

    return tx;
}

/**
    public(friend) entry fun transfer_bid_receipt<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusBidReceipt>,
        share: Option<u64>,
        recipient: address,
        ctx: &mut TxContext,
    ) {
*/
export function getTransferBidReceiptTx(input: {
    gasBudget: number;
    typusFrameworkOriginPackageId: string;
    packageId: string;
    typeArguments: string[];
    registry: string;
    index: string;
    receipts: string[];
    share?: string;
    recipient: string;
}) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${input.packageId}::tds_user_entry::transfer_bid_receipt`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(input.registry),
            tx.pure(input.index),
            tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusBidReceipt`,
                objects: input.receipts.map((id) => tx.object(id)),
            }),
            tx.pure(input.share ? [input.share] : []),
            tx.pure(input.recipient),
        ],
    });
    tx.setGasBudget(input.gasBudget);

    return tx;
}

/**
    public(friend) entry fun refund<TOKEN>(
        registry: &mut Registry,
        ctx: &mut TxContext,
    )
*/
export function getRebateTx(gasBudget: number, packageId: string, typeArguments: string[], registry: string) {
    let tx = new TransactionBlock();
    typeArguments.forEach((typeArgument) => {
        tx.moveCall({
            target: `${packageId}::tds_user_entry::rebate`,
            typeArguments: [typeArgument],
            arguments: [tx.object(registry)],
        });
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
/**
    entry fun new_strategy<B_TOKEN>(
        strategy_pool: &mut StrategyPool,
        vault_index: u64,
        signal_index: u64,
        size: u64,
        price_percentage: u64,
        max_times: u64,
        target_rounds: vector<u64>,
        coin: Coin<B_TOKEN>,
        ctx: &mut TxContext
    )
*/

export function getNewStrategyTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[], // B_TOKEN
    strategy_pool: string,
    vault_index: string,
    signal_index: string,
    coins: string[],
    amount: string,
    size: string,
    price_percentage: string,
    max_times: string,
    target_rounds: string[]
) {
    let tx = new TransactionBlock();

    if (
        typeArguments[0] == "0x2::sui::SUI" ||
        typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
    ) {
        let [input_coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
        tx.moveCall({
            target: `${packageId}::auto_bid::new_strategy`,
            typeArguments,
            arguments: [
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
    } else {
        const coin = coins.pop()!;

        if (coins.length > 0) {
            tx.mergeCoins(
                tx.object(coin),
                coins.map((id) => tx.object(id))
            );
        }

        let [input_coin] = tx.splitCoins(tx.object(coin), [tx.pure(amount)]);

        tx.moveCall({
            target: `${packageId}::auto_bid::new_strategy`,
            typeArguments,
            arguments: [
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
    }
    tx.setGasBudget(gasBudget);

    return tx;
}
