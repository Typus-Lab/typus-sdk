import { VaultConfig } from "../../lib/utils/typus-dov-single/portfolio-vault";

const dbFilter = (functionNames: string[], vaultIndex: string | undefined = undefined) => ({
    collection: "typus_dov_single",
    database: "mainnet_1_0_0",
    dataSource: "typus",
    filter: {
        function: { $in: functionNames },
        index: vaultIndex,
    },
});

const apiUrl = "https://data.mongodb-api.com/app/data-dwhde/endpoint/data/v1/action/find";

const headers = {
    "api-key": "ZnJu3wGqGoYotyvHl5Qis0UvUJRDJkBBwIsRaHdmBuzfy4jyPBH1LzazIfOO0GSm",
    "Content-Type": "application/json",
};

export async function getDb(functionNames: string[], vaultIndex: string | undefined = undefined) {
    const jsonData = JSON.stringify(dbFilter(functionNames, vaultIndex));

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    if (response.ok) {
        let data = await response.json();
        return data.documents;
    }
}

export async function getNewAuction(vaultIndex: string | undefined = undefined) {
    await getDb(["NewAuction"], vaultIndex);
}

export async function getDelivery(vaultIndex: string | undefined = undefined) {
    await getDb(["Delivery"], vaultIndex);
}

export async function getSettle(vaultIndex: string | undefined = undefined) {
    let settleEvents: SettleEvent[] = await getDb(["Settle"], vaultIndex);
    console.log(settleEvents);
}

export async function getLog(vaultIndex: string | undefined = undefined) {
    let events = await getDb(["NewAuction", "Delivery", "Settle"], vaultIndex);
    // console.log(events);

    const groupEvent: Map<string, Map<string, GroupEvent>> = await events.reduce(async (promise, event) => {
        let map = await promise;
        // console.log(event);

        let round_event: GroupEvent = {
            newAuctionEvent: undefined,
            deliveryEvent: undefined,
            settleEvent: undefined,
        };

        if (map[event.index]) {
            let round_events = map[event.index];
            if (round_events[event.round]) {
                round_event = round_events[event.round];
            }
        }

        switch (event.function) {
            case "NewAuction":
                round_event.newAuctionEvent = event as NewAuctionEvent;
            case "Delivery":
                round_event.deliveryEvent = event as DeliveryEvent;
            case "Settle": {
                round_event.settleEvent = event as SettleEvent;
            }
        }

        if (map[event.index]) {
            map[event.index][event.round] = round_event;
        } else {
            let round_events = new Map<string, GroupEvent>();
            round_events[event.round] = round_event;
            map[event.index] = round_events;
        }

        return map;
    }, Promise.resolve({}));

    console.log(groupEvent);
}

(async () => {
    await getLog();
})();

interface GroupEvent {
    newAuctionEvent: NewAuctionEvent | undefined;
    deliveryEvent: DeliveryEvent | undefined;
    settleEvent: SettleEvent | undefined;
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
