import { getPairPrices, getLatestPrice } from "../utils/price";

(async () => {
    const pair = "SUIFUD"; // SUIBUCK, SUIFUD, SUIAFSUI
    const currentTimestampInSeconds: number = Math.floor(new Date().getTime() / 1000);
    const hourAgo = currentTimestampInSeconds - 3600;
    let res: any[] = await getPairPrices(pair, hourAgo.toString(), currentTimestampInSeconds.toString());
    console.log(res.length);
    console.log(res.at(-1).price);

    let latest = await getLatestPrice(pair);
    console.log(latest);

    // FUDUSDC = SUIUSDC / SUIFUD
})();
