import { SuiClient, SuiEvent } from "@mysten/sui.js/client";
import { OracleInfo, VaultConfig } from "../view-function";
export declare function getVaultHistoryEvents(provider: SuiClient, originPackage: string, startTimeMs: number): Promise<SuiEvent[]>;
export declare function parseGroupEvents(datas: SuiEvent[]): Promise<Map<string, Map<string, GroupEvent>>>;
export declare function parseVaultHistory(inputMap: Map<string, Map<string, GroupEvent>>): Promise<Map<string, Map<string, VaultHistory | undefined>>>;
export declare function getVaultHistoryFromDB(index?: string, startTs?: string, endTs?: string, rounds?: number[]): Promise<Map<string, Map<string, VaultHistory | undefined>> | undefined>;
export declare function convertGroupEventToVaultHistory(groupEvent: GroupEvent): Promise<VaultHistory | undefined>;
export interface VaultHistory {
    vaultIndex: string;
    round: string;
    ActivationDate: Date;
    MaxSize: number;
    SettlementTime: Date;
    StrikePrice: number[] | undefined;
    SettlePrice: number;
    Return: number;
    Filled: number;
    DeliverySize: number;
    DeliveryPrice: number;
    PaidToDepositors: number;
    PaidToBidders: number;
    EarnedByDepositors: number;
    ActivateTx: string | undefined;
    NewAuctionTx: string | undefined;
    DeliveryTx: string | undefined;
    RecoupTx: string | undefined;
    SettleTx: string | undefined;
}
interface GroupEvent {
    activateEvent: ActivateEvent | undefined;
    newAuctionEvent: NewAuctionEvent | undefined;
    deliveryEvent: DeliveryEvent | undefined;
    recoupEvent: RecoupEvent | undefined;
    settleEvent: SettleEvent | undefined;
}
interface ActivateEvent {
    signer: string;
    index: string;
    round: string;
    deposit_amount: string;
    d_token_decimal: string;
    contract_size: string;
    o_token_decimal: string;
    oracle_info: OracleInfo;
    u64_padding: string[];
    timestampMs: string | null | undefined;
    txDigest: string;
}
interface NewAuctionEvent {
    signer: string;
    index: string;
    round: string;
    start_ts_ms: string;
    end_ts_ms: string;
    size: string;
    vault_config: VaultConfig;
    oracle_info: OracleInfo;
    u64_padding: string[];
    timestampMs: string | null | undefined;
    txDigest: string;
}
interface DeliveryEvent {
    signer: string;
    index: string;
    round: string;
    early: boolean;
    delivery_price: string;
    delivery_size: string;
    o_token_decimal: string;
    o_token: {
        name: string;
    };
    bidder_bid_value: string;
    bidder_fee: string;
    incentive_bid_value: string;
    incentive_fee: string;
    b_token_decimal: string;
    b_token: {
        name: string;
    };
    depositor_incentive_value: string;
    u64_padding: string[];
    timestampMs: string | null | undefined;
    txDigest: string;
}
interface RecoupEvent {
    signer: string;
    index: string;
    round: string;
    active_amount: string;
    deactivating_amount: string;
    d_token_decimal: string;
    u64_padding: string[];
    timestampMs: string | null | undefined;
    txDigest: string;
}
interface SettleEvent {
    signer: string;
    index: string;
    round: string;
    oracle_price: string;
    oracle_price_decimal: string;
    settle_balance: string;
    settled_balance: string;
    d_token_decimal: string;
    d_token: {
        name: string;
    };
    share_price: string;
    u64_padding: string[];
    timestampMs: string | null | undefined;
    txDigest: string;
}
export declare function parseBidEvents(datas: SuiEvent[], end_ts_ms: any): Promise<Map<string, NewBidEvent[]>>;
interface NewBidEvent {
    signer: string;
    index: string;
    size: string;
    ts_ms: string;
    timestampMs: string | null | undefined;
    txDigest: string;
}
export {};
