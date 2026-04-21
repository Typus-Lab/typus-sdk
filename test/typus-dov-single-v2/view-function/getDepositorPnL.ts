import { getVaults, getUserEvents, parseTxHistory, getNewBidFromSentio, getDepositorCashFlows } from "src/typus-dov-single-v2";
import { TypusConfig } from "src/utils";

(async () => {
    let network: "MAINNET" | "TESTNET" = "MAINNET";
    let config = await TypusConfig.default(network, null);
    const graphQlClient = config.graphQlClient();
    let user = "0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee";
    let vaults = await getVaults(config, { indexes: [] });

    let { events, beforeCursor } = await getUserEvents(graphQlClient, user, null);
    let txHistory = await parseTxHistory(events, vaults);

    let newBidHistory = await getNewBidFromSentio(vaults, user, 0);

    let userHistory = txHistory
        .concat(newBidHistory.filter((x) => txHistory.findIndex((y) => y.txDigest == x.txDigest) == -1))
        .sort((a, b) => Number(b.Date) - Number(a.Date));

    // depositorCashFlows
    let depositorCashFlows = getDepositorCashFlows(userHistory);
    console.log(depositorCashFlows);
})();
