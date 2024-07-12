import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { UID } from "../../0x2/object/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isDkgState(type: string): boolean;
export interface DkgStateFields {
    id: ToField<UID>;
}
export type DkgStateReified = Reified<DkgState, DkgStateFields>;
export declare class DkgState implements StructClass {
    static readonly $typeName = "0x277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698::validator::DkgState";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698::validator::DkgState";
    readonly $fullTypeName: "0x277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698::validator::DkgState";
    readonly $typeArgs: [];
    readonly id: ToField<UID>;
    private constructor();
    static reified(): DkgStateReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<DkgState, DkgStateFields>;
    static phantom(): PhantomReified<ToTypeStr<DkgState>>;
    static get p(): PhantomReified<"0x277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698::validator::DkgState">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): DkgState;
    static fromFieldsWithTypes(item: FieldsWithTypes): DkgState;
    static fromBcs(data: Uint8Array): DkgState;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): DkgState;
    static fromJSON(json: Record<string, any>): DkgState;
    static fromSuiParsedData(content: SuiParsedData): DkgState;
    static fetch(client: SuiClient, id: string): Promise<DkgState>;
}
