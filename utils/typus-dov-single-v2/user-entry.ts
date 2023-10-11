import { TransactionBlock } from "@mysten/sui.js";
import { CLOCK } from "../../constants";

/**
    public(friend) entry fun deposit<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: u64,
        coins: vector<Coin<D_TOKEN>>,
        amount: u64,
        receipts: vector<TypusDepositReceipt>,
        ctx: &mut TxContext,
    )
*/
export async function getDepositTx(
    gasBudget: number,
    typusFrameworkPackageId: string,
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    coins: string[],
    amount: string,
    receipts: string[],
    usingSponsoredGasCoin = false
) {
    let tx = new TransactionBlock();
    if (
        !usingSponsoredGasCoin &&
        (typeArguments[0] == "0x2::sui::SUI" ||
            typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI")
    ) {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
        tx.moveCall({
            target: `${packageId}::tails_staking::deposit`,
            typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(index),
                tx.makeMoveVec({ objects: [coin] }),
                tx.pure(amount),
                tx.makeMoveVec({
                    type: `${typusFrameworkPackageId}::vault::TypusDepositReceipt`,
                    objects: receipts.map((id) => tx.object(id)),
                }),
                tx.pure(CLOCK),
            ],
        });
    } else {
        tx.moveCall({
            target: `${packageId}::tails_staking::deposit`,
            typeArguments,
            arguments: [
                tx.object(registry),
                tx.pure(index),
                tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }),
                tx.pure(amount),
                tx.makeMoveVec({
                    type: `${typusFrameworkPackageId}::vault::TypusDepositReceipt`,
                    objects: receipts.map((id) => tx.object(id)),
                }),
                tx.pure(CLOCK),
            ],
        });
    }
    tx.setGasBudget(gasBudget);

    return tx;
}

/**
    public(friend) entry fun withdraw<D_TOKEN, B_TOKEN, O_TOKEN>(
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
    public(friend) entry fun unsubscribe<D_TOKEN, B_TOKEN, O_TOKEN>(
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
    public(friend) entry fun claim<D_TOKEN, B_TOKEN, O_TOKEN>(
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
            target: `${packageId}::typus_dov_single::claim`,
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
    public(friend) entry fun harvest<D_TOKEN, B_TOKEN, O_TOKEN>(
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
            target: `${packageId}::typus_dov_single::harvest`,
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
    public(friend) entry fun compound<D_TOKEN, B_TOKEN, O_TOKEN>(
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
    public(friend) entry fun new_bid<D_TOKEN, B_TOKEN, O_TOKEN>(
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
            target: `${packageId}::typus_dov_single::new_bid`,
            typeArguments,
            arguments: [tx.object(registry), tx.pure(index), tx.makeMoveVec({ objects: [coin] }), tx.pure(size), tx.pure("0x6")],
        });
    } else {
        tx.moveCall({
            target: `${packageId}::typus_dov_single::new_bid`,
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
    public(friend) entry fun exercise<D_TOKEN, B_TOKEN, O_TOKEN>(
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
    requests: [{ typeArguments: string[]; index: string; receipts: string[] }]
) {
    let tx = new TransactionBlock();
    requests.forEach((request) => {
        tx.moveCall({
            target: `${packageId}::typus_dov_single::exercise`,
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
export async function getRefundTx(gasBudget: number, packageId: string, typeArguments: string[], registry: string) {
    let tx = new TransactionBlock();
    typeArguments.forEach((typeArgument) => {
        tx.moveCall({
            target: `${packageId}::typus_dov_single::refund`,
            typeArguments: [typeArgument],
            arguments: [tx.object(registry)],
        });
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
