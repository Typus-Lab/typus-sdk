import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {I64} from "../i64/structs";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== Price =============================== */

export function isPrice(type: string): boolean { type = compressSuiType(type); return type === "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price::Price"; }

export interface PriceFields { price: ToField<I64>; conf: ToField<"u64">; expo: ToField<I64>; timestamp: ToField<"u64"> }

export type PriceReified = Reified< Price, PriceFields >;

export class Price implements StructClass { static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price::Price"; static readonly $numTypeParams = 0;

 readonly $typeName = Price.$typeName;

 readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price::Price";

 readonly $typeArgs: [];

 readonly price: ToField<I64>; readonly conf: ToField<"u64">; readonly expo: ToField<I64>; readonly timestamp: ToField<"u64">

 private constructor(typeArgs: [], fields: PriceFields, ) { this.$fullTypeName = composeSuiType( Price.$typeName, ...typeArgs ) as "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price::Price"; this.$typeArgs = typeArgs;

 this.price = fields.price;; this.conf = fields.conf;; this.expo = fields.expo;; this.timestamp = fields.timestamp; }

 static reified( ): PriceReified { return { typeName: Price.$typeName, fullTypeName: composeSuiType( Price.$typeName, ...[] ) as "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price::Price", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Price.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Price.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Price.fromBcs( data, ), bcs: Price.bcs, fromJSONField: (field: any) => Price.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Price.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Price.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Price.fetch( client, id, ), new: ( fields: PriceFields, ) => { return new Price( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Price.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Price>> { return phantom(Price.reified( )); } static get p() { return Price.phantom() }

 static get bcs() { return bcs.struct("Price", {

 price: I64.bcs, conf: bcs.u64(), expo: I64.bcs, timestamp: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): Price { return Price.reified( ).new( { price: decodeFromFields(I64.reified(), fields.price), conf: decodeFromFields("u64", fields.conf), expo: decodeFromFields(I64.reified(), fields.expo), timestamp: decodeFromFields("u64", fields.timestamp) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Price { if (!isPrice(item.type)) { throw new Error("not a Price type");

 }

 return Price.reified( ).new( { price: decodeFromFieldsWithTypes(I64.reified(), item.fields.price), conf: decodeFromFieldsWithTypes("u64", item.fields.conf), expo: decodeFromFieldsWithTypes(I64.reified(), item.fields.expo), timestamp: decodeFromFieldsWithTypes("u64", item.fields.timestamp) } ) }

 static fromBcs( data: Uint8Array ): Price { return Price.fromFields( Price.bcs.parse(data) ) }

 toJSONField() { return {

 price: this.price.toJSONField(),conf: this.conf.toString(),expo: this.expo.toJSONField(),timestamp: this.timestamp.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Price { return Price.reified( ).new( { price: decodeFromJSONField(I64.reified(), field.price), conf: decodeFromJSONField("u64", field.conf), expo: decodeFromJSONField(I64.reified(), field.expo), timestamp: decodeFromJSONField("u64", field.timestamp) } ) }

 static fromJSON( json: Record<string, any> ): Price { if (json.$typeName !== Price.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Price.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Price { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPrice(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Price object`); } return Price.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Price> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Price object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPrice(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Price object`); }
 return Price.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
