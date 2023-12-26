import { TransactionBlock, TransactionObjectArgument } from "@mysten/sui.js/transactions";
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
export function getDepositTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    coins: string[];
    amount: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
    usingSponsoredGasCoin?: boolean;
}) {
    if (
        !input.usingSponsoredGasCoin &&
        (input.typeArguments[0] == "0x2::sui::SUI" ||
            input.typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI")
    ) {
        let [coin] = input.tx.splitCoins(input.tx.gas, [input.tx.pure(input.amount)]);
        let result = input.tx.moveCall({
            target: `${input.typusDovSinglePackageId}::tails_staking::deposit`,
            typeArguments: input.typeArguments,
            arguments: [
                input.tx.object(input.typusDovSingleRegistry),
                input.tx.pure(input.index),
                input.tx.makeMoveVec({ objects: [coin] }),
                input.tx.pure(input.amount),
                input.tx.makeMoveVec({
                    type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                    objects: input.receipts.map((receipt) => input.tx.object(receipt)),
                }),
                input.tx.pure(CLOCK),
            ],
        });
        input.tx.moveCall({
            target: `${input.typusFrameworkPackageId}::utils::transfer_coins`,
            typeArguments: [input.typeArguments[0]],
            arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
        });
        input.tx.transferObjects([input.tx.object(result[1])], input.user);
    } else {
        let result = input.tx.moveCall({
            target: `${input.typusDovSinglePackageId}::tails_staking::deposit`,
            typeArguments: input.typeArguments,
            arguments: [
                input.tx.object(input.typusDovSingleRegistry),
                input.tx.pure(input.index),
                input.tx.makeMoveVec({ objects: input.coins.map((coin) => input.tx.object(coin)) }),
                input.tx.pure(input.amount),
                input.tx.makeMoveVec({
                    type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                    objects: input.receipts.map((receipt) => input.tx.object(receipt)),
                }),
                input.tx.pure(CLOCK),
            ],
        });
        input.tx.moveCall({
            target: `${input.typusFrameworkPackageId}::utils::transfer_coins`,
            typeArguments: [input.typeArguments[0]],
            arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
        });
        input.tx.transferObjects([input.tx.object(result[1])], input.user);
    }

    return input.tx;
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
export function getWithdrawTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
    share?: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tails_staking::withdraw`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((receipt) => input.tx.object(receipt)),
            }),
            input.tx.pure(input.share ? [input.share] : []),
            input.tx.pure(CLOCK),
        ],
    });
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [input.tx.object(result[1]), input.tx.pure(input.user)],
    });

    return input.tx;
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
export function getUnsubscribeTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
    share?: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tails_staking::unsubscribe`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((receipt) => input.tx.object(receipt)),
            }),
            input.tx.pure(input.share ? [input.share] : []),
            input.tx.pure(CLOCK),
        ],
    });
    input.tx.transferObjects([input.tx.object(result[0])], input.user);

    return input.tx;
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
export function getCompoundTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
    incentiveToken?: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tails_staking::compound`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((receipt) => input.tx.object(receipt)),
            }),
            input.tx.object(CLOCK),
        ],
    });
    if (input.incentiveToken) {
        input.typeArguments.push(input.incentiveToken);
        input.tx = getRedeemTx({
            tx: input.tx,
            typusFrameworkOriginPackageId: input.typusFrameworkOriginPackageId,
            typusFrameworkPackageId: input.typusFrameworkPackageId,
            typusDovSinglePackageId: input.typusDovSinglePackageId,
            typusDovSingleRegistry: input.typusDovSingleRegistry,
            typeArguments: input.typeArguments,
            index: input.index,
            receipts: [input.tx.object(result[0])],
            user: input.user,
        });
    } else {
        input.tx.transferObjects([input.tx.object(result[0])], input.user);
    }

    return input.tx;
}

/**
    public fun claim<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        ctx: &mut TxContext,
    )
*/
export function getClaimTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
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
                objects: input.receipts.map((receipt) => input.tx.object(receipt)),
            }),
        ],
    });
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [input.tx.object(result[1]), input.tx.pure(input.user)],
    });

    return input.tx;
}

/**
    public fun harvest<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        ctx: &mut TxContext,
    )
*/
export function getHarvestTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
    incentiveToken?: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tds_user_entry::harvest`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((receipt) => input.tx.object(receipt)),
            }),
        ],
    });
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[1]],
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });
    if (input.incentiveToken) {
        input.typeArguments.push(input.incentiveToken);
        let receipt = input.tx.moveCall({
            target: `0x1::option::destroy_some`,
            arguments: [input.tx.object(result[1])],
        });
        input.tx = getRedeemTx({
            tx: input.tx,
            typusFrameworkOriginPackageId: input.typusFrameworkOriginPackageId,
            typusFrameworkPackageId: input.typusFrameworkPackageId,
            typusDovSinglePackageId: input.typusDovSinglePackageId,
            typusDovSingleRegistry: input.typusDovSingleRegistry,
            typeArguments: input.typeArguments,
            index: input.index,
            receipts: [input.tx.object(receipt)],
            user: input.user,
        });
    } else {
        input.tx.moveCall({
            target: `${input.typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
            arguments: [input.tx.object(result[1]), input.tx.pure(input.user)],
        });
    }

    return input.tx;
}

/**
    public fun redeem<D_TOKEN, B_TOKEN, I_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        ctx: &mut TxContext,
    )
*/
export function getRedeemTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
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
                objects: input.receipts.map((receipt) => input.tx.object(receipt)),
            }),
        ],
    });
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[2]],
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
        arguments: [input.tx.object(result[1]), input.tx.pure(input.user)],
    });

    return input.tx;
}

export function getWithdrawHarvestClaimTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
    withdraw: boolean;
    harvest: boolean;
    claim: boolean;
    incentiveToken?: string;
}) {
    let result = input.withdraw
        ? input.tx.moveCall({
              target: `${input.typusDovSinglePackageId}::tails_staking::withdraw`,
              typeArguments: input.typeArguments,
              arguments: [
                  input.tx.object(input.typusDovSingleRegistry),
                  input.tx.pure(input.index),
                  input.tx.makeMoveVec({
                      type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                      objects: input.receipts.map((receipt) => input.tx.object(receipt)),
                  }),
                  input.tx.pure([]),
                  input.tx.pure(CLOCK),
              ],
          })
        : undefined;
    if (input.withdraw) {
        input.tx.moveCall({
            target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
            typeArguments: [input.typeArguments[0]],
            arguments: [input.tx.object(result![0]), input.tx.pure(input.user)],
        });
    }
    result = input.harvest
        ? input.tx.moveCall({
              target: `${input.typusDovSinglePackageId}::tds_user_entry::harvest`,
              typeArguments: input.typeArguments,
              arguments: [
                  input.tx.object(input.typusDovSingleRegistry),
                  input.tx.pure(input.index),
                  input.tx.makeMoveVec({
                      type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                      objects: result ? [result[1]] : input.receipts.map((receipt) => input.tx.object(receipt)),
                  }),
              ],
          })
        : result;
    if (input.harvest) {
        input.tx.moveCall({
            target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
            typeArguments: [input.typeArguments[1]],
            arguments: [input.tx.object(result![0]), input.tx.pure(input.user)],
        });
    }
    result = input.claim
        ? input.tx.moveCall({
              target: `${input.typusDovSinglePackageId}::tds_user_entry::claim`,
              typeArguments: input.typeArguments,
              arguments: [
                  input.tx.object(input.typusDovSingleRegistry),
                  input.tx.pure(input.index),
                  input.tx.makeMoveVec({
                      type: `${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`,
                      objects: result ? [result[1]] : input.receipts.map((receipt) => input.tx.object(receipt)),
                  }),
              ],
          })
        : result;
    if (input.claim) {
        input.tx.moveCall({
            target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
            typeArguments: [input.typeArguments[0]],
            arguments: [input.tx.object(result![0]), input.tx.pure(input.user)],
        });
    }
    if (input.incentiveToken) {
        input.typeArguments.push(input.incentiveToken);
        let receipts = result
            ? [
                  input.tx.object(
                      input.tx.moveCall({
                          target: `0x1::option::destroy_some`,
                          arguments: [input.tx.object(result[1])],
                      })
                  ),
              ]
            : input.receipts.map((receipt) => input.tx.object(receipt));
        input.tx = getRedeemTx({
            tx: input.tx,
            typusFrameworkOriginPackageId: input.typusFrameworkOriginPackageId,
            typusFrameworkPackageId: input.typusFrameworkPackageId,
            typusDovSinglePackageId: input.typusDovSinglePackageId,
            typusDovSingleRegistry: input.typusDovSingleRegistry,
            typeArguments: input.typeArguments,
            index: input.index,
            receipts,
            user: input.user,
        });
    } else {
        input.tx.moveCall({
            target: `${input.typusFrameworkPackageId}::vault::transfer_deposit_receipt`,
            arguments: [input.tx.object(result![1]), input.tx.pure(input.user)],
        });
    }

    return input.tx;
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
export function getNewBidTx(input: {
    tx: TransactionBlock;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    coins: string[];
    size: string;
    premium_required: string; // fe float * b_token_decimal
    user: string;
    usingSponsoredGasCoin?: boolean;
}) {
    if (
        !input.usingSponsoredGasCoin &&
        (input.typeArguments[1] == "0x2::sui::SUI" ||
            input.typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI")
    ) {
        let [coin] = input.tx.splitCoins(input.tx.gas, [input.tx.pure(input.premium_required)]);
        let result = input.tx.moveCall({
            target: `${input.typusDovSinglePackageId}::tails_staking::new_bid`,
            typeArguments: input.typeArguments,
            arguments: [
                input.tx.object(input.typusDovSingleRegistry),
                input.tx.pure(input.index),
                input.tx.makeMoveVec({ objects: [coin] }),
                input.tx.pure(input.size),
                input.tx.pure("0x6"),
            ],
        });
        input.tx.transferObjects([input.tx.object(result[0])], input.user);
    } else {
        let result = input.tx.moveCall({
            target: `${input.typusDovSinglePackageId}::tails_staking::new_bid`,
            typeArguments: input.typeArguments,
            arguments: [
                input.tx.object(input.typusDovSingleRegistry),
                input.tx.pure(input.index),
                input.tx.makeMoveVec({ objects: input.coins.map((coin) => input.tx.object(coin)) }),
                input.tx.pure(input.size),
                input.tx.pure("0x6"),
            ],
        });
        input.tx.transferObjects([input.tx.object(result[0])], input.user);
    }

    return input.tx;
}

/**
    public(friend) entry fun exercise<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusBidReceipt>,
        ctx: &mut TxContext,
    )
*/
export function getExerciseTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
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
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });

    return input.tx;
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
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[];
    share?: string;
    recipient: string;
}) {
    input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tds_user_entry::transfer_bid_receipt`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusBidReceipt`,
                objects: input.receipts.map((receipt) => input.tx.object(receipt)),
            }),
            input.tx.pure(input.share ? [input.share] : []),
            input.tx.pure(input.recipient),
        ],
    });

    return input.tx;
}

/**
    public(friend) entry fun refund<TOKEN>(
        registry: &mut Registry,
        ctx: &mut TxContext,
    )
*/
export function getRebateTx(input: {
    tx: TransactionBlock;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
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
        arguments: [input.tx.object(result[0])],
    });
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [input.typeArgument],
        arguments: [input.tx.object(balance), input.tx.pure(input.user)],
    });

    return input.tx;
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
                coins.map((coin) => tx.object(coin))
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
