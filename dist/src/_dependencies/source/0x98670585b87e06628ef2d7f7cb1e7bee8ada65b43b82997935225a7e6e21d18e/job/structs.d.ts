import * as reified from "../../../../_framework/reified";
import { PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../../0x2/object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isJob(type: string): boolean;
export interface JobFields {
    id: ToField<UID>;
    name: ToField<Vector<"u8">>;
    hash: ToField<Vector<"u8">>;
    data: ToField<Vector<"u8">>;
    createdAt: ToField<"u64">;
}
export type JobReified = Reified<Job, JobFields>;
export declare class Job implements StructClass {
    static readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::job::Job";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::job::Job";
    readonly $fullTypeName: "0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::job::Job";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly name: ToField<Vector<"u8">>;
    readonly hash: ToField<Vector<"u8">>;
    readonly data: ToField<Vector<"u8">>;
    readonly createdAt: ToField<"u64">;
    private constructor();
    static reified(): JobReified;
    static get r(): reified.StructClassReified<Job, JobFields>;
    static phantom(): PhantomReified<ToTypeStr<Job>>;
    static get p(): reified.PhantomReified<"0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e::job::Job">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        name: number[];
        hash: number[];
        data: number[];
        created_at: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        name: Iterable<number> & {
            length: number;
        };
        hash: Iterable<number> & {
            length: number;
        };
        data: Iterable<number> & {
            length: number;
        };
        created_at: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): Job;
    static fromFieldsWithTypes(item: FieldsWithTypes): Job;
    static fromBcs(data: Uint8Array): Job;
    toJSONField(): {
        id: string;
        name: number[];
        hash: number[];
        data: number[];
        createdAt: string;
    };
    toJSON(): {
        id: string;
        name: number[];
        hash: number[];
        data: number[];
        createdAt: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Job;
    static fromJSON(json: Record<string, any>): Job;
    static fromSuiParsedData(content: SuiParsedData): Job;
    static fetch(client: SuiClient, id: string): Promise<Job>;
}
