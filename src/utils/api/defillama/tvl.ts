export async function getTvl(): Promise<number> {
    let response = await fetch("https://api.llama.fi/tvl/typus-finance", {
        method: "GET",
    });

    // console.log(response);
    let data = await response.json();
    // console.log(data);

    return data;
}
