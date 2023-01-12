
import { TEST_MNEMONIC, DOV_PACKAGE, TOKEN_PACKAGE, COVERED_CALL_PACKAGE } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network, SuiEventEnvelope, SuiEvent } from '@mysten/sui.js';
import cron from "node-cron";
import { string } from "superstruct";
import { XMLHttpRequest } from "XMLHttpRequest"
import moment from "moment"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
let apiToken = "5864284783:AAHwXWgt2YgLENdJ9mVBUDBVLHXrMLNgkic";

/*
「https://api.telegram.org/botTOKEN/getUpdates」，change TOKEN to token from botFather
*/
let chatId = "-1001784476809";

(async () => {
    let bidType = DOV_PACKAGE + "::dutch::NewBid<" + TOKEN_PACKAGE + "::eth::ETH>"

    let newAuctionType = COVERED_CALL_PACKAGE + "::covered_call::NewAuction"

    let renewSec = 10

    // await getBidEventsCranker(bidType, renewSec)

    await getNewAuctionEventsCranker(newAuctionType, renewSec)
})()

export async function getBidEventsCranker(type: string, renewSec: number) {
    let res: any[] = [];

    cron.schedule('*/' + renewSec.toString() + ' * * * * *', async () => {
        console.log("listening for every " + renewSec.toString() + " s...")
        const events = await provider.getEvents(
            /// from object id , can only get one event  
            // { Object: "0x89bc7299c684413ab81f7536603451277b8ed754" },

            // { Transaction: "4aTaXLyCwT9geQg5PC3UAGGBMbuySFCzeJ6Cf62RrUEg"},

            { MoveEvent: type },
            null,
            null,
        )

        let newRes: any[] = events.data

        if (newRes.length != res.length) {
            console.log("the total bid event number now:" + events.data.length)
            console.log("there are " + (newRes.length - res.length).toString() + " new bids")

            //newBid: the newest event in this round
            let newBid = newRes.filter((e) => {
                return res.indexOf(e) === -1
            })
            newBid.map(e => { console.log(e.event.moveEvent.fields) })

            res = newRes
        }
        // events.data.forEach((envelope: SuiEventEnvelope) => {

        //     const event = envelope.event
        //     console.log(event)
        // })

    });
}

export async function getNewAuctionEventsCranker(type: string, renewSec: number) {
    let res: any[] = [];

    cron.schedule('*/' + renewSec.toString() + ' * * * * *', async () => {
        console.log("listening for every " + renewSec.toString() + " s...")
        const events = await provider.getEvents(
            { MoveEvent: type },
            null,
            null,
        )

        let newRes: any[] = events.data

        if (newRes.length != res.length) {
            console.log("start a new auction!")
            console.log(events)

            let newAuction = newRes.filter((e) => {
                return res.indexOf(e) === -1
            })
            let timesFormat: string = ""
            newAuction.map(e => {
                let time = moment.unix(e.timestamp / 1000).format("YYYY MM/DD HH:mm:ss")
                console.log(time)
                timesFormat += time + " \n"
            })

            let telegramText: string = "start a new auction! Time: \n" + timesFormat
            sendEventToTelegramChannel(telegramText)

            res = newRes
        }
    });
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