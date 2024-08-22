import { TypusConfig } from "src/utils";

export async function getDrawResult(
    config: TypusConfig,
    input: {
        network: "mainnet" | "testnet";
        module: "tails_exp" | "combo_dice";
        index: string;
        amount: string;
        guess_1: string;
        larger_than_1: boolean;
        guess_2: string;
        larger_than_2: boolean;
        vrf_input_1: number[];
        vrf_input_2: number[];
    }
) {
    let registry = "";
    switch (input.module) {
        case "tails_exp":
            registry = config.registry.dice.tailsExp;
            break;
        case "combo_dice":
            registry = config.registry.dice.comboDice;
            break;
        default:
            break;
    }
    const queryParams = new URLSearchParams({
        network: input.network,
        packageId: config.package.dice,
        registry: registry,
        index: input.index,
        amount: input.amount,
        guess_1: input.guess_1,
        larger_than_1: `${input.larger_than_1}`,
        guess_2: input.guess_2,
        larger_than_2: `${input.larger_than_2}`,
    });

    const vrf_input_1_string = JSON.stringify(input.vrf_input_1);
    const vrf_input_2_string = JSON.stringify(input.vrf_input_2);

    let apiUrl: string;
    if (input.module === "tails_exp") {
        apiUrl = "https://us-central1-aqueous-freedom-378103.cloudfunctions.net/draw-result-1";
    } else if (input.module === "combo_dice") {
        apiUrl = "https://us-central1-aqueous-freedom-378103.cloudfunctions.net/draw-result-2";
    }

    // Append the query parameters to the URL
    // @ts-ignore
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
