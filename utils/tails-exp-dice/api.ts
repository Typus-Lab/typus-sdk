const apiUrl = "https://us-central1-aqueous-freedom-378103.cloudfunctions.net/draw-result-1";

export async function getDrawResult(
    network: "mainnet" | "testnet",
    packageId: string,
    registry: string,
    index: string,
    amount: string,
    guess_1: string,
    larger_than_1: boolean,
    guess_2: string,
    larger_than_2: boolean,
    vrf_input_1: number[],
    vrf_input_2: number[]
) {
    const queryParams = new URLSearchParams({
        network,
        packageId,
        registry,
        index,
        amount,
        guess_1,
        larger_than_1: `${larger_than_1}`,
        guess_2,
        larger_than_2: `${larger_than_2}`,
    });

    const vrf_input_1_string = JSON.stringify(vrf_input_1);
    const vrf_input_2_string = JSON.stringify(vrf_input_2);

    // Append the query parameters to the URL
    const apiUrlWithParams = `${apiUrl}?${queryParams.toString()}&vrf_input_1=${vrf_input_1_string}&vrf_input_2=${vrf_input_2_string}`;
    // console.log(apiUrlWithParams);

    let response = await fetch(apiUrlWithParams, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    // console.log(response);

    if (response.ok) {
        let data = await response.json();
        return data;
    }
}
