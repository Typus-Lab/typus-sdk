import { getPythLatestPriceBySymbols } from "src/utils";

(async () => {
    let pairs = ["WAL", "XAU"];
    let res = await getPythLatestPriceBySymbols(pairs);
    console.log(res);
})();
