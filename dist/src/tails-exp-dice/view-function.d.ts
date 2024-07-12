export interface DrawResult {
    answer_1: string;
    result_1: string;
    answer_2: string;
    result_2: string;
    exp: string;
}
export declare function simulateGame(network: "mainnet" | "testnet", packageId: string, registry: string, index: string, amount: string, guess_1: string, larger_than_1: boolean, guess_2: string, larger_than_2: boolean, vrf_input_1: number[], vrf_input_2: number[], drawKeys: any, sender?: string): Promise<DrawResult>;
