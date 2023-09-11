import { TransactionBlock } from "@mysten/sui.js";

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
    packageId: string,
    typeArguments: string[],
    registry: string,
    additional_config_registry: string,
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
            target: `${packageId}::typus_dov_single::deposit`,
            typeArguments,
            arguments: [
                tx.pure(registry),
                tx.pure(additional_config_registry),
                tx.pure(index),
                tx.makeMoveVec({ objects: [coin] }),
                tx.pure(amount),
                tx.pure(receipts),
            ],
        });
    } else {
        tx.moveCall({
            target: `${packageId}::typus_dov_single::deposit`,
            typeArguments,
            arguments: [
                tx.pure(registry),
                tx.pure(additional_config_registry),
                tx.pure(index),
                tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }),
                tx.pure(amount),
                tx.pure(receipts),
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
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    receipts: string[],
    share?: string
) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::typus_dov_single::withdraw`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index), tx.pure(receipts), tx.pure(share ? [share] : [])],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}
// /**
//     public(friend) entry fun unsubscribe<D_TOKEN, B_TOKEN, O_TOKEN>(
//         registry: &mut Registry,
//         index: u64,
//         receipts: vector<TypusDepositReceipt>,
//         share: Option<u64>,
//         ctx: &mut TxContext,
//     )
//     @param typeArguments [Deposit Vault Token]
// */
// export async function getUnsubscribeTx(
//     gasBudget: number,
//     packageId: string,
//     typeArguments: string[],
//     registry: string,
//     index: string,
//     receipts: string[],
//     share?: string
// ) {
//     let tx = new TransactionBlock();
//     tx.moveCall({
//         target: `${packageId}::typus_dov_single::unsubscribe`,
//         typeArguments,
//         arguments: [
//             tx.pure(registry),
//             tx.pure(index),
//             tx.pure(receipts),
//             tx.pure(share ? [share] : []),
//         ],
//     });
//     tx.setGasBudget(gasBudget);

//     return tx;
// }
// /**
//     public(friend) entry fun claim<TOKEN>(
//         registry: &mut Registry,
//         index: u64,
//         ctx: &mut TxContext
//     )
//     @param typeArguments [Deposit Vault Token]
// */
// export async function getClaimTx(
//     gasBudget: number,
//     packageId: string,
//     typeArguments: string[],
//     registry: string,
//     additional_config_registry: string,
//     index: string
// ) {
//     let tx = new TransactionBlock();
//     tx.moveCall({
//         target: `${packageId}::typus_dov_single::claim`,
//         typeArguments,
//         arguments: [tx.pure(registry), tx.pure(additional_config_registry), tx.pure(index)],
//     });
//     tx.setGasBudget(gasBudget);

//     return tx;
// }
// /**
//     public(friend) entry fun harvest<TOKEN>(
//         registry: &mut Registry,
//         index: u64,
//         ctx: &mut TxContext
//     )
//     @param typeArguments [Bid Vault Token]
// */
// export async function getHarvestTx(
//     gasBudget: number,
//     packageId: string,
//     typeArguments: string[],
//     registry: string,
//     additional_config_registry: string,
//     index: string
// ) {
//     let tx = new TransactionBlock();
//     tx.moveCall({
//         target: `${packageId}::typus_dov_single::harvest`,
//         typeArguments,
//         arguments: [tx.pure(registry), tx.pure(additional_config_registry), tx.pure(index)],
//     });
//     tx.setGasBudget(gasBudget);

//     return tx;
// }
// /**
//     public(friend) entry fun claim_and_harvest<D_TOKEN, B_TOKEN>(
//         registry: &mut Registry,
//         index: u64,
//         ctx: &mut TxContext
//     )
//     @param typeArguments [Deposit Vault Token, Bid Vault Token]
// */
// export async function getClaimAndHarvestTx(
//     gasBudget: number,
//     packageId: string,
//     typeArguments: string[],
//     registry: string,
//     additional_config_registry: string,
//     index: string
// ) {
//     let tx = new TransactionBlock();
//     tx.moveCall({
//         target: `${packageId}::typus_dov_single::claim_and_harvest`,
//         typeArguments,
//         arguments: [tx.pure(registry), tx.pure(additional_config_registry), tx.pure(index)],
//     });
//     tx.setGasBudget(gasBudget);

//     return tx;
// }
// /**
//     public(friend) entry fun compound<TOKEN, O_TOKEN>(
//         registry: &mut Registry,
//         index: u64,
//         ctx: &mut TxContext,
//     )
//     @param typeArguments [Deposit Vault Token, Oracle Token]
// */
// export async function getCompoundTx(
//     gasBudget: number,
//     packageId: string,
//     typeArguments: string[],
//     registry: string,
//     additional_config_registry: string,
//     index: string
// ) {
//     let tx = new TransactionBlock();
//     tx.moveCall({
//         target: `${packageId}::typus_dov_single::compound`,
//         typeArguments,
//         arguments: [tx.pure(registry), tx.pure(additional_config_registry), tx.pure(index)],
//     });
//     tx.setGasBudget(gasBudget);

//     return tx;
// }
// /**
//     public(friend) entry fun new_bid<D_TOKEN, B_TOKEN, O_TOKEN>(
//         registry: &mut Registry,
//         index: u64,
//         price_oracle: &Oracle<O_TOKEN>,
//         clock: &Clock,
//         coins: vector<Coin<B_TOKEN>>,
//         size: u64,
//         ctx: &mut TxContext,
//     )
//     @param typeArguments [Deposit Vault Token, Bid Vault Token, Oracle Token]
// */
// export async function getNewBidTx(
//     gasBudget: number,
//     packageId: string,
//     typeArguments: string[],
//     registry: string,
//     additional_config_registry: string,
//     index: string,
//     priceOracle: string,
//     coins: string[],
//     size: string,
//     premium_required: string, // fe float * b_token_decimal
//     usingSponsoredGasCoin = false
// ) {
//     let tx = new TransactionBlock();
//     if (
//         !usingSponsoredGasCoin &&
//         (typeArguments[1] == "0x2::sui::SUI" ||
//             typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI")
//     ) {
//         let [coin] = tx.splitCoins(tx.gas, [tx.pure(premium_required)]);
//         tx.moveCall({
//             target: `${packageId}::typus_dov_single::new_bid`,
//             typeArguments,
//             arguments: [
//                 tx.pure(registry),
//                 tx.pure(additional_config_registry),
//                 tx.pure(index),
//                 tx.pure(priceOracle),
//                 tx.pure("0x6"),
//                 tx.makeMoveVec({ objects: [coin] }),
//                 tx.pure(size),
//             ],
//         });
//     } else {
//         tx.moveCall({
//             target: `${packageId}::typus_dov_single::new_bid`,
//             typeArguments,
//             arguments: [
//                 tx.pure(registry),
//                 tx.pure(additional_config_registry),
//                 tx.pure(index),
//                 tx.pure(priceOracle),
//                 tx.pure("0x6"),
//                 tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }),
//                 tx.pure(size),
//             ],
//         });
//     }
//     tx.setGasBudget(gasBudget);

//     return tx;
// }
