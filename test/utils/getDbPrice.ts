import { getPairPrices, getLatestPrice } from "src/utils";

(async () => {
    let pair = "MBLUBUSDC"; // MBLUBUSDC
    let currentTimestampInSeconds: number = Math.floor(new Date().getTime() / 1000);
    let hourAgo = currentTimestampInSeconds - 3600;
    let res: any[] = await getPairPrices(pair, hourAgo.toString(), currentTimestampInSeconds.toString());
    console.log(res.length);
    console.log(res.at(-1).price);

    let latest = await getLatestPrice(pair);
    console.log(latest);

    // FUDUSDC = SUIUSDC / SUIFUD
})();
