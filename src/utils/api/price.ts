const apiUrl = "https://us-central1-aqueous-freedom-378103.cloudfunctions.net/db-price";

export async function getPairPrices(pair: string, startTs: string, endTs: string) {
    let queryParams = new URLSearchParams({
        pair,
        startTs,
        endTs,
    });

    // Append the query parameters to the URL
    let apiUrlWithParams = `${apiUrl}?${queryParams.toString()}`;

    let response = await fetch(apiUrlWithParams, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        let data = await response.json();
        return data;
    }
}

export async function getLatestPrice(pair: string): Promise<string> {
    let currentTimestampInSeconds: number = Math.floor(new Date().getTime() / 1000);
    let minuteAgo = currentTimestampInSeconds - 60;
    try {
        let res: any[] = await getPairPrices(pair, minuteAgo.toString(), currentTimestampInSeconds.toString());
        if (res.at(-1)) {
            return res.at(-1).price;
        }
    } catch (e) {
        console.log(e);
        return "0";
    }
    return "0";
}

export async function getPythLatestPrice() {
    // Append the query parameters to the URL
    let apiUrlWithParams =
        "https://hermes.pyth.network/api/latest_price_feeds?ids[]=0x23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744&ids[]=0xe5b274b2611143df055d6e7cd8d93fe1961716bcd4dca1cad87a83bc1e78c1ef&ids[]=0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a&ids[]=0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43&ids[]=0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace&ids[]=0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d&ids[]=0xf9c2e890443dd995d0baafc08eea3358be1ffb874f93f99c30b3816c460bbac3&ids[]=0x03ae4db29ed4ae33d323568895aa00337e658e348b37509f5372ae51f0af00d5&ids[]=0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b&ids[]=0xdcef50dd0a4cd2dcc17e45df1676dcb336a11a61c69df7a0299b0150c672d25c&ids[]=0x7a5bc1d2b56ad029048cd63964b3ad2776eadf812edc1a43a31406cb54bff592&ids[]=0x53614f1cb0c031d4af66c04cb9c756234adad0e1cee85303795091499a4084eb&ids[]=0x88250f854c019ef4f88a5c073d52a18bb1c6ac437033f5932cd017d24917ab46&ids[]=0xe393449f6aff8a4b6d3e1165a7c9ebec103685f3b41e60db4277b5b6d10e7326";

    let response = await fetch(apiUrlWithParams, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    let map = new Map<string, number>();

    if (response.ok) {
        let data = await response.json();

        data.forEach((p) => {
            let token = pythId[p.id];
            let price = p.price.price / 10 ** -p.price.expo;
            map.set(token, price);
        });

        return map;
    }
}

export async function getLatestPriceUSD() {
    let prices = (await getPythLatestPrice())!;

    for (let pair of ["SUIFUD", "SUIBUCK", "SUIAFSUI", "SCASUI", "USDYUSDC"]) {
        let currentTimestampInSeconds: number = Math.floor(new Date().getTime() / 1000);
        let minuteAgo = currentTimestampInSeconds - 300;
        let res: any[] = await getPairPrices(pair, minuteAgo.toString(), currentTimestampInSeconds.toString());
        let price = res.at(-1).price;
        let result;
        if (pair.startsWith("SUI")) {
            result = prices.get("SUI")! / Number(price);
        } else if (pair.endsWith("SUI")) {
            result = prices.get("SUI")! * Number(price);
        } else {
            result = Number(price);
        }
        prices.set(pair.replace("SUI", ""), result);
    }

    return prices;
}

const pythId = {
    "23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744": "SUI",
    e5b274b2611143df055d6e7cd8d93fe1961716bcd4dca1cad87a83bc1e78c1ef: "CETUS",
    eaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a: "USDC",
    e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43: "BTC",
    ff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace: "ETH",
    ef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d: "SOL",
    f9c2e890443dd995d0baafc08eea3358be1ffb874f93f99c30b3816c460bbac3: "TURBOS",
    "03ae4db29ed4ae33d323568895aa00337e658e348b37509f5372ae51f0af00d5": "APT",
    "2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b": "USDT",
    dcef50dd0a4cd2dcc17e45df1676dcb336a11a61c69df7a0299b0150c672d25c: "DOGE",
    "7a5bc1d2b56ad029048cd63964b3ad2776eadf812edc1a43a31406cb54bff592": "INJ",
    "53614f1cb0c031d4af66c04cb9c756234adad0e1cee85303795091499a4084eb": "SEI",
    "88250f854c019ef4f88a5c073d52a18bb1c6ac437033f5932cd017d24917ab46": "NAVX",
    e393449f6aff8a4b6d3e1165a7c9ebec103685f3b41e60db4277b5b6d10e7326: "USDY",
};
