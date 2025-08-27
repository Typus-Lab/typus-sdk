import { Transaction, TransactionObjectArgument } from "@mysten/sui/transactions";
import { CLOCK } from "src/constants";
import { TypusConfig, splitCoin } from "src/utils";
import * as CryptoJS from "crypto-js";
import NodeRSA from "node-rsa";

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
    tx: Transaction,
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
    let coin = splitCoin(tx, input.typeArguments[0], input.raiseCoins, input.raiseAmount, config.sponsored);
    let raiseBalance = tx.moveCall({
        target: `0x2::coin::into_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [tx.object(coin)],
    });
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_user_entry::public_raise_fund`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.user),
            tx.object(config.registry.typus.leaderboard),
            tx.object(config.registry.dov.dovSingle),
            tx.pure.u64(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusDepositReceipt`,
                elements: input.receipts.map((receipt) => tx.object(receipt)),
            }),
            tx.object(raiseBalance),
            tx.pure.bool(input.raiseFromPremium),
            tx.pure.bool(input.raiseFromInactive),
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
    tx: Transaction,
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
            tx.pure.u64(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusDepositReceipt`,
                elements: input.receipts.map((receipt) => tx.object(receipt)),
            }),
            tx.pure.u64(input.reduceFromWarmup),
            tx.pure.u64(input.reduceFromActive),
            tx.pure.bool(input.reduceFromPremium),
            tx.pure.bool(input.reduceFromInactive),
            tx.pure.bool(input.reduceFromIncentive),
            tx.object(CLOCK),
        ],
    });
    tx.moveCall({
        target: `${config.package.framework}::vault::transfer_deposit_receipt`,
        arguments: [tx.object(result[0]), tx.pure.address(input.user)],
    });
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [tx.object(result[1]), tx.pure.address(input.user)],
    });
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[1]],
        arguments: [tx.object(result[2]), tx.pure.address(input.user)],
    });
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[2]],
        arguments: [tx.object(result[3]), tx.pure.address(input.user)],
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
    tx: Transaction,
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
            tx.pure.u64(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusDepositReceipt`,
                elements: input.receipts.map((receipt) => tx.object(receipt)),
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
    tx: Transaction,
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
    let coin = splitCoin(tx, input.typeArguments[1], input.coins, input.premium_required, config.sponsored);

    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_user_entry::public_bid`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.version.typus),
            tx.object(config.registry.typus.user),
            tx.object(config.registry.typus.tgld),
            tx.object(config.registry.typus.leaderboard),
            tx.object(config.registry.dov.dovSingle),
            tx.pure.u64(input.index),
            tx.makeMoveVec({ elements: [coin] }),
            tx.pure.u64(input.size),
            tx.object(CLOCK),
        ],
    });
    tx.transferObjects([tx.object(result[0])], input.user);
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_coins`,
        typeArguments: [input.typeArguments[1]],
        arguments: [tx.makeMoveVec({ elements: [tx.object(result[1])] }), tx.pure.address(input.user)],
    });

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
    tx: Transaction,
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
            tx.pure.u64(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusBidReceipt`,
                elements: input.receipts.map((receipt) => tx.object(receipt)),
            }),
        ],
    });
    tx.moveCall({
        target: `${config.package.framework}::utils::transfer_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [tx.object(result[0]), tx.pure.address(input.user)],
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
    tx: Transaction,
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
            tx.pure.u64(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusBidReceipt`,
                elements: input.receipts.map((receipt) => tx.object(receipt)),
            }),
            tx.pure.option("u64", input.share),
            tx.pure.address(input.recipient),
        ],
    });

    return tx;
}

export function getSplitBidReceiptTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        index: string;
        receipts: string[];
        share?: string;
        recipient: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_user_entry::simple_split_bid_receipt`,
        typeArguments: [],
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.pure.u64(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusBidReceipt`,
                elements: input.receipts.map((receipt) => tx.object(receipt)),
            }),
            tx.pure.option("u64", input.share),
        ],
    });

    let unwrap0 = tx.moveCall({
        target: `0x1::option::destroy_some`,
        typeArguments: [`${config.packageOrigin.framework}::vault::TypusBidReceipt`],
        arguments: [tx.object(result[0])],
    });

    tx.moveCall({
        target: `${config.package.framework}::vault::transfer_bid_receipt`,
        typeArguments: [],
        arguments: [tx.object(result[1]), tx.pure.address(input.recipient)],
    });

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
    let tx = new Transaction();
    console.assert(input.shares.length == input.recipients.length, "shares.length != recipients.length");

    var receipts = tx.makeMoveVec({
        // type: `${config.packageOrigin.framework}::vault::TypusBidReceipt`,
        elements: input.receipts.map((receipt) => tx.object(receipt)),
    });

    var i = 0;
    while (i < input.shares.length) {
        let share = input.shares[i];
        let recipient = input.recipients[i];
        let result = tx.moveCall({
            target: `${config.package.dovSingle}::tds_user_entry::public_transfer_bid_receipt`,
            typeArguments: input.typeArguments,
            arguments: [
                tx.object(config.registry.dov.dovSingle),
                tx.pure.u64(input.index),
                receipts,
                tx.pure.option("u64", share),
                tx.pure.address(recipient),
            ],
        });

        let unwrap = tx.moveCall({
            target: `0x1::option::destroy_some`,
            typeArguments: [`${config.packageOrigin.framework}::vault::TypusBidReceipt`],
            arguments: [tx.object(result[0])],
        });

        receipts = tx.makeMoveVec({ elements: [unwrap] });

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
    tx: Transaction,
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
        arguments: [tx.object(balance), tx.pure.address(input.user)],
    });

    return tx;
}

export function getCompoundWithRedeemTx(
    config: TypusConfig,
    tx: Transaction,
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
            tx.pure.u64(input.index),
            tx.makeMoveVec({
                type: `${config.packageOrigin.framework}::vault::TypusDepositReceipt`,
                elements: input.receipts.map((receipt) => tx.object(receipt)),
            }),
            tx.object(raiseBalance),
            tx.pure.bool(true),
            tx.pure.bool(false),
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

/**
    entry fun first_price_sealed_bid<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        string: String,
        clock: &Clock,
        ctx: &mut TxContext,
    )
 */
export function getFirstPriceSealedBidTx(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        size: string;
        price: string;
        publicKey: string;
        userPassword: string;
    }
) {
    let data = input.size + "," + input.price;
    let aesEncryptedData = CryptoJS.AES.encrypt(data, input.userPassword).toString();
    let rsaEncryptedData = new NodeRSA(input.publicKey).encrypt(data, "base64");
    tx.moveCall({
        target: `${config.package.dovSingle}::tds_user_entry::first_price_sealed_bid`,
        typeArguments: input.typeArguments,
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.pure.u64(input.index),
            tx.pure.string(aesEncryptedData + "," + rsaEncryptedData),
            tx.object(CLOCK),
        ],
    });
}
