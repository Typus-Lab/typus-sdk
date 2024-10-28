import { TransactionBlock, TransactionObjectArgument } from "@mysten/sui.js/transactions";
import { CLOCK } from "src/constants";
import { TypusConfig } from "src/utils";

/**
    public fun public_raise_fund<D_TOKEN, B_TOKEN>(
        typus_ecosystem_version: &TypusEcosystemVersion,
        typus_user_registry: &mut TypusUserRegistry,
        typus_leaderboard_registry: &mut TypusLeaderboardRegistry,
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        raise_balance: Balance<D_TOKEN>,
        raise_from_premium: bool,
        raise_from_inactive: bool,
        clock: &Clock,
        ctx: &mut TxContext,
    ): (TypusDepositReceipt, vector<u64>) {
 */
export function getRaiseFundTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        index: string;
        receipts: string[] | TransactionObjectArgument[];
        raiseCoins: string[];
        raiseAmount: string;
        raiseFromPremium: boolean;
        raiseFromInactive: boolean;
        user: string;
    }
) {
    let raiseBalance =
        input.typeArguments[0] == "0x2::sui::SUI" ||
        input.typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
            ? tx.moveCall({
                  target: `${config.package.framework}::utils::delegate_extract_balance`,
                  typeArguments: [input.typeArguments[0]],
                  arguments: [
                      tx.pure(input.user),
                      tx.makeMoveVec({
                          type: `0x2::coin::Coin<${input.typeArguments[0]}>`,
                          objects: [tx.splitCoins(tx.gas, [tx.pure(input.raiseAmount)])],
                      }),
                      tx.pure(input.raiseAmount),
                  ],
              })
            : tx.moveCall({
                  target: `${config.package.framework}::utils::delegate_extract_balance`,
                  typeArguments: [input.typeArguments[0]],
                  arguments: [
                      tx.pure(input.user),
                      tx.makeMoveVec({
                          type: `0x2::coin::Coin<${input.typeArguments[0]}>`,
                          objects: input.raiseCoins.map((coin) => tx.object(coin)),
                      }),
                      tx.pure(input.raiseAmount),
                  ],
              });
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_user_entry::public_raise_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.user),
            tx.object(config.registry.typus.leaderboard),
            tx.object(config.registry.dov.dovSingle),
            tx.pure(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((receipt) => tx.object(receipt)),
            }),
            tx.object(raiseBalance),
            tx.pure(input.raiseFromPremium),
            tx.pure(input.raiseFromInactive),
            tx.object(CLOCK),
        ],
    });
    tx.transferObjects([tx.object(result[0])], input.user);

    return tx;
}

/**
    public fun public_reduce_fund<D_TOKEN, B_TOKEN, I_TOKEN>(
        typus_ecosystem_version: &TypusEcosystemVersion,
        typus_user_registry: &mut TypusUserRegistry,
        typus_leaderboard_registry: &mut TypusLeaderboardRegistry,
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        reduce_from_warmup: u64,
        reduce_from_active: u64,
        reduce_from_premium: bool,
        reduce_from_inactive: bool,
        reduce_from_incentive: bool,
        clock: &Clock,
        ctx: &mut TxContext,
    ): (Option<TypusDepositReceipt>, Balance<D_TOKEN>, Balance<B_TOKEN>, Balance<I_TOKEN>, vector<u64>) {
 */
export function getReduceFundTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        index: string;
        receipts: string[] | TransactionObjectArgument[];
        reduceFromWarmup: string;
        reduceFromActive: string;
        reduceFromPremium: boolean;
        reduceFromInactive: boolean;
        reduceFromIncentive: boolean;
        user: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_user_entry::public_reduce_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.user),
            tx.object(config.registry.typus.leaderboard),
            tx.object(config.registry.dov.dovSingle),
            tx.pure(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((receipt) => tx.object(receipt)),
            }),
            tx.pure(input.reduceFromWarmup),
            tx.pure(input.reduceFromActive),
            tx.pure(input.reduceFromPremium),
            tx.pure(input.reduceFromInactive),
            tx.pure(input.reduceFromIncentive),
            tx.object(CLOCK),
        ],
    });
    tx.moveCall({
        target: `${config.package.framework}::vault::transfer_deposit_receipt`,
        arguments: [tx.object(result[0]), tx.pure(input.user)],
    });
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [tx.object(result[1]), tx.pure(input.user)],
    });
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[1]],
        arguments: [tx.object(result[2]), tx.pure(input.user)],
    });
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[2]],
        arguments: [tx.object(result[3]), tx.pure(input.user)],
    });

    return tx;
}

/**
    public fun public_refresh_deposit_snapshot<D_TOKEN, B_TOKEN>(
        typus_ecosystem_version: &TypusEcosystemVersion,
        typus_user_registry: &mut TypusUserRegistry,
        typus_leaderboard_registry: &mut TypusLeaderboardRegistry,
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        clock: &Clock,
        ctx: &mut TxContext,
    ): (TypusDepositReceipt, vector<u64>) {
 */
export function getRefreshDepositSnapshotTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        index: string;
        receipts: string[] | TransactionObjectArgument[];
        user: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_user_entry::public_refresh_deposit_snapshot`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.user),
            tx.object(config.registry.typus.leaderboard),
            tx.object(config.registry.dov.dovSingle),
            tx.pure(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((receipt) => tx.object(receipt)),
            }),
            tx.object(CLOCK),
        ],
    });
    tx.transferObjects([tx.object(result[0])], input.user);

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
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        index: string;
        coins: string[];
        size: string;
        premium_required: string; // fe float * b_token_decimal
        user: string;
        usingSponsoredGasCoin?: boolean;
    }
) {
    if (
        !input.usingSponsoredGasCoin &&
        (input.typeArguments[1] == "0x2::sui::SUI" ||
            input.typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI")
    ) {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(input.premium_required)]);
        let result = tx.moveCall({
            target: `${config.package.dovSingle}::tds_user_entry::public_bid`,
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.user),
                tx.object(config.registry.typus.tgld),
                tx.object(config.registry.typus.leaderboard),
                tx.object(config.registry.dov.dovSingle),
                tx.pure(input.index),
                tx.makeMoveVec({ objects: [coin] }),
                tx.pure(input.size),
                tx.object(CLOCK),
            ],
        });
        tx.transferObjects([tx.object(result[0])], input.user);
        tx.moveCall({
            target: `${config.package.framework}::utils::transfer_coins`,
            typeArguments: [input.typeArguments[1]],
            arguments: [tx.makeMoveVec({ objects: [tx.object(result[1])] }), tx.pure(input.user)],
        });
    } else {
        let balance = tx.moveCall({
            target: `${config.package.framework}::utils::extract_balance`,
            typeArguments: [input.typeArguments[1]],
            arguments: [tx.makeMoveVec({ objects: input.coins.map((coin) => tx.object(coin)) }), tx.pure(input.premium_required)],
        });
        let coin = tx.moveCall({
            target: `0x2::coin::from_balance`,
            typeArguments: [input.typeArguments[1]],
            arguments: [tx.object(balance)],
        });
        let result = tx.moveCall({
            target: `${config.package.dovSingle}::tds_user_entry::public_bid`,
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(config.version.typus),
                tx.object(config.registry.typus.user),
                tx.object(config.registry.typus.tgld),
                tx.object(config.registry.typus.leaderboard),
                tx.object(config.registry.dov.dovSingle),
                tx.pure(input.index),
                tx.makeMoveVec({ objects: [coin] }),
                tx.pure(input.size),
                tx.pure("0x6"),
            ],
        });
        tx.transferObjects([tx.object(result[0])], input.user);
        tx.moveCall({
            target: `${config.package.framework}::utils::transfer_coins`,
            typeArguments: [input.typeArguments[1]],
            arguments: [tx.makeMoveVec({ objects: [tx.object(result[1])] }), tx.pure(input.user)],
        });
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
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        index: string;
        receipts: string[] | TransactionObjectArgument[];
        user: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_user_entry::exercise`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.pure(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusBidReceipt`,
                objects: input.receipts.map((receipt) => tx.object(receipt)),
            }),
        ],
    });
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [tx.object(result[0]), tx.pure(input.user)],
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
export function getTransferBidReceiptTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        index: string;
        receipts: string[];
        share?: string;
        recipient: string;
    }
) {
    tx.moveCall({
        target: `${config.package.dovSingle}::tds_user_entry::transfer_bid_receipt`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.pure(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusBidReceipt`,
                objects: input.receipts.map((receipt) => tx.object(receipt)),
            }),
            tx.pure(input.share ? [input.share] : []),
            tx.pure(input.recipient),
        ],
    });

    return tx;
}

export function getSplitBidReceiptTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        index: string;
        receipts: string[];
        share: string;
        recipient: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_user_entry::simple_split_bid_receipt`,
        typeArguments: [],
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.pure(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusBidReceipt`,
                objects: input.receipts.map((receipt) => tx.object(receipt)),
            }),
            tx.pure([input.share]),
        ],
    });

    let unwrap0 = tx.moveCall({
        target: `0x1::option::destroy_some`,
        typeArguments: [`${config.packageOrigin.framework}::vault::TypusBidReceipt`],
        arguments: [tx.object(result[0])],
    });

    let unwrap1 = tx.moveCall({
        target: `0x1::option::destroy_some`,
        typeArguments: [`${config.packageOrigin.framework}::vault::TypusBidReceipt`],
        arguments: [tx.object(result[1])],
    });

    tx.transferObjects([unwrap1], input.recipient);

    return unwrap0;
}

export function getMultiTransferBidReceiptTx(
    config: TypusConfig,
    input: {
        typeArguments: string[];
        index: string;
        receipts: string[];
        shares: string[];
        recipients: string[];
        sender: string;
    }
) {
    let tx = new TransactionBlock();
    console.assert(input.shares.length == input.recipients.length, "shares.length != recipients.length");

    var receipts = {
        // type: `${config.packageOrigin.framework}::vault::TypusBidReceipt`,
        objects: input.receipts.map((receipt) => tx.object(receipt)),
    };

    var i = 0;
    while (i < input.shares.length) {
        let share = input.shares[i];
        let recipient = input.recipients[i];
        let result = tx.moveCall({
            target: `${config.package.dovSingle}::tds_user_entry::public_transfer_bid_receipt`,
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(config.registry.dov.dovSingle),
                tx.pure(input.index),
                tx.makeMoveVec(receipts),
                tx.pure([share]),
                tx.pure(recipient),
            ],
        });

        let unwrap = tx.moveCall({
            target: `0x1::option::destroy_some`,
            typeArguments: [`${config.packageOrigin.framework}::vault::TypusBidReceipt`],
            arguments: [tx.object(result[0])],
        });

        receipts = { objects: [unwrap] };

        i += 1;
        if (i == input.shares.length) {
            tx.transferObjects([tx.object(unwrap)], input.sender);
        }
    }
    return tx;
}

/**
    public(friend) entry fun refund<TOKEN>(
        registry: &mut Registry,
        ctx: &mut TxContext,
    )
*/
export function getRebateTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArgument: string;
        user: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_user_entry::rebate`,
        typeArguments: [input.typeArgument],
        arguments: [tx.object(config.registry.dov.dovSingle)],
    });
    let balance = tx.moveCall({
        target: `0x1::option::destroy_some`,
        typeArguments: [`0x2::balance::Balance<${input.typeArgument}>`],
        arguments: [tx.object(result[0])],
    });
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArgument],
        arguments: [tx.object(balance), tx.pure(input.user)],
    });

    return tx;
}

export function getCompoundWithRedeemTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        index: string;
        receipts: string[] | TransactionObjectArgument[];
        user: string;
    }
) {
    let raiseBalance = tx.moveCall({
        target: `0x2::balance::zero`,
        typeArguments: [input.typeArguments[0]],
        arguments: [],
    });
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_user_entry::public_raise_fund`,
        typeArguments: [input.typeArguments[0], input.typeArguments[1]],
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.user),
            tx.object(config.registry.typus.leaderboard),
            tx.object(config.registry.dov.dovSingle),
            tx.pure(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusDepositReceipt`,
                objects: input.receipts.map((receipt) => tx.object(receipt)),
            }),
            tx.object(raiseBalance),
            tx.pure(true),
            tx.pure(false),
            tx.object(CLOCK),
        ],
    });

    return getReduceFundTx(config, tx, {
        typeArguments: input.typeArguments,
        index: input.index,
        receipts: [result[0]],
        reduceFromWarmup: "0",
        reduceFromActive: "0",
        reduceFromPremium: false,
        reduceFromInactive: false,
        reduceFromIncentive: true,
        user: input.user,
    });
}
