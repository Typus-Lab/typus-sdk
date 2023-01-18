
import { TEST_MNEMONIC, DOV_PACKAGE, TOKEN_PACKAGE, COVERED_CALL_PACKAGE, TOKEN_DECIMAL, COVERED_CALL_REGISTRY, PRICE_DECIMAL } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network, SuiEventEnvelope, SuiEvent } from '@mysten/sui.js';
import { getVaultDataFromRegistry } from "../utils/getVaultData"
import cron from "node-cron";
import { string } from "superstruct";
import { XMLHttpRequest } from "XMLHttpRequest"
import moment from "moment"
import { CoveredCallVault } from "../utils/fetchData";
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
let apiToken = "5864284783:AAHwXWgt2YgLENdJ9mVBUDBVLHXrMLNgkic";

/*
「https://api.telegram.org/botTOKEN/getUpdates」，change TOKEN to token from botFather
*/
let chatId = "-1001784476809";

(async () => {

    let bidTypes: string[] = [
        COVERED_CALL_PACKAGE + "::covered_call::NewBid<" + TOKEN_PACKAGE + "::eth::ETH>",
        COVERED_CALL_PACKAGE + "::covered_call::NewBid<" + TOKEN_PACKAGE + "::btc::BTC>",
        COVERED_CALL_PACKAGE + "::covered_call::NewBid<" + TOKEN_PACKAGE + "::sui::SUI>",
    ]
    // let bidType = COVERED_CALL_PACKAGE + "::covered_call::NewBid<" + TOKEN_PACKAGE + "::eth::ETH>"

    let newAuctionType = COVERED_CALL_PACKAGE + "::covered_call::NewAuction"

    let endAuctionTypes: string[] = [
        DOV_PACKAGE + "::dutch::Delivery<" + TOKEN_PACKAGE + "::eth::ETH>",
        DOV_PACKAGE + "::dutch::Delivery<" + TOKEN_PACKAGE + "::btc::BTC>",
        DOV_PACKAGE + "::dutch::Delivery<" + TOKEN_PACKAGE + "::sui::SUI>",
    ]

    let renewSec = 10

    let vault = await getVaultDataFromRegistry(COVERED_CALL_REGISTRY);

    bidTypes.map(async (bidType) => {
        await getBidEventsCranker(bidType, renewSec, vault)//new_bid
    })

    await getNewAuctionEventsCranker(newAuctionType, renewSec, vault)//evolution

    endAuctionTypes.map(async (endAuctionType) => {
        await getEndAuctionEventsCranker(endAuctionType, renewSec, vault)
    })

})()

async function generateBidId(vault: CoveredCallVault[]): Promise<string[]> {
    //use the vault to generate "SUI-20JAN23-120-C"
    let liveVault = vault?.filter((v) => {
        const start = moment.unix(Number(v.config.activationTsMs) / 1000);
        return start.isBefore(moment());
    });

    let res: any[] = liveVault.map(v => {
        const expiration = moment
            .unix(Number(v.config.expirationTsMs) / 1000)
            .format("DDMMMYY");
        const bidId = `${v.asset}-${expiration}-${v.config.payoffConfig.strike}-C`;
        return bidId
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
            let bidIds: string[] = await generateBidId(vault);
            // [
            //     'ETH-18Jan23-1750-C',
            //     'BTC-18Jan23-21800-C',
            //     'ETH-17Jan23-1750-C',
            //     'SUI-18Jan23-9-C'
            //   ]

            newBid.map(async (e) => {
                //TODO: find correct bidID
                let bidId = bidIds.find(bidId => e.event.moveEvent.type.includes(bidId.split("-")[0]))

                if (bidId) {

                    let size = (Number(e.event.moveEvent.fields.size) / (10 ** TOKEN_DECIMAL)).toString()

                    format += bidId + " is bid with " + size + " " + bidId.split("-")[0] + "! \n"
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

        if (newRes.length != res.length) {
            let format: string = ""
            let bidIds: string[] = await generateBidId(vault);

            bidIds.map(async (bidId) => {
                format += bidId + " auction is live now! \n"
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
        if (newRes.length != res.length) {
            let format: string = ""
            let bidIds: string[] = await generateBidId(vault);

            bidIds.map(async (bidId) => {
                format += bidId + " auction is closed! \n"
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