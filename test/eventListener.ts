
import { TEST_MNEMONIC, DOV_PACKAGE, TOKEN_PACKAGE } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network, SuiEventEnvelope, SuiEvent } from '@mysten/sui.js';
import cron from "node-cron";
import { string } from "superstruct";
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

(async () => {
    let bidType = DOV_PACKAGE + "::dutch::NewBid<" + TOKEN_PACKAGE + "::eth::ETH>"

    let renewSec = 10

    await getBidEventsCranker(bidType, renewSec)

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