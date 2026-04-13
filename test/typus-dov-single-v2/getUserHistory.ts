import { TypusConfig } from "src/utils";
import { getVaults, getUserEvents, parseTxHistory, getNewBidFromSentio, getExerciseFromSentio } from "src/typus-dov-single-v2";
import * as fs from "fs";

(async () => {
    let network: "MAINNET" | "TESTNET" = "MAINNET";
    let config = await TypusConfig.default(network, null);
    const graphQlClient = config.graphQlClient();
    let sender = "0xbd637af537b5d8d734bacb36477a71cc83251e5545af22d51d671fb94d484107";
    let vaults = await getVaults(config, { indexes: [] });

    const { events, beforeCursor } = await getUserEvents(graphQlClient, sender, null);


    // {
    //     transaction: { digest: 'DNu9tQwaCAhrDQfuSK9P8ptT8BV9XWexVkHkWsue2QGn' },
    //     transactionModule: {
    //         name: 'airdrop',
    //             package: { digest: '3CFPwSvmHFRZiu7nXQXbbTYBK3QPRDfjJs89hEr5dzQT' }
    //     },
    //     sender: {
    //         address: '0xbd637af537b5d8d734bacb36477a71cc83251e5545af22d51d671fb94d484107'
    //     },
    //     timestamp: '2026-04-07T08:17:21.990Z',
    //         contents: {
    //         type: {
    //             repr: '0x4b0f4ee1a40ce37ec81c987cc4e76a665419e74b863319492fc7d26f708b835a::airdrop::ClaimAirdropEvent'
    //         },
    //         json: {
    //             token: '0000000000000000000000000000000000000000000000000000000000000002::sui::SUI',
    //                 key: 'trading_competition',
    //                     user: '0xbd637af537b5d8d734bacb36477a71cc83251e5545af22d51d671fb94d484107',
    //                         log: ['5220000000'],
    //                             bcs_padding: []
    //         }
    //     }
    // }

    let txHistory = await parseTxHistory(events, vaults);
    // console.log(txHistory.reverse());

    // let newBidHistory = await getNewBidFromSentio(vaults, sender, 0);
    // // console.log(newBidHistory);

    // let exerciseHistory = await getExerciseFromSentio(vaults, sender, 0);
    // console.log(exerciseHistory);

    // let concatHistory = txHistory
    //     .concat(newBidHistory.filter((x) => txHistory.findIndex((y) => y.txDigest == x.txDigest) == -1))
    //     .concat(exerciseHistory.filter((x) => txHistory.findIndex((y) => y.txDigest == x.txDigest) == -1))
    //     .sort((a, b) => Number(b.Date) - Number(a.Date));

    // // console.log(concatHistory.filter((h) => h.Action?.includes("Exercise")));
    // console.log(concatHistory.filter((h) => Math.round(h.Date?.getTime() / 24 / 3600000) == Math.round(Date.now() / 24 / 3600000)));
})();
