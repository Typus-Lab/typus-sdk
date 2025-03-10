import { SuiClient, SuiEvent, SuiEventFilter } from "@mysten/sui/client";
import { OracleInfo, PayoffConfig, VaultConfig } from "src/typus-dov-single-v2";
import { assetToDecimal, typeArgToAsset } from "src/constants";
import { TypusConfig } from "src/utils";

export async function getVaultHistoryEvents(config: TypusConfig, startTimeMs: number) {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let senderFilter: SuiEventFilter = {
        MoveEventModule: {
            package: config.packageOrigin.dovSingle,
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
    let results = await datas.reduce(async (promise, event) => {
        let map: Map<string, Map<string, GroupEvent>> = await promise;

        // console.log(event);

        let functionType = new RegExp("^([^::]+)::([^::]+)::([^<]+)").exec(event.type)!;
        let action = functionType[3];
        // console.log(action);

        if (!["ActivateEvent", "NewAuctionEvent", "DeliveryEvent", "RecoupEvent", "SettleEvent"].includes(action)) {
            return map;
        }

        let parsedJson: any = event.parsedJson;
        // console.log(parsedJson);
        parsedJson.timestampMs = event.timestampMs;
        parsedJson.txDigest = event.id.txDigest;

        let index: string = parsedJson.index.toString();
        let round: string = parsedJson.round.toString();
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
                round_event.newAuctionEvent.vault_config = {
                    payoffConfigs: parsedJson.vault_config.payoff_configs.map(
                        (x) =>
                            ({
                                weight: x.weight,
                                isBuyer: x.is_buyer,
                                strike: x.strike,
                                strikeBp: x.strike_bp,
                                u64Padding: x.u64_padding,
                            }) as PayoffConfig
                    ),
                    strikeIncrement: parsedJson.vault_config.strike_increment,
                    decaySpeed: parsedJson.vault_config.decay_speed,
                    initialPrice: parsedJson.vault_config.initial_price,
                    finalPrice: parsedJson.vault_config.final_price,
                    auctionDurationInMs: parsedJson.vault_config.auction_duration_in_ms,
                    u64Padding: parsedJson.vault_config.u64_padding,
                } as VaultConfig;
                break;
            case "DeliveryEvent":
                round_event.deliveryEvent = parsedJson as DeliveryEvent;
                // console.log(parsedJson);
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

    // console.log(results);

    return results;
}

export async function parseVaultHistory(
    inputMap: Map<string, Map<string, GroupEvent>>
): Promise<Map<string, Map<string, VaultHistory | undefined>>> {
    let result = new Map<string, Map<string, VaultHistory | undefined>>();

    inputMap.forEach((innerMap, outerKey) => {
        let newInnerMap = new Map<string, VaultHistory | undefined>();

        innerMap.forEach(async (groupEvent, innerKey) => {
            let vaultHistory = await convertGroupEventToVaultHistory(groupEvent);

            newInnerMap.set(innerKey, vaultHistory);
        });

        result.set(outerKey, newInnerMap);
    });

    return result;
}

export async function convertGroupEventToVaultHistory(groupEvent: GroupEvent): Promise<VaultHistory | undefined> {
    let ActivationMs = Number(groupEvent.activateEvent?.timestampMs!);
    let SettlementTsMs = Number(groupEvent.settleEvent?.timestampMs!);

    if (groupEvent.deliveryEvent) {
        let b_token = typeArgToAsset(groupEvent.deliveryEvent.b_token.name);
        let o_token = typeArgToAsset(groupEvent.deliveryEvent.o_token.name);

        let bidder_bid_value = Number(groupEvent.deliveryEvent.bidder_bid_value) / 10 ** assetToDecimal(b_token)!;
        let bidder_fee = Number(groupEvent.deliveryEvent.bidder_fee) / 10 ** assetToDecimal(b_token)!;
        let delivery_price = Number(groupEvent.deliveryEvent.delivery_price) / 10 ** assetToDecimal(b_token)!;
        let delivery_size = Number(groupEvent.deliveryEvent.delivery_size) / 10 ** assetToDecimal(o_token)!;
        let incentive_bid_value = Number(groupEvent.deliveryEvent.incentive_bid_value) / 10 ** assetToDecimal(b_token)!;
        let incentive_fee = Number(groupEvent.deliveryEvent.incentive_fee) / 10 ** assetToDecimal(b_token)!;
        // let depositor_incentive_value = Number(groupEvent.deliveryEvent.depositor_incentive_value) / 10 ** assetToDecimal(b_token)!;

        let DepositorsRewards = bidder_bid_value + bidder_fee + incentive_bid_value + incentive_fee;

        let BiddersPayoff =
            (Number(groupEvent.settleEvent?.settle_balance) - Number(groupEvent.settleEvent?.settled_balance)) /
            10 ** Number(groupEvent.settleEvent?.d_token_decimal);

        let result: VaultHistory = {
            vaultIndex: groupEvent.activateEvent?.index!,
            round: groupEvent.activateEvent?.round!,

            // activateEvent
            ActivateTx: groupEvent.activateEvent?.txDigest,
            ActivationDate: new Date(ActivationMs - (ActivationMs % 3600000)),
            TotalAuctioned: Number(groupEvent.activateEvent?.contract_size) / 10 ** Number(groupEvent.activateEvent?.o_token_decimal),

            // newAuctionEvent
            NewAuctionTx: groupEvent.newAuctionEvent?.txDigest,
            StrikePrice: groupEvent.newAuctionEvent?.vault_config.payoffConfigs.map(
                (payoffConfig) => Number(payoffConfig.strike!) / 10 ** 8
            ),

            // deliveryEvent
            DeliveryTx: groupEvent.deliveryEvent.txDigest,
            DeliverySize: delivery_size,
            DeliveryPrice: delivery_price,
            Filled: delivery_size == 0 ? 0 : Number(groupEvent.deliveryEvent.delivery_size) / Number(groupEvent.newAuctionEvent?.size),
            DepositorsRewards,

            // recoupEvent
            RecoupTx: groupEvent.recoupEvent?.txDigest,

            // settleEvent
            SettleTx: groupEvent.settleEvent?.txDigest,
            SettlementTime: new Date(SettlementTsMs - (SettlementTsMs % 3600000)),
            SettlePrice: Number(groupEvent.settleEvent?.oracle_price) / 10 ** 8,
            ActualReturn: Number(groupEvent.settleEvent?.share_price) / 10 ** 8 - 1,
            BiddersPayoff,
            DepositorPnl: DepositorsRewards - BiddersPayoff,
        };

        return result;
    }
}

export interface VaultHistory {
    vaultIndex: string;
    round: string;

    ActivationDate: Date;
    SettlementTime: Date;
    StrikePrice: number[] | undefined;
    SettlePrice: number;
    ActualReturn: number;
    TotalAuctioned: number; // Max Size
    Filled: number;
    DeliverySize: number;
    DeliveryPrice: number;
    DepositorsRewards: number; // premium_value
    BiddersPayoff: number;
    DepositorPnl: number;
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
    u64_padding: string[]; // [bp_incentive_amount, fixed_incentive_amount]
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
    o_token: { name: string };
    bidder_bid_value: string;
    bidder_fee: string;
    incentive_bid_value: string;
    incentive_fee: string;
    b_token_decimal: string;
    b_token: { name: string };
    depositor_incentive_value: string;
    u64_padding: string[]; // [fixed_incentive_amount, portfolio_vault.info.delivery_infos.max_size, deposit_incentive_bp, deposit_incentive_bp_divisor, bid_incentive_bp]
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
    d_token: { name: string };
    share_price: string;
    u64_padding: string[];
    timestampMs: string | null | undefined;
    txDigest: string;
}

export async function parseBidEvents(datas: SuiEvent[], end_ts_ms): Promise<Map<string, NewBidEvent[]>> {
    let results = await datas.reduce(async (promise, event) => {
        let map: Map<string, NewBidEvent[]> = await promise;

        // console.log(event);

        let functionType = new RegExp("^([^::]+)::([^::]+)::([^<]+)").exec(event.type)!;
        let action = functionType[3];
        // console.log(action);

        if (action != "NewBidEvent") {
            return map;
        }

        let parsedJson: any = event.parsedJson;
        // console.log(parsedJson);
        parsedJson.timestampMs = event.timestampMs;
        parsedJson.txDigest = event.id.txDigest;

        let index: string = parsedJson.index.toString();

        let bid_event = parsedJson as NewBidEvent;
        // console.log(bid_event);

        let o_token = typeArgToAsset("0x" + parsedJson.o_token.name);
        let size = Number(parsedJson.size) / 10 ** assetToDecimal(o_token)!;
        bid_event.size = size.toString();

        if (Number(bid_event.ts_ms) > end_ts_ms) {
            return map;
        }

        let bid_events: NewBidEvent[];
        if (map.has(index)) {
            bid_events = map.get(index)!;
            bid_events.push(bid_event);
        } else {
            bid_events = [bid_event];
        }
        map.set(index, bid_events);

        return map;
    }, Promise.resolve(new Map<string, NewBidEvent[]>()));

    // console.log(results);

    return results;
}

interface NewBidEvent {
    signer: string;
    index: string;
    size: string;
    ts_ms: string;
    timestampMs: string | null | undefined;
    txDigest: string;
}
