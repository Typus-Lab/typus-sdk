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
    let fiveMinuteAgo = currentTimestampInSeconds - 300;
    try {
        let res: any[] = await getPairPrices(pair, fiveMinuteAgo.toString(), currentTimestampInSeconds.toString());
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
    const keys = Object.keys(pythId)
        .map((key) => `ids[]=${key}`)
        .join("&");
    let apiUrlWithParams = `https://hermes.pyth.network/api/latest_price_feeds?${keys}`;

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

/**
 * Fetch latest Pyth prices for the specified symbols.
 * @param symbols Array of token symbols (e.g., ["BTC", "ETH"]) to fetch prices for.
 * @returns Map where keys are token symbols and values are their latest prices.
 */
export async function getPythLatestPriceBySymbols(symbols: string[]): Promise<Map<string, number>> {
    // Build query string for requested symbols by mapping through pythId entries
    const idsParam = Object.entries(pythId)
        .filter(([id, token]) => symbols.includes(token))
        .map(([id]) => `ids[]=${id}`)
        .join("&");
    const apiUrlWithParams = `https://hermes.pyth.network/api/latest_price_feeds?${idsParam}`;

    const response = await fetch(apiUrlWithParams, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    const map = new Map<string, number>();

    if (response.ok) {
        const data: any[] = await response.json();
        data.forEach((p) => {
            const token = pythId[p.id];
            // Convert price using exponent provided
            const price = p.price.price / 10 ** -p.price.expo;
            if (symbols.includes(token)) {
                map.set(token, price);
            }
        });
    } else {
        console.error(`Failed to fetch Pyth prices: ${response.status}`);
    }

    return map;
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
    "0a0408d619e9380abad35060f9192039ed5042fa6f82301d0e48bb52be830996": "JUP",
    "7e17f0ac105abe9214deb9944c30264f5986bf292869c6bd8e8da3ccd92d79bc": "SCA",
    "17cd845b16e874485b2684f8b8d1517d744105dbb904eec30222717f4bc9ee0d": "AFSUI",
    "88250f854c019ef4f88a5c073d52a18bb1c6ac437033f5932cd017d24917ab46": "NAVX",
    e393449f6aff8a4b6d3e1165a7c9ebec103685f3b41e60db4277b5b6d10e7326: "USDY",
    fdf28a46570252b25fd31cb257973f865afc5ca2f320439e45d95e0394bc7382: "BUCK",
    "57ff7100a282e4af0c91154679c5dae2e5dcacb93fd467ea9cb7e58afdcfde27": "VSUI",
    "6120ffcf96395c70aa77e72dcb900bf9d40dccab228efca59a17b90ce423d5e8": "HASUI",
    d9912df360b5b7f21a122f15bdd5e27f62ce5e72bd316c291f7c86620e07fb2a: "AUSD",
    // Deleted by PYTH
    //"6a4090703da959247727f2b490eb21aea95c8684ecfac675f432008830890c75": "FUD",
    "29bdd5248234e33bd93d3b81100b5fa32eaa5997843847e2c2cb16d7c6d9f7ff": "DEEP",
    "04cfeb7b143eb9c48e9b074125c1a3447b85f59c31164dc20c1beaa6f21f2b6b": "BLUE",
    // Deleted by PYTH
    // "5fc11ffe4975b624be495be038da30e30bee2004d8ae6282b5364577ef4ca92c": "BLUB",
    "765d2ba906dbc32ca17cc11f5310a89e9ee1f6420508c63861f2f8ba4ee34bb2": "XAU",
    eba0732395fae9dec4bae12e52760b35fc1c5671e2da8b449c9af4efe5d54341: "WAL",
    "4279e31cc369bbcc2faf022b382b080e32a8e689ff20fbc530d2a603eb6cd98b": "HYPE",
    ec5d399846a9209f3fe5881d70aae9268c94339ff9817e8d18ff19fa05eea1c8: "XRP",
    e67d98cc1fbd94f569d5ba6c3c3c759eb3ffc5d2b28e64538a53ae13efad8fd1: "HAEDAL",
    ef2c98c804ba503c6a707e38be4dfbb16683775f195b091252bf24693042fd52: "USDJPY",
};

// getPythLatestPrice();
