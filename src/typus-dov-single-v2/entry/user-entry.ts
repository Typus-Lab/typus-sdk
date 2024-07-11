import { TransactionBlock, TransactionObjectArgument } from "@mysten/sui.js/transactions";
import { CLOCK } from "@/constants";

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
export function getRaiseFundTx(input: {
    tx: TransactionBlock;
    typusEcosystemVersion: string;
    typusUserRegistry: string;
    typusLeaderboardRegistry: string;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    raiseCoins: string[];
    raiseAmount: string;
    raiseFromPremium: boolean;
    raiseFromInactive: boolean;
    user: string;
}) {
    let raiseBalance =
        input.typeArguments[0] == "0x2::sui::SUI" ||
        input.typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"
            ? input.tx.moveCall({
                  target: `${input.typusFrameworkPackageId}::utils::delegate_extract_balance`,
                  typeArguments: [input.typeArguments[0]],
                  arguments: [
                      input.tx.pure(input.user),
                      input.tx.makeMoveVec({
                          type: `0x2::coin::Coin<${input.typeArguments[0]}>`,
                          objects: [input.tx.splitCoins(input.tx.gas, [input.tx.pure(input.raiseAmount)])],
                      }),
                      input.tx.pure(input.raiseAmount),
                  ],
              })
            : input.tx.moveCall({
                  target: `${input.typusFrameworkPackageId}::utils::delegate_extract_balance`,
                  typeArguments: [input.typeArguments[0]],
                  arguments: [
                      input.tx.pure(input.user),
                      input.tx.makeMoveVec({
                          type: `0x2::coin::Coin<${input.typeArguments[0]}>`,
                          objects: input.raiseCoins.map((coin) => input.tx.object(coin)),
                      }),
                      input.tx.pure(input.raiseAmount),
                  ],
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
            input.tx.object(raiseBalance),
            input.tx.pure(input.raiseFromPremium),
            input.tx.pure(input.raiseFromInactive),
            input.tx.object(CLOCK),
        ],
    });
    input.tx.transferObjects([input.tx.object(result[0])], input.user);

    return input.tx;
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
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [input.tx.object(result[1]), input.tx.pure(input.user)],
    });
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[1]],
        arguments: [input.tx.object(result[2]), input.tx.pure(input.user)],
    });
    input.tx.moveCall({
        target: `${input.typusFrameworkPackageId}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[2]],
        arguments: [input.tx.object(result[3]), input.tx.pure(input.user)],
    });

    return input.tx;
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
export function getRefreshDepositSnapshotTx(input: {
    tx: TransactionBlock;
    typusEcosystemVersion: string;
    typusUserRegistry: string;
    typusLeaderboardRegistry: string;
    typusFrameworkOriginPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
}) {
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tds_user_entry::public_refresh_deposit_snapshot`,
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
            input.tx.object(CLOCK),
        ],
    });
    input.tx.transferObjects([input.tx.object(result[0])], input.user);

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
            target: `${input.typusDovSinglePackageId}::tds_user_entry::public_bid`,
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
                input.tx.object(CLOCK),
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
            target: `${input.typusDovSinglePackageId}::tds_user_entry::public_bid`,
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
    index: string;
    receipts: string[];
    share: string;
    recipient: string;
}) {
    const result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tds_user_entry::simple_split_bid_receipt`,
        typeArguments: [],
        arguments: [
            input.tx.object(input.typusDovSingleRegistry),
            input.tx.pure(input.index),
            input.tx.makeMoveVec({
                type: `${input.typusFrameworkOriginPackageId}::vault::TypusBidReceipt`,
                objects: input.receipts.map((receipt) => input.tx.object(receipt)),
            }),
            input.tx.pure([input.share]),
        ],
    });

    const unwrap0 = input.tx.moveCall({
        target: `0x1::option::destroy_some`,
        typeArguments: [`${input.typusFrameworkOriginPackageId}::vault::TypusBidReceipt`],
        arguments: [input.tx.object(result[0])],
    });

    const unwrap1 = input.tx.moveCall({
        target: `0x1::option::destroy_some`,
        typeArguments: [`${input.typusFrameworkOriginPackageId}::vault::TypusBidReceipt`],
        arguments: [input.tx.object(result[1])],
    });

    input.tx.transferObjects([unwrap1], input.recipient);

    return unwrap0;
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

export function getCompoundWithRedeemTx(input: {
    tx: TransactionBlock;
    typusEcosystemVersion: string;
    typusUserRegistry: string;
    typusLeaderboardRegistry: string;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
}) {
    let raiseBalance = input.tx.moveCall({
        target: `0x2::balance::zero`,
        typeArguments: [input.typeArguments[0]],
        arguments: [],
    });
    let result = input.tx.moveCall({
        target: `${input.typusDovSinglePackageId}::tds_user_entry::public_raise_fund`,
        typeArguments: [input.typeArguments[0], input.typeArguments[1]],
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
            input.tx.object(raiseBalance),
            input.tx.pure(true),
            input.tx.pure(false),
            input.tx.object(CLOCK),
        ],
    });

    return getReduceFundTx({
        tx: input.tx,
        typusEcosystemVersion: input.typusEcosystemVersion,
        typusUserRegistry: input.typusUserRegistry,
        typusLeaderboardRegistry: input.typusLeaderboardRegistry,
        typusFrameworkOriginPackageId: input.typusFrameworkOriginPackageId,
        typusFrameworkPackageId: input.typusFrameworkPackageId,
        typusDovSinglePackageId: input.typusDovSinglePackageId,
        typusDovSingleRegistry: input.typusDovSingleRegistry,
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
