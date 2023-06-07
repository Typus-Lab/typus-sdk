import { normalizeSuiAddress } from "@mysten/sui.js";

export function typeArgsToAssets(typeArgs: string[]): string[] {
    let assets = typeArgs.map((x) => {
        let typeArgs = x.split("::");
        switch (normalizeSuiAddress(typeArgs[0])) {
            case "0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881":
                return "WBTC";
            case "0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5":
                return "WETH";
            case "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf":
                return "USDC";
            case "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c":
                return "USDT";
            default:
                return typeArgs[2];
        }
    });
    return assets;
}

export function assetToDecimal(asset: string): number | undefined {
    switch (asset) {
        case "SUI":
            return 9;
        case "WBTC":
            return 8;
        case "WETH":
            return 8;
        case "USDC":
            return 6;
        case "USDT":
            return 6;
        case "CETUS":
            return 9;
    }
}
