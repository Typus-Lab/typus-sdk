import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isRule(type: string): boolean;
export interface RuleFields {
    dummyField: ToField<"bool">;
}
export type RuleReified = Reified<Rule, RuleFields>;
export declare class Rule implements StructClass {
    static readonly $typeName = "0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585::kiosk_lock_rule::Rule";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585::kiosk_lock_rule::Rule";
    readonly $fullTypeName: "0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585::kiosk_lock_rule::Rule";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): RuleReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Rule, RuleFields>;
    static phantom(): PhantomReified<ToTypeStr<Rule>>;
    static get p(): PhantomReified<"0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585::kiosk_lock_rule::Rule">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): Rule;
    static fromFieldsWithTypes(item: FieldsWithTypes): Rule;
    static fromBcs(data: Uint8Array): Rule;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Rule;
    static fromJSON(json: Record<string, any>): Rule;
    static fromSuiParsedData(content: SuiParsedData): Rule;
    static fetch(client: SuiClient, id: string): Promise<Rule>;
}
export declare function isConfig(type: string): boolean;
export interface ConfigFields {
    dummyField: ToField<"bool">;
}
export type ConfigReified = Reified<Config, ConfigFields>;
export declare class Config implements StructClass {
    static readonly $typeName = "0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585::kiosk_lock_rule::Config";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585::kiosk_lock_rule::Config";
    readonly $fullTypeName: "0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585::kiosk_lock_rule::Config";
    readonly $typeArgs: [];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified(): ConfigReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Config, ConfigFields>;
    static phantom(): PhantomReified<ToTypeStr<Config>>;
    static get p(): PhantomReified<"0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585::kiosk_lock_rule::Config">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields(fields: Record<string, any>): Config;
    static fromFieldsWithTypes(item: FieldsWithTypes): Config;
    static fromBcs(data: Uint8Array): Config;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Config;
    static fromJSON(json: Record<string, any>): Config;
    static fromSuiParsedData(content: SuiParsedData): Config;
    static fetch(client: SuiClient, id: string): Promise<Config>;
}
