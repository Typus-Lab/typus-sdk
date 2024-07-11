import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== Rule =============================== */

export function isRule(type: string): boolean { type = compressSuiType(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::royalty_rule::Rule"; }

export interface RuleFields { dummyField: ToField<"bool"> }

export type RuleReified = Reified< Rule, RuleFields >;

export class Rule implements StructClass { static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::royalty_rule::Rule"; static readonly $numTypeParams = 0;

 readonly $typeName = Rule.$typeName;

 readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::royalty_rule::Rule";

 readonly $typeArgs: [];

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [], fields: RuleFields, ) { this.$fullTypeName = composeSuiType( Rule.$typeName, ...typeArgs ) as "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::royalty_rule::Rule"; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified( ): RuleReified { return { typeName: Rule.$typeName, fullTypeName: composeSuiType( Rule.$typeName, ...[] ) as "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::royalty_rule::Rule", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Rule.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Rule.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Rule.fromBcs( data, ), bcs: Rule.bcs, fromJSONField: (field: any) => Rule.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Rule.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Rule.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Rule.fetch( client, id, ), new: ( fields: RuleFields, ) => { return new Rule( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Rule.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Rule>> { return phantom(Rule.reified( )); } static get p() { return Rule.phantom() }

 static get bcs() { return bcs.struct("Rule", {

 dummy_field: bcs.bool()

}) };

 static fromFields( fields: Record<string, any> ): Rule { return Rule.reified( ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Rule { if (!isRule(item.type)) { throw new Error("not a Rule type");

 }

 return Rule.reified( ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs( data: Uint8Array ): Rule { return Rule.fromFields( Rule.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Rule { return Rule.reified( ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON( json: Record<string, any> ): Rule { if (json.$typeName !== Rule.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Rule.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Rule { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRule(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Rule object`); } return Rule.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Rule> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Rule object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRule(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Rule object`); }
 return Rule.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== Config =============================== */

export function isConfig(type: string): boolean { type = compressSuiType(type); return type === "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::royalty_rule::Config"; }

export interface ConfigFields { amountBp: ToField<"u16">; minAmount: ToField<"u64"> }

export type ConfigReified = Reified< Config, ConfigFields >;

export class Config implements StructClass { static readonly $typeName = "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::royalty_rule::Config"; static readonly $numTypeParams = 0;

 readonly $typeName = Config.$typeName;

 readonly $fullTypeName: "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::royalty_rule::Config";

 readonly $typeArgs: [];

 readonly amountBp: ToField<"u16">; readonly minAmount: ToField<"u64">

 private constructor(typeArgs: [], fields: ConfigFields, ) { this.$fullTypeName = composeSuiType( Config.$typeName, ...typeArgs ) as "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::royalty_rule::Config"; this.$typeArgs = typeArgs;

 this.amountBp = fields.amountBp;; this.minAmount = fields.minAmount; }

 static reified( ): ConfigReified { return { typeName: Config.$typeName, fullTypeName: composeSuiType( Config.$typeName, ...[] ) as "0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828::royalty_rule::Config", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Config.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Config.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Config.fromBcs( data, ), bcs: Config.bcs, fromJSONField: (field: any) => Config.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Config.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Config.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Config.fetch( client, id, ), new: ( fields: ConfigFields, ) => { return new Config( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Config.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Config>> { return phantom(Config.reified( )); } static get p() { return Config.phantom() }

 static get bcs() { return bcs.struct("Config", {

 amount_bp: bcs.u16(), min_amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Config { return Config.reified( ).new( { amountBp: decodeFromFields("u16", fields.amount_bp), minAmount: decodeFromFields("u64", fields.min_amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Config { if (!isConfig(item.type)) { throw new Error("not a Config type");

 }

 return Config.reified( ).new( { amountBp: decodeFromFieldsWithTypes("u16", item.fields.amount_bp), minAmount: decodeFromFieldsWithTypes("u64", item.fields.min_amount) } ) }

 static fromBcs( data: Uint8Array ): Config { return Config.fromFields( Config.bcs.parse(data) ) }

 toJSONField() { return {

 amountBp: this.amountBp,minAmount: this.minAmount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Config { return Config.reified( ).new( { amountBp: decodeFromJSONField("u16", field.amountBp), minAmount: decodeFromJSONField("u64", field.minAmount) } ) }

 static fromJSON( json: Record<string, any> ): Config { if (json.$typeName !== Config.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Config.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Config { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isConfig(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Config object`); } return Config.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Config> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Config object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isConfig(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Config object`); }
 return Config.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
