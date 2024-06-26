import { SuiClient } from "@mysten/sui.js/client";
import { DepositVault, BidVault, parseDepositVault, parseBidVault } from "../../utils/typus-framework/vault";
import { Auction, parseAuction } from "../../utils/typus-framework/dutch";
import { typeArgsToAssets } from "../../utils/token";

export interface PortfolioVault {
    vaultId: string;
    typeArgs: string[];
    assets: string[];
    info: Info;
    config: Config;
    tokenDepositVault: DepositVault;
    usdDepositVault: DepositVault;
    bidVault: BidVault;
    auction: Auction;
    authority: string;
    tokenTvl: bigint;
    usdTvl: bigint;
}

export interface Info {
    index: string;
    creator: string;
    createTsMs: string;
    round: string;
    oracleInfo: OracleInfo;
    deliveryInfo?: DeliveryInfo;
}

export interface OracleInfo {
    price: string;
    decimal: string;
}

export interface DeliveryInfo {
    round: string;
    price: string;
    size: string;
    premium: string;
    tsMs: string;
}

export interface Config {
    strategyName: string;
    period: number; // daily:0 weekly:1 monthly:2
    activationTsMs: string;
    expirationTsMs: string;
    oTokenDecimal: string;
    uTokenDecimal: string;
    bTokenDecimal: string;
    lotSize: string;
    capacity: string;
    leverage: string;
    hasNext: boolean;
    activeVaultConfig: VaultConfig;
    warmupVaultConfig: VaultConfig;
    upcomingVaultConfig: VaultConfig;
}

export interface VaultConfig {
    callPayoffConfigs: PayoffConfig[];
    putPayoffConfigs: PayoffConfig[];
    strikeIncrement: string;
    decaySpeed: string;
    initialPrice: string;
    finalPrice: string;
    auctionDurationInMs: string;
}

export interface PayoffConfig {
    strikePct: string;
    weight: string;
    isBuyer: boolean;
    strike?: string;
}

export async function getPortfolioVaults(
    provider: SuiClient,
    registry: string,
    token_deposit_vault_registry: string,
    usd_deposit_vault_registry: string,
    bid_vault_registry: string,
    index?: string
): Promise<Map<string, PortfolioVault>> {
    console.warn = function () {};

    let portfolioVaultIds = (await provider.getDynamicFields({ parentId: registry })).data
        .filter((x) => (index ? x.name.value == index : true))
        .map((x) => x.objectId as string);

    let portfolioVaults = (
        await provider.multiGetObjects({
            ids: portfolioVaultIds,
            options: { showContent: true },
        })
    )
        .filter((portfolioVault) => portfolioVault.error == undefined)
        .reduce(function (map, portfolioVault) {
            // console.log(JSON.stringify(portfolioVault, null, 4));
            // @ts-ignore
            let vaultId = portfolioVault.data.content.fields.id.id;
            // @ts-ignore
            let typeArgs = new RegExp(".*<(.*), (.*), (.*)>").exec(portfolioVault.data.content.type).slice(1, 4);
            let assets = typeArgsToAssets(typeArgs);
            let oracleInfo: OracleInfo = {
                // @ts-ignore
                price: portfolioVault.data.content.fields.info.fields.oracle_info.fields.price,
                // @ts-ignore
                decimal: portfolioVault.data.content.fields.info.fields.oracle_info.fields.decimal,
            };
            let deliveryInfo: DeliveryInfo | undefined =
                // @ts-ignore
                portfolioVault.data.content.fields.info.fields.delivery_info
                    ? {
                          // @ts-ignore
                          round: portfolioVault.data.content.fields.info.fields.delivery_info.fields.round,
                          // @ts-ignore
                          price: portfolioVault.data.content.fields.info.fields.delivery_info.fields.price,
                          // @ts-ignore
                          size: portfolioVault.data.content.fields.info.fields.delivery_info.fields.size,
                          // @ts-ignore
                          premium: portfolioVault.data.content.fields.info.fields.delivery_info.fields.premium,
                          // @ts-ignore
                          tsMs: portfolioVault.data.content.fields.info.fields.delivery_info.fields.ts_ms,
                      }
                    : undefined;
            let info: Info = {
                // @ts-ignore
                index: portfolioVault.data.content.fields.info.fields.index,
                // @ts-ignore
                creator: portfolioVault.data.content.fields.info.fields.creator,
                // @ts-ignore
                createTsMs: portfolioVault.data.content.fields.info.fields.create_ts_ms,
                // @ts-ignore
                round: portfolioVault.data.content.fields.info.fields.round,
                oracleInfo,
                deliveryInfo,
            };
            let config: Config = {
                // @ts-ignore
                strategyName: portfolioVault.data.content.fields.config.fields.strategy_name,
                // @ts-ignore
                period: portfolioVault.data.content.fields.config.fields.period,
                // @ts-ignore
                activationTsMs: portfolioVault.data.content.fields.config.fields.activation_ts_ms,
                // @ts-ignore
                expirationTsMs: portfolioVault.data.content.fields.config.fields.expiration_ts_ms,
                // @ts-ignore
                oTokenDecimal: portfolioVault.data.content.fields.config.fields.o_token_decimal,
                // @ts-ignore
                uTokenDecimal: portfolioVault.data.content.fields.config.fields.u_token_decimal,
                // @ts-ignore
                bTokenDecimal: portfolioVault.data.content.fields.config.fields.b_token_decimal,
                // @ts-ignore
                lotSize: portfolioVault.data.content.fields.config.fields.lot_size,
                // @ts-ignore
                capacity: portfolioVault.data.content.fields.config.fields.capacity,
                // @ts-ignore
                leverage: portfolioVault.data.content.fields.config.fields.leverage,
                // @ts-ignore
                hasNext: portfolioVault.data.content.fields.config.fields.has_next,
                activeVaultConfig: {
                    // @ts-ignore
                    callPayoffConfigs: portfolioVault.data.content.fields.config.fields.active_vault_config.fields.call_payoff_configs.map(
                        (x) =>
                            ({
                                strikePct: x.fields.strike_pct,
                                weight: x.fields.weight,
                                isBuyer: x.fields.is_buyer,
                                strike: x.fields.strike,
                            }) as PayoffConfig
                    ),
                    // @ts-ignore
                    putPayoffConfigs: portfolioVault.data.content.fields.config.fields.active_vault_config.fields.put_payoff_configs.map(
                        (x) =>
                            ({
                                strikePct: x.fields.strike_pct,
                                weight: x.fields.weight,
                                isBuyer: x.fields.is_buyer,
                                strike: x.fields.strike,
                            }) as PayoffConfig
                    ),
                    // @ts-ignore
                    strikeIncrement: portfolioVault.data.content.fields.config.fields.active_vault_config.fields.strike_increment,
                    // @ts-ignore
                    decaySpeed: portfolioVault.data.content.fields.config.fields.active_vault_config.fields.decay_speed,
                    // @ts-ignore
                    initialPrice: portfolioVault.data.content.fields.config.fields.active_vault_config.fields.initial_price,
                    // @ts-ignore
                    finalPrice: portfolioVault.data.content.fields.config.fields.active_vault_config.fields.final_price,
                    // @ts-ignore
                    auctionDurationInMs: portfolioVault.data.content.fields.config.fields.active_vault_config.fields.auction_duration_in_ms,
                } as VaultConfig,
                warmupVaultConfig: {
                    // @ts-ignore
                    callPayoffConfigs: portfolioVault.data.content.fields.config.fields.warmup_vault_config.fields.call_payoff_configs.map(
                        (x) =>
                            ({
                                strikePct: x.fields.strike_pct,
                                weight: x.fields.weight,
                                isBuyer: x.fields.is_buyer,
                                strike: x.fields.strike,
                            }) as PayoffConfig
                    ),
                    // @ts-ignore
                    putPayoffConfigs: portfolioVault.data.content.fields.config.fields.warmup_vault_config.fields.put_payoff_configs.map(
                        (x) =>
                            ({
                                strikePct: x.fields.strike_pct,
                                weight: x.fields.weight,
                                isBuyer: x.fields.is_buyer,
                                strike: x.fields.strike,
                            }) as PayoffConfig
                    ),
                    // @ts-ignore
                    strikeIncrement: portfolioVault.data.content.fields.config.fields.warmup_vault_config.fields.strike_increment,
                    // @ts-ignore
                    decaySpeed: portfolioVault.data.content.fields.config.fields.warmup_vault_config.fields.decay_speed,
                    // @ts-ignore
                    initialPrice: portfolioVault.data.content.fields.config.fields.warmup_vault_config.fields.initial_price,
                    // @ts-ignore
                    finalPrice: portfolioVault.data.content.fields.config.fields.warmup_vault_config.fields.final_price,
                    // @ts-ignore
                    auctionDurationInMs: portfolioVault.data.content.fields.config.fields.warmup_vault_config.fields.auction_duration_in_ms,
                } as VaultConfig,
                upcomingVaultConfig: {
                    // @ts-ignore
                    callPayoffConfigs:
                        // @ts-ignore
                        portfolioVault.data.content.fields.config.fields.upcoming_vault_config.fields.call_payoff_configs.map(
                            (x) =>
                                ({
                                    strikePct: x.fields.strike_pct,
                                    weight: x.fields.weight,
                                    isBuyer: x.fields.is_buyer,
                                    strike: x.fields.strike,
                                }) as PayoffConfig
                        ),
                    // @ts-ignore
                    putPayoffConfigs: portfolioVault.data.content.fields.config.fields.upcoming_vault_config.fields.put_payoff_configs.map(
                        (x) =>
                            ({
                                strikePct: x.fields.strike_pct,
                                weight: x.fields.weight,
                                isBuyer: x.fields.is_buyer,
                                strike: x.fields.strike,
                            }) as PayoffConfig
                    ),
                    // @ts-ignore
                    strikeIncrement: portfolioVault.data.content.fields.config.fields.upcoming_vault_config.fields.strike_increment,
                    // @ts-ignore
                    decaySpeed: portfolioVault.data.content.fields.config.fields.upcoming_vault_config.fields.decay_speed,
                    // @ts-ignore
                    initialPrice: portfolioVault.data.content.fields.config.fields.upcoming_vault_config.fields.initial_price,
                    // @ts-ignore
                    finalPrice: portfolioVault.data.content.fields.config.fields.upcoming_vault_config.fields.final_price,
                    // @ts-ignore
                    auctionDurationInMs:
                        // @ts-ignore
                        portfolioVault.data.content.fields.config.fields.upcoming_vault_config.fields.auction_duration_in_ms,
                } as VaultConfig,
            };
            // @ts-ignore
            let auction = portfolioVault.data.content.fields.auction ? parseAuction(portfolioVault.data.content.fields.auction) : undefined;
            // @ts-ignore
            let authority = portfolioVault.data.content.fields.authority.fields.whitelist.fields.id.id;
            map[info.index] = {
                vaultId,
                typeArgs,
                assets,
                info,
                config,
                tokenDepositVault: {},
                usdDepositVault: {},
                bidVault: {},
                auction,
                authority,
            } as PortfolioVault;
            return map;
        }, {});

    let tokenDepositVaultIds = (await provider.getDynamicFields({ parentId: token_deposit_vault_registry })).data
        .filter((x) => (index ? x.name.value == index : true))
        .map((x) => x.objectId as string);
    (
        await provider.multiGetObjects({
            ids: tokenDepositVaultIds,
            options: { showContent: true },
        })
    )
        .filter((tokenDepositVault) => tokenDepositVault.error == undefined)
        .forEach((tokenDepositVault) => {
            // @ts-ignore
            let index = tokenDepositVault.data.content.fields.name;
            // @ts-ignore
            let depositVault = parseDepositVault(tokenDepositVault.data.content.fields.value);
            let tvl = BigInt(depositVault.activeSubVault.balance) + BigInt(depositVault.warmupSubVault.balance);
            portfolioVaults[index].tokenTvl = tvl;
            portfolioVaults[index].tokenDepositVault = depositVault;
        });

    let usdDepositVaultIds = (await provider.getDynamicFields({ parentId: usd_deposit_vault_registry })).data
        .filter((x) => (index ? x.name.value == index : true))
        .map((x) => x.objectId as string);
    (
        await provider.multiGetObjects({
            ids: usdDepositVaultIds,
            options: { showContent: true },
        })
    )
        .filter((usdDepositVault) => usdDepositVault.error == undefined)
        .forEach((usdDepositVault) => {
            // @ts-ignore
            let index = usdDepositVault.data.content.fields.name;
            // @ts-ignore
            let depositVault = parseDepositVault(usdDepositVault.data.content.fields.value);
            let tvl = BigInt(depositVault.activeSubVault.balance) + BigInt(depositVault.warmupSubVault.balance);
            portfolioVaults[index].usdTvl = tvl;
            portfolioVaults[index].usdDepositVault = depositVault;
        });

    let bidVaultIds = (await provider.getDynamicFields({ parentId: bid_vault_registry })).data
        .filter((x) => (index ? x.name.value == index : true))
        .map((x) => x.objectId as string);
    (
        await provider.multiGetObjects({
            ids: bidVaultIds,
            options: { showContent: true },
        })
    )
        .filter((bidVault) => bidVault.error == undefined)
        .forEach((bidVault) => {
            // @ts-ignore
            portfolioVaults[bidVault.data.content.fields.name].bidVault = parseBidVault(bidVault.data.content.fields.value);
        });

    // @ts-ignore
    return portfolioVaults;
}
