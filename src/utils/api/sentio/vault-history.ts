const headers = {
    "api-key": "RIobs1PpAZ4SmHxY2InErtz0pL5LqHTtY",
    "Content-Type": "application/json",
};

export async function getVaultHistorySummary(startTimestamp?: number): Promise<VaultHistorySummary[]> {
    let apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";

    let timeFilter: string;
    if (startTimestamp) {
        timeFilter = `WHERE timestamp >= ${startTimestamp}`;
    } else {
        timeFilter = "";
    }

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
                    safu_otc_aggregated AS (
                        SELECT
                            index,
                            round,
                            AVG(delivery_price) AS delivery_price,
                            SUM(delivery_size) AS delivery_size,
                            SUM(bidder_bid_value) AS bidder_bid_value,
                            SUM(bidder_fee) AS bidder_fee
                        FROM SafuOtc
                        GROUP BY index, round
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
                            (safu_otc_aggregated.delivery_size + Delivery.delivery_size) as TotalSell,
                            CASE WHEN MaxSize != 0 THEN TotalSell / MaxSize ELSE 0 END AS Filled,
                            Delivery.delivery_size as DeliverySize,
                            Delivery.delivery_price as DeliveryPrice,
                            safu_otc_aggregated.delivery_size as OtcSize,
                            safu_otc_aggregated.delivery_price as OtcPrice,
                            (Delivery.bidder_bid_value + Delivery.bidder_fee) as BidderPremium,
                            (Delivery.incentive_bid_value + Delivery.incentive_fee) as IncentivePremium,
                            (safu_otc_aggregated.bidder_bid_value + safu_otc_aggregated.bidder_fee) as OtcPremium,
                            (BidderPremium + IncentivePremium + OtcPremium) AS Premium, -- Total Premium b_token
                            Premium * Delivery.price_b_token AS PremiumUSD,
                            (Delivery.bidder_fee + Delivery.incentive_fee + safu_otc_aggregated.bidder_fee) * Delivery.price_b_token AS PremiumFeeUSD,
                            Delivery.depositor_incentive_value as BpIncentive, -- SUI or SCA based on o_token
                            BpIncentive * Delivery.price_o_token as BpIncentiveUSD,
                            Delivery.fixed_incentive_amount as FixedIncentive, -- SUI
                            FixedIncentive * hourly_price_table.hourly_price as FixedIncentiveUSD,
                            (1 - Settle.share_price) as LossPecentage,
                            CAST((Settle.settle_balance - Settle.settled_balance) AS Float64)  as OptionProfit, -- d_token
                            OptionProfit * Settle.price_d_token as OptionProfitUSD,
                            PremiumUSD - PremiumFeeUSD + BpIncentiveUSD + FixedIncentiveUSD - OptionProfitUSD  as DepositorPNL,
                            -- CASE WHEN DepositAmountUSD != 0 THEN DepositorPNL / DepositAmountUSD ELSE 0 END AS DepositorROI,
                            OptionProfitUSD - PremiumUSD as BidderPNL,
                            CASE WHEN PremiumUSD != 0 THEN BidderPNL / PremiumUSD ELSE 0 END AS BidderROI,
                            Settle.d_token as d_token,
                            Delivery.b_token as b_token,
                            Delivery.o_token as o_token
                        FROM Settle
                        JOIN Activate ON Settle.index = Activate.index AND Settle.round = Activate.round
                        JOIN NewAuction ON Settle.index = NewAuction.index AND Settle.round = NewAuction.round
                        LEFT JOIN UpdateStrike ON Settle.index = UpdateStrike.index AND Settle.round = UpdateStrike.round
                        JOIN Delivery ON Settle.index = Delivery.index AND Settle.round = Delivery.round
                        LEFT JOIN safu_otc_aggregated ON Settle.index = safu_otc_aggregated.index AND Settle.round = safu_otc_aggregated.round
                        LEFT JOIN hourly_price_table ON 'sui' = hourly_price_table.symbol AND toStartOfHour(Settle.timestamp) = hourly_price_table.hour
                        ${timeFilter}
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
    // console.log(data);

    let result = data.result.rows as VaultHistorySummary[];
    // console.log(result);

    return result;
}

export async function getFilledSummary(startTimestamp?: number): Promise<VaultHistorySummary[]> {
    let apiUrl = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";

    let timeFilter: string;
    if (startTimestamp) {
        timeFilter = `WHERE timestamp >= ${startTimestamp}`;
    } else {
        timeFilter = "";
    }

    let requestData = {
        sqlQuery: {
            sql: `
                    WITH safu_otc_aggregated AS (
                        SELECT
                            index,
                            round,
                            SUM(delivery_size) AS delivery_size
                        FROM SafuOtc
                        GROUP BY index, round
                    ),
                    vault_history AS (
                        SELECT
                            Delivery.timestamp as timestamp,
                            Delivery.index as Index,
                            Delivery.round as Round,
                            NewAuction.start_ts_ms as ActivationDate,
                            Delivery.max_size as MaxSize,
                            (safu_otc_aggregated.delivery_size + Delivery.delivery_size) as TotalSell,
                            CASE WHEN MaxSize != 0 THEN TotalSell / MaxSize ELSE 0 END AS Filled
                            FROM Delivery
                            JOIN Activate ON Delivery.index = Activate.index AND Delivery.round = Activate.round
                            JOIN NewAuction ON Delivery.index = NewAuction.index AND Delivery.round = NewAuction.round
                            LEFT JOIN safu_otc_aggregated ON Delivery.index = safu_otc_aggregated.index AND Delivery.round = safu_otc_aggregated.round
                            ${timeFilter}
                        ORDER BY ActivationDate DESC
                    )
                    SELECT
                        vault_history.Index AS Index,
                        AVG(vault_history.Filled) AS AverageFilled -- Average Filled Rate
                    FROM vault_history
                    GROUP BY Index
                    ORDER BY Index DESC
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
    // console.log(data);

    let result = data.result.rows as VaultHistorySummary[];
    // console.log(result);

    return result;
}

export interface VaultHistorySummary {
    AverageDrawdown: number;
    AverageFilled: number;
    AverageLoss: number;
    BidderWinRate: number;
    DepositorWinRate: number;
    Index: string;
    TotalOptionProfit: number;
    TotalSell: string;
}

export async function getVaultHistory(indices: string[], limit: number = 100): Promise<VaultHistory[]> {
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
                    safu_otc_aggregated AS (
                        SELECT
                            index,
                            round,
                            AVG(delivery_price) AS delivery_price,
                            SUM(delivery_size) AS delivery_size,
                            SUM(bidder_bid_value) AS bidder_bid_value,
                            SUM(bidder_fee) AS bidder_fee
                        FROM SafuOtc
                        GROUP BY index, round
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
                            CAST(Activate.deposit_balance as Float64) as DepositAmount,
                            DepositAmount * Settle.price_d_token as DepositAmountUSD,
                            Delivery.max_size as MaxSize,
                            (safu_otc_aggregated.delivery_size + Delivery.delivery_size) as TotalSell,
                            CASE WHEN MaxSize != 0 THEN TotalSell / MaxSize ELSE 0 END AS Filled,
                            Delivery.delivery_size as DeliverySize,
                            Delivery.delivery_price as DeliveryPrice,
                            safu_otc_aggregated.delivery_size as OtcSize,
                            safu_otc_aggregated.delivery_price as OtcPrice,
                            (Delivery.bidder_bid_value + Delivery.bidder_fee) as BidderPremium,
                            (Delivery.incentive_bid_value + Delivery.incentive_fee) as IncentivePremium,
                            (safu_otc_aggregated.bidder_bid_value + safu_otc_aggregated.bidder_fee) as OtcPremium,
                            (BidderPremium + IncentivePremium + OtcPremium) AS Premium, -- Total Premium b_token
                            Premium * Delivery.price_b_token AS PremiumUSD,
                            IncentivePremium * Delivery.price_b_token AS IncentivePremiumUSD,
                            (Delivery.bidder_fee + Delivery.incentive_fee + safu_otc_aggregated.bidder_fee) * Delivery.price_b_token AS PremiumFeeUSD,
                            Delivery.depositor_incentive_value as BpIncentive, -- SUI or SCA based on o_token
                            BpIncentive * Delivery.price_o_token as BpIncentiveUSD,
                            Delivery.fixed_incentive_amount as FixedIncentive, -- SUI
                            FixedIncentive * hourly_price_table.hourly_price as FixedIncentiveUSD,
                            (1 - Settle.share_price) as LossPecentage,
                            CAST((Settle.settle_balance - Settle.settled_balance) AS Float64)  as OptionProfit, -- d_token
                            OptionProfit * Settle.price_d_token as OptionProfitUSD,
                            PremiumUSD - PremiumFeeUSD + BpIncentiveUSD + FixedIncentiveUSD - OptionProfitUSD  as DepositorPNL,
                            -- CASE WHEN DepositAmountUSD != 0 THEN DepositorPNL / DepositAmountUSD ELSE 0 END AS DepositorROI,
                            OptionProfitUSD - (PremiumUSD - IncentivePremiumUSD) as BidderPNL,
                            CASE WHEN (PremiumUSD - IncentivePremiumUSD) != 0 THEN BidderPNL / (PremiumUSD - IncentivePremiumUSD) ELSE 0 END AS BidderROI,
                            Settle.d_token as d_token,
                            Delivery.b_token as b_token,
                            Delivery.o_token as o_token
                FROM Settle
                    JOIN Activate ON Settle.index = Activate.index AND Settle.round = Activate.round
                    JOIN NewAuction ON Settle.index = NewAuction.index AND Settle.round = NewAuction.round
                    LEFT JOIN UpdateStrike ON Settle.index = UpdateStrike.index AND Settle.round = UpdateStrike.round
                    JOIN Delivery ON Settle.index = Delivery.index AND Settle.round = Delivery.round
                    LEFT JOIN safu_otc_aggregated ON Settle.index = safu_otc_aggregated.index AND Settle.round = safu_otc_aggregated.round
                    -- LEFT JOIN hourly_price_table ON LOWER(Settle.d_token) = hourly_price_table.symbol AND toStartOfHour(Settle.timestamp) = hourly_price_table.hour
                    LEFT JOIN hourly_price_table ON 'sui' = hourly_price_table.symbol AND toStartOfHour(Settle.timestamp) = hourly_price_table.hour
                WHERE Settle.index IN (${indices.join(",")})
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

// let quarterly_timestamp = Math.round(new Date().setMonth(new Date().getMonth() - 3) / 1000);
// console.log(quarterly_timestamp);
// getVaultHistorySummary();
// getFilledSummary(quarterly_timestamp);
// getVaultHistory(["78", "79"], 2);
