import { SuiClient } from "@mysten/sui.js/client";
export declare function getUserMetadata(input: {
    provider: SuiClient;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusUserRegistry: string;
    user: string;
}): Promise<string[]>;
