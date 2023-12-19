const apiUrl = "https://us-central1-aqueous-freedom-378103.cloudfunctions.net/db-price";

export async function getPairPrices(pair: string, startTs: string, endTs: string) {
    const queryParams = new URLSearchParams({
        pair,
        startTs,
        endTs,
    });

    // Append the query parameters to the URL
    const apiUrlWithParams = `${apiUrl}?${queryParams.toString()}`;

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
    const currentTimestampInSeconds: number = Math.floor(new Date().getTime() / 1000);
    const minuteAgo = currentTimestampInSeconds - 60;
    let res: any[] = await getPairPrices(pair, minuteAgo.toString(), currentTimestampInSeconds.toString());
    return res.at(-1).price;
}
