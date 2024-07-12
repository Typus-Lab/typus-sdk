import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isDepositShare(type: string): boolean;
export interface DepositShareFields {
    index: ToField<"u64">;
    activeShare: ToField<"u64">;
    deactivatingShare: ToField<"u64">;
    inactiveShare: ToField<"u64">;
    warmupShare: ToField<"u64">;
    premiumShare: ToField<"u64">;
    incentiveShare: ToField<"u64">;
}
export type DepositShareReified = Reified<DepositShare, DepositShareFields>;
export declare class DepositShare implements StructClass {
    static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_view_function::DepositShare";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_view_function::DepositShare";
    readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_view_function::DepositShare";
    readonly $typeArgs: [];
    readonly index: ToField<"u64">;
    readonly activeShare: ToField<"u64">;
    readonly deactivatingShare: ToField<"u64">;
    readonly inactiveShare: ToField<"u64">;
    readonly warmupShare: ToField<"u64">;
    readonly premiumShare: ToField<"u64">;
    readonly incentiveShare: ToField<"u64">;
    private constructor();
    static reified(): DepositShareReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<DepositShare, DepositShareFields>;
    static phantom(): PhantomReified<ToTypeStr<DepositShare>>;
    static get p(): PhantomReified<"0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tds_view_function::DepositShare">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        index: string;
        active_share: string;
        deactivating_share: string;
        inactive_share: string;
        warmup_share: string;
        premium_share: string;
        incentive_share: string;
    }, {
        index: string | number | bigint;
        active_share: string | number | bigint;
        deactivating_share: string | number | bigint;
        inactive_share: string | number | bigint;
        warmup_share: string | number | bigint;
        premium_share: string | number | bigint;
        incentive_share: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): DepositShare;
    static fromFieldsWithTypes(item: FieldsWithTypes): DepositShare;
    static fromBcs(data: Uint8Array): DepositShare;
    toJSONField(): {
        index: string;
        activeShare: string;
        deactivatingShare: string;
        inactiveShare: string;
        warmupShare: string;
        premiumShare: string;
        incentiveShare: string;
    };
    toJSON(): {
        index: string;
        activeShare: string;
        deactivatingShare: string;
        inactiveShare: string;
        warmupShare: string;
        premiumShare: string;
        incentiveShare: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DepositShare;
    static fromJSON(json: Record<string, any>): DepositShare;
    static fromSuiParsedData(content: SuiParsedData): DepositShare;
    static fetch(client: SuiClient, id: string): Promise<DepositShare>;
}
