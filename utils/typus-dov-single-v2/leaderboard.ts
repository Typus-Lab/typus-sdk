import { JsonRpcProvider, SuiEventFilter } from "@mysten/sui.js";
import { typeArgToAsset } from "../token";

const apiUrl = "https://us-central1-aqueous-freedom-378103.cloudfunctions.net/mongodb";

export async function getDb(startTs, endTs) {
    const queryParams = new URLSearchParams({
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

export async function getUsersTvl(startTs, endTs) {
    var result: Tvl[] = await getDb(startTs, endTs);
    // console.log(result);
    var result = result.sort((a, b) => Number(a.timestamp) - Number(b.timestamp));

    let firstTs = Number(result.at(0)!.timestamp);
    let lastTs = Number(result.at(-1)!.timestamp);
    let length = (lastTs - firstTs) / 3600;
    // console.log(length.toPrecision(1));

    var usersTvl = result.reduce((prev, curr) => {
        var acc = 0;
        if (prev.has(curr.address)) {
            acc = prev.get(curr.address)!;
        }
        acc += Number(curr.usd) / length;
        prev.set(curr.address, acc);
        return prev;
    }, new Map<string, number>());

    // console.log(usersTvl);

    return usersTvl;
}

export async function getUsersBid(
    provider: JsonRpcProvider,
    originPackage: string,
    startTs = 0,
    endTs = Math.floor(new Date().getTime() / 1000)
) {
    const senderFilter: SuiEventFilter = {
        MoveEventType: `${originPackage}::typus_dov_single::NewBidEvent`,
    };

    var usersPremium = new Map<string, number>();
    var hasNextPage = true;
    var cursor: any | undefined = undefined;

    while (hasNextPage) {
        var result = await provider.queryEvents({ query: senderFilter, order: "descending", cursor });
        // console.log(result);

        result.data.forEach((data) => {
            if (Number(data.timestampMs) / 1000 < endTs) {
                const parsedJson = data.parsedJson!;
                var bidder_balance = Number(parsedJson.bidder_balance) / 10 ** Number(parsedJson.decimal);
                var price = 1;
                if (parsedJson.b_token == parsedJson.o_token) {
                    price = Number(parsedJson.oracle_info.price) / 10 ** Number(parsedJson.oracle_info.decimal);
                }

                var acc = 0;
                if (usersPremium.has(parsedJson.signer)) {
                    acc = usersPremium.get(parsedJson.signer)!;
                }
                acc += bidder_balance * price;
                usersPremium.set(parsedJson.signer, acc);
            }
        });

        if (result.hasNextPage && Number(result.data.at(-1)!.timestampMs) / 1000 < startTs) {
            break;
        }

        hasNextPage = result.hasNextPage;
        cursor = result.nextCursor;
    }

    // Convert the Map to an array of key-value pairs
    let mapEntries = Array.from(usersPremium.entries());

    // Sort the array based on the values (second element in each entry)
    mapEntries.sort((a, b) => b[1] - a[1]);

    // Create a new Map from the sorted array
    usersPremium = new Map(mapEntries);

    // console.log(usersPremium);

    return usersPremium;
}

export async function getUsersHarvestCompound(
    provider: JsonRpcProvider,
    originPackage: string,
    startTs = 0,
    endTs = Math.floor(new Date().getTime() / 1000)
) {
    var usersHarvestCompound = new Map<string, number>();

    var hasNextPage = true;
    var cursor: any | undefined = undefined;

    while (hasNextPage) {
        var result = await provider.queryEvents({
            query: { MoveEventType: `${originPackage}::typus_dov_single::HarvestEvent` },
            order: "descending",
            cursor,
        });
        // console.log(result);

        result.data.forEach((data) => {
            if (Number(data.timestampMs) / 1000 < endTs) {
                const parsedJson = data.parsedJson!;
                var amount = Number(parsedJson.amount) / 10 ** Number(parsedJson.decimal);
                var price = Number(parsedJson.oracle_info.price) / 10 ** Number(parsedJson.oracle_info.decimal);
                const asset = typeArgToAsset("0x" + parsedJson.token.name);
                if (asset.startsWith("USD")) {
                    price = 1;
                }

                var acc = 0;
                if (usersHarvestCompound.has(parsedJson.signer)) {
                    acc = usersHarvestCompound.get(parsedJson.signer)!;
                }
                acc += amount * price;
                usersHarvestCompound.set(parsedJson.signer, acc);
            }
        });

        if (result.hasNextPage && Number(result.data.at(-1)!.timestampMs) / 1000 < startTs) {
            break;
        }

        hasNextPage = result.hasNextPage;
        cursor = result.nextCursor;
    }

    var hasNextPage = true;
    var cursor: any | undefined = undefined;

    while (hasNextPage) {
        var result = await provider.queryEvents({
            query: { MoveEventType: `${originPackage}::typus_dov_single::CompoundEvent` },
            order: "descending",
            cursor,
        });
        // console.log(result);

        result.data.forEach((data) => {
            if (Number(data.timestampMs) / 1000 < endTs) {
                const parsedJson = data.parsedJson!;
                var amount = Number(parsedJson.amount) / 10 ** Number(parsedJson.decimal);
                var price = Number(parsedJson.oracle_info.price) / 10 ** Number(parsedJson.oracle_info.decimal);
                const asset = typeArgToAsset("0x" + parsedJson.token.name);
                if (asset.startsWith("USD")) {
                    price = 1;
                }

                var acc = 0;
                if (usersHarvestCompound.has(parsedJson.signer)) {
                    acc = usersHarvestCompound.get(parsedJson.signer)!;
                }
                acc += amount * price;
                usersHarvestCompound.set(parsedJson.signer, acc);
            }
        });

        if (result.hasNextPage && Number(result.data.at(-1)!.timestampMs) / 1000 < startTs) {
            break;
        }

        hasNextPage = result.hasNextPage;
        cursor = result.nextCursor;
    }

    // Convert the Map to an array of key-value pairs
    let mapEntries = Array.from(usersHarvestCompound.entries());

    // Sort the array based on the values (second element in each entry)
    mapEntries.sort((a, b) => b[1] - a[1]);

    // Create a new Map from the sorted array
    usersHarvestCompound = new Map(mapEntries);

    // console.log(usersHarvestCompound);

    return usersHarvestCompound;
}

interface Tvl {
    address: string;
    usd: string;
    timestamp: string;
}
