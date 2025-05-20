import { getPythLatestPriceBySymbols } from "src/utils";

(async () => {
    let pairs = ["BTC", "SUI"];
    let res = await getPythLatestPriceBySymbols(pairs);
    console.log(res);
})();
