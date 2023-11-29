import { SuiClient } from "@mysten/sui.js/client";
import { U64FromBytes } from "../tools";

export interface Registry {
    version: string;
    numOfVault: string;
    depositVaultRegistry: string;
    bidVaultRegistry: string;
    restrictActivationTimePeriod: {
        fromTsMs: string;
        toTsMs: string;
    };
    authority: string[];
}

export async function getRegistry(provider: SuiClient, registry: string): Promise<Registry> {
    let result = await provider.getObject({ id: registry, options: { showContent: true } });

    return {
        // @ts-ignore
        version: result.data.content.fields.version,
        // @ts-ignore
        numOfVault: result.data.content.fields.num_of_vault,
        // @ts-ignore
        depositVaultRegistry: result.data.content.fields.deposit_vault_registry.fields.id.id,
        // @ts-ignore
        bidVaultRegistry: result.data.content.fields.bid_vault_registry.fields.id.id,
        restrictActivationTimePeriod: {
            // @ts-ignore
            fromTsMs: result.data.content.fields.restrict_activation_time_period.fields.from_ts_ms,
            // @ts-ignore
            toTsMs: result.data.content.fields.restrict_activation_time_period.fields.to_ts_ms,
        },
        authority: (
            await provider.multiGetObjects({
                ids: (
                    await provider.getDynamicFields({
                        // @ts-ignore
                        parentId: result.data.content.fields.authority.fields.whitelist.fields.id.id,
                    })
                ).data.map((x) => x.objectId as string),
                options: { showContent: true },
            })
        ).map((x) => {
            // @ts-ignore
            return x.data.content.fields.name as string;
        }),
    } as Registry;
}

export async function getPackageVersion(provider: SuiClient, packageId: string): Promise<bigint> {
    let packageData = await provider.getObject({
        id: packageId,
        options: {
            showContent: true,
            showBcs: true,
        },
    });
    let version = new RegExp(
        "Constants \\[[^=]+=> u64: ([^\\s][^\\s])([^\\s][^\\s])([^\\s][^\\s])([^\\s][^\\s])([^\\s][^\\s])([^\\s][^\\s])([^\\s][^\\s])([^\\s][^\\s])"
    ).exec(
        // @ts-ignore
        packageData.data.content.disassembled.typus_dov_single
        // "	25: Ret}Constants [0 => u64: e803000000000000jadsfiklajsl1 => u64: 0200000000000000"
    );
    return U64FromBytes([
        // @ts-ignore
        parseInt(version[8], 16),
        // @ts-ignore
        parseInt(version[7], 16),
        // @ts-ignore
        parseInt(version[6], 16),
        // @ts-ignore
        parseInt(version[5], 16),
        // @ts-ignore
        parseInt(version[4], 16),
        // @ts-ignore
        parseInt(version[3], 16),
        // @ts-ignore
        parseInt(version[2], 16),
        // @ts-ignore
        parseInt(version[1], 16),
    ]);
}
