import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isRule(type: string): boolean;
export interface RuleFields<Proof extends PhantomTypeArgument> {
    dummyField: ToField<"bool">;
}
export type RuleReified<Proof extends PhantomTypeArgument> = Reified<Rule<Proof>, RuleFields<Proof>>;
export declare class Rule<Proof extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585::witness_rule::Rule";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585::witness_rule::Rule";
    readonly $fullTypeName: `0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585::witness_rule::Rule<${PhantomToTypeStr<Proof>}>`;
    readonly $typeArgs: [PhantomToTypeStr<Proof>];
    readonly dummyField: ToField<"bool">;
    private constructor();
    static reified<Proof extends PhantomReified<PhantomTypeArgument>>(Proof: Proof): RuleReified<ToPhantomTypeArgument<Proof>>;
    static get r(): typeof Rule.reified;
    static phantom<Proof extends PhantomReified<PhantomTypeArgument>>(Proof: Proof): PhantomReified<ToTypeStr<Rule<ToPhantomTypeArgument<Proof>>>>;
    static get p(): typeof Rule.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        dummy_field: boolean;
    }, {
        dummy_field: boolean;
    }>;
    static fromFields<Proof extends PhantomReified<PhantomTypeArgument>>(typeArg: Proof, fields: Record<string, any>): Rule<ToPhantomTypeArgument<Proof>>;
    static fromFieldsWithTypes<Proof extends PhantomReified<PhantomTypeArgument>>(typeArg: Proof, item: FieldsWithTypes): Rule<ToPhantomTypeArgument<Proof>>;
    static fromBcs<Proof extends PhantomReified<PhantomTypeArgument>>(typeArg: Proof, data: Uint8Array): Rule<ToPhantomTypeArgument<Proof>>;
    toJSONField(): {
        dummyField: boolean;
    };
    toJSON(): {
        dummyField: boolean;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<Proof>];
    };
    static fromJSONField<Proof extends PhantomReified<PhantomTypeArgument>>(typeArg: Proof, field: any): Rule<ToPhantomTypeArgument<Proof>>;
    static fromJSON<Proof extends PhantomReified<PhantomTypeArgument>>(typeArg: Proof, json: Record<string, any>): Rule<ToPhantomTypeArgument<Proof>>;
    static fromSuiParsedData<Proof extends PhantomReified<PhantomTypeArgument>>(typeArg: Proof, content: SuiParsedData): Rule<ToPhantomTypeArgument<Proof>>;
    static fetch<Proof extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: Proof, id: string): Promise<Rule<ToPhantomTypeArgument<Proof>>>;
}
