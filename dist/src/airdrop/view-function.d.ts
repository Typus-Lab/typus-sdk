import { SuiClient } from "@mysten/sui.js/client";
export declare function getAirdrop(input: {
    provider: SuiClient;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusAirdropRegistry: string;
    key: string;
    user: string;
}): Promise<string[]>;
