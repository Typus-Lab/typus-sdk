import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {UID} from "../../0x2/object/structs";
import {PriceFeed} from "../price-feed/structs";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== PriceInfo =============================== */

export function isPriceInfo(type: string): boolean { type = compressSuiType(type); return type === "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfo"; }

export interface PriceInfoFields { attestationTime: ToField<"u64">; arrivalTime: ToField<"u64">; priceFeed: ToField<PriceFeed> }

export type PriceInfoReified = Reified< PriceInfo, PriceInfoFields >;

export class PriceInfo implements StructClass { static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfo"; static readonly $numTypeParams = 0;

 readonly $typeName = PriceInfo.$typeName;

 readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfo";

 readonly $typeArgs: [];

 readonly attestationTime: ToField<"u64">; readonly arrivalTime: ToField<"u64">; readonly priceFeed: ToField<PriceFeed>

 private constructor(typeArgs: [], fields: PriceInfoFields, ) { this.$fullTypeName = composeSuiType( PriceInfo.$typeName, ...typeArgs ) as "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfo"; this.$typeArgs = typeArgs;

 this.attestationTime = fields.attestationTime;; this.arrivalTime = fields.arrivalTime;; this.priceFeed = fields.priceFeed; }

 static reified( ): PriceInfoReified { return { typeName: PriceInfo.$typeName, fullTypeName: composeSuiType( PriceInfo.$typeName, ...[] ) as "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfo", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PriceInfo.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PriceInfo.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PriceInfo.fromBcs( data, ), bcs: PriceInfo.bcs, fromJSONField: (field: any) => PriceInfo.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PriceInfo.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PriceInfo.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => PriceInfo.fetch( client, id, ), new: ( fields: PriceInfoFields, ) => { return new PriceInfo( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PriceInfo.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PriceInfo>> { return phantom(PriceInfo.reified( )); } static get p() { return PriceInfo.phantom() }

 static get bcs() { return bcs.struct("PriceInfo", {

 attestation_time: bcs.u64(), arrival_time: bcs.u64(), price_feed: PriceFeed.bcs

}) };

 static fromFields( fields: Record<string, any> ): PriceInfo { return PriceInfo.reified( ).new( { attestationTime: decodeFromFields("u64", fields.attestation_time), arrivalTime: decodeFromFields("u64", fields.arrival_time), priceFeed: decodeFromFields(PriceFeed.reified(), fields.price_feed) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PriceInfo { if (!isPriceInfo(item.type)) { throw new Error("not a PriceInfo type");

 }

 return PriceInfo.reified( ).new( { attestationTime: decodeFromFieldsWithTypes("u64", item.fields.attestation_time), arrivalTime: decodeFromFieldsWithTypes("u64", item.fields.arrival_time), priceFeed: decodeFromFieldsWithTypes(PriceFeed.reified(), item.fields.price_feed) } ) }

 static fromBcs( data: Uint8Array ): PriceInfo { return PriceInfo.fromFields( PriceInfo.bcs.parse(data) ) }

 toJSONField() { return {

 attestationTime: this.attestationTime.toString(),arrivalTime: this.arrivalTime.toString(),priceFeed: this.priceFeed.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PriceInfo { return PriceInfo.reified( ).new( { attestationTime: decodeFromJSONField("u64", field.attestationTime), arrivalTime: decodeFromJSONField("u64", field.arrivalTime), priceFeed: decodeFromJSONField(PriceFeed.reified(), field.priceFeed) } ) }

 static fromJSON( json: Record<string, any> ): PriceInfo { if (json.$typeName !== PriceInfo.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PriceInfo.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PriceInfo { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPriceInfo(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PriceInfo object`); } return PriceInfo.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<PriceInfo> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PriceInfo object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPriceInfo(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PriceInfo object`); }
 return PriceInfo.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== PriceInfoObject =============================== */

export function isPriceInfoObject(type: string): boolean { type = compressSuiType(type); return type === "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfoObject"; }

export interface PriceInfoObjectFields { id: ToField<UID>; priceInfo: ToField<PriceInfo> }

export type PriceInfoObjectReified = Reified< PriceInfoObject, PriceInfoObjectFields >;

export class PriceInfoObject implements StructClass { static readonly $typeName = "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfoObject"; static readonly $numTypeParams = 0;

 readonly $typeName = PriceInfoObject.$typeName;

 readonly $fullTypeName: "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfoObject";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly priceInfo: ToField<PriceInfo>

 private constructor(typeArgs: [], fields: PriceInfoObjectFields, ) { this.$fullTypeName = composeSuiType( PriceInfoObject.$typeName, ...typeArgs ) as "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfoObject"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.priceInfo = fields.priceInfo; }

 static reified( ): PriceInfoObjectReified { return { typeName: PriceInfoObject.$typeName, fullTypeName: composeSuiType( PriceInfoObject.$typeName, ...[] ) as "0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3::price_info::PriceInfoObject", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PriceInfoObject.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PriceInfoObject.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PriceInfoObject.fromBcs( data, ), bcs: PriceInfoObject.bcs, fromJSONField: (field: any) => PriceInfoObject.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PriceInfoObject.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PriceInfoObject.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => PriceInfoObject.fetch( client, id, ), new: ( fields: PriceInfoObjectFields, ) => { return new PriceInfoObject( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PriceInfoObject.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PriceInfoObject>> { return phantom(PriceInfoObject.reified( )); } static get p() { return PriceInfoObject.phantom() }

 static get bcs() { return bcs.struct("PriceInfoObject", {

 id: UID.bcs, price_info: PriceInfo.bcs

}) };

 static fromFields( fields: Record<string, any> ): PriceInfoObject { return PriceInfoObject.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), priceInfo: decodeFromFields(PriceInfo.reified(), fields.price_info) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PriceInfoObject { if (!isPriceInfoObject(item.type)) { throw new Error("not a PriceInfoObject type");

 }

 return PriceInfoObject.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), priceInfo: decodeFromFieldsWithTypes(PriceInfo.reified(), item.fields.price_info) } ) }

 static fromBcs( data: Uint8Array ): PriceInfoObject { return PriceInfoObject.fromFields( PriceInfoObject.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,priceInfo: this.priceInfo.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PriceInfoObject { return PriceInfoObject.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), priceInfo: decodeFromJSONField(PriceInfo.reified(), field.priceInfo) } ) }

 static fromJSON( json: Record<string, any> ): PriceInfoObject { if (json.$typeName !== PriceInfoObject.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PriceInfoObject.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PriceInfoObject { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPriceInfoObject(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PriceInfoObject object`); } return PriceInfoObject.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<PriceInfoObject> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PriceInfoObject object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPriceInfoObject(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PriceInfoObject object`); }
 return PriceInfoObject.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
