
import { DOV_PACKAGE, TOKEN_PACKAGE, COVERED_CALL_PACKAGE, TOKEN_DECIMAL, COVERED_CALL_REGISTRY, TESTNET_RPC_ENDPOINT } from "../constants"
import { JsonRpcProvider } from '@mysten/sui.js';
import { getVaultDataFromRegistry } from '../utils/getVaultData';
import cron from 'node-cron';
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
import moment from 'moment';
import { CoveredCallVault } from '../utils/fetchData';
const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT); //for read only operations
const apiToken = process.env.api_token;
const chatId = process.env.chat_id;
// let apiToken = "5864284783:AAHwXWgt2YgLENdJ9mVBUDBVLHXrMLNgkic";
// let chatId = "-1001784476809";

interface BidInterface {
    bidFormat: string;
    bidTime: number;
}

/*
「https://api.telegram.org/botTOKEN/getUpdates」，change TOKEN to token from botFather
*/


(async () => {

    let bidTypes: string[] = [
        COVERED_CALL_PACKAGE + "::covered_call::NewBid<" + TOKEN_PACKAGE + "::eth::ETH>",
        COVERED_CALL_PACKAGE + "::covered_call::NewBid<" + TOKEN_PACKAGE + "::btc::BTC>",
        COVERED_CALL_PACKAGE + "::covered_call::NewBid<" + TOKEN_PACKAGE + "::sui::SUI>",
    ]
    // let bidType = COVERED_CALL_PACKAGE + "::covered_call::NewBid<" + TOKEN_PACKAGE + "::eth::ETH>"

    let newAuctionType = COVERED_CALL_PACKAGE + "::covered_call::NewAuction"

    // let endAuctionTypes: string[] = [
    //     DOV_PACKAGE + "::dutch::Delivery<" + TOKEN_PACKAGE + "::eth::ETH>",
    //     DOV_PACKAGE + "::dutch::Delivery<" + TOKEN_PACKAGE + "::btc::BTC>",
    //     DOV_PACKAGE + "::dutch::Delivery<" + TOKEN_PACKAGE + "::sui::SUI>",
    // ]
    let endAuctionType = DOV_PACKAGE + "::dutch::Delivery<" + TOKEN_PACKAGE + "::eth::ETH>";

    let renewSec = 10

    let vault = await getVaultDataFromRegistry(COVERED_CALL_REGISTRY);

    bidTypes.map(async (bidType) => {
        await getBidEventsCranker(bidType, renewSec, vault)//new_bid
    })

    await getNewAuctionEventsCranker(newAuctionType, renewSec, vault)//evolution

    await getEndAuctionEventsCranker(endAuctionType, renewSec, vault)
})()

async function twoObjArrAreSame(x: any[], y: any[]): Promise<boolean> {
    if (JSON.stringify(x) === JSON.stringify(y)) { return true }
    else { return false }
}

async function generateBidId(vault: CoveredCallVault[]): Promise<any[]> {
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

        let obj: BidInterface = {
            bidFormat: bidId,
            bidTime: Number(time)
        }
        return obj
    })

    return res
}

export async function getBidEventsCranker(type: string, renewSec: number, vault: CoveredCallVault[]) {
    let res: any[] = [];

    cron.schedule('*/' + renewSec.toString() + ' * * * * *', async () => {

        const events = await provider.getEvents(
            { MoveEvent: type },
            null,
            null,
        )

        let newRes: any[] = events.data

        if (newRes.length != res.length) {
            console.log("the total bid event number now: " + events.data.length)
            console.log("there are " + (newRes.length - res.length).toString() + " new bids")

            let newBid = newRes.filter(({ timestamp: id1 }) => !res.some(({ timestamp: id2 }) => id2 === id1));

            console.log("new bid amount: " + newBid.length)

            let format: string = ""
            let bidIds: BidInterface[] = await generateBidId(vault);
            // [
            //     'ETH-18Jan23-1750-C',
            //     'BTC-18Jan23-21800-C',
            //     'ETH-17Jan23-1750-C',
            //     'SUI-18Jan23-9-C'
            //   ]
            // console.log(bidIds)
            newBid.map(async (e) => {
                // console.log(e.timestamp)
                //TODO: find correct bidID
                let bidId = bidIds.find(bidId => {
                    let type: string = e.event.moveEvent.type;
                    let asset: string = bidId.bidFormat.split("-")[0]
                    return e.event.moveEvent.type.includes(bidId.bidFormat.split("-")[0])
                })

                if (bidId) {

                    let size = (Number(e.event.moveEvent.fields.size) / (10 ** TOKEN_DECIMAL)).toString()

                    format += bidId.bidFormat + " is bid with " + size + " " + bidId.bidFormat.split("-")[0] + "! \n"
                } else {
                    console.log("can't get bidId in getBidEventsCranker")
                }
            })

            let telegramText: string = format
            console.log(telegramText)
            sendEventToTelegramChannel(telegramText)

            res = newRes
        }
    })

}

export async function getNewAuctionEventsCranker(type: string, renewSec: number, vault: CoveredCallVault[]) {
    let res: any[] = [];

    cron.schedule('*/' + renewSec.toString() + ' * * * * *', async () => {
        const events = await provider.getEvents(
            { MoveEvent: type },
            null,
            null,
        )

        let newRes: any[] = events.data

        // if (newRes.length != res.length) {
        if (!await twoObjArrAreSame(newRes, res)) {
            let format: string = ""
            let bidIds: BidInterface[] = await generateBidId(vault);

            bidIds.map(async (bidId) => {
                format += bidId.bidFormat + " auction is live now! \n"
            })

            let telegramText: string = format
            console.log(telegramText)
            sendEventToTelegramChannel(telegramText)
            res = newRes
        }
    });
}

export async function getEndAuctionEventsCranker(type: string, renewSec: number, vault: CoveredCallVault[]) {
    let res: any[] = [];

    cron.schedule('*/' + renewSec.toString() + ' * * * * *', async () => {

        const events = await provider.getEvents(
            { MoveEvent: type },
            null,
            null,
        )

        let newRes: any[] = events.data
        // if (newRes.length != res.length) {
        if (!await twoObjArrAreSame(newRes, res)) {
            let format: string = ""
            let bidIds: BidInterface[] = await generateBidId(vault);

            bidIds.map(async (bidId) => {
                format += bidId.bidFormat + " auction is closed! \n"
            })

            let telegramText: string = format
            console.log(telegramText)
            sendEventToTelegramChannel(telegramText)
            res = newRes
        }
    })
}

export async function sendEventToTelegramChannel(text: any) {

    let urlString = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;

    let request = new XMLHttpRequest();
    request.open("GET", urlString);
    request.send();

    // request.onload = function () {
    //     console.log(JSON.parse(request.responseText));
    // };
}
