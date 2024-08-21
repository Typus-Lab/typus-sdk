import { AbbrStrategyName, Period, parseAssets } from "./vault";
import { Auction, BidShare, Vault, getAuctions, getMyBids, getVaults } from "../view-function";
import { checkNumber, countFloating, insertAt, getLatestPrice } from "../../utils";
import { Connection, PublicKey } from "@solana/web3.js";
import { getUserStrategies } from "../../auto-bid";
import { orderBy } from "lodash";
import { PythHttpClient, getPythClusterApiUrl, getPythProgramKeyForCluster, PythCluster, PriceData } from "@pythnetwork/client";
import { StableCoin, getTokenName, WrappedToken } from "./token";
import { SuiClient } from "@mysten/sui.js/dist/cjs/client";
import { typeArgsToAssets } from "../../constants";
import BigNumber from "bignumber.js";
import { TypusConfig } from "src/utils";
import moment from "moment";

const PriceDecimal = BigNumber(10).pow(8);

export const ASSET_INFO = {
    BTC: {
        product: new PublicKey("4aDoSXJ5o3AuvL7QFeR6h44jALQfTmUUCTVGDD6aoJTM"),
        price: new PublicKey("GVXRSBjFk6e6J3NbVPXohDJetcTjaeeuykUpbQF8UoMU"),
    },
    ETH: {
        product: new PublicKey("EMkxjGC1CQ7JLiutDbfYb7UKb3zm9SJcUmr1YicBsdpZ"),
        price: new PublicKey("JBu1AL4obBcCMqKBBxhpWCNUt136ijcuMZLFvTP7iWdB"),
    },
    SUI: {
        product: new PublicKey("2F8rfBf4z4SzNpeQstFTpLXTQQ7RNKsLFqPdbpybooCc"),
        price: new PublicKey("3Qub3HaAJaa2xNY7SUqPKd3vVwTqDfDDkEUMPjXD2c1q"),
    },
    CETUS: {
        product: new PublicKey("JDHPsM1zxsZ6TfDwpCVzo41DAZdRi6ZmhkzWU1iXvSQ"),
        price: new PublicKey("GTeC2JfBFrHuYkBivDQcNdLY74X5FRDLEJntnxPKRQbY"),
    },
    SEI: {
        product: new PublicKey("24bB1mRGsrrDVawJTCVYXrxbEz6ozztukPUKvcZCDcPz"),
        price: new PublicKey("6cUuAyAX3eXoiWkjFF77RQBEUF15AAMQ7d1hm4EPd3tv"),
    },
    USDC: {
        product: new PublicKey("8GWTTbNiXdmyZREXbjsZBmCRuzdPrW55dnZGDkTRjWvb"),
        price: new PublicKey("Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD"),
    },
    USDT: {
        product: new PublicKey("Av6XyAMJnyi68FdsKSPYgzfXGjYrrt6jcAMwtvzLCqaM"),
        price: new PublicKey("3vxLXJqLqF3JG5TCbYycbKWRBbCJQLxQmBGCkyqEEefL"),
    },
    TURBOS: {
        product: new PublicKey("8DZUgXNQo5Um1pqo4gzv9oWPUZpyKV9nXm51gysZFMef"),
        price: new PublicKey("HoxttzPFzcPvpZhUY8LCLkFNn9keDnBrctno4wXEhpFk"),
    },
    APT: {
        product: new PublicKey("6bQMDtuAmRgjvymdWk9w4tTc9YyuXcjMxF8MyPHXejsx"),
        price: new PublicKey("FNNvb1AFDnDVPkocEri8mWbJ1952HQZtFLuwPiUjSJQ"),
    },
    SOL: {
        product: new PublicKey("ALP8SdU9oARYVLgLR7LrqMNCYBnhtnQz1cj6bwgwQmgj"),
        price: new PublicKey("H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG"),
    },
    INJ: {
        product: new PublicKey("5Q5kyCVzssrGMd2BniSdVeRwjNWrGGrFhMrgGt4zURyA"),
        price: new PublicKey("9EdtbaivHQYA4Nh3XzGR6DwRaoorqXYnmpfsnFhvwuVj"),
    },
    JUP: {
        product: new PublicKey("AykbyeHZbUbEtEAPVpBLoPAMHBrUrDMtXJkPWZw4TRDX"),
        price: new PublicKey("g6eRCbboSwK4tSWngn773RCMexr1APQr4uA9bGZBYfo"),
    },
    HASUI: {
        product: new PublicKey("FGJutsZ3Hr9BaamiNUq369AamUEMArCxFeMnjZZ1u4oG"),
        price: new PublicKey("7Y9jRRHvqig2wdSkjnACwt1SV1qocjY81C9nKKVJ6zJs"),
    },
    VSUI: {
        product: new PublicKey("9L4zWUnRWEqHT9fvH5WkmQgXf7qrr97SGV4pofTSdK5k"),
        price: new PublicKey("6vWPEigSDaAi6m6HuX24aK4fJGJxvQZ8TLQKADC65S2S"),
    },
};

export const tokenOrder: { [key: string]: number } = {
    // Basically it's a to z but put SUI at first
    SUI: 0,
    AFSUI: 1,
    APT: 2,
    WBTC: 3,
    BTC: 3,
    BUCK: 4,
    CETUS: 5,
    WETH: 6,
    ETH: 6,
    FUD: 7,
    INJ: 8,
    JUP: 9,
    NAVX: 10,
    SCA: 11,
    SEI: 12,
    WSOL: 13,
    SOL: 14,
    TURBOS: 15,
    USDC: 16,
    USDT: 17,
    USDY: 18,
    VSUI: 20,
};

export const optionTypeOrder: { [key: string]: number } = {
    0: 0,
    1: 2,
    2: 3,
    4: 4,
    6: 5,
    5: 6,
};

export const periodOrder: { [key: string]: number } = {
    0: 1,
    1: 2,
    2: 3,
    3: 0,
};

export type Receipt = {
    id: string;
    index: string;
    name: string;
    description: string;
    vid: string;
};

export type TokenAmount = {
    value: string;
    token: string;
};

export type BidVaultInfo = { vaultInfo: Vault; receipt: Receipt };

export interface Bid {
    vaultIndex: string;
    expiry: string;
    auctionName: string;
    strikes: string[];
    bidSize: TokenAmount;
    breakEvenPrice: string;
    estPnls: TokenAmount[];
    receiptsId: string[];
    receiptsVid: string[];
    settlePrice: string;
    isAutoBid: boolean;
}

export interface OrderBy {
    tokenOrder: number;
    optionTypeOrder: number;
    periodOrder: number;
}

export interface CoinInfo {
    price: string;
    decimal: string;
    quote: string;
}

export const IncentiveRateBp = 4;

const DefaultOracleDecimal: { [key: string]: string } = {
    ETH: "8",
    SUI: "8",
    AFSUI: "8",
    BTC: "8",
    DOGE: "8",
    APT: "8",
    SOL: "8",
    USDC: "8",
    USDT: "8",
    CETUS: "8",
    TURBOS: "8",
    NAVX: "8",
    JUP: "8",
    BUCK: "8",
    USDY: "8",
    SEI: "8",
    FUD: "8",
    MFUD: "8",
    INJ: "8",
    SCA: "8",
    VSUI: "8",
    HASUI: "8",
};

export const parsePythOracleData = (data: PriceData[], decimals: { [key: string]: string }) => {
    const prices: { [key: string]: CoinInfo } = {};
    Object.entries(ASSET_INFO).forEach((p) => {
        const asset = p[0].toUpperCase();
        const coinData = data.find((s) => {
            return s.productAccountKey.equals(p[1].product);
        });
        const decimal = decimals[asset];
        if (decimal && coinData) {
            prices[asset.toLowerCase()] = {
                price: BigNumber(coinData.price ?? 0)
                    .multipliedBy(BigNumber(10).pow(decimal))
                    .toString(),
                decimal,
                quote: "usd",
            };
            if (WrappedToken[asset]) {
                prices[WrappedToken[asset].toLowerCase()] = {
                    price: BigNumber(coinData.price ?? 0)
                        .multipliedBy(BigNumber(10).pow(decimal))
                        .toString(),
                    decimal,
                    quote: "usd",
                };
            }
        }
    });
    return prices;
};

export const fetchPrices = async (provider: SuiClient, config: TypusConfig): Promise<{ [key: string]: CoinInfo }> => {
    const coinObjects = await provider.multiGetObjects({
        ids: Object.values(config.oracle),
        options: { showContent: true },
    });

    const oracleDecimal: { [key: string]: string } = {
        ...DefaultOracleDecimal,
    };

    coinObjects.forEach((c) => {
        // @ts-ignore
        oracleDecimal[c.data?.content.fields.base_token] =
            // @ts-ignore
            c.data?.content.fields.decimal;
    });

    const PYTHNET_CLUSTER_NAME: PythCluster = "pythnet";
    const connection = new Connection(getPythClusterApiUrl(PYTHNET_CLUSTER_NAME));
    const pythPublicKey = getPythProgramKeyForCluster(PYTHNET_CLUSTER_NAME);
    const pythClient = new PythHttpClient(connection, pythPublicKey);
    const priceData = await pythClient.getAssetPricesFromAccounts(Object.values(ASSET_INFO).map((a) => a.price));
    const prices = parsePythOracleData(priceData, oracleDecimal);

    const suiusd = BigNumber(prices["sui"]?.price ?? 0);

    const suifud = await getLatestPrice("SUIFUD");
    const fudusd = suifud == "0" ? BigNumber(0) : suiusd.div(suifud);

    const suiafsui = await getLatestPrice("SUIAFSUI");
    const afsuiusd = suiafsui == "0" ? BigNumber(0) : suiusd.div(suiafsui);

    const suinavx = await getLatestPrice("SUINAVX");
    const navxusd = suiusd.div(suinavx);

    const suibuck = await getLatestPrice("SUIBUCK");
    const buckusd = BigNumber(suibuck).lte(0) ? "0" : suiusd.div(suibuck);

    const usdyusdc = await getLatestPrice("USDYUSDC");
    const usdyusdcWithDecimal = BigNumber(usdyusdc).multipliedBy(BigNumber(10).pow(8));

    const scasui = await getLatestPrice("SCASUI");
    const scausd = suiusd.eq(0) ? BigNumber(0) : BigNumber(scasui).multipliedBy(suiusd);

    return {
        fud: { price: fudusd.toString(), decimal: "8", quote: "usd" },
        mfud: { price: fudusd.multipliedBy(1000000).toString(), decimal: "8", quote: "usd" },
        afsui: { price: afsuiusd.toString(), decimal: "8", quote: "usd" },
        navx: { price: navxusd.toString(), decimal: "8", quote: "usd" },
        buck: { price: buckusd.toString(), decimal: "8", quote: "usd" },
        usdy: { price: usdyusdcWithDecimal.toString(), decimal: "8", quote: "usd" },
        sca: { price: scausd.toString(), decimal: "8", quote: "usd" },
        ...prices,
    };
};

export const calcIncentiveRate = (incentiveBp) => {
    const incentiveRateBp = BigNumber(incentiveBp).div(BigNumber(10).pow(IncentiveRateBp));
    let incentiveRate = 1;
    if (incentiveRateBp.gt(0)) {
        incentiveRate = 1 - Number(incentiveRateBp);
    }

    return incentiveRate;
};

export const calcDeliveryPrice = (bidShare: BidShare, vaultInfo: Vault) => {
    const {
        info: { bTokenDecimal },
    } = vaultInfo;
    let deliveryPrice = BigNumber("0");
    // check if bid has settled already
    if (bidShare.bidVault.u64Padding[1]) {
        deliveryPrice = BigNumber(bidShare.bidVault.u64Padding[1]);
    } else {
        const deliveryInfos = vaultInfo.info.deliveryInfos.deliveryInfo;
        const deliveryInfo = deliveryInfos[deliveryInfos.length - 1];
        deliveryPrice = deliveryInfo ? BigNumber(deliveryInfo.deliveryPrice) : BigNumber("0");
    }
    deliveryPrice = BigNumber(deliveryPrice).div(BigNumber(10).pow(BigNumber(bTokenDecimal)));

    return deliveryPrice;
};

export const calcBreakEvenPrice = (
    optionType: string,
    period: string,
    strikes: string[],
    bToken: string,
    price: string,
    incentive: number
) => {
    let breakEvenPrice = 0;
    switch (optionType) {
        case "0":
            if (StableCoin.includes(bToken)) {
                breakEvenPrice = Number(strikes[0]) + Number(price) * 1.1 * incentive;
            } else {
                breakEvenPrice = Number(strikes[0]) / (1 - Number(price) * 1.1 * incentive);
            }
            break;
        case "1":
            if (StableCoin.includes(bToken)) {
                breakEvenPrice = Number(strikes[0]) - Number(price) * 1.1 * incentive;
            } else {
                breakEvenPrice = Number(strikes[0]) / (1 + Number(price) * 1.1 * incentive);
            }
            break;
        case "2":
            // Calculate with the lower one
            if (StableCoin.includes(bToken)) {
                breakEvenPrice = Number(strikes[0]) + Number(price) * 1.1 * incentive;
            } else {
                breakEvenPrice = Number(strikes[0]) / (1 - Number(price) * 1.1 * incentive);
            }
            break;
        case "4":
            // Calculate with the lower one
            if (StableCoin.includes(bToken)) {
                breakEvenPrice = Number(strikes[0]) + Number(price) * 1.1 * incentive;
            } else {
                breakEvenPrice = Number(strikes[0]) / (1 - Number(price) * 1.1 * incentive);
            }
            break;
        case "5":
            if (StableCoin.includes(bToken)) {
                breakEvenPrice = Number(strikes[1]) - Number(price) * 1.1 * incentive;
            } else {
                breakEvenPrice = Number(strikes[1]) / (1 + Number(price) * 1.1 * incentive);
            }

            break;
        case "6":
            // Calculate with the lower one
            if (StableCoin.includes(bToken)) {
                breakEvenPrice = Number(strikes[0]) + Number(price) * 1.1 * incentive;
            } else {
                breakEvenPrice = Number(strikes[0]) / (1 + Number(price) * 1.1 * incentive);
            }

            break;
    }

    return breakEvenPrice;
};

export const calcEstPnl = (
    live: boolean,
    incentive: number,
    bidSize: string,
    optionType: string,
    assets: string[],
    strikes: string[],
    bidShare: BidShare,
    deliveryPrice: string,
    oTokenPrice: string
) => {
    let profit = "0";
    let cost = "0";
    const [dToken, bToken, oToken] = typeArgsToAssets(assets);
    const dTokenWrappedName = getTokenName({ token: dToken, wrapped: true });
    const bTokenWrappedName = getTokenName({ token: bToken, wrapped: true });
    const estPnls: TokenAmount[] = [];
    const referencePrice =
        bidShare.bidVault.u64Padding.length > 0 ? BigNumber(bidShare.bidVault.u64Padding[0]).div(PriceDecimal) : BigNumber(oTokenPrice);

    if (optionType === "0") {
        profit = BigNumber.max(
            0,
            BigNumber(referencePrice.minus(BigNumber(strikes[0])))
                .div(referencePrice)
                .multipliedBy(bidSize)
        ).toString();
    } else if (optionType === "1") {
        profit = BigNumber.max(0, BigNumber(strikes[0]).minus(referencePrice).multipliedBy(bidSize)).toString();
    } else if (optionType === "2" || optionType === "4") {
        profit = BigNumber.max(
            0,
            BigNumber(referencePrice.minus(BigNumber(strikes[0])))
                .div(referencePrice)
                .multipliedBy(bidSize)
        )
            .minus(
                BigNumber.max(
                    0,
                    BigNumber(referencePrice.minus(BigNumber(strikes[1])))
                        .div(referencePrice)
                        .multipliedBy(bidSize)
                )
            )
            .toString();
    } else if (optionType === "5") {
        profit = BigNumber.max(0, BigNumber(BigNumber(strikes[1]).minus(referencePrice)).multipliedBy(bidSize))
            .minus(BigNumber.max(0, BigNumber(BigNumber(strikes[0]).minus(BigNumber(referencePrice))).multipliedBy(bidSize)))
            .toString();
    } else if (optionType === "6") {
        profit = BigNumber.max(0, BigNumber(referencePrice.minus(strikes[0])).multipliedBy(bidSize))
            .minus(BigNumber.max(0, BigNumber(referencePrice.minus(strikes[1])).multipliedBy(bidSize)))
            .toString();
    }

    cost = BigNumber(deliveryPrice).multipliedBy(bidSize).multipliedBy(1.1).multipliedBy(incentive).toString();

    if (dToken === bToken) {
        profit = BigNumber(profit).minus(cost).toString();
    }

    if (!live) {
        estPnls.push({
            value: profit,
            token: assets[0],
        });
        if (dToken !== bToken) {
            estPnls.push({ value: "-" + cost, token: assets[1] });
        }
    }

    return estPnls;
};

export const parseStrikes = (period: string, optionType: string, metadata: string) => {
    let strikes = [period === "3" ? metadata.split("-")[3] : metadata.split("-")[2]];
    switch (optionType) {
        case "0":
            break;
        case "1":
            break;
        case "2":
            strikes = [metadata.split("-")[2], metadata.split("-")[3]];

            break;
        case "4":
            strikes = [metadata.split("-")[2], metadata.split("-")[3]];
            if (period == "3") {
                strikes = [metadata.split("-")[3], metadata.split("-")[4]];
            }

            strikes = strikes.sort((a, b) => Number(a) - Number(b));

            break;
        case "5":
            strikes = [metadata.split("-")[2], metadata.split("-")[3]];

            if (period == "3") {
                strikes = [metadata.split("-")[3], metadata.split("-")[4]];
            }
            strikes = strikes.sort((a, b) => Number(a) - Number(b));

            break;
        case "6":
            strikes = [metadata.split("-")[2], metadata.split("-")[3]];
            if (period == "3") {
                strikes = [metadata.split("-")[3], metadata.split("-")[4]];
            }
            strikes = strikes.sort((a, b) => Number(a) - Number(b));

            break;
    }

    strikes = checkNumber(strikes[0]) ? strikes : [];
    strikes = strikes.sort((a, b) => Number(a) - Number(b));

    return strikes;
};

export const parseBidReceipt = (vaults: Vault[], bidReceipts: { [key: string]: Receipt[] }) => {
    let sortedBidReceipts: string[] = [];
    let bidVaultsInfo: BidVaultInfo[] = [];
    let vidMap = new Map();
    vaults.forEach((v) => {
        let curReceipts = bidReceipts![v.info.index];
        if (curReceipts) {
            curReceipts.map((receipt) => {
                // ######  NOTE:  #####
                // Bid receipts need to be sorted and put together
                // BY vid for SDK getMyBids to fetch the correct data.
                // ###########

                // Filer out autoBidReceiptsData receipts cuz it's wrapped in strategy and
                // SDK getMyBids can't retrieve it!
                const data = vidMap.get(receipt.vid);
                if (!data) {
                    vidMap.set(receipt.vid, [receipt.id]);
                } else {
                    data.push(receipt.id);
                    vidMap.set(receipt.vid, data);
                }

                bidVaultsInfo.push({ vaultInfo: v, receipt: receipt });
            });
            const values = Array.from(vidMap.values());

            sortedBidReceipts = values.reduce(function (previousValue, currentValue, currentIndex, array) {
                return previousValue.concat(currentValue);
            }, []);
        }
    });
    return { sortedBidReceipts, bidVaultsInfo };
};

export const parseBid = (
    bidVaultInfo: BidVaultInfo,
    bidShare: BidShare,
    auction: Auction | null,
    oTokenPrice: string,
    isAutoBid: boolean
): Bid & OrderBy => {
    const {
        vaultInfo,
        vaultInfo: {
            info,
            info: { index, bTokenDecimal, oTokenDecimal, optionType, period, depositToken, bidToken, settlementBase },
            config: { bidLotSize: lotSize, bidIncentiveBp, u64Padding },
        },
        receipt,
    } = bidVaultInfo;

    const incentiveRate = calcIncentiveRate(bidIncentiveBp);

    const [dToken, bToken, oToken] = parseAssets(info);

    const oTokenName = getTokenName({ token: oToken });
    const dTokenWrappedName = getTokenName({ token: dToken, wrapped: true });
    const bTokenWrappedName = getTokenName({ token: bToken, wrapped: true });

    const metadata = bidShare.bidVault.metadata;

    const tokenLabel = metadata.split("-")[0];
    const periodLabel = Period[Number(period)].charAt(0).toUpperCase() + Period[Number(period)].slice(1);

    const optionTypeLabel = AbbrStrategyName[optionType];

    const bidsSize = Number(bidShare.share) / 10 ** Number(oTokenDecimal);

    let expirationDate = moment(metadata.split("-")[1], "DDMMMYY").format("yyyy-MM-DD");

    expirationDate = moment
        .utc(period === "3" ? `${expirationDate} ${insertAt(metadata.split("-")[2], ":", 2)}` : `${expirationDate} 08:00`)
        .local()
        .format("DD MMM YY, HH:mm");

    const live = !auction
        ? false
        : moment.unix(Number(auction.endTsMs) / 1000).isAfter(moment()) &&
          moment.unix(Number(auction.startTsMs) / 1000).isBefore(moment()) &&
          moment(expirationDate, "DD MMM YY, HH:mm").isAfter(moment.unix(Number(auction.endTsMs) / 1000));

    const deliveryPrice = calcDeliveryPrice(bidShare, vaultInfo);

    let initialPrice: any = auction?.initialPrice ?? 0;
    initialPrice = BigNumber(initialPrice).div(BigNumber(10).pow(BigNumber(bTokenDecimal)));

    const strikes = parseStrikes(period, optionType, metadata);

    const breakEvenPriceReference = live ? initialPrice : deliveryPrice;
    const breakEvenPrice = calcBreakEvenPrice(optionType, period, strikes, bToken, breakEvenPriceReference, incentiveRate);

    const defaultMinBidSize = BigNumber(lotSize).div(BigNumber(10).pow(oTokenDecimal));
    const bidSize = bidsSize.toFixed(countFloating(defaultMinBidSize.toNumber()));

    const settlePrice = BigNumber(bidShare.bidVault.u64Padding[0] ?? "0").div(PriceDecimal);

    const estPnls = calcEstPnl(
        live,
        incentiveRate,
        bidSize,
        optionType,
        [depositToken, bidToken, settlementBase],
        strikes,
        bidShare,
        deliveryPrice.toString(),
        oTokenPrice
    );

    return {
        vaultIndex: index,
        auctionName: `${tokenLabel} ${periodLabel} ${optionTypeLabel}`,
        expiry: expirationDate,
        strikes: strikes.map((s) => {
            if (tokenLabel === "MFUD") {
                return BigNumber(s).div(1000000).toString();
            }
            return s;
        }),
        bidSize: {
            value: BigNumber(bidSize)
                .div(BigNumber(10).pow(oToken === "MFUD" ? 6 : 0))
                .toString(),
            token: settlementBase,
        },
        breakEvenPrice: BigNumber(breakEvenPrice)
            .div(BigNumber(10).pow(oToken === "MFUD" ? 6 : 0))
            .toString(),
        settlePrice: BigNumber(settlePrice)
            .div(BigNumber(10).pow(oToken === "MFUD" ? 6 : 0))
            .toString(),
        estPnls,
        isAutoBid,
        receiptsId: [receipt.id],
        receiptsVid: [receipt.vid],
        optionTypeOrder: optionTypeOrder[optionType],
        periodOrder: periodOrder[period],
        tokenOrder: tokenOrder[oToken.toUpperCase()],
    };
};

export const getUserBidReceipts = async (provider: SuiClient, originFramworkAddress: string, userAddress: string) => {
    const bidReceipts: { [key: string]: Receipt[] } = {};
    let result = await provider.getOwnedObjects({ owner: userAddress, options: { showType: true, showContent: true } });

    let hasNextPage = result.hasNextPage;
    let data = result.data;
    let nextCursor = result.nextCursor;
    while (hasNextPage) {
        result = await provider.getOwnedObjects({ owner: userAddress, cursor: nextCursor, options: { showType: true, showContent: true } });
        data = [...data, ...result.data];
        hasNextPage = result.hasNextPage;
        nextCursor = result.nextCursor;
    }

    if (data.length === 0) {
        return bidReceipts;
    }

    for (const object of data) {
        try {
            const { content } = object.data || {};
            if (!content) continue;

            const typeStringComponents = ((content as any).type || "").split("<");
            const subtype = (typeStringComponents[1] || "").replace(/>/, "");
            const typeComponents = typeStringComponents[0].split("::");
            const type = typeComponents[typeComponents.length - 1];
            const typePackage = typeComponents[0];

            if (type === "TypusBidReceipt" && originFramworkAddress == typePackage) {
                // @ts-ignore
                const vaultIndex = content.fields.index;
                const receipt = {
                    // @ts-ignore
                    id: content.fields.id.id,
                    // @ts-ignore
                    index: vaultIndex,
                    // @ts-ignore
                    name: content.fields.name,
                    // @ts-ignore
                    description: content.fields.description,
                    // @ts-ignore
                    vid: content.fields.vid,
                    // @ts-ignore
                    metadata: content.fields.metadata,
                };
                bidReceipts[vaultIndex] ||= [];
                bidReceipts[vaultIndex].push(receipt);
            }
        } catch (e) {
            console.log("Error retrieving object", object, e);
        }
    }
    return bidReceipts;
};

/**
 * Fetch user's bids info
 *
 * @param provider - Sui Client instance.
 * @param network - network type in lowercase.
 * @param packageAddress - Typus main package address.
 * @param framworkAddress - Typus framwork package address.
 * @param originFramworkAddress - Typus intial framwork package address.
 * @param registryAddress - Typus registry package address.
 * @param strategyPoolAddress - strategy pool package address.
 * @param userAddress - user's wallet address.
 * @param prices - tokens prices (usd pair on Pyth)
 * @return User Bids.
 */
export const fetchUserBids = async (
    provider: SuiClient,
    config: TypusConfig,
    userAddress: string,
    prices?: { [key: string]: CoinInfo }
) => {
    const packageAddress = config.package.dovSingle;
    const registryAddress = config.registry.dov.dovSingle;
    const originFramworkAddress = config.packageOrigin.framework;
    const strategyPoolAddress = config.object.strategyPool;
    // Step 1: get user bid receipts, vaults info, user strategies, auction data, prices
    const vaultsInfo = await getVaults(config, provider, { indexes: [] });
    const userReceipts = await getUserBidReceipts(provider, originFramworkAddress, userAddress);
    const userStrategies = await getUserStrategies(provider, packageAddress, registryAddress, strategyPoolAddress, userAddress);
    const auctions = await getAuctions(config, provider, { indexes: [] });
    if (typeof prices === "undefined") {
        prices = await fetchPrices(provider, config);
    }
    // Step 2: sort receipts and flat receipts
    const { sortedBidReceipts, bidVaultsInfo } = parseBidReceipt(Object.values(vaultsInfo), userReceipts);

    // Step 3: get bid shares info
    const bidShares = await getMyBids(config, provider, { receipts: sortedBidReceipts });

    // Step 4: parse bids from bid shares
    const bidsFromBidShares: Bid[] = [];
    for (let bidVaultInfo of bidVaultsInfo) {
        const bidShare = bidShares[`${bidVaultInfo.receipt.index}-${bidVaultInfo.receipt.vid}`];
        const auction = auctions ? auctions[bidVaultInfo.vaultInfo.info.index] : null;
        const [dToken, bToken, oToken] = parseAssets(bidVaultInfo.vaultInfo.info);
        if (bidShare) {
            const price = BigNumber(prices[oToken.toLowerCase()].price)
                .div(BigNumber(10).pow(prices[oToken.toLowerCase()].decimal))
                .toString();
            const data = parseBid(bidVaultInfo, bidShare, auction, price, false);
            const checkExistVault = bidsFromBidShares.find(
                (p) => p.vaultIndex === bidVaultInfo.vaultInfo.info.index && p.receiptsVid.includes(bidVaultInfo.receipt.vid)
            );

            if (checkExistVault) {
                // Merge the bid receipts into the same vault
                checkExistVault!.receiptsId = [...checkExistVault!.receiptsId, ...data.receiptsId];
            } else {
                bidsFromBidShares.push(data);
            }
        }
    }

    // Step 5: parse strategies to user receipt type
    const autoBidsShares: { [key: string]: BidShare } = {};
    const vaultAutoBidReceipts: {
        [key: string]: Receipt[];
    } = {};
    for (let strategy of userStrategies) {
        const receipts = strategy.receipts;
        for (let receiptItem of receipts) {
            const vaultIndex = receiptItem.index;
            const receipt = {
                id: receiptItem.id,
                index: vaultIndex,
                name: "",
                description: "",
                vid: receiptItem.vid,
                metadata: receiptItem.metadata,
            };

            if (vaultAutoBidReceipts[vaultIndex]) {
                vaultAutoBidReceipts[vaultIndex] = [...vaultAutoBidReceipts[vaultIndex], receipt];
            } else {
                vaultAutoBidReceipts[vaultIndex] = [receipt];
            }

            if (autoBidsShares[`${vaultIndex}-${receiptItem.vid}`]) {
                autoBidsShares[`${vaultIndex}-${receiptItem.vid}`].share = (
                    Number(autoBidsShares[`${vaultIndex}-${receiptItem.vid}`].share) +
                    Number(strategy.my_bids[`${vaultIndex}-${receiptItem.vid}`].share)
                ).toString();
            } else {
                autoBidsShares[`${vaultIndex}-${receiptItem.vid}`] = {
                    bidVault: strategy.my_bids[`${vaultIndex}-${receiptItem.vid}`].bidVault,
                    share: strategy.my_bids[`${vaultIndex}-${receiptItem.vid}`].share,
                };
            }
        }
    }

    const autoBidVaultInfos: { vaultInfo: Vault; receipt: Receipt }[] = [];
    Object.values(vaultsInfo).forEach((v) => {
        let curReceipts = vaultAutoBidReceipts[v.info.index];

        if (curReceipts) {
            curReceipts.map((item) => {
                autoBidVaultInfos.push({ vaultInfo: v, receipt: item });
            });
        }
    });

    const bidsFromStrategies: Bid[] = [];
    for (let autoBidVaultInfo of autoBidVaultInfos) {
        const bidShare = autoBidsShares[`${autoBidVaultInfo.receipt.index}-${autoBidVaultInfo.receipt.vid}`];
        const auction = auctions ? auctions[autoBidVaultInfo.vaultInfo.info.index] : null;
        const [dToken, bToken, oToken] = parseAssets(autoBidVaultInfo.vaultInfo.info);
        if (bidShare) {
            const price = BigNumber(prices[oToken.toLowerCase()].price)
                .div(BigNumber(10).pow(prices[oToken.toLowerCase()].decimal))
                .toString();
            const data = parseBid(autoBidVaultInfo, bidShare, auction, price, false);
            const checkExistVault = bidsFromStrategies.find(
                (p) => p.vaultIndex === autoBidVaultInfo.vaultInfo.info.index && p.receiptsVid.includes(autoBidVaultInfo.receipt.vid)
            );

            if (checkExistVault) {
                // Merge the bid receipts into the same vault
                checkExistVault!.receiptsId = [...checkExistVault!.receiptsId, ...data.receiptsId];
            } else {
                bidsFromStrategies.push(data);
            }
        }
    }

    // Step 6: order bids
    const byOrdered = orderBy(
        [...bidsFromBidShares, ...bidsFromStrategies],
        ["expiry", "tokenOrder", "periodOrder", "optionTypeOrder"],
        ["asc", "asc", "asc", "asc"]
    );

    return byOrdered;
};
