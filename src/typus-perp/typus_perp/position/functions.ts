import { PUBLISHED_AT } from "..";
import { Option } from "../../_dependencies/source/0x1/option/structs";
import { TypusBidReceipt } from "../../_dependencies/source/0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/vault/structs";
import { obj, option, pure, vector } from "../../_framework/util";
import { Position } from "./structs";
import { Transaction, TransactionArgument, TransactionObjectInput } from "@mysten/sui/transactions";

export interface SplitBidReceiptArgs {
    dovRegistry: TransactionObjectInput;
    position: TransactionObjectInput;
    size: bigint | TransactionArgument;
}

export function splitBidReceipt(tx: Transaction, args: SplitBidReceiptArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::split_bid_receipt`,
        arguments: [obj(tx, args.dovRegistry), obj(tx, args.position), pure(tx, args.size, `u64`)],
    });
}

export interface OrderFilledArgs {
    version: TransactionObjectInput;
    order: TransactionObjectInput;
    originalPosition: TransactionObjectInput | TransactionArgument | null;
    nextPositionId: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
    cumulativeFundingRateIndexSign: boolean | TransactionArgument;
    cumulativeFundingRateIndex: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    clock: TransactionObjectInput;
}

export function orderFilled(tx: Transaction, typeArg: string, args: OrderFilledArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::order_filled`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            obj(tx, args.order),
            option(tx, `${Position.$typeName}`, args.originalPosition),
            pure(tx, args.nextPositionId, `u64`),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.cumulativeBorrowRate, `u64`),
            pure(tx, args.cumulativeFundingRateIndexSign, `bool`),
            pure(tx, args.cumulativeFundingRateIndex, `u64`),
            pure(tx, args.tradingFeeRate, `u64`),
            pure(tx, args.tradingFeeDecimal, `u64`),
            obj(tx, args.clock),
        ],
    });
}

export interface AddPositionLinkedOrderInfoArgs {
    position: TransactionObjectInput;
    linkedOrderId: bigint | TransactionArgument;
    linkedOrderPrice: bigint | TransactionArgument;
}

export function addPositionLinkedOrderInfo(tx: Transaction, args: AddPositionLinkedOrderInfoArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::add_position_linked_order_info`,
        arguments: [obj(tx, args.position), pure(tx, args.linkedOrderId, `u64`), pure(tx, args.linkedOrderPrice, `u64`)],
    });
}

export interface CalculateFilled_Args {
    position: TransactionObjectInput;
    reduceOnly: boolean | TransactionArgument;
    orderSide: boolean | TransactionArgument;
    orderSize: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
}

export function calculateFilled_(tx: Transaction, args: CalculateFilled_Args) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::calculate_filled_`,
        arguments: [
            obj(tx, args.position),
            pure(tx, args.reduceOnly, `bool`),
            pure(tx, args.orderSide, `bool`),
            pure(tx, args.orderSize, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
        ],
    });
}

export interface CalculateIntrinsicValueArgs {
    dovRegistry: TransactionObjectInput;
    typusOracle: TransactionObjectInput;
    receipts: Array<TransactionObjectInput> | TransactionArgument;
    clock: TransactionObjectInput;
}

export function calculateIntrinsicValue(tx: Transaction, typeArg: string, args: CalculateIntrinsicValueArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::calculate_intrinsic_value`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.dovRegistry),
            obj(tx, args.typusOracle),
            vector(tx, `${TypusBidReceipt.$typeName}`, args.receipts),
            obj(tx, args.clock),
        ],
    });
}

export interface CalculatePositionFundingRateArgs {
    position: TransactionObjectInput;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    cumulativeFundingRateIndexSign: boolean | TransactionArgument;
    cumulativeFundingRateIndex: bigint | TransactionArgument;
}

export function calculatePositionFundingRate(tx: Transaction, args: CalculatePositionFundingRateArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::calculate_position_funding_rate`,
        arguments: [
            obj(tx, args.position),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.cumulativeFundingRateIndexSign, `bool`),
            pure(tx, args.cumulativeFundingRateIndex, `u64`),
        ],
    });
}

export interface CalculateRealizedPnlUsdArgs {
    side: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    entryPrice: bigint | TransactionArgument;
    exitPrice: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    priceDecimal: bigint | TransactionArgument;
}

export function calculateRealizedPnlUsd(tx: Transaction, args: CalculateRealizedPnlUsdArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::calculate_realized_pnl_usd`,
        arguments: [
            pure(tx, args.side, `bool`),
            pure(tx, args.size, `u64`),
            pure(tx, args.entryPrice, `u64`),
            pure(tx, args.exitPrice, `u64`),
            pure(tx, args.sizeDecimal, `u64`),
            pure(tx, args.priceDecimal, `u64`),
        ],
    });
}

export interface CalculateTradingFeeArgs {
    size: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    collateralTokenDecimal: bigint | TransactionArgument;
}

export function calculateTradingFee(tx: Transaction, args: CalculateTradingFeeArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::calculate_trading_fee`,
        arguments: [
            pure(tx, args.size, `u64`),
            pure(tx, args.sizeDecimal, `u64`),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.tradingFeeRate, `u64`),
            pure(tx, args.tradingFeeDecimal, `u64`),
            pure(tx, args.collateralTokenDecimal, `u64`),
        ],
    });
}

export interface CalculateUnrealizedPnlArgs {
    position: TransactionObjectInput;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
}

export function calculateUnrealizedPnl(tx: Transaction, args: CalculateUnrealizedPnlArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::calculate_unrealized_pnl`,
        arguments: [
            obj(tx, args.position),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.tradingFeeRate, `u64`),
            pure(tx, args.tradingFeeDecimal, `u64`),
        ],
    });
}

export interface CheckOptionCollateralPositionLiquidatedArgs {
    dovRegistry: TransactionObjectInput;
    typusOracle: TransactionObjectInput;
    position: TransactionObjectInput;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    maintenanceMarginRateBp: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
    clock: TransactionObjectInput;
}

export function checkOptionCollateralPositionLiquidated(
    tx: Transaction,
    typeArg: string,
    args: CheckOptionCollateralPositionLiquidatedArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::check_option_collateral_position_liquidated`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.dovRegistry),
            obj(tx, args.typusOracle),
            obj(tx, args.position),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.tradingFeeRate, `u64`),
            pure(tx, args.tradingFeeDecimal, `u64`),
            pure(tx, args.maintenanceMarginRateBp, `u64`),
            pure(tx, args.cumulativeBorrowRate, `u64`),
            obj(tx, args.clock),
        ],
    });
}

export interface CheckOrderFilledArgs {
    order: TransactionObjectInput;
    oraclePrice: bigint | TransactionArgument;
}

export function checkOrderFilled(tx: Transaction, args: CheckOrderFilledArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::check_order_filled`,
        arguments: [obj(tx, args.order), pure(tx, args.oraclePrice, `u64`)],
    });
}

export interface CheckPositionLiquidatedArgs {
    position: TransactionObjectInput;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    maintenanceMarginRateBp: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
    cumulativeFundingRateIndexSign: boolean | TransactionArgument;
    cumulativeFundingRateIndex: bigint | TransactionArgument;
}

export function checkPositionLiquidated(tx: Transaction, args: CheckPositionLiquidatedArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::check_position_liquidated`,
        arguments: [
            obj(tx, args.position),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.tradingFeeRate, `u64`),
            pure(tx, args.tradingFeeDecimal, `u64`),
            pure(tx, args.maintenanceMarginRateBp, `u64`),
            pure(tx, args.cumulativeBorrowRate, `u64`),
            pure(tx, args.cumulativeFundingRateIndexSign, `bool`),
            pure(tx, args.cumulativeFundingRateIndex, `u64`),
        ],
    });
}

export interface CollateralWithPnlArgs {
    position: TransactionObjectInput;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
}

export function collateralWithPnl(tx: Transaction, args: CollateralWithPnlArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::collateral_with_pnl`,
        arguments: [
            obj(tx, args.position),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.tradingFeeRate, `u64`),
            pure(tx, args.tradingFeeDecimal, `u64`),
        ],
    });
}

export interface CreateOrderArgs {
    version: TransactionObjectInput;
    symbol: TransactionObjectInput;
    leverageMbp: bigint | TransactionArgument;
    reduceOnly: boolean | TransactionArgument;
    isLong: boolean | TransactionArgument;
    isStopOrder: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
    collateral: TransactionObjectInput;
    collateralTokenDecimal: bigint | TransactionArgument;
    linkedPositionId: bigint | TransactionArgument | TransactionArgument | null;
    orderId: bigint | TransactionArgument;
    oraclePrice: bigint | TransactionArgument;
    clock: TransactionObjectInput;
}

export function createOrder(tx: Transaction, typeArg: string, args: CreateOrderArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::create_order`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            obj(tx, args.symbol),
            pure(tx, args.leverageMbp, `u64`),
            pure(tx, args.reduceOnly, `bool`),
            pure(tx, args.isLong, `bool`),
            pure(tx, args.isStopOrder, `bool`),
            pure(tx, args.size, `u64`),
            pure(tx, args.sizeDecimal, `u64`),
            pure(tx, args.triggerPrice, `u64`),
            obj(tx, args.collateral),
            pure(tx, args.collateralTokenDecimal, `u64`),
            pure(tx, args.linkedPositionId, `${Option.$typeName}<u64>`),
            pure(tx, args.orderId, `u64`),
            pure(tx, args.oraclePrice, `u64`),
            obj(tx, args.clock),
        ],
    });
}

export interface CreateOrderWithBidReceiptsArgs {
    version: TransactionObjectInput;
    symbol: TransactionObjectInput;
    portfolioIndex: bigint | TransactionArgument;
    depositToken: TransactionObjectInput;
    leverageMbp: bigint | TransactionArgument;
    reduceOnly: boolean | TransactionArgument;
    isLong: boolean | TransactionArgument;
    isStopOrder: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
    collateralBidReceipts: Array<TransactionObjectInput> | TransactionArgument;
    depositTokenDecimal: bigint | TransactionArgument;
    linkedPositionId: bigint | TransactionArgument | TransactionArgument | null;
    orderId: bigint | TransactionArgument;
    oraclePrice: bigint | TransactionArgument;
    user: string | TransactionArgument;
    clock: TransactionObjectInput;
}

export function createOrderWithBidReceipts(tx: Transaction, args: CreateOrderWithBidReceiptsArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::create_order_with_bid_receipts`,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.symbol),
            pure(tx, args.portfolioIndex, `u64`),
            obj(tx, args.depositToken),
            pure(tx, args.leverageMbp, `u64`),
            pure(tx, args.reduceOnly, `bool`),
            pure(tx, args.isLong, `bool`),
            pure(tx, args.isStopOrder, `bool`),
            pure(tx, args.size, `u64`),
            pure(tx, args.sizeDecimal, `u64`),
            pure(tx, args.triggerPrice, `u64`),
            vector(tx, `${TypusBidReceipt.$typeName}`, args.collateralBidReceipts),
            pure(tx, args.depositTokenDecimal, `u64`),
            pure(tx, args.linkedPositionId, `${Option.$typeName}<u64>`),
            pure(tx, args.orderId, `u64`),
            pure(tx, args.oraclePrice, `u64`),
            pure(tx, args.user, `address`),
            obj(tx, args.clock),
        ],
    });
}

export interface EmitRealizedFundingEventArgs {
    user: string | TransactionArgument;
    collateralToken: TransactionObjectInput;
    symbol: TransactionObjectInput;
    positionId: bigint | TransactionArgument;
    realizedFundingSign: boolean | TransactionArgument;
    realizedFundingFee: bigint | TransactionArgument;
    u64Padding: Array<bigint | TransactionArgument> | TransactionArgument;
}

export function emitRealizedFundingEvent(tx: Transaction, args: EmitRealizedFundingEventArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::emit_realized_funding_event`,
        arguments: [
            pure(tx, args.user, `address`),
            obj(tx, args.collateralToken),
            obj(tx, args.symbol),
            pure(tx, args.positionId, `u64`),
            pure(tx, args.realizedFundingSign, `bool`),
            pure(tx, args.realizedFundingFee, `u64`),
            pure(tx, args.u64Padding, `vector<u64>`),
        ],
    });
}

export interface GetEstimatedLiquidationPriceArgs {
    position: TransactionObjectInput;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
}

export function getEstimatedLiquidationPrice(tx: Transaction, args: GetEstimatedLiquidationPriceArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_estimated_liquidation_price`,
        arguments: [
            obj(tx, args.position),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.tradingFeeRate, `u64`),
            pure(tx, args.tradingFeeDecimal, `u64`),
            pure(tx, args.cumulativeBorrowRate, `u64`),
        ],
    });
}

export function getMaxOrderTypeTag(tx: Transaction) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_max_order_type_tag`,
        arguments: [],
    });
}

export interface GetOptionCollateralOrderCollateralAmountArgs {
    dovRegistry: TransactionObjectInput;
    typusOracle: TransactionObjectInput;
    order: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function getOptionCollateralOrderCollateralAmount(
    tx: Transaction,
    typeArg: string,
    args: GetOptionCollateralOrderCollateralAmountArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_option_collateral_order_collateral_amount`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.dovRegistry), obj(tx, args.typusOracle), obj(tx, args.order), obj(tx, args.clock)],
    });
}

export interface GetOptionPositionCollateralAmountArgs {
    dovRegistry: TransactionObjectInput;
    typusOracle: TransactionObjectInput;
    position: TransactionObjectInput;
    clock: TransactionObjectInput;
}

export function getOptionPositionCollateralAmount(tx: Transaction, typeArg: string, args: GetOptionPositionCollateralAmountArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_option_position_collateral_amount`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.dovRegistry), obj(tx, args.typusOracle), obj(tx, args.position), obj(tx, args.clock)],
    });
}

export function getOptionPositionPortfolioIndex(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_option_position_portfolio_index`,
        arguments: [obj(tx, position)],
    });
}

export function getOrderCollateralAmount(tx: Transaction, typeArg: string, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_collateral_amount`,
        typeArguments: [typeArg],
        arguments: [obj(tx, order)],
    });
}

export function getOrderCollateralToken(tx: Transaction, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_collateral_token`,
        arguments: [obj(tx, order)],
    });
}

export function getOrderCollateralTokenDecimal(tx: Transaction, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_collateral_token_decimal`,
        arguments: [obj(tx, order)],
    });
}

export interface GetOrderFilledFeeArgs {
    order: TransactionObjectInput;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
}

export function getOrderFilledFee(tx: Transaction, args: GetOrderFilledFeeArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_filled_fee`,
        arguments: [
            obj(tx, args.order),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.tradingFeeRate, `u64`),
            pure(tx, args.tradingFeeDecimal, `u64`),
        ],
    });
}

export function getOrderId(tx: Transaction, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_id`,
        arguments: [obj(tx, order)],
    });
}

export function getOrderLinkedPositionId(tx: Transaction, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_linked_position_id`,
        arguments: [obj(tx, order)],
    });
}

export function getOrderPortfolioIndex(tx: Transaction, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_portfolio_index`,
        arguments: [obj(tx, order)],
    });
}

export function getOrderPrice(tx: Transaction, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_price`,
        arguments: [obj(tx, order)],
    });
}

export function getOrderReduceOnly(tx: Transaction, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_reduce_only`,
        arguments: [obj(tx, order)],
    });
}

export function getOrderSide(tx: Transaction, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_side`,
        arguments: [obj(tx, order)],
    });
}

export function getOrderSize(tx: Transaction, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_size`,
        arguments: [obj(tx, order)],
    });
}

export function getOrderTradingSymbol(tx: Transaction, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_trading_symbol`,
        arguments: [obj(tx, order)],
    });
}

export function getOrderTypeTag(tx: Transaction, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_type_tag`,
        arguments: [obj(tx, order)],
    });
}

export function getOrderUser(tx: Transaction, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_order_user`,
        arguments: [obj(tx, order)],
    });
}

export function getPositionCollateralAmount(tx: Transaction, typeArg: string, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_position_collateral_amount`,
        typeArguments: [typeArg],
        arguments: [obj(tx, position)],
    });
}

export function getPositionCollateralTokenDecimal(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_position_collateral_token_decimal`,
        arguments: [obj(tx, position)],
    });
}

export function getPositionCollateralTokenType(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_position_collateral_token_type`,
        arguments: [obj(tx, position)],
    });
}

export function getPositionId(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_position_id`,
        arguments: [obj(tx, position)],
    });
}

export function getPositionOptionCollateralInfo(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_position_option_collateral_info`,
        arguments: [obj(tx, position)],
    });
}

export function getPositionSide(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_position_side`,
        arguments: [obj(tx, position)],
    });
}

export function getPositionSize(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_position_size`,
        arguments: [obj(tx, position)],
    });
}

export function getPositionSizeDecimal(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_position_size_decimal`,
        arguments: [obj(tx, position)],
    });
}

export function getPositionSymbol(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_position_symbol`,
        arguments: [obj(tx, position)],
    });
}

export function getPositionUnrealizedCost(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_position_unrealized_cost`,
        arguments: [obj(tx, position)],
    });
}

export function getPositionUnrealizedFundingSign(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_position_unrealized_funding_sign`,
        arguments: [obj(tx, position)],
    });
}

export function getPositionUser(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_position_user`,
        arguments: [obj(tx, position)],
    });
}

export function getReserveAmount(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::get_reserve_amount`,
        arguments: [obj(tx, position)],
    });
}

export interface IncreaseCollateralArgs {
    position: TransactionObjectInput;
    collateral: TransactionObjectInput;
}

export function increaseCollateral(tx: Transaction, typeArg: string, args: IncreaseCollateralArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::increase_collateral`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.position), obj(tx, args.collateral)],
    });
}

export function isOptionCollateralOrder(tx: Transaction, order: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::is_option_collateral_order`,
        arguments: [obj(tx, order)],
    });
}

export function isOptionCollateralPosition(tx: Transaction, position: TransactionObjectInput) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::is_option_collateral_position`,
        arguments: [obj(tx, position)],
    });
}

export interface ManagerCreateReduceOnlyOrderArgs {
    version: TransactionObjectInput;
    symbol: TransactionObjectInput;
    isLong: boolean | TransactionArgument;
    size: bigint | TransactionArgument;
    sizeDecimal: bigint | TransactionArgument;
    triggerPrice: bigint | TransactionArgument;
    collateral: TransactionObjectInput;
    collateralTokenDecimal: bigint | TransactionArgument;
    linkedPositionId: bigint | TransactionArgument;
    user: string | TransactionArgument;
    orderId: bigint | TransactionArgument;
    oraclePrice: bigint | TransactionArgument;
    clock: TransactionObjectInput;
}

export function managerCreateReduceOnlyOrder(tx: Transaction, typeArg: string, args: ManagerCreateReduceOnlyOrderArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::manager_create_reduce_only_order`,
        typeArguments: [typeArg],
        arguments: [
            obj(tx, args.version),
            obj(tx, args.symbol),
            pure(tx, args.isLong, `bool`),
            pure(tx, args.size, `u64`),
            pure(tx, args.sizeDecimal, `u64`),
            pure(tx, args.triggerPrice, `u64`),
            obj(tx, args.collateral),
            pure(tx, args.collateralTokenDecimal, `u64`),
            pure(tx, args.linkedPositionId, `u64`),
            pure(tx, args.user, `address`),
            pure(tx, args.orderId, `u64`),
            pure(tx, args.oraclePrice, `u64`),
            obj(tx, args.clock),
        ],
    });
}

export interface MaxReleasingCollateralAmountArgs {
    position: TransactionObjectInput;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
    maxEntryLeverageMbp: bigint | TransactionArgument;
}

export function maxReleasingCollateralAmount(tx: Transaction, args: MaxReleasingCollateralAmountArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::max_releasing_collateral_amount`,
        arguments: [
            obj(tx, args.position),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.tradingFeeRate, `u64`),
            pure(tx, args.tradingFeeDecimal, `u64`),
            pure(tx, args.cumulativeBorrowRate, `u64`),
            pure(tx, args.maxEntryLeverageMbp, `u64`),
        ],
    });
}

export interface OrderFilledWithBidReceiptsCollateralArgs {
    version: TransactionObjectInput;
    liquidityPool: TransactionObjectInput;
    dovRegistry: TransactionObjectInput;
    typusOracle: TransactionObjectInput;
    order: TransactionObjectInput;
    originalPosition: TransactionObjectInput | TransactionArgument | null;
    nextPositionId: bigint | TransactionArgument;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
    cumulativeFundingRateIndexSign: boolean | TransactionArgument;
    cumulativeFundingRateIndex: bigint | TransactionArgument;
    tradingFeeRate: bigint | TransactionArgument;
    tradingFeeDecimal: bigint | TransactionArgument;
    referralFeeRebateBp: bigint | TransactionArgument;
    clock: TransactionObjectInput;
}

export function orderFilledWithBidReceiptsCollateral(
    tx: Transaction,
    typeArgs: [string, string],
    args: OrderFilledWithBidReceiptsCollateralArgs
) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::order_filled_with_bid_receipts_collateral`,
        typeArguments: typeArgs,
        arguments: [
            obj(tx, args.version),
            obj(tx, args.liquidityPool),
            obj(tx, args.dovRegistry),
            obj(tx, args.typusOracle),
            obj(tx, args.order),
            option(tx, `${Position.$typeName}`, args.originalPosition),
            pure(tx, args.nextPositionId, `u64`),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.cumulativeBorrowRate, `u64`),
            pure(tx, args.cumulativeFundingRateIndexSign, `bool`),
            pure(tx, args.cumulativeFundingRateIndex, `u64`),
            pure(tx, args.tradingFeeRate, `u64`),
            pure(tx, args.tradingFeeDecimal, `u64`),
            pure(tx, args.referralFeeRebateBp, `u64`),
            obj(tx, args.clock),
        ],
    });
}

export interface RealizeFundingArgs {
    position: TransactionObjectInput;
    fundingIncome: TransactionObjectInput;
}

export function realizeFunding(tx: Transaction, typeArg: string, args: RealizeFundingArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::realize_funding`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.position), obj(tx, args.fundingIncome)],
    });
}

export interface ReleaseCollateralArgs {
    position: TransactionObjectInput;
    releaseAmount: bigint | TransactionArgument;
}

export function releaseCollateral(tx: Transaction, typeArg: string, args: ReleaseCollateralArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::release_collateral`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.position), pure(tx, args.releaseAmount, `u64`)],
    });
}

export interface RemoveOrderArgs {
    version: TransactionObjectInput;
    order: TransactionObjectInput;
}

export function removeOrder(tx: Transaction, typeArg: string, args: RemoveOrderArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::remove_order`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.version), obj(tx, args.order)],
    });
}

export interface RemoveOrderWithBidReceiptsArgs {
    version: TransactionObjectInput;
    order: TransactionObjectInput;
}

export function removeOrderWithBidReceipts(tx: Transaction, args: RemoveOrderWithBidReceiptsArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::remove_order_with_bid_receipts`,
        arguments: [obj(tx, args.version), obj(tx, args.order)],
    });
}

export interface RemovePositionArgs {
    version: TransactionObjectInput;
    position: TransactionObjectInput;
}

export function removePosition(tx: Transaction, typeArg: string, args: RemovePositionArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::remove_position`,
        typeArguments: [typeArg],
        arguments: [obj(tx, args.version), obj(tx, args.position)],
    });
}

export interface RemovePositionLinkedOrderInfoArgs {
    position: TransactionObjectInput;
    linkedOrderId: bigint | TransactionArgument;
}

export function removePositionLinkedOrderInfo(tx: Transaction, args: RemovePositionLinkedOrderInfoArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::remove_position_linked_order_info`,
        arguments: [obj(tx, args.position), pure(tx, args.linkedOrderId, `u64`)],
    });
}

export interface RemovePositionWithBidReceiptsArgs {
    version: TransactionObjectInput;
    position: TransactionObjectInput;
}

export function removePositionWithBidReceipts(tx: Transaction, args: RemovePositionWithBidReceiptsArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::remove_position_with_bid_receipts`,
        arguments: [obj(tx, args.version), obj(tx, args.position)],
    });
}

export interface UpdatePositionBorrowRateAndFundingRateArgs {
    position: TransactionObjectInput;
    collateralOraclePrice: bigint | TransactionArgument;
    collateralOraclePriceDecimal: bigint | TransactionArgument;
    tradingPairOraclePrice: bigint | TransactionArgument;
    tradingPairOraclePriceDecimal: bigint | TransactionArgument;
    cumulativeBorrowRate: bigint | TransactionArgument;
    cumulativeFundingRateIndexSign: boolean | TransactionArgument;
    cumulativeFundingRateIndex: bigint | TransactionArgument;
}

export function updatePositionBorrowRateAndFundingRate(tx: Transaction, args: UpdatePositionBorrowRateAndFundingRateArgs) {
    return tx.moveCall({
        target: `${PUBLISHED_AT}::position::update_position_borrow_rate_and_funding_rate`,
        arguments: [
            obj(tx, args.position),
            pure(tx, args.collateralOraclePrice, `u64`),
            pure(tx, args.collateralOraclePriceDecimal, `u64`),
            pure(tx, args.tradingPairOraclePrice, `u64`),
            pure(tx, args.tradingPairOraclePriceDecimal, `u64`),
            pure(tx, args.cumulativeBorrowRate, `u64`),
            pure(tx, args.cumulativeFundingRateIndexSign, `bool`),
            pure(tx, args.cumulativeFundingRateIndex, `u64`),
        ],
    });
}
