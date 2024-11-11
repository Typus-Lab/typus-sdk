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
    static async default(network: "MAINNET" | "TESTNET", customRpcEndpoint: string | null, branch = "main"): Promise<TypusConfig> {
        switch (network) {
            case "MAINNET": {
                let typusConfig = JSON.parse(
                    JSON.stringify(
                        camelcaseKeysDeep(
                            await (
                                await fetch(`https://raw.githubusercontent.com/Typus-Lab/typus-config/${branch}/config-mainnet.json`)
                            ).json()
                        )
                    )
                );
                if (customRpcEndpoint) {
                    typusConfig.rpcEndpoint = customRpcEndpoint;
                }
                return typusConfig;
            }
            case "TESTNET": {
                let typusConfig = JSON.parse(
                    JSON.stringify(
                        camelcaseKeysDeep(
                            await (
                                await fetch(`https://raw.githubusercontent.com/Typus-Lab/typus-config/${branch}/config-testnet.json`)
                            ).json()
                        )
                    )
                );
                if (customRpcEndpoint) {
                    typusConfig.rpcEndpoint = customRpcEndpoint;
                }
                return typusConfig;
            }
        }
    }
}
export interface Package {
    dice: string;
    dovSingle: string;
    framework: string;
    nft: string;
    oracle: string;
    perp: string;
    safu: string;
    typus: string;
    launch: {
        auction: string;
        optionAirdrop: string;
        fundingVault: string;
    };
}
export interface Version {
    perp: string;
    safu: string;
    typus: string;
    launch: {
        auction: string;
        optionAirdrop: string;
        fundingVault: string;
    };
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
        mliq: string;
    };
    typus: {
        airdrop: string;
        leaderboard: string;
        tailsStaking: string;
        tgld: string;
        user: string;
    };
    launch: {
        fundingVault: string;
    };
}
export interface Object {
    nftTransferPolicy: string;
    tailsIds: string;
    tgldCoinMetadata: string;
    tgldTokenPolicy: string;
    tlpTreasuryCap: string;
    launchAuction: string;
    launchSnapshot: string;
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
    mliq: string;
    hippo: string;
    deep: string;
}
export interface Token {
    afsui: string;
    apt: string;
    ausd: string;
    blub: string;
    btc: string;
    buck: string;
    cetus: string;
    eth: string;
    fud: string;
    hasui: string;
    inj: string;
    jup: string;
    mblub: string;
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
    wusdc: string;
    mliq: string;
    hippo: string;
    deep: string;
    typus: string;
}

// (async () => {
//     let config = await TypusConfig.default("MAINNET", null);
//     console.log(config);
//     console.log(config.rpcEndpoint);
// })();
