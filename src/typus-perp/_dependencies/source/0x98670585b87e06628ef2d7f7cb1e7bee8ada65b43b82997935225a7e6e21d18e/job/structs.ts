import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    fieldToJSON,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { Vector } from "../../../../_framework/vector";
import { UID } from "../../0x2/object/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64 } from "@mysten/sui/utils";

/* ============================== Job =============================== */

export function isJob(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::job::Job`;
}

export interface JobFields {
    id: ToField<UID>;
    name: ToField<Vector<"u8">>;
    hash: ToField<Vector<"u8">>;
    data: ToField<Vector<"u8">>;
    createdAt: ToField<"u64">;
}

export type JobReified = Reified<Job, JobFields>;

export class Job implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::job::Job`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Job.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::job::Job`;
    readonly $typeArgs: [];
    readonly $isPhantom = Job.$isPhantom;

    readonly id: ToField<UID>;
    readonly name: ToField<Vector<"u8">>;
    readonly hash: ToField<Vector<"u8">>;
    readonly data: ToField<Vector<"u8">>;
    readonly createdAt: ToField<"u64">;

    private constructor(typeArgs: [], fields: JobFields) {
        this.$fullTypeName = composeSuiType(Job.$typeName, ...typeArgs) as `${typeof PKG_V1}::job::Job`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.name = fields.name;
        this.hash = fields.hash;
        this.data = fields.data;
        this.createdAt = fields.createdAt;
    }

    static reified(): JobReified {
        return {
            typeName: Job.$typeName,
            fullTypeName: composeSuiType(Job.$typeName, ...[]) as `${typeof PKG_V1}::job::Job`,
            typeArgs: [] as [],
            isPhantom: Job.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Job.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Job.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Job.fromBcs(data),
            bcs: Job.bcs,
            fromJSONField: (field: any) => Job.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Job.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Job.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Job.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Job.fetch(client, id),
            new: (fields: JobFields) => {
                return new Job([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Job.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Job>> {
        return phantom(Job.reified());
    }
    static get p() {
        return Job.phantom();
    }

    static get bcs() {
        return bcs.struct("Job", {
            id: UID.bcs,
            name: bcs.vector(bcs.u8()),
            hash: bcs.vector(bcs.u8()),
            data: bcs.vector(bcs.u8()),
            created_at: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Job {
        return Job.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            name: decodeFromFields(reified.vector("u8"), fields.name),
            hash: decodeFromFields(reified.vector("u8"), fields.hash),
            data: decodeFromFields(reified.vector("u8"), fields.data),
            createdAt: decodeFromFields("u64", fields.created_at),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Job {
        if (!isJob(item.type)) {
            throw new Error("not a Job type");
        }

        return Job.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            name: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.name),
            hash: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.hash),
            data: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.data),
            createdAt: decodeFromFieldsWithTypes("u64", item.fields.created_at),
        });
    }

    static fromBcs(data: Uint8Array): Job {
        return Job.fromFields(Job.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            name: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.name),
            hash: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.hash),
            data: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.data),
            createdAt: this.createdAt.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Job {
        return Job.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            name: decodeFromJSONField(reified.vector("u8"), field.name),
            hash: decodeFromJSONField(reified.vector("u8"), field.hash),
            data: decodeFromJSONField(reified.vector("u8"), field.data),
            createdAt: decodeFromJSONField("u64", field.createdAt),
        });
    }

    static fromJSON(json: Record<string, any>): Job {
        if (json.$typeName !== Job.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Job.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Job {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isJob(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Job object`);
        }
        return Job.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Job {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isJob(data.bcs.type)) {
                throw new Error(`object at is not a Job object`);
            }

            return Job.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Job.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Job> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Job object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isJob(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Job object`);
        }

        return Job.fromSuiObjectData(res.data);
    }
}
