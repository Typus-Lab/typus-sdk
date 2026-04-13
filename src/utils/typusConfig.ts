import camelcaseKeysDeep from "camelcase-keys-deep";
import * as fs from "fs";
import { assertSafeTypusConfigBranch } from "src/utils/typusConfigBranch";

export class TypusConfig {
    network: "MAINNET" | "TESTNET";
    rpcEndpoint: string;
    packageOrigin: Package;
    package: Package;
    version: Version;
    registry: Registry;
    object: Object;
    sponsored: boolean = false;

    static parse(json): TypusConfig {
        return JSON.parse(JSON.stringify(camelcaseKeysDeep(json)));
    }
    static local(path): TypusConfig {
        return TypusConfig.parse(JSON.parse(fs.readFileSync(path, "utf-8")));
    }
    static async default(network: "MAINNET" | "TESTNET", customRpcEndpoint: string | null, branch = "main"): Promise<TypusConfig> {
        assertSafeTypusConfigBranch(branch);
        switch (network) {
            case "MAINNET": {
                const url = `https://raw.githubusercontent.com/Typus-Lab/typus-config/${branch}/config-mainnet.json`;
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`Failed to load typus mainnet config: HTTP ${res.status} ${url}`);
                }
                let typusConfig = JSON.parse(
                    JSON.stringify(
                        camelcaseKeysDeep(
                            await res.json()
                        )
                    )
                );
                if (customRpcEndpoint) {
                    typusConfig.rpcEndpoint = customRpcEndpoint;
                }
                return typusConfig;
            }
            case "TESTNET": {
                const url = `https://raw.githubusercontent.com/Typus-Lab/typus-config/${branch}/config-testnet.json`;
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`Failed to load typus testnet config: HTTP ${res.status} ${url}`);
                }
                let typusConfig = JSON.parse(
                    JSON.stringify(
                        camelcaseKeysDeep(
                            await res.json()
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
    perp: {
        perp: string;
        stakePool: string;
    };
    safu: string;
    typus: string;
    launch: {
        airdrop: string;
        auction: string;
        fundingVault: string;
        improvementProposal: string;
        optionAirdrop: string;
        veTypus: string;
    };
    hedge: {
        hedge: string;
        hedge_perp_dov: string;
        hedge_momentum: string;
    };
}
export interface Version {
    perp: {
        perp: string;
        stakePool: string;
    };
    safu: string;
    typus: string;
    launch: {
        airdrop: string;
        auction: string;
        fundingVault: string;
        improvementProposal: string;
        optionAirdrop: string;
        veTypus: string;
    };
    hedge: {
        hedge: string;
        hedge_perp_dov: string;
        hedge_momentum: string;
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
    typus: {
        airdrop: string;
        leaderboard: string;
        tailsStaking: string;
        tgld: string;
        user: string;
    };
    launch: {
        airdrop: string;
        fundingVault: string;
        improvementProposal: string;
        veTypus: string;
    };
    hedge: {
        hedge: string;
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

// (async () => {
//     let config = TypusConfig.local("../typus-config/config-mainnet.json");
//     console.log(config);
//     console.log(config.rpcEndpoint);
// })();
