import camelcaseKeysDeep = require("camelcase-keys-deep");
import config_mainnet from "config-mainnet.json";
import config_testnet from "config-testnet.json";

export class TypusConfig {
    rpcEndpoint: string;
    packageOrigin: Package;
    package: Package;
    version: Version;
    registry: Registry;
    object: Object;
    oracle: Oracle;
    token: Token;
    static parse(json): TypusConfig {
        return JSON.parse(JSON.stringify(camelcaseKeysDeep(json)));
    }
    static default(network: "MAINNET" | "TESTNET"): TypusConfig {
        switch (network) {
            case "MAINNET":
                return JSON.parse(JSON.stringify(camelcaseKeysDeep(config_mainnet)));
            case "TESTNET":
                return JSON.parse(JSON.stringify(camelcaseKeysDeep(config_testnet)));
        }
    }
}
export interface Package {
    dice: string;
    dovSingle: string;
    framework: string;
    mfud: string;
    nft: string;
    oracle: string;
    perp: string;
    safu: string;
    token: string;
    typus: string;
}
export interface Version {
    perp: string;
    safu: string;
    typus: string;
}
export interface Registry {
    dice: {
        comboDice: string;
        tailsExp: string;
    };
    dov: {
        dovSingle: string;
    };
    perp: {
        liquidityPool: string;
        lpPool: string;
        market: string;
        stakePool: string;
        tlp: string;
    };
    safu: {
        safu: string;
    };
    token: {
        inj: string;
        mfud: string;
        sei: string;
    };
    typus: {
        airdrop: string;
        leaderboard: string;
        tailsStaking: string;
        tgld: string;
        user: string;
    };
}
export interface Object {
    nftTransferPolicy: string;
    strategyPool: string;
    tailsIds: string;
    tgldCoinMetadata: string;
    tgldTokenPolicy: string;
    tlpTreasuryCap: string;
}
export interface Oracle {
    afsui: string;
    apt: string;
    buck: string;
    cetus: string;
    inj: string;
    jup: string;
    navx: string;
    sca: string;
    sei: string;
    sol: string;
    sui: string;
    turbos: string;
    usdy: string;
    btc: string;
    eth: string;
}
export interface Token {
    afsui: string;
    fud: string;
    mfud: string;
    sui: string;
    tgld: string;
    tlp: string;
    usdc: string;
    usd: string;
    usdt: string;
}

// (async () => {
//     const { default: json } = await import("../../config-testnet.json");
//     let config = TypusConfig.parse(json);
//     console.log(config);
//     console.log(config.rpcEndpoint);
//     console.log(config.registry.dice.comboDice);
//     console.log(config.token.tgld);
// })();
