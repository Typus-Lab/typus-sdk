export declare function getPairPrices(pair: string, startTs: string, endTs: string): Promise<any>;
export declare function getLatestPrice(pair: string): Promise<string>;
export declare function getPythLatestPrice(): Promise<Map<string, number> | undefined>;
export declare function getLatestPriceUSD(): Promise<Map<string, number>>;
