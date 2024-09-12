import camelcaseKeysDeep = require("camelcase-keys-deep");

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
    static async default(network: "MAINNET" | "TESTNET", branch = "main"): Promise<TypusConfig> {
        switch (network) {
            case "MAINNET":
                return JSON.parse(
                    JSON.stringify(
                        camelcaseKeysDeep(
                            await (
                                await fetch(`https://raw.githubusercontent.com/Typus-Lab/typus-config/${branch}/config-mainnet.json`)
                            ).json()
                        )
                    )
                );
            case "TESTNET":
                return JSON.parse(
                    JSON.stringify(
                        camelcaseKeysDeep(
                            await (
                                await fetch(`https://raw.githubusercontent.com/Typus-Lab/typus-config/${branch}/config-testnet.json`)
                            ).json()
                        )
                    )
                );
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
        autoBid: string;
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
        mblub: string;
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
    apt: string;
    btc: string;
    buck: string;
    cetus: string;
    eth: string;
    fud: string;
    hasui: string;
    inj: string;
    jup: string;
    mfud: string;
    navx: string;
    sca: string;
    sei: string;
    sol: string;
    sui: string;
    texp: string;
    tgld: string;
    tlp: string;
    turbos: string;
    usd: string;
    usdc: string;
    usdt: string;
    usdy: string;
    vsui: string;
    blub: string;
    mblub: string;
}

// (async () => {
//     let config = await TypusConfig.default("MAINNET");
//     console.log(config);
//     console.log(config.rpcEndpoint);
//     console.log(config.registry.dice.comboDice);
//     console.log(config.token.tgld);
// })();
