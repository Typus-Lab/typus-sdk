import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { ID } from "../../0x2/object/structs";
import { Bytes32 } from "../bytes32/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isCurrentVersion(type: string): boolean;
export interface CurrentVersionFields {
    dummyField: ToField<"bool">;
}
export type CurrentVersionReified = Reified<CurrentVersion, CurrentVersionFields>;
export declare class CurrentVersion implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::CurrentVersion";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::CurrentVersion";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::CurrentVersion";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): CurrentVersionReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<CurrentVersion, CurrentVersionFields>;
    static phantom(): PhantomReified<ToTypeStr<CurrentVersion>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::CurrentVersion">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): CurrentVersion;
    static fromFieldsWithTypes(item: FieldsWithTypes): CurrentVersion;
    static fromBcs(data: Uint8Array): CurrentVersion;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): CurrentVersion;
    static fromJSON(json: Record<string, any>): CurrentVersion;
    static fromSuiParsedData(content: SuiParsedData): CurrentVersion;
    static fetch(client: SuiClient, id: string): Promise<CurrentVersion>;
}
export declare function isCurrentPackage(type: string): boolean;
export interface CurrentPackageFields {
    dummyField: ToField<"bool">;
}
export type CurrentPackageReified = Reified<CurrentPackage, CurrentPackageFields>;
export declare class CurrentPackage implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::CurrentPackage";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::CurrentPackage";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::CurrentPackage";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): CurrentPackageReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<CurrentPackage, CurrentPackageFields>;
    static phantom(): PhantomReified<ToTypeStr<CurrentPackage>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::CurrentPackage">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): CurrentPackage;
    static fromFieldsWithTypes(item: FieldsWithTypes): CurrentPackage;
    static fromBcs(data: Uint8Array): CurrentPackage;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): CurrentPackage;
    static fromJSON(json: Record<string, any>): CurrentPackage;
    static fromSuiParsedData(content: SuiParsedData): CurrentPackage;
    static fetch(client: SuiClient, id: string): Promise<CurrentPackage>;
}
export declare function isPackageInfo(type: string): boolean;
export interface PackageInfoFields {
    package: ToField<ID>;
    digest: ToField<Bytes32>;
}
export type PackageInfoReified = Reified<PackageInfo, PackageInfoFields>;
export declare class PackageInfo implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::PackageInfo";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::PackageInfo";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::PackageInfo";
    readonly $typeArgs: [];
    readonly package: ToField<ID>;
    readonly digest: ToField<Bytes32>;
    private constructor();
    static reified(): PackageInfoReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<PackageInfo, PackageInfoFields>;
    static phantom(): PhantomReified<ToTypeStr<PackageInfo>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::PackageInfo">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        package: {
            bytes: string;
        };
        digest: {
            data: number[];
        };
    }, {
        package: {
            bytes: string;
        };
        digest: {
            data: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): PackageInfo;
    static fromFieldsWithTypes(item: FieldsWithTypes): PackageInfo;
    static fromBcs(data: Uint8Array): PackageInfo;
    toJSONField(): {
        package: string;
        digest: {
            data: number[];
        };
    };
    toJSON(): {
        package: string;
        digest: {
            data: number[];
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PackageInfo;
    static fromJSON(json: Record<string, any>): PackageInfo;
    static fromSuiParsedData(content: SuiParsedData): PackageInfo;
    static fetch(client: SuiClient, id: string): Promise<PackageInfo>;
}
export declare function isPendingPackage(type: string): boolean;
export interface PendingPackageFields {
    dummyField: ToField<"bool">;
}
export type PendingPackageReified = Reified<PendingPackage, PendingPackageFields>;
export declare class PendingPackage implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::PendingPackage";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::PendingPackage";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::PendingPackage";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): PendingPackageReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<PendingPackage, PendingPackageFields>;
    static phantom(): PhantomReified<ToTypeStr<PendingPackage>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::package_utils::PendingPackage">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): PendingPackage;
    static fromFieldsWithTypes(item: FieldsWithTypes): PendingPackage;
    static fromBcs(data: Uint8Array): PendingPackage;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): PendingPackage;
    static fromJSON(json: Record<string, any>): PendingPackage;
    static fromSuiParsedData(content: SuiParsedData): PendingPackage;
    static fetch(client: SuiClient, id: string): Promise<PendingPackage>;
}
