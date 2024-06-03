import { normalizeSuiAddress } from "@mysten/sui.js/utils";

export function typeArgsToAssets(typeArgs: string[]): string[] {
    let assets = typeArgs.map((x) => typeArgToAsset(x));
    return assets;
}

export function typeArgToAsset(typeArg: string): string {
    let typeArgs = typeArg.split("::");
    switch (normalizeSuiAddress(typeArgs[0])) {
        case "0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55":
            return "VSUI";
        case "0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881":
            return "WBTC";
        case "0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5":
            return "WETH";
        case "0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8":
            return "WSOL";
        case "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf":
            return "USDC";
        case "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c":
            return "USDT";
        case "0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a":
            return "TURBOS";
        case "0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37":
            return "APT";
        case "0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1":
            return "FUD";
        case "0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc":
            return "AFSUI";
        case "0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6":
            return "SCA";
        case "0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb":
            return "USDY";
        default:
            if (typeArgs[2] == "BTC") {
                return "WBTC";
            } else if (typeArgs[2] == "ETH") {
                return "WETH";
            } else if (typeArgs[2] == "SOL") {
                return "WSOL";
            }
            return typeArgs[2];
    }
}

export function assetToDecimal(asset: string): number | undefined {
    switch (asset) {
        case "SUI":
            return 9;
        case "BTC":
            return 8;
        case "ETH":
            return 8;
        case "WBTC":
            return 8;
        case "WETH":
            return 8;
        case "SOL":
            return 8;
        case "WSOL":
            return 8;
        case "USDC":
            return 6;
        case "USDT":
            return 6;
        case "USDY":
            return 6;
        case "CETUS":
            return 9;
        case "TURBOS":
            return 9;
        case "APT":
            return 8;
        case "FUD":
            return 5;
        case "MFUD":
            return 6;
        case "INJ":
        case "SEI":
        case "JUP":
            return 8;
        case "BUCK":
            return 9;
        case "AFSUI":
            return 9;
        case "NAVX":
            return 9;
        case "SCA":
            return 9;
    }
}
