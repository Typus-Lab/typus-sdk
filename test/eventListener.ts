
import { TOKEN_PACKAGE, COVERED_CALL_PACKAGE, TOKEN_DECIMAL, REGISTRY, TOKEN_NAME } from "../constants"
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { getVaultDataFromRegistry } from '../utils/getVaultData';
import cron from 'node-cron';
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
import moment from 'moment';
import { CoveredCallVault } from '../utils/fetchData';
import Decimal from "decimal.js";

const provider = new JsonRpcProvider(Network.DEVNET); //for read only operations
const apiToken = process.env.API_TOKEN;
const chatId = process.env.CHAT_ID;

interface BidInterface {
    bidFormat: string;
    bidTime: number;
    period: string;// Daily = 0, Weekly = 1, Monthly = 2
    vaultIdx: string;
    asset: string;
    expiration: string;
    strike: string;
}

/*
「https://api.telegram.org/botTOKEN/getUpdates」，change TOKEN to token from botFather
*/

const renewSec = 60;
const ASSETS = ["BTC", "ETH", "SUI", "APT", "DOGE"];

(async () => {
    let vault = await getVaultDataFromRegistry(REGISTRY, provider);

    cron.schedule('*/' + renewSec.toString() + ' * * * * *', async () => {
        vault = await getVaultDataFromRegistry(REGISTRY, provider);
    })

    for (let asset of ASSETS) {
        let bidType = COVERED_CALL_PACKAGE + "::covered_call::NewBid<" + TOKEN_PACKAGE + "::" + asset.toLowerCase() + "::" + asset + ">"
        let endAuctionType = COVERED_CALL_PACKAGE + "::covered_call::Delivery<" + TOKEN_PACKAGE + "::" + asset.toLowerCase() + "::" + asset + ">"

        await getBidEventsCranker(bidType, renewSec, provider, vault)//new_bid
        await getEndAuctionEventsCranker(endAuctionType, renewSec, provider, vault)
    }

    let newAuctionType = COVERED_CALL_PACKAGE + "::covered_call::NewAuction"
    await getNewAuctionEventsCranker(newAuctionType, renewSec, provider, vault)//evolution
})()

async function generateBidId(vault: CoveredCallVault[]): Promise<BidInterface[]> {
    //use the vault to generate "SUI-20JAN23-120-C"
    let liveVault = vault?.filter((v) => {
        const start = moment.unix(Number(v.config.activationTsMs) / 1000);
        const settled =
            v.vault.ableToDeposit === false && v.vault.ableToWithdraw === true;
        return start.isBefore(moment()) && !settled;
    });

    let res: any[] = liveVault.map(v => {
        let time: string = v.config.expirationTsMs
        const expiration = moment
            .unix(Number(time) / 1000)
            .format("DDMMMYY");
        const bidId = `${v.asset}-${expiration}-${v.config.payoffConfig.strike}-C`;
        let period = (v.config.period)
        let vaultIdx = v.vaultIdx;

        let obj: BidInterface = {
            bidFormat: bidId,
            bidTime: Number(time),
            period: period,
            vaultIdx: vaultIdx,
            asset: v.asset,
            expiration: expiration,
            strike: v.config.payoffConfig.strike
        }
        return obj
    })

    return res
}

export async function getBidEventsCranker(type: string, renewSec: number, provider: JsonRpcProvider, vault: CoveredCallVault[]) {
    let res: any[] = [];
    let isFirstTime: boolean = true;

    cron.schedule('*/' + renewSec.toString() + ' * * * * *', async () => {

        const events = await provider.getEvents(
            { MoveEvent: type },
            null,
            null,
            'descending'
        )

        let newRes: any[] = events.data
        if (JSON.stringify(newRes) != JSON.stringify(res)) {

            let newBid = newRes.filter(({ timestamp: id1 }) => !res.some(({ timestamp: id2 }) => id2 === id1));

            let format: string = ""
            let bidIds: BidInterface[] = await generateBidId(vault);

            newBid.map(async (e) => {
                let newBidVaultIdx: string = e.event.moveEvent.fields.index

                let bidId = bidIds.find(bidId => bidId.vaultIdx == newBidVaultIdx)
                if (bidId) {

                    let size = (Number(e.event.moveEvent.fields.size) / (10 ** TOKEN_DECIMAL)).toString()
                    let period = (bidId.period == "0") ? "Daily " : (bidId.period == "1") ? "Weekly " : (bidId.period == "2") ? "Monthly " : "- "
                    format += period + bidId.bidFormat + " is bid with " + size + " " + bidId.bidFormat.split("-")[0] + "! \n"
                }
            })

            let telegramText: string = format
            if (!isFirstTime) {
                console.log(telegramText)
                sendEventToTelegramChannel(telegramText)
            }
            res = newRes
            isFirstTime = false;
        }
    })
}

export async function getNewAuctionEventsCranker(type: string, renewSec: number, provider: JsonRpcProvider, vault: CoveredCallVault[]) {
    let bidIds: any[] = [];
    let isFirstTime: boolean = true;
    let lastTxDigest = "";

    cron.schedule('*/' + renewSec.toString() + ' * * * * *', async () => {
        const events = await provider.getEvents(
            { MoveEvent: type },
            null,
            null,
            'descending'
        )

        let newRes: any[] = events.data
        let txDigest = newRes[0].txDigest;
        if (txDigest != lastTxDigest) {
            let head: string = "Typus Auction is live! " + '<a href="https://devnet.typus.finance/auction">Bid now </a>' + "! \n"
            let format: string = ""
            let newBidIds: BidInterface[] = await generateBidId(vault);

            //compare newBidIds to bidIds
            newBidIds = newBidIds.filter(e =>
                !bidIds.find(tmp => tmp.bidFormat == e.bidFormat)
            )

            //filter auction not started
            newBidIds = newBidIds.filter(e =>
                e.strike != "0"
            )

            for (let asset of TOKEN_NAME) {
                let targetBids = newBidIds.filter((bidId) =>
                    bidId.bidFormat.toString().includes(asset)
                )
                if (targetBids.length) {
                    format += "* " + asset + " Options \n"
                    targetBids.map((bidId) => {
                        let period = (bidId.period == "0") ? "Daily " : (bidId.period == "1") ? "Weekly " : (bidId.period == "2") ? "Monthly " : "- "
                        format += "\t" + period + "Covered Call-" + bidId.bidFormat + " \n"
                        format += " \n"
                    })
                }
            }
            if (!isFirstTime && format != "") {
                let telegramText: string = head + format
                console.log(telegramText)
                sendEventToTelegramChannel(telegramText)
            }
            lastTxDigest = txDigest
            bidIds = newBidIds
            isFirstTime = false;
        }
    });
}

export async function getEndAuctionEventsCranker(type: string, renewSec: number, provider: JsonRpcProvider, vault: CoveredCallVault[]) {
    let bidIds: any[] = [];
    let isFirstTime: boolean = true;
    let lastTxDigest = "";

    cron.schedule('*/' + renewSec.toString() + ' * * * * *', async () => {

        const events = await provider.getEvents(
            { MoveEvent: type },
            null,
            null,
            'descending'
        )

        let newRes: any[] = events.data
        // console.log("new Res in getEndAuctionEventsCranker:")
        // console.log(newRes)
        let txDigest = newRes[0].txDigest;
        if (txDigest != lastTxDigest) {
            let format: string = ""
            let newBidIds: BidInterface[] = await generateBidId(vault);
            // console.log("new bid ids before filter:")
            // console.log(newBidIds)
            //compare newBidIds to bidIds
            newBidIds = newBidIds.filter(e =>
                !bidIds.find(tmp => tmp.bidFormat == e.bidFormat)
            )
            // console.log("new bid ids after filter:")
            // console.log(newBidIds)
            for (let asset of TOKEN_NAME) {

                let targetBids = newBidIds.filter((bidId) =>
                    bidId.bidFormat.toString().includes(asset)
                )

                if (targetBids.length) {

                    targetBids.map(async (bidId) => {
                        let vaultIdx = bidId.vaultIdx
                        let targetVault = vault.find(e => e.vaultIdx == vaultIdx)

                        let totalAuctioned = "-"
                        let clearingPrice = "-"

                        if (JSON.stringify(targetVault?.deliveryInfo) != '{}') {
                            totalAuctioned = (new Decimal(targetVault?.deliveryInfo.deliverySize!).div(new Decimal(10 ** TOKEN_DECIMAL))).toFixed(2)
                            clearingPrice = (new Decimal(targetVault?.deliveryInfo.deliveryPrice!).div(new Decimal(10 ** 5))).toFixed(4)

                            let period = (bidId.period == "0") ? "Daily " : (bidId.period == "1") ? "Weekly " : (bidId.period == "2") ? "Monthly " : "- "
                            format += "* " + period + "Covered Call-" + bidId.bidFormat + " auction is closed! Total auctioned " + totalAuctioned +
                                " " + asset + " at a clearing price of " + clearingPrice + " " + asset + " \n"
                            format += " \n"
                        }
                    })
                }
            }
            let telegramText: string = format
            if (!isFirstTime) {
                console.log(telegramText)
                sendEventToTelegramChannel(telegramText)
            }
            lastTxDigest = txDigest
            bidIds = newBidIds
            isFirstTime = false;
        }
    })
}

export async function sendEventToTelegramChannel(text: any) {

    let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}&parse_mode=HTML`;

    let request = new XMLHttpRequest();
    request.open("GET", urlString);
    request.send();
}
