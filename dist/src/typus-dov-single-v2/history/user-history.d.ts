import { EventId, SuiClient, SuiEvent } from "@mysten/sui.js/client";
import { Vault } from "../view-function";
export declare function getUserEvents(provider: SuiClient, sender: string, cursor?: EventId | null): Promise<[SuiEvent[], EventId | null | undefined]>;
export declare function getAutoBidEvents(provider: SuiClient, originPackage: string, startTimeMs: number): Promise<SuiEvent[]>;
export interface TxHistory {
    Index: string | undefined;
    Action: string | undefined;
    Period: string | undefined;
    Amount: string | undefined;
    Vault: string | undefined;
    RiskLevel: string | undefined;
    Tails: string | undefined;
    Exp: string | undefined;
    Date: Date;
    txDigest: string;
}
export declare function parseTxHistory(datas: Array<any>, originPackage: string, vaults: {
    [key: string]: Vault;
}): Promise<Array<TxHistory>>;
export declare function getFromSentio(event: string, userAddress: string, startTimestamp: string): Promise<any[]>;
export declare function getNewBidFromSentio(vaults: {
    [key: string]: Vault;
}, userAddress: string, startTimestamp: number): Promise<any>;
export declare function getExerciseFromSentio(vaults: {
    [key: string]: Vault;
}, userAddress: string, startTimestamp: number): Promise<any>;
export declare function getDepositorCashFlows(userHistory: TxHistory[]): Map<string, DepositorCashFlow>;
export interface DepositorCashFlow {
    D_TOKEN: string | undefined;
    totalDeposit: number;
    totalWithdraw: number;
    totalClaim: number;
    totalCompound: number;
    netDeposit: number | undefined;
    totalHarvest: Map<string, number>;
}
