import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../constants";

/**
    public(friend) entry fun deposit<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        coins: vector<Coin<D_TOKEN>>,
        amount: u64,
        receipts: vector<TypusDepositReceipt>,
        ctx: &mut TxContext,
    )
*/
export async function getDepositTx(
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
    public(friend) entry fun withdraw<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        share: Option<u64>,
        ctx: &mut TxContext,
    )
*/
export async function getWithdrawTx(
    gasBudget: number,
    typusFrameworkPackageId: string,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    receipts: string[],
    share?: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::tails_staking::withdraw`,
        typeArguments,
        arguments: [
            tx.object(registry),
            tx.pure(index),
            tx.makeMoveVec({
                type: `${typusFrameworkPackageId}::vault::TypusDepositReceipt`,
                objects: receipts.map((id) => tx.object(id)),
            }),
            tx.pure(share ? [share] : []),
            tx.pure(CLOCK),
        ],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    public(friend) entry fun unsubscribe<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        share: Option<u64>,
        ctx: &mut TxContext,
    )
*/
export async function getUnsubscribeTx(
    gasBudget: number,
    typusFrameworkPackageId: string,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    receipts: string[],
    share?: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::tails_staking::unsubscribe`,
        typeArguments,
        arguments: [
            tx.object(registry),
            tx.pure(index),
            tx.makeMoveVec({
                type: `${typusFrameworkPackageId}::vault::TypusDepositReceipt`,
                objects: receipts.map((id) => tx.object(id)),
            }),
            tx.pure(share ? [share] : []),
            tx.pure(CLOCK),
        ],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    public(friend) entry fun claim<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        ctx: &mut TxContext,
    )
*/
export async function getClaimTx(
    gasBudget: number,
    typusFrameworkPackageId: string,
    packageId: string,
    registry: string,
    requests: { typeArguments: string[]; index: string; receipts: string[] }[]
) {
    let tx = new TransactionBlock();
    requests.forEach((request) => {
        tx.moveCall({
            target: `${packageId}::tds_user_entry::claim`,
            typeArguments: request.typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(request.index),
                tx.makeMoveVec({
                    type: `${typusFrameworkPackageId}::vault::TypusDepositReceipt`,
                    objects: request.receipts.map((id) => tx.object(id)),
                }),
            ],
        });
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    public(friend) entry fun harvest<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        ctx: &mut TxContext,
    )
*/
export async function getHarvestTx(
    gasBudget: number,
    typusFrameworkPackageId: string,
    packageId: string,
    registry: string,
    requests: { typeArguments: string[]; index: string; receipts: string[] }[]
) {
    let tx = new TransactionBlock();
    requests.forEach((request) => {
        tx.moveCall({
            target: `${packageId}::tds_user_entry::harvest`,
            typeArguments: request.typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(request.index),
                tx.makeMoveVec({
                    type: `${typusFrameworkPackageId}::vault::TypusDepositReceipt`,
                    objects: request.receipts.map((id) => tx.object(id)),
                }),
            ],
        });
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

export async function getBatchClaimHarvestWithdrawRedeemTx(
    gasBudget: number,
    typusFrameworkPackageId: string,
    packageId: string,
    registry: string,
    claimRequests: { typeArguments: string[]; index: string; receipts: string[] }[],
    harvestRequests: { typeArguments: string[]; index: string; receipts: string[] }[],
    withdrawRequests: { typeArguments: string[]; index: string; receipts: string[] }[],
    redeemRequests: { typeArguments: string[]; index: string; receipts: string[] }[]
) {
    let tx = new TransactionBlock();
    claimRequests.forEach((request) => {
        tx.moveCall({
            target: `${packageId}::tds_user_entry::claim`,
            typeArguments: request.typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(request.index),
                tx.makeMoveVec({
                    type: `${typusFrameworkPackageId}::vault::TypusDepositReceipt`,
                    objects: request.receipts.map((id) => tx.object(id)),
                }),
            ],
        });
    });
    harvestRequests.forEach((request) => {
        tx.moveCall({
            target: `${packageId}::tds_user_entry::harvest`,
            typeArguments: request.typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(request.index),
                tx.makeMoveVec({
                    type: `${typusFrameworkPackageId}::vault::TypusDepositReceipt`,
                    objects: request.receipts.map((id) => tx.object(id)),
                }),
            ],
        });
    });
    withdrawRequests.forEach((request) => {
        tx.moveCall({
            target: `${packageId}::tails_staking::withdraw`,
            typeArguments: request.typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(request.index),
                tx.makeMoveVec({
                    type: `${typusFrameworkPackageId}::vault::TypusDepositReceipt`,
                    objects: request.receipts.map((id) => tx.object(id)),
                }),
                tx.pure([]),
                tx.pure(CLOCK),
            ],
        });
    });
    redeemRequests.forEach((request) => {
        tx.moveCall({
            target: `${packageId}::tds_user_entry::redeem`,
            typeArguments: request.typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(request.index),
                tx.makeMoveVec({
                    type: `${typusFrameworkPackageId}::vault::TypusDepositReceipt`,
                    objects: request.receipts.map((id) => tx.object(id)),
                }),
                tx.pure(CLOCK),
            ],
        });
    });

    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    public(friend) entry fun compound<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusDepositReceipt>,
        ctx: &mut TxContext,
    )
*/
export async function getCompoundTx(
    gasBudget: number,
    typusFrameworkPackageId: string,
    packageId: string,
    registry: string,
    requests: { typeArguments: string[]; index: string; receipts: string[] }[]
) {
    let tx = new TransactionBlock();
    requests.forEach((request) => {
        tx.moveCall({
            target: `${packageId}::tails_staking::compound`,
            typeArguments: request.typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(request.index),
                tx.makeMoveVec({
                    type: `${typusFrameworkPackageId}::vault::TypusDepositReceipt`,
                    objects: request.receipts.map((id) => tx.object(id)),
                }),
                tx.object(CLOCK),
            ],
        });
    });
    tx.setGasBudget(gasBudget);

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
export async function getNewBidTx(
    gasBudget: number,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    coins: string[],
    size: string,
    premium_required: string, // fe float * b_token_decimal
    usingSponsoredGasCoin = false
) {
    let tx = new TransactionBlock();
    if (
        !usingSponsoredGasCoin &&
        (typeArguments[1] == "0x2::sui::SUI" ||
            typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI")
    ) {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(premium_required)]);
        tx.moveCall({
            target: `${packageId}::tails_staking::new_bid`,
            typeArguments,
            arguments: [tx.object(registry), tx.pure(index), tx.makeMoveVec({ objects: [coin] }), tx.pure(size), tx.pure("0x6")],
        });
    } else {
        tx.moveCall({
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
    }
    tx.setGasBudget(gasBudget);

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
export async function getTransferBidReceiptTx(input: {
    gasBudget: number;
    typusFrameworkPackageId: string;
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
                type: `${input.typusFrameworkPackageId}::vault::TypusBidReceipt`,
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
    public(friend) entry fun exercise<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        receipts: vector<TypusBidReceipt>,
        ctx: &mut TxContext,
    )
*/
export async function getExerciseTx(
    gasBudget: number,
    typusFrameworkPackageId: string,
    packageId: string,
    registry: string,
    requests: { typeArguments: string[]; index: string; receipts: string[] }[]
) {
    let tx = new TransactionBlock();
    requests.forEach((request) => {
        tx.moveCall({
            target: `${packageId}::tds_user_entry::exercise`,
            typeArguments: request.typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(request.index),
                tx.makeMoveVec({
                    type: `${typusFrameworkPackageId}::vault::TypusBidReceipt`,
                    objects: request.receipts.map((id) => tx.object(id)),
                }),
            ],
        });
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    public(friend) entry fun refund<TOKEN>(
        registry: &mut Registry,
        ctx: &mut TxContext,
    )
*/
export async function getRebateTx(gasBudget: number, packageId: string, typeArguments: string[], registry: string) {
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

export async function getNewStrategyTx(
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
