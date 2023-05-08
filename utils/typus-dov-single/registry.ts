import { JsonRpcProvider } from "@mysten/sui.js";
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

export async function getRegistry(provider: JsonRpcProvider, registry: string): Promise<Registry> {
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

export async function getPackageVersion(provider: JsonRpcProvider, packageId: string): Promise<bigint> {
    let packageData = await provider.getObject({
        id: packageId,
        options: {
            showContent: true,
        },
    });
    // @ts-ignore
    let version = new RegExp("upgrade_registry[^\\[]+\\[[^\\[]+\\[([^\\]]+)\\]").exec(packageData.data.content.disassembled.typus_dov_single)[1];
    return U64FromBytes(version.split(", ").reverse());
}
