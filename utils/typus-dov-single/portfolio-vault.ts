import { JsonRpcProvider } from "@mysten/sui.js";
import { DepositVault, BidVault, parseDepositVault, parseBidVault } from "../typus-framework/vault";
import { Auction, parseAuction } from "../typus-framework/dutch";

export interface PortfolioVault {
    vaultId: string;
    typeArgs: string[];
    assets: string[];
    info: Info;
    config: Config;
    depositVault: DepositVault;
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
    deliveryInfo?: DeliveryInfo;
}

export interface DeliveryInfo {
    round: string;
    price: string;
    size: string;
    premium: string;
    tsMs: string;
}

export interface Config {
    optionType: string;
    period: number; // daily:0 weekly:1 monthly:2
    activationTsMs: string;
    expirationTsMs: string;
    dTokenDecimal: string;
    bTokenDecimal: string;
    oTokenDecimal: string;
    lotSize: string;
    capacity: string;
    leverage: string;
    hasNext: boolean;
    activeVaultConfig: VaultConfig;
    warmupVaultConfig: VaultConfig;
    upcomingVaultConfig: VaultConfig;
}

export interface VaultConfig {
    payoffConfigs: PayoffConfig[];
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
    provider: JsonRpcProvider,
    registry: string,
    deposit_vault_registry: string,
    bid_vault_registry: string,
    index?: string
): Promise<Map<string, PortfolioVault>> {
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
            let assets = typeArgs.map((x) => x.split("::")[2]);
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
                deliveryInfo,
            };
            let config: Config = {
                // @ts-ignore
                optionType: portfolioVault.data.content.fields.config.fields.option_type,
                // @ts-ignore
                period: portfolioVault.data.content.fields.config.fields.period,
                // @ts-ignore
                activationTsMs: portfolioVault.data.content.fields.config.fields.activation_ts_ms,
                // @ts-ignore
                expirationTsMs: portfolioVault.data.content.fields.config.fields.expiration_ts_ms,
                // @ts-ignore
                dTokenDecimal: portfolioVault.data.content.fields.config.fields.d_token_decimal,
                // @ts-ignore
                bTokenDecimal: portfolioVault.data.content.fields.config.fields.b_token_decimal,
                // @ts-ignore
                oTokenDecimal: portfolioVault.data.content.fields.config.fields.o_token_decimal,
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
                    payoffConfigs: portfolioVault.data.content.fields.config.fields.active_vault_config.fields.payoff_configs.map(
                        (x) =>
                            ({
                                strikePct: x.fields.strike_pct,
                                weight: x.fields.weight,
                                isBuyer: x.fields.is_buyer,
                                strike: x.fields.strike,
                            } as PayoffConfig)
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
                    payoffConfigs: portfolioVault.data.content.fields.config.fields.warmup_vault_config.fields.payoff_configs.map(
                        (x) =>
                            ({
                                strikePct: x.fields.strike_pct,
                                weight: x.fields.weight,
                                isBuyer: x.fields.is_buyer,
                                strike: x.fields.strike,
                            } as PayoffConfig)
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
                    payoffConfigs: portfolioVault.data.content.fields.config.fields.upcoming_vault_config.fields.payoff_configs.map(
                        (x) =>
                            ({
                                strikePct: x.fields.strike_pct,
                                weight: x.fields.weight,
                                isBuyer: x.fields.is_buyer,
                                strike: x.fields.strike,
                            } as PayoffConfig)
                    ),
                    // @ts-ignore
                    strikeIncrement: portfolioVault.data.content.fields.config.fields.upcoming_vault_config.fields.strike_increment,
                    // @ts-ignore
                    decaySpeed: portfolioVault.data.content.fields.config.fields.upcoming_vault_config.fields.decay_speed,
                    // @ts-ignore
                    initialPrice: portfolioVault.data.content.fields.config.fields.upcoming_vault_config.fields.initial_price,
                    // @ts-ignore
                    finalPrice: portfolioVault.data.content.fields.config.fields.upcoming_vault_config.fields.final_price,
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
                depositVault: {},
                bidVault: {},
                auction,
                authority,
            } as PortfolioVault;
            return map;
        }, {});

    let depositVaultIds = (await provider.getDynamicFields({ parentId: deposit_vault_registry })).data
        .filter((x) => (index ? x.name.value == index : true))
        .map((x) => x.objectId as string);
    (
        await provider.multiGetObjects({
            ids: depositVaultIds,
            options: { showContent: true },
        })
    )
        .filter((depositVault) => depositVault.error == undefined)
        .forEach((depositVault) => {
            // @ts-ignore
            let index = depositVault.data.content.fields.name;
            // @ts-ignore
            let vault = parseDepositVault(depositVault.data.content.fields.value);
            let tvl = BigInt(vault.activeSubVault.balance) + BigInt(vault.warmupSubVault.balance);
            portfolioVaults[index].tokenTvl = tvl;
            portfolioVaults[index].depositVault = vault;
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