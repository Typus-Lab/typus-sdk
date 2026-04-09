import camelcaseKeysDeep from "camelcase-keys-deep";
import * as fs from "fs";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { SuiGraphQLClient } from "@mysten/sui/graphql";
import { graphql } from "@mysten/sui/graphql/schema";

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
        return Object.assign(new TypusConfig(), JSON.parse(JSON.stringify(camelcaseKeysDeep(json))));
    }
    static local(path): TypusConfig {
        return TypusConfig.parse(JSON.parse(fs.readFileSync(path, "utf-8")));
    }
    static async default(network: "MAINNET" | "TESTNET", customRpcEndpoint: string | null, branch = "main"): Promise<TypusConfig> {
        const url =
            network === "MAINNET"
                ? `https://raw.githubusercontent.com/Typus-Lab/typus-config/${branch}/config-mainnet.json`
                : `https://raw.githubusercontent.com/Typus-Lab/typus-config/${branch}/config-testnet.json`;

        const data = camelcaseKeysDeep(await (await fetch(url)).json());
        const typusConfig = Object.assign(new TypusConfig(), JSON.parse(JSON.stringify(data)));
        if (customRpcEndpoint) {
            typusConfig.rpcEndpoint = customRpcEndpoint;
        }
        return typusConfig;
    }

    gRpcClient() {
        const transport = new GrpcWebFetchTransport({
            baseUrl: this.rpcEndpoint,
        });
        const provider = new SuiGrpcClient({
            network: this.network.toLocaleLowerCase(),
            transport,
        });

        return provider;
    }

    graphQlClient() {
        const provider = new SuiGraphQLClient({
            network: this.network.toLocaleLowerCase(),
            url: `https://graphql.${this.network.toLocaleLowerCase()}.sui.io/graphql`,
        });
        return provider;
    }

    async getDynamicObjectFields(parent: string, typeFilter: string = "") {
        // Get only bcs
        // const x = await this.graphQLClient.listDynamicFields({ parentId: parent, include: { value: true } });

        // Get json
        const x = await this.graphQlClient().query({
            query: dynamicFieldsQuery,
            variables: {
                id: parent,
            },
        });

        // @ts-ignore
        return x.data?.address?.dynamicFields?.nodes.filter((a) => a.value?.contents && a.value?.contents.type.repr.endsWith(typeFilter)).sort((a, b) => Number(a.name?.json) - Number(b.name?.json)).map((x_1) => {
            // @ts-ignore
            const json = x_1.value?.contents.json;
            // console.dir(json, { depth: null });
            return json;
        });
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



const dynamicFieldsQuery = graphql(`
    query ($id: SuiAddress!) {
        address(address: $id) {
            dynamicFields {
                nodes {
                    name {
                        ...Value
                    }
                    value {
                        ... on MoveValue {
                            ...Value
                        }
                        ... on MoveObject {
                            contents {
                                ...Value
                            }
                        }
                    }
                }
            }
        }
    }

    fragment Value on MoveValue {
        type {
            repr
        }
        json
    }
`);
