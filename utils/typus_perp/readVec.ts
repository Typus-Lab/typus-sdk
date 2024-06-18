import { BcsReader } from "@mysten/bcs";
import { AddressFromBytes } from "../tools";

export function readVecPosition(bytes: Uint8Array) {
    let reader = new BcsReader(bytes);
    return reader.readVec((reader) => {
        reader.read16();
        let position = {
            id: AddressFromBytes(reader.readBytes(32)),
            create_ts_ms: reader.read64(),
            position_id: reader.read64(),
            linked_order_ids: reader.readVec((reader) => reader.read64()),
            linked_order_prices: reader.readVec((reader) => reader.read64()),
            user: AddressFromBytes(reader.readBytes(32)),
            is_long: reader.read8(),
            size: reader.read64(),
            size_decimal: reader.read64(),
            collateral_token: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            collateral_token_decimal: reader.read64(),
            baseToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            quoteToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            collateral_amount: reader.read64(),
            reserve_amount: reader.read64(),
            average_price: reader.read64(),
            entry_borrow_index: reader.read64(),
            entry_funding_rate_index_sign: reader.read8(),
            entry_funding_rate_index: reader.read64(),
            unrealized_loss: reader.read64(),
            unrealized_funding_sign: reader.read8(),
            unrealized_funding_fee: reader.read64(),
            unrealized_borrow_fee: reader.read64(),
            unrealized_rebate: reader.read64(),
            u64_padding: reader.readVec((reader) => reader.read64()),
        };

        return position;
    });
}

export function readVecOrder(bytes: Uint8Array) {
    let reader = new BcsReader(bytes);
    return reader.readVec((reader) => {
        reader.read16();
        let order = {
            id: AddressFromBytes(reader.readBytes(32)),
            create_ts_ms: reader.read64(),
            order_id: reader.read64(),
            linked_position_id: reader
                .readVec((reader) => {
                    return reader.read64();
                })
                .at(0),
            user: AddressFromBytes(reader.readBytes(32)),
            collateral_token: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            collateral_token_decimal: reader.read64(),
            baseToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            quoteToken: String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
            leverage_pct: reader.read64(),
            reduce_only: reader.read8(),
            is_long: reader.read8(),
            is_stop_order: reader.read8(),
            size: reader.read64(),
            size_decimal: reader.read64(),
            trigger_price: reader.read64(),
            oracle_price_when_placing: reader.read64(),
            u64_padding: reader.readVec((reader) => reader.read64()),
        };

        return order;
    });
}

export function readVecShares(bytes: Uint8Array) {
    let reader = new BcsReader(bytes);
    return reader.readVec((reader) => {
        reader.read16();
        let share = {
            user: AddressFromBytes(reader.readBytes(32)),
            user_share_id: reader.read64(),
            share: reader.read64(),
            stake_ts_ms: reader.read64(),
            unlock_ts_ms: reader
                .readVec((reader) => {
                    return reader.read64();
                })
                .at(0),
            last_incentive_price_index: reader.readVec((reader) => [
                String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                reader.read64(),
            ]),
            last_harvest_ts_ms: reader.readVec((reader) => [
                String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                reader.read64(),
            ]),
            unlock_incentive_price_index: reader.readVec((reader) => [
                String.fromCharCode.apply(null, Array.from(reader.readBytes(reader.read8()))),
                reader.read64(),
            ]),
            u64_padding: reader.readVec((reader) => reader.read64()),
        };

        return share;
    });
}
