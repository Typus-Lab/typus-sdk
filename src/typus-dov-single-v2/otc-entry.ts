import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import { CLOCK } from "src/constants";
import { splitCoins, TypusConfig, AddressFromBytes } from "src/utils";
import { BcsReader } from "@mysten/bcs";
import { SENDER } from "src/constants";

/**
    entry fun add_otc_config(
        registry: &mut Registry,
        user: address,
        index: u64,
        round: u64,
        size: u64,
        price: u64,
        fee_bp: u64,
        expiration_ts_ms: u64,
        ctx: &mut TxContext,
    ) {
 */
export async function addOtcConfig(
    config: TypusConfig,
    tx: Transaction,
    input: {
        user: string;
        index: string;
        round: string;
        size: string;
        price: string;
        fee_bp: string;
        expiration_ts_ms: string;
    }
) {
    tx.moveCall({
        target: `${config.package.dovSingle}::tds_otc_entry::add_otc_config`,
        typeArguments: [],
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.pure.address(input.user),
            tx.pure.u64(input.index),
            tx.pure.u64(input.round),
            tx.pure.u64(input.size),
            tx.pure.u64(input.price),
            tx.pure.u64(input.fee_bp),
            tx.pure.u64(input.expiration_ts_ms),
        ],
    });
}

/**
    entry fun remove_otc_config(
        registry: &mut Registry,
        user: address,
        index: u64,
        ctx: &TxContext,
    ) {
 */
export async function removeOtcConfig(config: TypusConfig, tx: Transaction, input: { user: string; index: string }) {
    tx.moveCall({
        target: `${config.package.dovSingle}::tds_otc_entry::remove_otc_config`,
        typeArguments: [],
        arguments: [tx.object(config.registry.dov.dovSingle), tx.pure.address(input.user), tx.pure.u64(input.index)],
    });
}

/**
    public fun otc<D_TOKEN, B_TOKEN>(
        registry: &mut Registry,
        index: u64,
        mut balance: Balance<B_TOKEN>,
        clock: &Clock,
        ctx: &mut TxContext,
    ) {
 */
export async function otc(
    config: TypusConfig,
    tx: Transaction,
    input: {
        typeArguments: string[];
        index: string;
        coins: string[];
        amount: string;
    }
) {
    let coin = splitCoins(tx, input.typeArguments[0], input.coins, input.amount);
    let balance = tx.moveCall({
        target: `0x2::coin::into_balance`,
        typeArguments: [input.typeArguments[0]],
        arguments: [tx.object(coin)],
    });
    tx.moveCall({
        target: `${config.package.dovSingle}::tds_otc_entry::otc`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(config.registry.dov.dovSingle), tx.pure.u64(input.index), tx.object(balance), tx.object(CLOCK)],
    });
}

export interface OtcConfig {
    round: string;
    size: string;
    price: string;
    fee_bp: string;
    expiration_ts_ms: string;
    u64Padding: string[];
}
export async function getUserOtcConfigs(
    config: TypusConfig,
    input: {
        user: string;
        indexes: string[];
    }
): Promise<OtcConfig[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    transaction.moveCall({
        target: `${config.package.dovSingle}::tds_otc_entry::get_user_otc_configs`,
        typeArguments: [],
        arguments: [
            transaction.object(config.registry.dov.dovSingle),
            transaction.pure.address(input.user),
            transaction.pure.vector("u64", input.indexes),
        ],
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock: transaction, sender: SENDER })).results;
    // console.log(JSON.stringify(results));
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    // console.log(JSON.stringify(bytes));
    let reader = new BcsReader(new Uint8Array(bytes));
    return reader.readVec((reader) => {
        reader.readULEB();

        return {
            round: reader.read64(),
            size: reader.read64(),
            price: reader.read64(),
            fee_bp: reader.read64(),
            expiration_ts_ms: reader.read64(),
            u64Padding: reader.readVec((reader) => {
                return reader.read64();
            }),
        } as OtcConfig;
    });
}
