import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { Bytes20 } from "../bytes20/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isGuardian(type: string): boolean;
export interface GuardianFields {
    pubkey: ToField<Bytes20>;
}
export type GuardianReified = Reified<Guardian, GuardianFields>;
export declare class Guardian implements StructClass {
    static readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::guardian::Guardian";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::guardian::Guardian";
    readonly $fullTypeName: "0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::guardian::Guardian";
    readonly $typeArgs: [];
    readonly pubkey: ToField<Bytes20>;
    private constructor();
    static reified(): GuardianReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Guardian, GuardianFields>;
    static phantom(): PhantomReified<ToTypeStr<Guardian>>;
    static get p(): PhantomReified<"0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e::guardian::Guardian">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        pubkey: {
            data: number[];
        };
    }, {
        pubkey: {
            data: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Guardian;
    static fromFieldsWithTypes(item: FieldsWithTypes): Guardian;
    static fromBcs(data: Uint8Array): Guardian;
    toJSONField(): {
        pubkey: {
            data: number[];
        };
    };
    toJSON(): {
        pubkey: {
            data: number[];
        };
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Guardian;
    static fromJSON(json: Record<string, any>): Guardian;
    static fromSuiParsedData(content: SuiParsedData): Guardian;
    static fetch(client: SuiClient, id: string): Promise<Guardian>;
}
