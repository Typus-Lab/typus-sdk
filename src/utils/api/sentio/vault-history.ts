const headers = {
    "api-key": "tz3JJ6stG7Fux6ueRSRA5mdpC9U0lozI3",
    "Content-Type": "application/json",
};

export async function getVaultHistorySummary(): Promise<VaultHistorySummary[]> {
    let apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";

    let requestData = {
        sqlQuery: {
            sql: `
                    WITH hourly_price_table AS (
                        SELECT
                            symbol,
                            toStartOfHour(time) AS hour,
                            argMax(price, time) AS hourly_price
                        FROM
                            token.prices
                        GROUP BY
                            symbol, hour
                    ),

                    vault_history AS (
                        SELECT
                            Settle.timestamp as timestamp,
                            Settle.index as Index,
                            Settle.round as Round,
                            NewAuction.start_ts_ms as ActivationDate,
                            COALESCE(NULLIF(UpdateStrike.strikes, ''), NewAuction.strikes) AS Strikes, -- 如果 UpdateStrike.strikes 是空字符串，就使用 NewAuction.strikes
                            Settle.oracle_price as SettlePrice,
                            -- Settle.share_price as share_price,
                            -- Settle.settle_balance as SettleBalance,
                            CAST(Activate.deposit_balance as Float64) as DepositAmount,
                            DepositAmount * Settle.price_d_token as DepositAmountUSD,
                            Delivery.max_size as MaxSize,
                            (SafuOtc.delivery_size + Delivery.delivery_size) as TotalSell,
                            CASE WHEN MaxSize != 0 THEN TotalSell / MaxSize ELSE 0 END AS Filled,
                            Delivery.delivery_size as DeliverySize,
                            Delivery.delivery_price as DeliveryPrice,
                            SafuOtc.delivery_size as OtcSize,
                            SafuOtc.delivery_price as OtcPrice,
                            Delivery.bidder_bid_value as BidderPremium,
                            BidderPremium * Delivery.price_b_token as BidderPremiumUSD,
                            Delivery.incentive_bid_value as IncentivePremium,
                            SafuOtc.bidder_bid_value as OtcPremium,
                            (Delivery.bidder_bid_value + Delivery.incentive_bid_value + SafuOtc.bidder_bid_value) AS Premium, -- Total Premium b_token
                            Premium * Delivery.price_b_token AS PremiumUSD,
                            Delivery.depositor_incentive_value as BpIncentive, -- SUI or SCA based on o_token
                            BpIncentive * Delivery.price_o_token as BpIncentiveUSD,
                            Delivery.fixed_incentive_amount as FixedIncentive, -- SUI
                            FixedIncentive * hourly_price_table.hourly_price as FixedIncentiveUSD,
                            (1 - Settle.share_price) as LossPecentage,
                            CAST((Settle.settle_balance - Settle.settled_balance) AS Float64)  as OptionProfit, -- d_token
                            OptionProfit * Settle.price_d_token as OptionProfitUSD,
                            PremiumUSD + BpIncentiveUSD + FixedIncentiveUSD - OptionProfitUSD  as DepositorPNL,
                            -- CASE WHEN DepositAmountUSD != 0 THEN DepositorPNL / DepositAmountUSD ELSE 0 END AS DepositorROI,
                            OptionProfitUSD - BidderPremiumUSD as BidderPNL,
                            CASE WHEN BidderPremiumUSD != 0 THEN BidderPNL / BidderPremiumUSD ELSE 0 END AS BidderROI,
                            Settle.d_token as d_token,
                            Delivery.b_token as b_token,
                            Delivery.o_token as o_token
                        FROM Settle
                        JOIN Activate ON Settle.index = Activate.index AND Settle.round = Activate.round
                        JOIN NewAuction ON Settle.index = NewAuction.index AND Settle.round = NewAuction.round
                        LEFT JOIN UpdateStrike ON Settle.index = UpdateStrike.index AND Settle.round = UpdateStrike.round
                        JOIN Delivery ON Settle.index = Delivery.index AND Settle.round = Delivery.round
                        LEFT JOIN SafuOtc ON Settle.index = SafuOtc.index AND Settle.round = SafuOtc.round
                        LEFT JOIN hourly_price_table ON 'sui' = hourly_price_table.symbol AND toStartOfHour(Settle.timestamp) = hourly_price_table.hour
                        ORDER BY ActivationDate DESC
                    )

                    SELECT
                        vault_history.Index AS Index,
                        SUM(vault_history.TotalSell) AS TotalSell, -- Total Sell Size
                        AVG(vault_history.Filled) AS AverageFilled, -- Average Filled Rate
                        AVG(vault_history.OptionProfit) AS AverageLoss, -- Average Option Profit
                        SUM(vault_history.OptionProfit) AS TotalOptionProfit, -- Total Option Profit
                        AVG(CASE -- Calculating Average Drawdown, ignoring DepositAmount == 0
                            WHEN vault_history.DepositAmount > 0 THEN vault_history.OptionProfit / vault_history.DepositAmount ELSE NULL
                            END) AS AverageDrawdown, -- Average Drawdown (based on Option Profit and TVL)
                        SUM(CASE WHEN vault_history.BidderPNL > 0 THEN 1 ELSE 0 END) / COUNT(*) AS BidderWinRate, -- Calculating Bidder Win Rate (probability BidderPNL > 0)
                        SUM(CASE WHEN vault_history.DepositorPNL > 0 THEN 1 ELSE 0 END) / COUNT(*) AS DepositorWinRate -- Calculating Depositor Win Rate (probability DepositorPNL > 0)
                    FROM vault_history
                    GROUP BY vault_history.Index
                    ORDER BY Index ASC
            `,
            size: 1000,
        },
    };

    let jsonData = JSON.stringify(requestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    let data = await response.json();

    let result = data.result.rows as VaultHistorySummary[];
    // console.log(result);

    return result;
}

interface VaultHistorySummary {
    AverageDrawdown: number;
    AverageFilled: number;
    AverageLoss: number;
    BidderWinRate: number;
    DepositorWinRate: number;
    Index: string;
    TotalOptionProfit: number;
    TotalSell: string;
}

export async function getVaultHistory(index: string, limit: number = 100): Promise<VaultHistory[]> {
    let apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";

    let requestData = {
        sqlQuery: {
            sql: `
                    WITH hourly_price_table AS (
                        SELECT
                            symbol,
                            toStartOfHour(time) AS hour,
                            argMax(price, time) AS hourly_price  -- Get the most recent price before or at the hour
                        FROM
                            token.prices
                        GROUP BY
                            symbol, hour
                    )

                SELECT
                    Settle.timestamp as timestamp,
                    Settle.index as Index,
                    Settle.round as Round,
                    NewAuction.start_ts_ms as ActivationDate,
                    COALESCE(NULLIF(UpdateStrike.strikes, ''), NewAuction.strikes) AS Strikes, -- 如果 UpdateStrike.strikes 是空字符串，就使用 NewAuction.strikes
                    Settle.oracle_price as SettlePrice,
                    -- Settle.share_price as share_price,
                    -- Settle.settle_balance as SettleBalance,
                    Activate.deposit_balance as DepositAmount,
                    DepositAmount * Settle.price_d_token as DepositAmountUSD,
                    Delivery.max_size as MaxSize,
                    (SafuOtc.delivery_size + Delivery.delivery_size) as TotalSell,
                    CASE WHEN MaxSize != 0 THEN TotalSell / MaxSize ELSE 0 END AS Filled,
                    Delivery.delivery_size as DeliverySize,
                    Delivery.delivery_price as DeliveryPrice,
                    SafuOtc.delivery_size as OtcSize,
                    SafuOtc.delivery_price as OtcPrice,
                    Delivery.bidder_bid_value as BidderPremium,
                    BidderPremium * Delivery.price_b_token as BidderPremiumUSD,
                    Delivery.incentive_bid_value as IncentivePremium,
                    SafuOtc.bidder_bid_value as OtcPremium,
                    (Delivery.bidder_bid_value + Delivery.incentive_bid_value + SafuOtc.bidder_bid_value) AS Premium, -- Total Premium b_token
                    Premium * Delivery.price_b_token AS PremiumUSD,
                    Delivery.depositor_incentive_value as BpIncentive, -- SUI or SCA based on o_token
                    BpIncentive * Delivery.price_o_token as BpIncentiveUSD,
                    Delivery.fixed_incentive_amount as FixedIncentive, -- SUI
                    FixedIncentive * hourly_price_table.hourly_price as FixedIncentiveUSD,
                    (1 - Settle.share_price) as LossPecentage,
                    (Settle.settle_balance - Settle.settled_balance) as OptionProfit, -- d_token
                    OptionProfit * Settle.price_d_token as OptionProfitUSD,
                    PremiumUSD + BpIncentiveUSD + FixedIncentiveUSD - OptionProfitUSD  as DepositorPNL,
                    -- CASE WHEN DepositAmountUSD != 0 THEN DepositorPNL / DepositAmountUSD ELSE 0 END AS DepositorROI,
                    OptionProfitUSD - BidderPremiumUSD as BidderPNL,
                    CASE WHEN BidderPremiumUSD != 0 THEN BidderPNL / BidderPremiumUSD ELSE 0 END AS BidderROI,
                    Settle.d_token as d_token,
                    Delivery.b_token as b_token,
                    Delivery.o_token as o_token
                FROM Settle
                    JOIN Activate ON Settle.index = Activate.index AND Settle.round = Activate.round
                    JOIN NewAuction ON Settle.index = NewAuction.index AND Settle.round = NewAuction.round
                    LEFT JOIN UpdateStrike ON Settle.index = UpdateStrike.index AND Settle.round = UpdateStrike.round
                    JOIN Delivery ON Settle.index = Delivery.index AND Settle.round = Delivery.round
                    LEFT JOIN SafuOtc ON Settle.index = SafuOtc.index AND Settle.round = SafuOtc.round
                    -- LEFT JOIN hourly_price_table ON LOWER(Settle.d_token) = hourly_price_table.symbol AND toStartOfHour(Settle.timestamp) = hourly_price_table.hour
                    LEFT JOIN hourly_price_table ON 'sui' = hourly_price_table.symbol AND toStartOfHour(Settle.timestamp) = hourly_price_table.hour
                WHERE Settle.index = ${index}
                ORDER BY ActivationDate DESC;
            `,
            size: limit,
        },
    };

    let jsonData = JSON.stringify(requestData);

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    let data = await response.json();

    let result = data.result.rows as VaultHistory[];
    // console.log(result);

    return result;
}

interface VaultHistory {
    ActivationDate: string;
    BidderPNL: string;
    BidderPremium: string;
    BidderPremiumUSD: string;
    BidderROI: string;
    BpIncentive: string;
    BpIncentiveUSD: string;
    DeliveryPrice: string;
    DeliverySize: string;
    DepositAmount: string;
    DepositAmountUSD: string;
    DepositorPNL: number;
    Filled: string;
    FixedIncentive: string;
    FixedIncentiveUSD: number;
    IncentivePremium: string;
    Index: string;
    LossPecentage: string;
    MaxSize: string;
    OptionProfit: string;
    OptionProfitUSD: string;
    OtcPremium: string;
    OtcPrice: string;
    OtcSize: string;
    Premium: string;
    PremiumUSD: string;
    Round: string;
    SettlePrice: string;
    Strikes: string;
    TotalSell: string;
    b_token: string;
    d_token: string;
    o_token: string;
    timestamp: string;
}

// getVaultHistorySummary();
// getVaultHistory("78", 3);
