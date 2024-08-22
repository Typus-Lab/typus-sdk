import { TransactionBlock, TransactionObjectArgument } from "@mysten/sui.js/transactions";
import { match } from "assert";
import { CLOCK } from "src/constants";
import { TypusConfig } from "src/utils";

export function getTokenRaiseFundTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        typusTokenType: string;
        index: string;
        receipts: string[] | TransactionObjectArgument[];
        raiseCoins: string[];
        raiseAmount: string;
        raiseFromPremium: boolean;
        raiseFromInactive: boolean;
        user: string;
    }
) {
    let typusTokenRegistry = "";
    switch (input.typusTokenType.split("::")[1]) {
        case "mfud":
            typusTokenRegistry = config.registry.token.mfud;
            break;
        default:
            console.log("No such token exists!");
            break;
    }
    let typusTokenBalance =
        input.raiseCoins.length > 0
            ? tx.moveCall({
                  target: `0x2::coin::into_balance`,
                  typeArguments: [input.typusTokenType],
                  arguments: [
                      tx.object(
                          tx.moveCall({
                              target: `${config.package.token}::${input.typusTokenType.split("::")[1]}::mint`,
                              arguments: [
                                  tx.object(typusTokenRegistry),
                                  tx.makeMoveVec({ objects: input.raiseCoins }),
                                  tx.pure(input.raiseAmount),
                              ],
                          })
                      ),
                  ],
              })
            : tx.moveCall({
                  target: `0x2::balance::zero`,
                  typeArguments: [input.typusTokenType],
                  arguments: [],
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
            tx.object(typusTokenBalance),
            tx.pure(input.raiseFromPremium),
            tx.pure(input.raiseFromInactive),
            tx.object(CLOCK),
        ],
    });
    tx.transferObjects([tx.object(result[0])], input.user);

    return tx;
}

export function getTokenReduceFundTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        typusTokenType: string;
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
    let typusTokenRegistry = "";
    switch (input.typusTokenType.split("::")[1]) {
        case "mfud":
            typusTokenRegistry = config.registry.token.mfud;
            break;
        default:
            console.log("No such token exists!");
            break;
    }
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
    if (input.typeArguments[0] == input.typusTokenType) {
        let typusToken = tx.moveCall({
            target: `0x2::coin::from_balance`,
            typeArguments: [input.typeArguments[0]],
            arguments: [tx.object(result[1])],
        });
        let token = tx.moveCall({
            target: `${config.package.token}::${input.typusTokenType.split("::")[1]}::burn`,
            arguments: [tx.object(typusTokenRegistry), tx.object(typusToken)],
        });
        tx.transferObjects([tx.object(token)], input.user);
    } else {
        tx.moveCall({
            target: `${config.package.framework}::utils::transfer_balance`,
            typeArguments: [input.typeArguments[0]],
            arguments: [tx.object(result[1]), tx.pure(input.user)],
        });
    }
    if (input.typeArguments[1] == input.typusTokenType) {
        let typusToken = tx.moveCall({
            target: `0x2::coin::from_balance`,
            typeArguments: [input.typeArguments[1]],
            arguments: [tx.object(result[2])],
        });
        let token = tx.moveCall({
            target: `${config.package.token}::${input.typusTokenType.split("::")[1]}::burn`,
            arguments: [tx.object(typusTokenRegistry), tx.object(typusToken)],
        });
        tx.transferObjects([tx.object(token)], input.user);
    } else {
        tx.moveCall({
            target: `${config.package.framework}::utils::transfer_balance`,
            typeArguments: [input.typeArguments[1]],
            arguments: [tx.object(result[2]), tx.pure(input.user)],
        });
    }
    if (input.typeArguments[2] == input.typusTokenType) {
        let typusToken = tx.moveCall({
            target: `0x2::coin::from_balance`,
            typeArguments: [input.typeArguments[2]],
            arguments: [tx.object(result[3])],
        });
        let token = tx.moveCall({
            target: `${config.package.token}::${input.typusTokenType.split("::")[1]}::burn`,
            arguments: [tx.object(typusTokenRegistry), tx.object(typusToken)],
        });
        tx.transferObjects([tx.object(token)], input.user);
    } else {
        tx.moveCall({
            target: `${config.package.framework}::utils::transfer_balance`,
            typeArguments: [input.typeArguments[2]],
            arguments: [tx.object(result[3]), tx.pure(input.user)],
        });
    }

    return tx;
}

export function getTokenNewBidTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        typusTokenType: string;
        index: string;
        coins: string[];
        size: string;
        premium_required: string;
        user: string;
    }
) {
    let typusTokenRegistry = "";
    switch (input.typusTokenType.split("::")[1]) {
        case "mfud":
            typusTokenRegistry = config.registry.token.mfud;
            break;
        default:
            console.log("No such token exists!");
            break;
    }
    let mToken = tx.moveCall({
        target: `${config.package.token}::${input.typusTokenType.split("::")[1]}::mint`,
        arguments: [
            tx.object(typusTokenRegistry),
            tx.makeMoveVec({ objects: input.coins.map((id) => tx.object(id)) }),
            tx.pure(input.premium_required),
        ],
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
            tx.makeMoveVec({ objects: [mToken] }),
            tx.pure(input.size),
            tx.pure("0x6"),
        ],
    });
    tx.transferObjects([tx.object(result[0])], input.user);
    let fud_coin = tx.moveCall({
        target: `${config.package.token}::${input.typusTokenType.split("::")[1]}::burn`,
        arguments: [tx.object(typusTokenRegistry), tx.object(result[1])],
    });
    tx.transferObjects([tx.object(fud_coin)], input.user);
    return tx;
}

export function getTokenExerciseTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        typusTokenType: string;
        index: string;
        receipts: string[] | TransactionObjectArgument[];
        user: string;
    }
) {
    let typusTokenRegistry = "";
    switch (input.typusTokenType.split("::")[1]) {
        case "mfud":
            typusTokenRegistry = config.registry.token.mfud;
            break;
        default:
            console.log("No such token exists!");
            break;
    }
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
    let mToken = tx.moveCall({
        target: `0x2::coin::from_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [tx.object(result[0])],
    });
    let token = tx.moveCall({
        target: `${config.package.token}::${input.typusTokenType.split("::")[1]}::burn`,
        arguments: [tx.object(typusTokenRegistry), tx.object(mToken)],
    });
    tx.transferObjects([tx.object(token)], input.user);

    return tx;
}

export function getTokenRebateTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArgument: string;
        typusTokenType: string;
        user: string;
    }
) {
    let typusTokenRegistry = "";
    switch (input.typusTokenType.split("::")[1]) {
        case "mfud":
            typusTokenRegistry = config.registry.token.mfud;
            break;
        default:
            console.log("No such token exists!");
            break;
    }
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
    let mToken = tx.moveCall({
        target: `0x2::coin::from_balance`,
        typeArguments: [input.typeArgument],
        arguments: [tx.object(balance)],
    });
    let token = tx.moveCall({
        target: `${config.package.token}::${input.typusTokenType.split("::")[1]}::burn`,
        arguments: [tx.object(typusTokenRegistry), tx.object(mToken)],
    });
    tx.transferObjects([tx.object(token)], input.user);

    return tx;
}

export function getTokenCompoundWithRedeemTx(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        typusTokenType: string;
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

    return getTokenReduceFundTx(config, tx, {
        typeArguments: input.typeArguments,
        typusTokenType: input.typusTokenType,
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
