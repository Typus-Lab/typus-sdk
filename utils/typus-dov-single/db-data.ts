import { PayoffConfig, VaultConfig, PortfolioVault } from "./portfolio-vault";

const apiUrl = "https://us-central1-aqueous-freedom-378103.cloudfunctions.net/mongodb";

export async function getDb(
    database: string,
    functionNames: string[],
    vaultIndex: string | undefined,
    startTsMs: string,
    limit: number,
    endTsMs: string | undefined = undefined
) {
    const jsonData = JSON.stringify({
        database: database,
        functionNames: functionNames,
        vaultIndex: vaultIndex,
        startTsMs: startTsMs,
        endTsMs: endTsMs,
        limit: limit,
    });

    let response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonData,
    });

    if (response.ok) {
        let data = await response.json();
        return data;
    }
}

export async function getShowMap(
    database: string,
    portfolioVaults: Map<string, PortfolioVault>,
    vaultIndex: string | undefined = undefined,
    startTsMs: string = "0",
    limit: number = 1000
): Promise<Map<string, Map<string, Show>>> {
    let events = await getDb(database, ["NewAuction", "Delivery", "Settle"], vaultIndex, startTsMs, limit);
    // console.log(events);

    const groupEventMap: Map<string, Map<string, GroupEvent>> = await events.reduce(async (promise, event) => {
        let map: Map<string, Map<string, GroupEvent>> = await promise;
        // console.log(event);

        const index: string = event.index.toString();
        const round: string = event.round.toString();

        let round_event: GroupEvent = {
            newAuctionEvent: undefined,
            deliveryEvent: undefined,
            settleEvent: undefined,
        };

        if (map.has(index)) {
            let round_events = map.get(index)!;
            if (round_events.has(round)) {
                round_event = round_events.get(round)!;
            }
        }

        switch (event.function) {
            case "NewAuction":
                round_event.newAuctionEvent = event as NewAuctionEvent;
                round_event.newAuctionEvent.vault_config = {
                    payoffConfigs: event.vault_config.payoff_configs.map(
                        (x) =>
                            ({
                                strikePct: x.strike_pct,
                                weight: x.weight,
                                isBuyer: x.is_buyer,
                                strike: x.strike,
                            } as PayoffConfig)
                    ),
                    strikeIncrement: event.vault_config.strike_increment,
                    decaySpeed: event.vault_config.decay_speed,
                    initialPrice: event.vault_config.initial_price,
                    finalPrice: event.vault_config.final_price,
                    auctionDurationInMs: event.vault_config.auction_duration_in_ms,
                } as VaultConfig;
                break;
            case "Delivery":
                round_event.deliveryEvent = event as DeliveryEvent;
                break;
            case "Settle":
                round_event.settleEvent = event as SettleEvent;
                break;
        }

        if (map.get(index)) {
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

    // console.log(groupEventMap);

    const showMap: Map<string, Map<string, Show>> = new Map();

    await groupEventMap.forEach(async (innerMap, outerKey) => {
        if (portfolioVaults[outerKey]) {
            const newInnerMap: Map<string, Show> = new Map();

            innerMap.forEach(async (groupEvent, innerKey) => {
                const show: Show = await groupEventToShow(groupEvent, portfolioVaults[outerKey]);
                // console.log(show);
                newInnerMap.set(innerKey, show);
            });

            showMap.set(outerKey, newInnerMap);
        }
    });

    // console.log(showMap);

    return showMap;
}

interface GroupEvent {
    newAuctionEvent: NewAuctionEvent | undefined;
    deliveryEvent: DeliveryEvent | undefined;
    settleEvent: SettleEvent | undefined;
}

interface Show {
    ProjectedAPY: number;
    ActivationDate: Date;
    SettlementTime: Date;
    StrikePrice: number[] | undefined;
    SettlePrice: number;
    Return: number;
    Filled: number;
    PaidToDepositors: number; // premium_value
    PaidToBidders: number;
    EarnedByDepositors: number;
    NewAuctionTx: string | undefined;
    DeliveryTx: string | undefined;
    SettleTx: string | undefined;
}

async function groupEventToShow(groupEvent: GroupEvent, portfolioVault: PortfolioVault): Promise<Show> {
    const PaidToDepositors = Number(groupEvent.deliveryEvent?.premium_value) / 10 ** Number(portfolioVault.config.bTokenDecimal);
    const portfolio_payoff = groupEvent.settleEvent?.portfolio_payoff_is_neg
        ? Number(-groupEvent.settleEvent?.portfolio_payoff)
        : Number(groupEvent.settleEvent?.portfolio_payoff);
    const PaidToBidders = portfolio_payoff / 10 ** Number(portfolioVault.config.oTokenDecimal);

    let exp: number;
    switch (portfolioVault.config.period) {
        case 0:
            exp = 365;
            break;
        case 1:
            exp = 52;
            break;
        case 2:
            exp = 12;
            break;
    }

    let ActivationTsMs = Number(groupEvent.newAuctionEvent?.timestamp_ms);
    let SettlementTsMs = Number(groupEvent.settleEvent?.timestamp_ms);

    const result: Show = {
        // newAuctionEvent
        NewAuctionTx: groupEvent.newAuctionEvent?.tx_digest,
        ActivationDate: new Date(ActivationTsMs - (ActivationTsMs % 3600000)),
        StrikePrice: groupEvent.newAuctionEvent?.vault_config.payoffConfigs.map((payoffConfig) => Number(payoffConfig.strike!) / 10 ** 8),

        // deliveryEvent
        DeliveryTx: groupEvent.deliveryEvent?.tx_digest,
        ProjectedAPY:
            (1 + (1.01 * Number(groupEvent.deliveryEvent?.delivery_price)) / 10 ** Number(portfolioVault.config.bTokenDecimal)) ** exp! - 1,
        Filled: Number(groupEvent.deliveryEvent?.delivery_size) / Number(groupEvent.deliveryEvent?.max_size),
        PaidToDepositors,

        // settleEvent
        SettleTx: groupEvent.settleEvent?.tx_digest,
        SettlementTime: new Date(SettlementTsMs - (SettlementTsMs % 3600000)),
        SettlePrice: Number(groupEvent.settleEvent?.oracle_price) / 10 ** 8,
        Return: Number(groupEvent.settleEvent?.share_price) / 10 ** 8 - 1,
        PaidToBidders,
        EarnedByDepositors: PaidToDepositors - PaidToBidders,
    };

    return result;
}

interface Log {
    // from Vault Config
    // o_token;
    optionType: string;
    period: number;
    dTokenDecimal: string;
    bTokenDecimal: string;
    oTokenDecimal: string;

    index: string;
    round: string; // N (start from 1)

    // round N SettleEvent
    oracle_price: string;
    share_price: string;
    portfolio_payoff: string; // portfolio_payoff * portfolio_payoff_is_neg

    // round N-1 SettleEvent
    activation_ts_ms: string;
    expiration_ts_ms: string;

    // NewAuctionEvent
    // strike_ptc;
    // strikes;
    vault_config: VaultConfig;

    // DeliveryEvent
    delivery_price: string;
    delivery_size: string;
    premium_value: string;
    max_size: string;
    filled: string; // delivery_size / max_size (%)
}

interface SettleEvent {
    index: string;
    round: string;

    // next round
    activation_ts_ms: string;
    expiration_ts_ms: string;

    delivery_size: string;
    oracle_price: string;
    original_premium: string;
    performance_fee: string;

    portfolio_final_payoff: string;
    portfolio_final_payoff_is_neg: boolean;

    portfolio_payoff: string;
    portfolio_payoff_is_neg: boolean;

    share_price: string;
    signer: string;
    total_balance: string;

    package_id: string;
    module: string;
    function: string;

    sender: string;
    tx_digest: string;
    timestamp_ms: string;
}

interface NewAuctionEvent {
    index: string;
    round: string;

    vault_config: VaultConfig;
    able_to_remove_bid: boolean;

    package_id: string;
    module: string;
    function: string;

    signer: string;
    sender: string;
    tx_digest: string;
    timestamp_ms: string;
}

interface DeliveryEvent {
    index: string;
    round: string;

    delivery_price: string;
    delivery_size: string;
    premium_value: string;
    max_size: string;
    refund_shares: string;
    fee_per_unit: string;
    accumulated_fee: string;

    package_id: string;
    module: string;
    function: string;

    signer: string;
    sender: string;
    tx_digest: string;
    timestamp_ms: string;
}
