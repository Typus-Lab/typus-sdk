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
            typeArguments: [`${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`],
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
                      objects: result
                          ? [
                                input.tx.object(
                                    input.tx.moveCall({
                                        target: `0x1::option::destroy_some`,
                                        typeArguments: [`${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`],
                                        arguments: [input.tx.object(result[1])],
                                    })
                                ),
                            ]
                          : input.receipts.map((receipt) => input.tx.object(receipt)),
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
                      objects: result
                          ? [
                                input.tx.object(
                                    input.tx.moveCall({
                                        target: `0x1::option::destroy_some`,
                                        typeArguments: [`${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`],
                                        arguments: [input.tx.object(result[1])],
                                    })
                                ),
                            ]
                          : input.receipts.map((receipt) => input.tx.object(receipt)),
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
                          typeArguments: [`${input.typusFrameworkOriginPackageId}::vault::TypusDepositReceipt`],
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
    typusEcosystemVersion: string;
    typusUserRegistry: string;
    tgldRegistry: string;
    typusLeaderboardRegistry: string;
    typusFrameworkPackageId: string;
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
            target: `${input.typusDovSinglePackageId}::tails_staking::bid`,
            typeArguments: input.typeArguments,
            arguments: [
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.typusUserRegistry),
                input.tx.object(input.tgldRegistry),
                input.tx.object(input.typusLeaderboardRegistry),
                input.tx.object(input.typusDovSingleRegistry),
                input.tx.pure(input.index),
                input.tx.makeMoveVec({ objects: [coin] }),
                input.tx.pure(input.size),
                input.tx.pure("0x6"),
            ],
        });
        input.tx.transferObjects([input.tx.object(result[0])], input.user);
        input.tx.moveCall({
            target: `${input.typusFrameworkPackageId}::utils::transfer_coins`,
            typeArguments: [input.typeArguments[1]],
            arguments: [input.tx.makeMoveVec({ objects: [input.tx.object(result[1])] }), input.tx.pure(input.user)],
        });
    } else {
        let balance = input.tx.moveCall({
            target: `${input.typusFrameworkPackageId}::utils::extract_balance`,
            typeArguments: [input.typeArguments[1]],
            arguments: [
                input.tx.makeMoveVec({ objects: input.coins.map((coin) => input.tx.object(coin)) }),
                input.tx.pure(input.premium_required),
            ],
        });
        let coin = input.tx.moveCall({
            target: `0x2::coin::from_balance`,
            typeArguments: [input.typeArguments[1]],
            arguments: [input.tx.object(balance)],
        });
        let result = input.tx.moveCall({
            target: `${input.typusDovSinglePackageId}::tails_staking::bid`,
            typeArguments: input.typeArguments,
            arguments: [
                input.tx.object(input.typusEcosystemVersion),
                input.tx.object(input.typusUserRegistry),
                input.tx.object(input.tgldRegistry),
                input.tx.object(input.typusLeaderboardRegistry),
                input.tx.object(input.typusDovSingleRegistry),
                input.tx.pure(input.index),
                input.tx.makeMoveVec({ objects: [coin] }),
                input.tx.pure(input.size),
                input.tx.pure("0x6"),
            ],
        });
        input.tx.transferObjects([input.tx.object(result[0])], input.user);
        input.tx.moveCall({
            target: `${input.typusFrameworkPackageId}::utils::transfer_coins`,
            typeArguments: [input.typeArguments[1]],
            arguments: [input.tx.makeMoveVec({ objects: [input.tx.object(result[1])] }), input.tx.pure(input.user)],
        });
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

export function getSplitBidReceiptTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[];
    share: string;
    recipient: string;
}) {
    const result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tds_user_entry::simple_split_bid_receipt`,
        typeArguments: input.typeArguments,
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusBidReceipt`,
                objects: input.receipts.map((receipt) => input.tx.object(receipt)),
            }),
            input.tx.pure([input.share]),
            input.tx.pure(input.recipient),
        ],
    });

    const unwrap0 = input.tx.moveCall({
        target: `0x1::option::destroy_some`,
        typeArguments: [`${input.typusFrameworkOriginPackageId}::vault::TypusBidReceipt`],
        arguments: [input.tx.object(result[0])],
    });

    const splitReceipt = { objects: [unwrap0] };

    const unwrap1 = input.tx.moveCall({
        target: `0x1::option::destroy_some`,
        typeArguments: [`${input.typusFrameworkOriginPackageId}::vault::TypusBidReceipt`],
        arguments: [input.tx.object(result[1])],
    });

    const remainReceipt = { objects: [unwrap1] };

    return [splitReceipt, remainReceipt, input.tx];
}

export function getMultiTransferBidReceiptTx(input: {
    typusFrameworkPackageId: string;
    typusFrameworkOriginPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[];
    shares: string[];
    recipients: string[];
    sender: string;
}) {
    let tx = new TransactionBlock();
    console.assert(input.shares.length == input.recipients.length, "shares.length != recipients.length");

    var receipts = {
        // type: `${input.typusFrameworkOriginPackageId}::vault::TypusBidReceipt`,
        objects: input.receipts.map((receipt) => tx.object(receipt)),
    };

    var i = 0;
    while (i < input.shares.length) {
        const share = input.shares[i];
        const recipient = input.recipients[i];
        const result = tx.moveCall({
            target: `${input.typusDovSinglePackageId}::tds_user_entry::public_transfer_bid_receipt`,
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(input.typusDovSingleRegistry),
                tx.pure(input.index),
                tx.makeMoveVec(receipts),
                tx.pure([share]),
                tx.pure(recipient),
            ],
        });

        const unwrap = tx.moveCall({
            target: `0x1::option::destroy_some`,
            typeArguments: [`${input.typusFrameworkOriginPackageId}::vault::TypusBidReceipt`],
            arguments: [tx.object(result[0])],
        });

        receipts = { objects: [unwrap] };

        i += 1;
        if (i == input.shares.length) {
            tx.transferObjects([tx.object(unwrap)], input.sender);
        }
    }

    tx.setGasBudget(100000000);
    return tx;
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
        typeArguments: [`0x2::balance::Balance<${input.typeArgument}>`],
        arguments: [input.tx.object(result[0])],
    });
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [input.typeArgument],
        arguments: [input.tx.object(balance), input.tx.pure(input.user)],
    });

    return input.tx;
}
