import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isGovernanceAction(type: string): boolean;
export interface GovernanceActionFields {
    value: ToField<"u8">;
}
export type GovernanceActionReified = Reified<GovernanceAction, GovernanceActionFields>;
export declare class GovernanceAction implements StructClass {
    static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::governance_action::GovernanceAction";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::governance_action::GovernanceAction";
    readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::governance_action::GovernanceAction";
    readonly $typeArgs: [];
    readonly value: ToField<"u8">;
    private constructor();
    static reified(): GovernanceActionReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<GovernanceAction, GovernanceActionFields>;
    static phantom(): PhantomReified<ToTypeStr<GovernanceAction>>;
    static get p(): PhantomReified<"0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::governance_action::GovernanceAction">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        value: number;
    }, {
        value: number;
    }>;
    static fromFields(fields: Record<string, any>): GovernanceAction;
    static fromFieldsWithTypes(item: FieldsWithTypes): GovernanceAction;
    static fromBcs(data: Uint8Array): GovernanceAction;
    toJSONField(): {
        value: number;
    };
    toJSON(): {
        value: number;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): GovernanceAction;
    static fromJSON(json: Record<string, any>): GovernanceAction;
    static fromSuiParsedData(content: SuiParsedData): GovernanceAction;
    static fetch(client: SuiClient, id: string): Promise<GovernanceAction>;
}
