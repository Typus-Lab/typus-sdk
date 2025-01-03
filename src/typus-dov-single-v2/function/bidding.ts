import { AbbrStrategyName, Period, parseAssets } from "./vault";
import { Auction, BidShare, Vault, getAuctions, getMyBids, getVaults } from "src/typus-dov-single-v2";
import { checkNumber, countFloating, insertAt, getLatestPrice, createPythClient, getLatestPriceUSD } from "src/utils";
import { getUserStrategies } from "src/auto-bid";
import { orderBy } from "lodash";
import { StableCoin, getTokenName, WrappedToken } from "./token";
import { SuiClient, SuiObjectResponse } from "@mysten/sui/client";
import { typeArgsToAssets } from "src/constants";
import BigNumber from "bignumber.js";
import { TypusConfig } from "src/utils";
import moment from "moment";

const PriceDecimal = BigNumber(10).pow(8);

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
    wUSDC: 16,
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

export const calcIncentiveRate = (incentiveBp) => {
    let incentiveRateBp = BigNumber(incentiveBp).div(BigNumber(10).pow(IncentiveRateBp));
    let incentiveRate = 1;
    if (incentiveRateBp.gt(0)) {
        incentiveRate = 1 - Number(incentiveRateBp);
    }

    return incentiveRate;
};

export const calcDeliveryPrice = (bidShare: BidShare, vaultInfo: Vault) => {
    let {
        info: { bTokenDecimal },
    } = vaultInfo;
    let deliveryPrice = BigNumber("0");
    // check if bid has settled already
    if (bidShare.bidVault.u64Padding[1]) {
        deliveryPrice = BigNumber(bidShare.bidVault.u64Padding[1]);
    } else {
        let deliveryInfos = vaultInfo.info.deliveryInfos.deliveryInfo;
        let deliveryInfo = deliveryInfos[deliveryInfos.length - 1];
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
    let [dToken, bToken, oToken] = typeArgsToAssets(assets);
    let dTokenWrappedName = getTokenName({ token: dToken, wrapped: true });
    let bTokenWrappedName = getTokenName({ token: bToken, wrapped: true });
    let estPnls: TokenAmount[] = [];
    let referencePrice =
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
                let data = vidMap.get(receipt.vid);
                if (!data) {
                    vidMap.set(receipt.vid, [receipt.id]);
                } else {
                    data.push(receipt.id);
                    vidMap.set(receipt.vid, data);
                }

                bidVaultsInfo.push({ vaultInfo: v, receipt: receipt });
            });
            let values = Array.from(vidMap.values());

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
    let {
        vaultInfo,
        vaultInfo: {
            info,
            info: { index, bTokenDecimal, oTokenDecimal, optionType, period, depositToken, bidToken, settlementBase },
            config: { bidLotSize: lotSize, bidIncentiveBp, u64Padding },
        },
        receipt,
    } = bidVaultInfo;

    let incentiveRate = calcIncentiveRate(bidIncentiveBp);

    let [dToken, bToken, oToken] = parseAssets(info);

    let oTokenName = getTokenName({ token: oToken });
    let dTokenWrappedName = getTokenName({ token: dToken, wrapped: true });
    let bTokenWrappedName = getTokenName({ token: bToken, wrapped: true });

    let metadata = bidShare.bidVault.metadata;

    let tokenLabel = metadata.split("-")[0];
    let periodLabel = Period[Number(period)].charAt(0).toUpperCase() + Period[Number(period)].slice(1);

    let optionTypeLabel = AbbrStrategyName[optionType];

    let bidsSize = Number(bidShare.share) / 10 ** Number(oTokenDecimal);

    let expirationDate = moment(metadata.split("-")[1], "DDMMMYY").format("yyyy-MM-DD");

    expirationDate = moment
        .utc(period === "3" ? `${expirationDate} ${insertAt(metadata.split("-")[2], ":", 2)}` : `${expirationDate} 08:00`)
        .local()
        .format("DD MMM YY, HH:mm");

    let live = !auction
        ? false
        : moment.unix(Number(auction.endTsMs) / 1000).isAfter(moment()) &&
          moment.unix(Number(auction.startTsMs) / 1000).isBefore(moment()) &&
          moment(expirationDate, "DD MMM YY, HH:mm").isAfter(moment.unix(Number(auction.endTsMs) / 1000));

    let deliveryPrice = calcDeliveryPrice(bidShare, vaultInfo);

    let initialPrice: any = auction?.initialPrice ?? 0;
    initialPrice = BigNumber(initialPrice).div(BigNumber(10).pow(BigNumber(bTokenDecimal)));

    let strikes = parseStrikes(period, optionType, metadata);

    let breakEvenPriceReference = live ? initialPrice : deliveryPrice;
    let breakEvenPrice = calcBreakEvenPrice(optionType, period, strikes, bToken, breakEvenPriceReference, incentiveRate);

    let defaultMinBidSize = BigNumber(lotSize).div(BigNumber(10).pow(oTokenDecimal));
    let bidSize = bidsSize.toFixed(countFloating(defaultMinBidSize.toNumber()));

    let settlePrice = BigNumber(bidShare.bidVault.u64Padding[0] ?? "0").div(PriceDecimal);

    let estPnls = calcEstPnl(
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

export async function getUserOwnedObjects(config: TypusConfig, user: string): Promise<SuiObjectResponse[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let result = await provider.getOwnedObjects({ owner: user, options: { showType: true, showContent: true } });

    let hasNextPage = result.hasNextPage;
    let data = result.data;
    let nextCursor = result.nextCursor;
    while (hasNextPage) {
        result = await provider.getOwnedObjects({
            owner: user,
            cursor: nextCursor,
            options: { showType: true, showContent: true },
        });
        data = [...data, ...result.data];
        hasNextPage = result.hasNextPage;
        nextCursor = result.nextCursor;
    }

    return data;
}

export const getUserBidReceipts = async (config: TypusConfig, data: SuiObjectResponse[]) => {
    let bidReceipts: { [key: string]: Receipt[] } = {};

    if (data.length === 0) {
        return bidReceipts;
    }

    for (const object of data) {
        try {
            let { content } = object.data || {};
            if (!content) continue;

            let typeStringComponents = ((content as any).type || "").split("<");
            let subtype = (typeStringComponents[1] || "").replace(/>/, "");
            let typeComponents = typeStringComponents[0].split("::");
            let type = typeComponents[typeComponents.length - 1];
            let typePackage = typeComponents[0];

            if (type === "TypusBidReceipt" && config.packageOrigin.framework == typePackage) {
                // @ts-ignore
                let vaultIndex = content.fields.index;
                let receipt = {
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
 * @param user - user's wallet address.
 * @param prices - tokens prices (usd pair on Pyth)
 * @return User Bids.
 */

export async function fetchUserBids(
    config: TypusConfig,
    user: string,
    vaultsInfo: { [key: string]: Vault },
    userReceipts: { [key: string]: Receipt[] }
) {
    let userStrategies = await getUserStrategies(config, { user });
    // console.log(userStrategies);

    let auctions = await getAuctions(config, { indexes: [] });
    let prices = await getLatestPriceUSD();

    // Step 2: sort receipts and flat receipts
    let { sortedBidReceipts, bidVaultsInfo } = parseBidReceipt(Object.values(vaultsInfo), userReceipts);

    // Step 3: get bid shares info
    let bidShares = await getMyBids(config, { receipts: sortedBidReceipts });

    // Step 4: parse bids from bid shares
    let bidsFromBidShares: Bid[] = [];
    for (let bidVaultInfo of bidVaultsInfo) {
        let bidShare = bidShares[`${bidVaultInfo.receipt.index}-${bidVaultInfo.receipt.vid}`];
        let auction = auctions ? auctions[bidVaultInfo.vaultInfo.info.index] : null;
        let [dToken, bToken, oToken] = parseAssets(bidVaultInfo.vaultInfo.info);
        if (bidShare) {
            let price = prices[oToken.toUpperCase()].toString();
            let data = parseBid(bidVaultInfo, bidShare, auction, price, false);
            let checkExistVault = bidsFromBidShares.find(
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
    let autoBidsShares: { [key: string]: BidShare } = {};
    let vaultAutoBidReceipts: {
        [key: string]: Receipt[];
    } = {};
    for (let strategy of userStrategies) {
        let receipts = strategy.receipts;
        for (let receiptItem of receipts) {
            let vaultIndex = receiptItem.index;
            let receipt = {
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

    let autoBidVaultInfos: { vaultInfo: Vault; receipt: Receipt }[] = [];
    Object.values(vaultsInfo).forEach((v) => {
        let curReceipts = vaultAutoBidReceipts[v.info.index];

        if (curReceipts) {
            curReceipts.map((item) => {
                autoBidVaultInfos.push({ vaultInfo: v, receipt: item });
            });
        }
    });

    let bidsFromStrategies: Bid[] = [];
    for (let autoBidVaultInfo of autoBidVaultInfos) {
        let bidShare = autoBidsShares[`${autoBidVaultInfo.receipt.index}-${autoBidVaultInfo.receipt.vid}`];
        let auction = auctions ? auctions[autoBidVaultInfo.vaultInfo.info.index] : null;
        let [dToken, bToken, oToken] = parseAssets(autoBidVaultInfo.vaultInfo.info);
        if (bidShare) {
            let price = BigNumber(prices[oToken.toLowerCase()].price)
                .div(BigNumber(10).pow(prices[oToken.toLowerCase()].decimal))
                .toString();
            let data = parseBid(autoBidVaultInfo, bidShare, auction, price, false);
            let checkExistVault = bidsFromStrategies.find(
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
    let byOrdered = orderBy(
        [...bidsFromBidShares, ...bidsFromStrategies],
        ["expiry", "tokenOrder", "periodOrder", "optionTypeOrder"],
        ["asc", "asc", "asc", "asc"]
    );

    return byOrdered;
}
