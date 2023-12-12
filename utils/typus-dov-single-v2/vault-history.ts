import { SuiClient, SuiEvent, SuiEventFilter } from "@mysten/sui.js/client";
import { OracleInfo, Vault, VaultConfig } from "./view-function";
import { assetToDecimal, typeArgToAsset } from "../token";
import BigNumber from "bignumber.js";

export async function getVaultHistoryEvents(provider: SuiClient, originPackage: string, startTimeMs: number) {
    const senderFilter: SuiEventFilter = {
        MoveEventModule: {
            package: originPackage,
            module: "typus_dov_single",
        },
    };

    var result = await provider.queryEvents({ query: senderFilter, order: "descending" });
    var datas = result.data;
    var hasNextPage = result.hasNextPage;
    var cursor = result.nextCursor;

    while (hasNextPage) {
        var result = await provider.queryEvents({ query: senderFilter, order: "descending", cursor });
        // console.log(result);
        datas = datas.concat(result.data);

        if (result.hasNextPage && Number(result.data.at(-1)!.timestampMs) < startTimeMs) {
            break;
        }

        hasNextPage = result.hasNextPage;
        cursor = result.nextCursor;
    }

    return datas;
}

export async function parseGroupEvents(datas: SuiEvent[]): Promise<Map<string, Map<string, GroupEvent>>> {
    const results = await datas.reduce(async (promise, event) => {
        let map: Map<string, Map<string, GroupEvent>> = await promise;

        console.log(event);

        const functionType = new RegExp("^([^::]+)::([^::]+)::([^<]+)").exec(event.type)!;
        const action = functionType[3];
        // console.log(action);

        if (!["ActivateEvent", "NewAuctionEvent", "DeliveryEvent", "RecoupEvent", "SettleEvent"].includes(action)) {
            return map;
        }

        const parsedJson: any = event.parsedJson;
        // console.log(parsedJson);
        parsedJson.timestampMs = event.timestampMs;

        const index: string = parsedJson.index.toString();
        const round: string = parsedJson.round.toString();
        // console.log(index);
        // console.log(round);

        let round_event: GroupEvent = {
            activateEvent: undefined,
            newAuctionEvent: undefined,
            deliveryEvent: undefined,
            recoupEvent: undefined,
            settleEvent: undefined,
        };

        if (map.has(index)) {
            let round_events = map.get(index)!;
            if (round_events.has(round)) {
                round_event = round_events.get(round)!;
            }
        }

        switch (action) {
            case "ActivateEvent":
                round_event.activateEvent = parsedJson as ActivateEvent;
                break;
            case "NewAuctionEvent":
                round_event.newAuctionEvent = parsedJson as NewAuctionEvent;
                break;
            case "DeliveryEvent":
                round_event.deliveryEvent = parsedJson as DeliveryEvent;
                break;
            case "RecoupEvent":
                round_event.recoupEvent = parsedJson as RecoupEvent;
                break;
            case "SettleEvent":
                round_event.settleEvent = parsedJson as SettleEvent;
                break;
        }

        // console.log(round_event);

        if (map.has(index)) {
            let round_events = map.get(index)!;
            round_events.set(round, round_event);
            map.set(index, round_events);
        } else {
            let round_events = new Map<string, GroupEvent>();
            round_events.set(round, round_event);
            map.set(index, round_events);
        }

        return map;
    }, Promise.resolve(new Map<string, Map<string, GroupEvent>>()));

    console.log(results);

    return results;
}

interface VaultHistory {
    vaultIndex: string;
    round: string;

    ActivationDate: Date;
    SettlementTime: Date;
    StrikePrice: number[] | undefined;
    SettlePrice: number;
    Return: number;
    Filled: number;
    PaidToDepositors: number; // premium_value
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
}

interface DeliveryEvent {
    signer: string;
    index: string;
    round: string;
    early: boolean;
    delivery_price: string;
    delivery_size: string;
    o_token_decimal: string;
    o_token: string;
    bidder_bid_value: string;
    bidder_fee: string;
    incentive_bid_value: string;
    incentive_fee: string;
    b_token_decimal: string;
    b_token: string;
    depositor_incentive_value: string;
    fixed_incentive_amount: string;
    max_size: string;
    u64_padding: string[];
    timestampMs: string | null | undefined;
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
    d_token: string;
    share_price: string;
    u64_padding: string[];
    timestampMs: string | null | undefined;
}
