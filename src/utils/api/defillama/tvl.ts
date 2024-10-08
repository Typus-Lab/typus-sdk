export async function getTvl(): Promise<number> {
    let response = await fetch("https://api.llama.fi/tvl/typus-finance", {
        method: "GET",
    });

    // console.log(response);
    let data = await response.json();
    // console.log(data);

    return data;
}

export async function getDovTvl(): Promise<number> {
    let response = await fetch("https://api.llama.fi/tvl/typus-dov", {
        method: "GET",
    });

    // console.log(response);
    let data = await response.json();
    // console.log(data);

    return data;
}

export async function getSafuTvl(): Promise<number> {
    let response = await fetch("https://api.llama.fi/tvl/typus-safu", {
        method: "GET",
    });

    // console.log(response);
    let data = await response.json();
    // console.log(data);

    return data;
}
