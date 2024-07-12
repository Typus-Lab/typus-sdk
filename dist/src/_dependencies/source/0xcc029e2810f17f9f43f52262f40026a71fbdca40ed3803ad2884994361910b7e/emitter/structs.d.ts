import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { ID, UID } from "../../0x2/object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isEmitterCap(type: string): boolean;
export interface EmitterCapFields {
    id: ToField<UID>;
    sequence: ToField<"u64">;
}
export type EmitterCapReified = Reified<EmitterCap, EmitterCapFields>;
export declare class EmitterCap implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterCap";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterCap";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterCap";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    readonly sequence: ToField<"u64">;
    private constructor();
    static reified(): EmitterCapReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<EmitterCap, EmitterCapFields>;
    static phantom(): PhantomReified<ToTypeStr<EmitterCap>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterCap">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        sequence: string;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        sequence: string | number | bigint;
    }>;
    static fromFields(fields: Record<string, any>): EmitterCap;
    static fromFieldsWithTypes(item: FieldsWithTypes): EmitterCap;
    static fromBcs(data: Uint8Array): EmitterCap;
    toJSONField(): {
        id: string;
        sequence: string;
    };
    toJSON(): {
        id: string;
        sequence: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): EmitterCap;
    static fromJSON(json: Record<string, any>): EmitterCap;
    static fromSuiParsedData(content: SuiParsedData): EmitterCap;
    static fetch(client: SuiClient, id: string): Promise<EmitterCap>;
}
export declare function isEmitterCreated(type: string): boolean;
export interface EmitterCreatedFields {
    emitterCap: ToField<ID>;
}
export type EmitterCreatedReified = Reified<EmitterCreated, EmitterCreatedFields>;
export declare class EmitterCreated implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterCreated";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterCreated";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterCreated";
    readonly $typeArgs: [];
    readonly emitterCap: ToField<ID>;
    private constructor();
    static reified(): EmitterCreatedReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<EmitterCreated, EmitterCreatedFields>;
    static phantom(): PhantomReified<ToTypeStr<EmitterCreated>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterCreated">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        emitter_cap: {
            bytes: string;
        };
    }, {
        emitter_cap: {
            bytes: string;
        };
    }>;
    static fromFields(fields: Record<string, any>): EmitterCreated;
    static fromFieldsWithTypes(item: FieldsWithTypes): EmitterCreated;
    static fromBcs(data: Uint8Array): EmitterCreated;
    toJSONField(): {
        emitterCap: string;
    };
    toJSON(): {
        emitterCap: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): EmitterCreated;
    static fromJSON(json: Record<string, any>): EmitterCreated;
    static fromSuiParsedData(content: SuiParsedData): EmitterCreated;
    static fetch(client: SuiClient, id: string): Promise<EmitterCreated>;
}
export declare function isEmitterDestroyed(type: string): boolean;
export interface EmitterDestroyedFields {
    emitterCap: ToField<ID>;
}
export type EmitterDestroyedReified = Reified<EmitterDestroyed, EmitterDestroyedFields>;
export declare class EmitterDestroyed implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterDestroyed";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterDestroyed";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterDestroyed";
    readonly $typeArgs: [];
    readonly emitterCap: ToField<ID>;
    private constructor();
    static reified(): EmitterDestroyedReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<EmitterDestroyed, EmitterDestroyedFields>;
    static phantom(): PhantomReified<ToTypeStr<EmitterDestroyed>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::emitter::EmitterDestroyed">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        emitter_cap: {
            bytes: string;
        };
    }, {
        emitter_cap: {
            bytes: string;
        };
    }>;
    static fromFields(fields: Record<string, any>): EmitterDestroyed;
    static fromFieldsWithTypes(item: FieldsWithTypes): EmitterDestroyed;
    static fromBcs(data: Uint8Array): EmitterDestroyed;
    toJSONField(): {
        emitterCap: string;
    };
    toJSON(): {
        emitterCap: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): EmitterDestroyed;
    static fromJSON(json: Record<string, any>): EmitterDestroyed;
    static fromSuiParsedData(content: SuiParsedData): EmitterDestroyed;
    static fetch(client: SuiClient, id: string): Promise<EmitterDestroyed>;
}
