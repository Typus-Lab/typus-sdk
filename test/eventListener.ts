
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

    // let newRes = [
    //     {
    //         timestamp: 1673857997978,
    //         txDigest: '6nPoQW9CvNg1oar83zPRDgBcLoXRNKMwFGZW3FdP7b9m',
    //         id: { txSeq: 397231, eventSeq: 7 },
    //         event: { moveEvent: [Object] }
    //     },
    //     {
    //         timestamp: 1673857516477,
    //         txDigest: '8vFQpAREgq3jviMTSMC2i3quaAn1nneVhjdSV8y7qnjz',
    //         id: { txSeq: 384407, eventSeq: 7 },
    //         event: { moveEvent: [Object] }
    //     }
    // ]

    // let res = [
    //     {
    //         timestamp: 1673857516477,
    //         txDigest: '8vFQpAREgq3jviMTSMC2i3quaAn1nneVhjdSV8y7qnjz',
    //         id: { txSeq: 384407, eventSeq: 7 },
    //         event: { moveEvent: [Object] }
    //     }
    // ]

    // const newBid = newRes.filter(({ timestamp: id1 }) => !res.some(({ timestamp: id2 }) => id2 === id1));

    // console.log("new bid amount: " + newBid.length)

    let bidType = DOV_PACKAGE + "::dutch::NewBid<" + TOKEN_PACKAGE + "::eth::ETH>"

    let newAuctionType = COVERED_CALL_PACKAGE + "::covered_call::NewAuction"

    let endAuctionType = ""

    let renewSec = 10

    let vault = await getVaultDataFromRegistry(COVERED_CALL_REGISTRY);

    await getBidEventsCranker(bidType, renewSec, vault)//new_bid

    // await getNewAuctionEventsCranker(newAuctionType, renewSec, vault)//evolution

    // await getEndAuctionEventsCranker(endAuctionType, renewSec, vault)
})()

export async function getBidEventsCranker(type: string, renewSec: number, vault: CoveredCallVault[]) {
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

            //TODO
            let newBid = newRes.filter(({ timestamp: id1 }) => !res.some(({ timestamp: id2 }) => id2 === id1));

            console.log("new bid amount: " + newBid.length)

            let newBidFormat: string = ""
            newBid.map(async (e) => {

                //asset
                let tmp = vault.find(vault =>
                    (vault.vaultIdx == (e.event.moveEvent.fields.index).toString())
                )
                let asset = tmp?.asset

                let time = moment.unix(e.timestamp / 1000).format("DDMMMYY")

                let price = e.event.moveEvent.fields.price

                let size = (Number(e.event.moveEvent.fields.size) / (10 ** TOKEN_DECIMAL)).toString()

                newBidFormat += asset + "-" + time + "-" + price + "-C" + " is bid with " + size + " " + asset + "!"

            })

            //SUI-20JAN23-120-C is bid with 1000 SUI!
            let telegramText: string = newBidFormat
            console.log(telegramText)
            // sendEventToTelegramChannel(telegramText)

            res = newRes
        }
        // events.data.forEach((envelope: SuiEventEnvelope) => {

        //     const event = envelope.event
        //     console.log(event)
        // })

    });
}

export async function getNewAuctionEventsCranker(type: string, renewSec: number, vault: CoveredCallVault[]) {
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
            let newAuction = newRes.filter((e) => {
                return res.indexOf(e) === -1
            })

            let msg: string = ""
            newAuction.map(async (e) => {

                //asset
                let tmp = vault.find(vault =>
                    (vault.vaultIdx == (e.event.moveEvent.fields.index).toString())
                )
                let asset = tmp?.asset

                let time = moment.unix(e.timestamp / 1000).format("DDMMMYY")
                let price = Number(e.event.moveEvent.fields.strike) / (10 ** PRICE_DECIMAL)
                msg += asset + "-" + time + "-" + price + "-C" + " auction is live now!\n"
            })

            // SUI-20JAN23-120-C auction is live now!
            let telegramText: string = msg
            console.log(telegramText)
            // sendEventToTelegramChannel(telegramText)

            res = newRes
        }
    });
}

export async function getEndAuctionEventsCranker(type: string, renewSec: number, vault: CoveredCallVault[]) {
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
            let newAuction = newRes.filter((e) => {
                return res.indexOf(e) === -1
            })

            let msg: string = ""
            newAuction.map(async (e) => {
                console.log(e)
                // //asset
                // let tmp = vault.find(vault =>
                //     (vault.vaultIdx == (e.event.moveEvent.fields.index).toString())
                // )
                // let asset = tmp?.asset

                // let time = moment.unix(e.timestamp / 1000).format("DDMMMYY")
                // let price = Number(e.event.moveEvent.fields.strike) / (10 ** PRICE_DECIMAL)
                // msg += asset + "-" + time + "-" + price + "-C" + " auction is live now!\n"
            })

            // SUI-20JAN23-120-C auction is live now!
            let telegramText: string = msg
            console.log(telegramText)
            // sendEventToTelegramChannel(telegramText)

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