import { TransactionBlock, TransactionObjectArgument } from "@mysten/sui.js/transactions";
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
export declare function getRaiseFundTx(input: {
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
}): TransactionBlock;
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
export declare function getReduceFundTx(input: {
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
}): TransactionBlock;
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
export declare function getRefreshDepositSnapshotTx(input: {
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
}): TransactionBlock;
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
export declare function getNewBidTx(input: {
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
    premium_required: string;
    user: string;
    usingSponsoredGasCoin?: boolean;
}): TransactionBlock;
/**
    public(friend) entry fun exercise<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusBidReceipt>,
        ctx: &mut TxContext,
    )
*/
export declare function getExerciseTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[] | TransactionObjectArgument[];
    user: string;
}): TransactionBlock;
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
export declare function getTransferBidReceiptTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArguments: string[];
    index: string;
    receipts: string[];
    share?: string;
    recipient: string;
}): TransactionBlock;
export declare function getSplitBidReceiptTx(input: {
    tx: TransactionBlock;
    typusFrameworkOriginPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    index: string;
    receipts: string[];
    share: string;
    recipient: string;
}): import("@mysten/sui.js/transactions").TransactionResult;
export declare function getMultiTransferBidReceiptTx(input: {
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
}): TransactionBlock;
/**
    public(friend) entry fun refund<TOKEN>(
        registry: &mut Registry,
        ctx: &mut TxContext,
    )
*/
export declare function getRebateTx(input: {
    tx: TransactionBlock;
    typusFrameworkPackageId: string;
    typusDovSinglePackageId: string;
    typusDovSingleRegistry: string;
    typeArgument: string;
    user: string;
}): TransactionBlock;
export declare function getCompoundWithRedeemTx(input: {
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
}): TransactionBlock;
