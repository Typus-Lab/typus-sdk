import { PUBLISHED_AT } from "..";
import { ObjectArg, obj, option, pure, vector } from "../../_framework/util";
import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";

export interface OrderFilledArgs {
    version: ObjectArg;
    order: ObjectArg;
    originalPosition: ObjectArg | TransactionArgument | null;
    nextPositionId: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    cumulativeFundingRate: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function orderFilled(txb: TransactionBlock, typeArg: string, args: OrderFilledArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::order_filled`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.order),
            option(txb, `0x0::position::Position`, args.originalPosition),
            pure(txb, args.nextPositionId, `u64`),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
            pure(txb, args.tradingPairOraclePrice, `u64`),
            pure(txb, args.tradingPairOraclePriceDecimal, `u64`),
            pure(txb, args.cumulativeFundingRate, `u64`),
            pure(txb, args.tradingFeeRate, `u64`),
            pure(txb, args.tradingFeeDecimal, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface CalculateUnrealizedPnlArgs {
    position: ObjectArg;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
}

export function calculateUnrealizedPnl(txb: TransactionBlock, args: CalculateUnrealizedPnlArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::calculate_unrealized_pnl`,
        arguments: [
            obj(txb, args.position),
            pure(txb, args.tradingPairOraclePrice, `u64`),
            pure(txb, args.tradingPairOraclePriceDecimal, `u64`),
            pure(txb, args.tradingFeeRate, `u64`),
            pure(txb, args.tradingFeeDecimal, `u64`),
        ],
    });
}

export interface CalculatedRealizedPnlUsdArgs {
    side: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    entryPrice: bigint | TransactionArgument;
    exitPrice: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
}

export function calculatedRealizedPnlUsd(txb: TransactionBlock, args: CalculatedRealizedPnlUsdArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::calculated_realized_pnl_usd`,
        arguments: [
            pure(txb, args.side, `bool`),
            pure(txb, args.size, `u64`),
            pure(txb, args.entryPrice, `u64`),
            pure(txb, args.exitPrice, `u64`),
            pure(txb, args.sizeDecimal, `u64`),
            pure(txb, args.priceDecimal, `u64`),
        ],
    });
}

export interface CheckOptionCollateralPositionLiquidatedArgs {
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    position: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    maintenanceMarginRateBp: bigint | TransactionArgument;
    cumulativeFundingRate: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function checkOptionCollateralPositionLiquidated(
    txb: TransactionBlock,
    typeArg: string,
    args: CheckOptionCollateralPositionLiquidatedArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::check_option_collateral_position_liquidated`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.dovRegistry),
            obj(txb, args.typusOracle),
            obj(txb, args.position),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
            pure(txb, args.tradingPairOraclePrice, `u64`),
            pure(txb, args.tradingPairOraclePriceDecimal, `u64`),
            pure(txb, args.tradingFeeRate, `u64`),
            pure(txb, args.tradingFeeDecimal, `u64`),
            pure(txb, args.maintenanceMarginRateBp, `u64`),
            pure(txb, args.cumulativeFundingRate, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface CheckOrderFilledArgs {
    order: ObjectArg;
    oraclePrice: bigint | TransactionArgument;
}

export function checkOrderFilled(txb: TransactionBlock, args: CheckOrderFilledArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::check_order_filled`,
        arguments: [obj(txb, args.order), pure(txb, args.oraclePrice, `u64`)],
    });
}

export interface CheckPositionLiquidatedArgs {
    position: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    maintenanceMarginRateBp: bigint | TransactionArgument;
    cumulativeFundingRate: bigint | TransactionArgument;
}

export function checkPositionLiquidated(txb: TransactionBlock, args: CheckPositionLiquidatedArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::check_position_liquidated`,
        arguments: [
            obj(txb, args.position),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
            pure(txb, args.tradingPairOraclePrice, `u64`),
            pure(txb, args.tradingPairOraclePriceDecimal, `u64`),
            pure(txb, args.tradingFeeRate, `u64`),
            pure(txb, args.tradingFeeDecimal, `u64`),
            pure(txb, args.maintenanceMarginRateBp, `u64`),
            pure(txb, args.cumulativeFundingRate, `u64`),
        ],
    });
}

export interface CreateOrderArgs {
    version: ObjectArg;
    symbol: ObjectArg;
    leveragePct: bigint | TransactionArgument;
    reduceOnly: boolean | TransactionArgument;
    isLong: boolean | TransactionArgument;
    isStopOrder: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
    collateral: ObjectArg;
    collateralTokenDecimal: bigint | TransactionArgument;
    linkedPositionId: bigint | TransactionArgument | TransactionArgument | null;
    orderId: bigint | TransactionArgument;
    oraclePrice: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function createOrder(txb: TransactionBlock, typeArg: string, args: CreateOrderArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::create_order`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.symbol),
            pure(txb, args.leveragePct, `u64`),
            pure(txb, args.reduceOnly, `bool`),
            pure(txb, args.isLong, `bool`),
            pure(txb, args.isStopOrder, `bool`),
            pure(txb, args.size, `u64`),
            pure(txb, args.sizeDecimal, `u64`),
            pure(txb, args.triggerPrice, `u64`),
            obj(txb, args.collateral),
            pure(txb, args.collateralTokenDecimal, `u64`),
            pure(txb, args.linkedPositionId, `0x1::option::Option<u64>`),
            pure(txb, args.orderId, `u64`),
            pure(txb, args.oraclePrice, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface CreateOrderWithBidReceiptsArgs {
    version: ObjectArg;
    symbol: ObjectArg;
    depositToken: ObjectArg;
    leveragePct: bigint | TransactionArgument;
    reduceOnly: boolean | TransactionArgument;
    isLong: boolean | TransactionArgument;
    isStopOrder: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
    collateralBidReceipts: Array<ObjectArg> | TransactionArgument;
    depositTokenDecimal: bigint | TransactionArgument;
    linkedPositionId: bigint | TransactionArgument | TransactionArgument | null;
    orderId: bigint | TransactionArgument;
    oraclePrice: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function createOrderWithBidReceipts(txb: TransactionBlock, args: CreateOrderWithBidReceiptsArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::create_order_with_bid_receipts`,
        arguments: [
            obj(txb, args.version),
            obj(txb, args.symbol),
            obj(txb, args.depositToken),
            pure(txb, args.leveragePct, `u64`),
            pure(txb, args.reduceOnly, `bool`),
            pure(txb, args.isLong, `bool`),
            pure(txb, args.isStopOrder, `bool`),
            pure(txb, args.size, `u64`),
            pure(txb, args.sizeDecimal, `u64`),
            pure(txb, args.triggerPrice, `u64`),
            vector(
                txb,
                `0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118::vault::TypusBidReceipt`,
                args.collateralBidReceipts
            ),
            pure(txb, args.depositTokenDecimal, `u64`),
            pure(txb, args.linkedPositionId, `0x1::option::Option<u64>`),
            pure(txb, args.orderId, `u64`),
            pure(txb, args.oraclePrice, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export function getMaxOrderTypeTag(txb: TransactionBlock) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_max_order_type_tag`, arguments: [] });
}

export function getOrderCollateralToken(txb: TransactionBlock, order: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_order_collateral_token`, arguments: [obj(txb, order)] });
}

export function getOrderId(txb: TransactionBlock, order: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_order_id`, arguments: [obj(txb, order)] });
}

export function getOrderLinkedPositionId(txb: TransactionBlock, order: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_order_linked_position_id`, arguments: [obj(txb, order)] });
}

export function getOrderPrice(txb: TransactionBlock, order: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_order_price`, arguments: [obj(txb, order)] });
}

export function getOrderSide(txb: TransactionBlock, order: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_order_side`, arguments: [obj(txb, order)] });
}

export function getOrderSize(txb: TransactionBlock, order: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_order_size`, arguments: [obj(txb, order)] });
}

export function getOrderTypeTag(txb: TransactionBlock, order: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_order_type_tag`, arguments: [obj(txb, order)] });
}

export function getOrderUser(txb: TransactionBlock, order: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_order_user`, arguments: [obj(txb, order)] });
}

export function getPositionId(txb: TransactionBlock, position: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_position_id`, arguments: [obj(txb, position)] });
}

export function getPositionSide(txb: TransactionBlock, position: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_position_side`, arguments: [obj(txb, position)] });
}

export function getPositionSize(txb: TransactionBlock, position: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_position_size`, arguments: [obj(txb, position)] });
}

export function getPositionUser(txb: TransactionBlock, position: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_position_user`, arguments: [obj(txb, position)] });
}

export function getReserveAmount(txb: TransactionBlock, position: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::get_reserve_amount`, arguments: [obj(txb, position)] });
}

export function isOptionCollateralOrder(txb: TransactionBlock, order: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::is_option_collateral_order`, arguments: [obj(txb, order)] });
}

export function isOptionCollateralPosition(txb: TransactionBlock, position: ObjectArg) {
    return txb.moveCall({ target: `${PUBLISHED_AT}::position::is_option_collateral_position`, arguments: [obj(txb, position)] });
}

export interface OrderFilledWithBidReceiptsCollateralArgs {
    version: ObjectArg;
    liquidityPool: ObjectArg;
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    order: ObjectArg;
    originalPosition: ObjectArg | TransactionArgument | null;
    nextPositionId: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    cumulativeFundingRate: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    referralFeeRebateBp: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function orderFilledWithBidReceiptsCollateral(
    txb: TransactionBlock,
    typeArg: string,
    args: OrderFilledWithBidReceiptsCollateralArgs
) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::order_filled_with_bid_receipts_collateral`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.liquidityPool),
            obj(txb, args.dovRegistry),
            obj(txb, args.typusOracle),
            obj(txb, args.order),
            option(txb, `0x0::position::Position`, args.originalPosition),
            pure(txb, args.nextPositionId, `u64`),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
            pure(txb, args.tradingPairOraclePrice, `u64`),
            pure(txb, args.tradingPairOraclePriceDecimal, `u64`),
            pure(txb, args.cumulativeFundingRate, `u64`),
            pure(txb, args.tradingFeeRate, `u64`),
            pure(txb, args.tradingFeeDecimal, `u64`),
            pure(txb, args.referralFeeRebateBp, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface ReduceOptionCollateralPositionSizeArgs {
    version: ObjectArg;
    liquidityPool: ObjectArg;
    dovRegistry: ObjectArg;
    typusOracle: ObjectArg;
    position: ObjectArg;
    nextPositionId: bigint | TransactionArgument;
    nextOrderId: bigint | TransactionArgument;
    symbol: ObjectArg;
    orderSize: bigint | TransactionArgument | TransactionArgument | null;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    cumulativeFundingRate: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    referralFeeRebateBp: bigint | TransactionArgument;
    liquidityTokenDecimal: bigint | TransactionArgument;
    clock: ObjectArg;
}

export function reduceOptionCollateralPositionSize(txb: TransactionBlock, typeArg: string, args: ReduceOptionCollateralPositionSizeArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::reduce_option_collateral_position_size`,
        typeArguments: [typeArg],
        arguments: [
            obj(txb, args.version),
            obj(txb, args.liquidityPool),
            obj(txb, args.dovRegistry),
            obj(txb, args.typusOracle),
            obj(txb, args.position),
            pure(txb, args.nextPositionId, `u64`),
            pure(txb, args.nextOrderId, `u64`),
            obj(txb, args.symbol),
            pure(txb, args.orderSize, `0x1::option::Option<u64>`),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
            pure(txb, args.tradingPairOraclePrice, `u64`),
            pure(txb, args.tradingPairOraclePriceDecimal, `u64`),
            pure(txb, args.cumulativeFundingRate, `u64`),
            pure(txb, args.tradingFeeRate, `u64`),
            pure(txb, args.tradingFeeDecimal, `u64`),
            pure(txb, args.referralFeeRebateBp, `u64`),
            pure(txb, args.liquidityTokenDecimal, `u64`),
            obj(txb, args.clock),
        ],
    });
}

export interface RemoveOrderArgs {
    version: ObjectArg;
    order: ObjectArg;
}

export function removeOrder(txb: TransactionBlock, typeArg: string, args: RemoveOrderArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::remove_order`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.order)],
    });
}

export interface RemoveOrderWithBidReceiptsArgs {
    version: ObjectArg;
    order: ObjectArg;
}

export function removeOrderWithBidReceipts(txb: TransactionBlock, args: RemoveOrderWithBidReceiptsArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::remove_order_with_bid_receipts`,
        arguments: [obj(txb, args.version), obj(txb, args.order)],
    });
}

export interface RemovePositionArgs {
    version: ObjectArg;
    position: ObjectArg;
}

export function removePosition(txb: TransactionBlock, typeArg: string, args: RemovePositionArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::remove_position`,
        typeArguments: [typeArg],
        arguments: [obj(txb, args.version), obj(txb, args.position)],
    });
}

export interface RemovePositionWithBidReceiptsArgs {
    version: ObjectArg;
    position: ObjectArg;
}

export function removePositionWithBidReceipts(txb: TransactionBlock, args: RemovePositionWithBidReceiptsArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::remove_position_with_bid_receipts`,
        arguments: [obj(txb, args.version), obj(txb, args.position)],
    });
}

export interface UpdatePositionFundingRateArgs {
    position: ObjectArg;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    cumulativeFundingRate: bigint | TransactionArgument;
}

export function updatePositionFundingRate(txb: TransactionBlock, args: UpdatePositionFundingRateArgs) {
    return txb.moveCall({
        target: `${PUBLISHED_AT}::position::update_position_funding_rate`,
        arguments: [
            obj(txb, args.position),
            pure(txb, args.collateralOraclePrice, `u64`),
            pure(txb, args.collateralOraclePriceDecimal, `u64`),
            pure(txb, args.tradingPairOraclePrice, `u64`),
            pure(txb, args.tradingPairOraclePriceDecimal, `u64`),
            pure(txb, args.cumulativeFundingRate, `u64`),
        ],
    });
}
