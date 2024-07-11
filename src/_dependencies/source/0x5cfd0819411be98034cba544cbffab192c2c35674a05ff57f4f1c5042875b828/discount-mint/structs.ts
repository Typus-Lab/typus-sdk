import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, Vector, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {Balance} from "../../0x2/balance/structs";
import {Coin} from "../../0x2/coin/structs";
import {ID, UID} from "../../0x2/object/structs";
import {SUI} from "../../0x2/sui/structs";
import {TableVec} from "../../0x2/table-vec/structs";
import {Tails} from "../typus-nft/structs";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== ManagerCap =============================== */

export function isManagerCap(type: string): boolean { type = compressSuiType(type); return type === "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::ManagerCap"; }

export interface ManagerCapFields { id: ToField<UID> }

export type ManagerCapReified = Reified< ManagerCap, ManagerCapFields >;

export class ManagerCap implements StructClass { static readonly $typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::ManagerCap"; static readonly $numTypeParams = 0;

 readonly $typeName = ManagerCap.$typeName;

 readonly $fullTypeName: "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::ManagerCap";

 readonly $typeArgs: [];

 readonly id: ToField<UID>

 private constructor(typeArgs: [], fields: ManagerCapFields, ) { this.$fullTypeName = composeSuiType( ManagerCap.$typeName, ...typeArgs ) as "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::ManagerCap"; this.$typeArgs = typeArgs;

 this.id = fields.id; }

 static reified( ): ManagerCapReified { return { typeName: ManagerCap.$typeName, fullTypeName: composeSuiType( ManagerCap.$typeName, ...[] ) as "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::ManagerCap", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ManagerCap.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ManagerCap.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ManagerCap.fromBcs( data, ), bcs: ManagerCap.bcs, fromJSONField: (field: any) => ManagerCap.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ManagerCap.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ManagerCap.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ManagerCap.fetch( client, id, ), new: ( fields: ManagerCapFields, ) => { return new ManagerCap( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ManagerCap.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ManagerCap>> { return phantom(ManagerCap.reified( )); } static get p() { return ManagerCap.phantom() }

 static get bcs() { return bcs.struct("ManagerCap", {

 id: UID.bcs

}) };

 static fromFields( fields: Record<string, any> ): ManagerCap { return ManagerCap.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ManagerCap { if (!isManagerCap(item.type)) { throw new Error("not a ManagerCap type");

 }

 return ManagerCap.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id) } ) }

 static fromBcs( data: Uint8Array ): ManagerCap { return ManagerCap.fromFields( ManagerCap.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ManagerCap { return ManagerCap.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id) } ) }

 static fromJSON( json: Record<string, any> ): ManagerCap { if (json.$typeName !== ManagerCap.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ManagerCap.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ManagerCap { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isManagerCap(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ManagerCap object`); } return ManagerCap.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ManagerCap> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ManagerCap object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isManagerCap(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ManagerCap object`); }
 return ManagerCap.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== Pool =============================== */

export function isPool(type: string): boolean { type = compressSuiType(type); return type === "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::Pool"; }

export interface PoolFields { id: ToField<UID>; num: ToField<"u64">; price: ToField<"u64">; startMs: ToField<"u64">; endMs: ToField<"u64">; authority: ToField<"address">; publicKey: ToField<Vector<"u8">>; discountPcts: ToField<Vector<"u64">>; isLive: ToField<"bool">; balance: ToField<Balance<ToPhantom<SUI>>>; tails: ToField<TableVec<ToPhantom<Tails>>>; requests: ToField<Vector<MintRequest>> }

export type PoolReified = Reified< Pool, PoolFields >;

export class Pool implements StructClass { static readonly $typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::Pool"; static readonly $numTypeParams = 0;

 readonly $typeName = Pool.$typeName;

 readonly $fullTypeName: "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::Pool";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly num: ToField<"u64">; readonly price: ToField<"u64">; readonly startMs: ToField<"u64">; readonly endMs: ToField<"u64">; readonly authority: ToField<"address">; readonly publicKey: ToField<Vector<"u8">>; readonly discountPcts: ToField<Vector<"u64">>; readonly isLive: ToField<"bool">; readonly balance: ToField<Balance<ToPhantom<SUI>>>; readonly tails: ToField<TableVec<ToPhantom<Tails>>>; readonly requests: ToField<Vector<MintRequest>>

 private constructor(typeArgs: [], fields: PoolFields, ) { this.$fullTypeName = composeSuiType( Pool.$typeName, ...typeArgs ) as "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::Pool"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.num = fields.num;; this.price = fields.price;; this.startMs = fields.startMs;; this.endMs = fields.endMs;; this.authority = fields.authority;; this.publicKey = fields.publicKey;; this.discountPcts = fields.discountPcts;; this.isLive = fields.isLive;; this.balance = fields.balance;; this.tails = fields.tails;; this.requests = fields.requests; }

 static reified( ): PoolReified { return { typeName: Pool.$typeName, fullTypeName: composeSuiType( Pool.$typeName, ...[] ) as "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::Pool", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Pool.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Pool.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Pool.fromBcs( data, ), bcs: Pool.bcs, fromJSONField: (field: any) => Pool.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Pool.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Pool.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Pool.fetch( client, id, ), new: ( fields: PoolFields, ) => { return new Pool( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Pool.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Pool>> { return phantom(Pool.reified( )); } static get p() { return Pool.phantom() }

 static get bcs() { return bcs.struct("Pool", {

 id: UID.bcs, num: bcs.u64(), price: bcs.u64(), start_ms: bcs.u64(), end_ms: bcs.u64(), authority: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), public_key: bcs.vector(bcs.u8()), discount_pcts: bcs.vector(bcs.u64()), is_live: bcs.bool(), balance: Balance.bcs, tails: TableVec.bcs, requests: bcs.vector(MintRequest.bcs)

}) };

 static fromFields( fields: Record<string, any> ): Pool { return Pool.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), num: decodeFromFields("u64", fields.num), price: decodeFromFields("u64", fields.price), startMs: decodeFromFields("u64", fields.start_ms), endMs: decodeFromFields("u64", fields.end_ms), authority: decodeFromFields("address", fields.authority), publicKey: decodeFromFields(reified.vector("u8"), fields.public_key), discountPcts: decodeFromFields(reified.vector("u64"), fields.discount_pcts), isLive: decodeFromFields("bool", fields.is_live), balance: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.balance), tails: decodeFromFields(TableVec.reified(reified.phantom(Tails.reified())), fields.tails), requests: decodeFromFields(reified.vector(MintRequest.reified()), fields.requests) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Pool { if (!isPool(item.type)) { throw new Error("not a Pool type");

 }

 return Pool.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), num: decodeFromFieldsWithTypes("u64", item.fields.num), price: decodeFromFieldsWithTypes("u64", item.fields.price), startMs: decodeFromFieldsWithTypes("u64", item.fields.start_ms), endMs: decodeFromFieldsWithTypes("u64", item.fields.end_ms), authority: decodeFromFieldsWithTypes("address", item.fields.authority), publicKey: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.public_key), discountPcts: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.discount_pcts), isLive: decodeFromFieldsWithTypes("bool", item.fields.is_live), balance: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.balance), tails: decodeFromFieldsWithTypes(TableVec.reified(reified.phantom(Tails.reified())), item.fields.tails), requests: decodeFromFieldsWithTypes(reified.vector(MintRequest.reified()), item.fields.requests) } ) }

 static fromBcs( data: Uint8Array ): Pool { return Pool.fromFields( Pool.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,num: this.num.toString(),price: this.price.toString(),startMs: this.startMs.toString(),endMs: this.endMs.toString(),authority: this.authority,publicKey: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.publicKey),discountPcts: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.discountPcts),isLive: this.isLive,balance: this.balance.toJSONField(),tails: this.tails.toJSONField(),requests: fieldToJSON<Vector<MintRequest>>(`vector<0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::MintRequest>`, this.requests),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Pool { return Pool.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), num: decodeFromJSONField("u64", field.num), price: decodeFromJSONField("u64", field.price), startMs: decodeFromJSONField("u64", field.startMs), endMs: decodeFromJSONField("u64", field.endMs), authority: decodeFromJSONField("address", field.authority), publicKey: decodeFromJSONField(reified.vector("u8"), field.publicKey), discountPcts: decodeFromJSONField(reified.vector("u64"), field.discountPcts), isLive: decodeFromJSONField("bool", field.isLive), balance: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.balance), tails: decodeFromJSONField(TableVec.reified(reified.phantom(Tails.reified())), field.tails), requests: decodeFromJSONField(reified.vector(MintRequest.reified()), field.requests) } ) }

 static fromJSON( json: Record<string, any> ): Pool { if (json.$typeName !== Pool.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Pool.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Pool { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPool(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Pool object`); } return Pool.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Pool> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Pool object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPool(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Pool object`); }
 return Pool.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== DiscountEvent =============================== */

export function isDiscountEvent(type: string): boolean { type = compressSuiType(type); return type === "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::DiscountEvent"; }

export interface DiscountEventFields { price: ToField<"u64">; discountPct: ToField<"u64">; discountPrice: ToField<"u64"> }

export type DiscountEventReified = Reified< DiscountEvent, DiscountEventFields >;

export class DiscountEvent implements StructClass { static readonly $typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::DiscountEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = DiscountEvent.$typeName;

 readonly $fullTypeName: "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::DiscountEvent";

 readonly $typeArgs: [];

 readonly price: ToField<"u64">; readonly discountPct: ToField<"u64">; readonly discountPrice: ToField<"u64">

 private constructor(typeArgs: [], fields: DiscountEventFields, ) { this.$fullTypeName = composeSuiType( DiscountEvent.$typeName, ...typeArgs ) as "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::DiscountEvent"; this.$typeArgs = typeArgs;

 this.price = fields.price;; this.discountPct = fields.discountPct;; this.discountPrice = fields.discountPrice; }

 static reified( ): DiscountEventReified { return { typeName: DiscountEvent.$typeName, fullTypeName: composeSuiType( DiscountEvent.$typeName, ...[] ) as "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::DiscountEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DiscountEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DiscountEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DiscountEvent.fromBcs( data, ), bcs: DiscountEvent.bcs, fromJSONField: (field: any) => DiscountEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DiscountEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DiscountEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => DiscountEvent.fetch( client, id, ), new: ( fields: DiscountEventFields, ) => { return new DiscountEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DiscountEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DiscountEvent>> { return phantom(DiscountEvent.reified( )); } static get p() { return DiscountEvent.phantom() }

 static get bcs() { return bcs.struct("DiscountEvent", {

 price: bcs.u64(), discount_pct: bcs.u64(), discount_price: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DiscountEvent { return DiscountEvent.reified( ).new( { price: decodeFromFields("u64", fields.price), discountPct: decodeFromFields("u64", fields.discount_pct), discountPrice: decodeFromFields("u64", fields.discount_price) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DiscountEvent { if (!isDiscountEvent(item.type)) { throw new Error("not a DiscountEvent type");

 }

 return DiscountEvent.reified( ).new( { price: decodeFromFieldsWithTypes("u64", item.fields.price), discountPct: decodeFromFieldsWithTypes("u64", item.fields.discount_pct), discountPrice: decodeFromFieldsWithTypes("u64", item.fields.discount_price) } ) }

 static fromBcs( data: Uint8Array ): DiscountEvent { return DiscountEvent.fromFields( DiscountEvent.bcs.parse(data) ) }

 toJSONField() { return {

 price: this.price.toString(),discountPct: this.discountPct.toString(),discountPrice: this.discountPrice.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DiscountEvent { return DiscountEvent.reified( ).new( { price: decodeFromJSONField("u64", field.price), discountPct: decodeFromJSONField("u64", field.discountPct), discountPrice: decodeFromJSONField("u64", field.discountPrice) } ) }

 static fromJSON( json: Record<string, any> ): DiscountEvent { if (json.$typeName !== DiscountEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DiscountEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DiscountEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDiscountEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DiscountEvent object`); } return DiscountEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<DiscountEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DiscountEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDiscountEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DiscountEvent object`); }
 return DiscountEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== DiscountEventV2 =============================== */

export function isDiscountEventV2(type: string): boolean { type = compressSuiType(type); return type === "0x8a08d583d4cf41a80de2cdb752a4ec22811fc388907c0a07d039fa34d2489257::discount_mint::DiscountEventV2"; }

export interface DiscountEventV2Fields { pool: ToField<ID>; price: ToField<"u64">; discountPct: ToField<"u64">; discountPrice: ToField<"u64">; user: ToField<"address">; vrfInput: ToField<Vector<"u8">> }

export type DiscountEventV2Reified = Reified< DiscountEventV2, DiscountEventV2Fields >;

export class DiscountEventV2 implements StructClass { static readonly $typeName = "0x8a08d583d4cf41a80de2cdb752a4ec22811fc388907c0a07d039fa34d2489257::discount_mint::DiscountEventV2"; static readonly $numTypeParams = 0;

 readonly $typeName = DiscountEventV2.$typeName;

 readonly $fullTypeName: "0x8a08d583d4cf41a80de2cdb752a4ec22811fc388907c0a07d039fa34d2489257::discount_mint::DiscountEventV2";

 readonly $typeArgs: [];

 readonly pool: ToField<ID>; readonly price: ToField<"u64">; readonly discountPct: ToField<"u64">; readonly discountPrice: ToField<"u64">; readonly user: ToField<"address">; readonly vrfInput: ToField<Vector<"u8">>

 private constructor(typeArgs: [], fields: DiscountEventV2Fields, ) { this.$fullTypeName = composeSuiType( DiscountEventV2.$typeName, ...typeArgs ) as "0x8a08d583d4cf41a80de2cdb752a4ec22811fc388907c0a07d039fa34d2489257::discount_mint::DiscountEventV2"; this.$typeArgs = typeArgs;

 this.pool = fields.pool;; this.price = fields.price;; this.discountPct = fields.discountPct;; this.discountPrice = fields.discountPrice;; this.user = fields.user;; this.vrfInput = fields.vrfInput; }

 static reified( ): DiscountEventV2Reified { return { typeName: DiscountEventV2.$typeName, fullTypeName: composeSuiType( DiscountEventV2.$typeName, ...[] ) as "0x8a08d583d4cf41a80de2cdb752a4ec22811fc388907c0a07d039fa34d2489257::discount_mint::DiscountEventV2", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DiscountEventV2.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DiscountEventV2.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DiscountEventV2.fromBcs( data, ), bcs: DiscountEventV2.bcs, fromJSONField: (field: any) => DiscountEventV2.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DiscountEventV2.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DiscountEventV2.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => DiscountEventV2.fetch( client, id, ), new: ( fields: DiscountEventV2Fields, ) => { return new DiscountEventV2( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DiscountEventV2.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DiscountEventV2>> { return phantom(DiscountEventV2.reified( )); } static get p() { return DiscountEventV2.phantom() }

 static get bcs() { return bcs.struct("DiscountEventV2", {

 pool: ID.bcs, price: bcs.u64(), discount_pct: bcs.u64(), discount_price: bcs.u64(), user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), vrf_input: bcs.vector(bcs.u8())

}) };

 static fromFields( fields: Record<string, any> ): DiscountEventV2 { return DiscountEventV2.reified( ).new( { pool: decodeFromFields(ID.reified(), fields.pool), price: decodeFromFields("u64", fields.price), discountPct: decodeFromFields("u64", fields.discount_pct), discountPrice: decodeFromFields("u64", fields.discount_price), user: decodeFromFields("address", fields.user), vrfInput: decodeFromFields(reified.vector("u8"), fields.vrf_input) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DiscountEventV2 { if (!isDiscountEventV2(item.type)) { throw new Error("not a DiscountEventV2 type");

 }

 return DiscountEventV2.reified( ).new( { pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), price: decodeFromFieldsWithTypes("u64", item.fields.price), discountPct: decodeFromFieldsWithTypes("u64", item.fields.discount_pct), discountPrice: decodeFromFieldsWithTypes("u64", item.fields.discount_price), user: decodeFromFieldsWithTypes("address", item.fields.user), vrfInput: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.vrf_input) } ) }

 static fromBcs( data: Uint8Array ): DiscountEventV2 { return DiscountEventV2.fromFields( DiscountEventV2.bcs.parse(data) ) }

 toJSONField() { return {

 pool: this.pool,price: this.price.toString(),discountPct: this.discountPct.toString(),discountPrice: this.discountPrice.toString(),user: this.user,vrfInput: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.vrfInput),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DiscountEventV2 { return DiscountEventV2.reified( ).new( { pool: decodeFromJSONField(ID.reified(), field.pool), price: decodeFromJSONField("u64", field.price), discountPct: decodeFromJSONField("u64", field.discountPct), discountPrice: decodeFromJSONField("u64", field.discountPrice), user: decodeFromJSONField("address", field.user), vrfInput: decodeFromJSONField(reified.vector("u8"), field.vrfInput) } ) }

 static fromJSON( json: Record<string, any> ): DiscountEventV2 { if (json.$typeName !== DiscountEventV2.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DiscountEventV2.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DiscountEventV2 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDiscountEventV2(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DiscountEventV2 object`); } return DiscountEventV2.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<DiscountEventV2> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DiscountEventV2 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDiscountEventV2(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DiscountEventV2 object`); }
 return DiscountEventV2.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== DiscountEventV3 =============================== */

export function isDiscountEventV3(type: string): boolean { type = compressSuiType(type); return type === "0xcfba36e150e43bc3362f9987c94d20131d463de8b554d64d1155f41417f36870::discount_mint::DiscountEventV3"; }

export interface DiscountEventV3Fields { pool: ToField<ID>; price: ToField<"u64">; discountPct: ToField<"u64">; discountPrice: ToField<"u64">; user: ToField<"address">; vrfInput: ToField<Vector<"u8">>; level: ToField<"u64"> }

export type DiscountEventV3Reified = Reified< DiscountEventV3, DiscountEventV3Fields >;

export class DiscountEventV3 implements StructClass { static readonly $typeName = "0xcfba36e150e43bc3362f9987c94d20131d463de8b554d64d1155f41417f36870::discount_mint::DiscountEventV3"; static readonly $numTypeParams = 0;

 readonly $typeName = DiscountEventV3.$typeName;

 readonly $fullTypeName: "0xcfba36e150e43bc3362f9987c94d20131d463de8b554d64d1155f41417f36870::discount_mint::DiscountEventV3";

 readonly $typeArgs: [];

 readonly pool: ToField<ID>; readonly price: ToField<"u64">; readonly discountPct: ToField<"u64">; readonly discountPrice: ToField<"u64">; readonly user: ToField<"address">; readonly vrfInput: ToField<Vector<"u8">>; readonly level: ToField<"u64">

 private constructor(typeArgs: [], fields: DiscountEventV3Fields, ) { this.$fullTypeName = composeSuiType( DiscountEventV3.$typeName, ...typeArgs ) as "0xcfba36e150e43bc3362f9987c94d20131d463de8b554d64d1155f41417f36870::discount_mint::DiscountEventV3"; this.$typeArgs = typeArgs;

 this.pool = fields.pool;; this.price = fields.price;; this.discountPct = fields.discountPct;; this.discountPrice = fields.discountPrice;; this.user = fields.user;; this.vrfInput = fields.vrfInput;; this.level = fields.level; }

 static reified( ): DiscountEventV3Reified { return { typeName: DiscountEventV3.$typeName, fullTypeName: composeSuiType( DiscountEventV3.$typeName, ...[] ) as "0xcfba36e150e43bc3362f9987c94d20131d463de8b554d64d1155f41417f36870::discount_mint::DiscountEventV3", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DiscountEventV3.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DiscountEventV3.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DiscountEventV3.fromBcs( data, ), bcs: DiscountEventV3.bcs, fromJSONField: (field: any) => DiscountEventV3.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DiscountEventV3.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DiscountEventV3.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => DiscountEventV3.fetch( client, id, ), new: ( fields: DiscountEventV3Fields, ) => { return new DiscountEventV3( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DiscountEventV3.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DiscountEventV3>> { return phantom(DiscountEventV3.reified( )); } static get p() { return DiscountEventV3.phantom() }

 static get bcs() { return bcs.struct("DiscountEventV3", {

 pool: ID.bcs, price: bcs.u64(), discount_pct: bcs.u64(), discount_price: bcs.u64(), user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), vrf_input: bcs.vector(bcs.u8()), level: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DiscountEventV3 { return DiscountEventV3.reified( ).new( { pool: decodeFromFields(ID.reified(), fields.pool), price: decodeFromFields("u64", fields.price), discountPct: decodeFromFields("u64", fields.discount_pct), discountPrice: decodeFromFields("u64", fields.discount_price), user: decodeFromFields("address", fields.user), vrfInput: decodeFromFields(reified.vector("u8"), fields.vrf_input), level: decodeFromFields("u64", fields.level) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DiscountEventV3 { if (!isDiscountEventV3(item.type)) { throw new Error("not a DiscountEventV3 type");

 }

 return DiscountEventV3.reified( ).new( { pool: decodeFromFieldsWithTypes(ID.reified(), item.fields.pool), price: decodeFromFieldsWithTypes("u64", item.fields.price), discountPct: decodeFromFieldsWithTypes("u64", item.fields.discount_pct), discountPrice: decodeFromFieldsWithTypes("u64", item.fields.discount_price), user: decodeFromFieldsWithTypes("address", item.fields.user), vrfInput: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.vrf_input), level: decodeFromFieldsWithTypes("u64", item.fields.level) } ) }

 static fromBcs( data: Uint8Array ): DiscountEventV3 { return DiscountEventV3.fromFields( DiscountEventV3.bcs.parse(data) ) }

 toJSONField() { return {

 pool: this.pool,price: this.price.toString(),discountPct: this.discountPct.toString(),discountPrice: this.discountPrice.toString(),user: this.user,vrfInput: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.vrfInput),level: this.level.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DiscountEventV3 { return DiscountEventV3.reified( ).new( { pool: decodeFromJSONField(ID.reified(), field.pool), price: decodeFromJSONField("u64", field.price), discountPct: decodeFromJSONField("u64", field.discountPct), discountPrice: decodeFromJSONField("u64", field.discountPrice), user: decodeFromJSONField("address", field.user), vrfInput: decodeFromJSONField(reified.vector("u8"), field.vrfInput), level: decodeFromJSONField("u64", field.level) } ) }

 static fromJSON( json: Record<string, any> ): DiscountEventV3 { if (json.$typeName !== DiscountEventV3.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DiscountEventV3.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DiscountEventV3 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDiscountEventV3(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DiscountEventV3 object`); } return DiscountEventV3.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<DiscountEventV3> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DiscountEventV3 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDiscountEventV3(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DiscountEventV3 object`); }
 return DiscountEventV3.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== MintRequest =============================== */

export function isMintRequest(type: string): boolean { type = compressSuiType(type); return type === "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::MintRequest"; }

export interface MintRequestFields { user: ToField<"address">; coin: ToField<Coin<ToPhantom<SUI>>>; vrfInput: ToField<Vector<"u8">> }

export type MintRequestReified = Reified< MintRequest, MintRequestFields >;

export class MintRequest implements StructClass { static readonly $typeName = "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::MintRequest"; static readonly $numTypeParams = 0;

 readonly $typeName = MintRequest.$typeName;

 readonly $fullTypeName: "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::MintRequest";

 readonly $typeArgs: [];

 readonly user: ToField<"address">; readonly coin: ToField<Coin<ToPhantom<SUI>>>; readonly vrfInput: ToField<Vector<"u8">>

 private constructor(typeArgs: [], fields: MintRequestFields, ) { this.$fullTypeName = composeSuiType( MintRequest.$typeName, ...typeArgs ) as "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::MintRequest"; this.$typeArgs = typeArgs;

 this.user = fields.user;; this.coin = fields.coin;; this.vrfInput = fields.vrfInput; }

 static reified( ): MintRequestReified { return { typeName: MintRequest.$typeName, fullTypeName: composeSuiType( MintRequest.$typeName, ...[] ) as "0xd0d533322a2f8db5429f7942da900e513b4f4865b4dac584ab978be090f06d1c::discount_mint::MintRequest", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MintRequest.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MintRequest.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MintRequest.fromBcs( data, ), bcs: MintRequest.bcs, fromJSONField: (field: any) => MintRequest.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MintRequest.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MintRequest.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => MintRequest.fetch( client, id, ), new: ( fields: MintRequestFields, ) => { return new MintRequest( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MintRequest.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MintRequest>> { return phantom(MintRequest.reified( )); } static get p() { return MintRequest.phantom() }

 static get bcs() { return bcs.struct("MintRequest", {

 user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), coin: Coin.bcs, vrf_input: bcs.vector(bcs.u8())

}) };

 static fromFields( fields: Record<string, any> ): MintRequest { return MintRequest.reified( ).new( { user: decodeFromFields("address", fields.user), coin: decodeFromFields(Coin.reified(reified.phantom(SUI.reified())), fields.coin), vrfInput: decodeFromFields(reified.vector("u8"), fields.vrf_input) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MintRequest { if (!isMintRequest(item.type)) { throw new Error("not a MintRequest type");

 }

 return MintRequest.reified( ).new( { user: decodeFromFieldsWithTypes("address", item.fields.user), coin: decodeFromFieldsWithTypes(Coin.reified(reified.phantom(SUI.reified())), item.fields.coin), vrfInput: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.vrf_input) } ) }

 static fromBcs( data: Uint8Array ): MintRequest { return MintRequest.fromFields( MintRequest.bcs.parse(data) ) }

 toJSONField() { return {

 user: this.user,coin: this.coin.toJSONField(),vrfInput: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.vrfInput),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MintRequest { return MintRequest.reified( ).new( { user: decodeFromJSONField("address", field.user), coin: decodeFromJSONField(Coin.reified(reified.phantom(SUI.reified())), field.coin), vrfInput: decodeFromJSONField(reified.vector("u8"), field.vrfInput) } ) }

 static fromJSON( json: Record<string, any> ): MintRequest { if (json.$typeName !== MintRequest.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MintRequest.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MintRequest { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMintRequest(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MintRequest object`); } return MintRequest.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<MintRequest> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MintRequest object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMintRequest(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MintRequest object`); }
 return MintRequest.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== MintRequestEvent =============================== */

export function isMintRequestEvent(type: string): boolean { type = compressSuiType(type); return type === "0x19f482f191bfc19afeb797391546571cd409ad0105a7b8181877387cbe1c8c07::discount_mint::MintRequestEvent"; }

export interface MintRequestEventFields { user: ToField<"address">; vrfInput: ToField<Vector<"u8">>; remaining: ToField<"u64">; seed: ToField<"u64"> }

export type MintRequestEventReified = Reified< MintRequestEvent, MintRequestEventFields >;

export class MintRequestEvent implements StructClass { static readonly $typeName = "0x19f482f191bfc19afeb797391546571cd409ad0105a7b8181877387cbe1c8c07::discount_mint::MintRequestEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = MintRequestEvent.$typeName;

 readonly $fullTypeName: "0x19f482f191bfc19afeb797391546571cd409ad0105a7b8181877387cbe1c8c07::discount_mint::MintRequestEvent";

 readonly $typeArgs: [];

 readonly user: ToField<"address">; readonly vrfInput: ToField<Vector<"u8">>; readonly remaining: ToField<"u64">; readonly seed: ToField<"u64">

 private constructor(typeArgs: [], fields: MintRequestEventFields, ) { this.$fullTypeName = composeSuiType( MintRequestEvent.$typeName, ...typeArgs ) as "0x19f482f191bfc19afeb797391546571cd409ad0105a7b8181877387cbe1c8c07::discount_mint::MintRequestEvent"; this.$typeArgs = typeArgs;

 this.user = fields.user;; this.vrfInput = fields.vrfInput;; this.remaining = fields.remaining;; this.seed = fields.seed; }

 static reified( ): MintRequestEventReified { return { typeName: MintRequestEvent.$typeName, fullTypeName: composeSuiType( MintRequestEvent.$typeName, ...[] ) as "0x19f482f191bfc19afeb797391546571cd409ad0105a7b8181877387cbe1c8c07::discount_mint::MintRequestEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => MintRequestEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => MintRequestEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => MintRequestEvent.fromBcs( data, ), bcs: MintRequestEvent.bcs, fromJSONField: (field: any) => MintRequestEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => MintRequestEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => MintRequestEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => MintRequestEvent.fetch( client, id, ), new: ( fields: MintRequestEventFields, ) => { return new MintRequestEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return MintRequestEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<MintRequestEvent>> { return phantom(MintRequestEvent.reified( )); } static get p() { return MintRequestEvent.phantom() }

 static get bcs() { return bcs.struct("MintRequestEvent", {

 user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), vrf_input: bcs.vector(bcs.u8()), remaining: bcs.u64(), seed: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): MintRequestEvent { return MintRequestEvent.reified( ).new( { user: decodeFromFields("address", fields.user), vrfInput: decodeFromFields(reified.vector("u8"), fields.vrf_input), remaining: decodeFromFields("u64", fields.remaining), seed: decodeFromFields("u64", fields.seed) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): MintRequestEvent { if (!isMintRequestEvent(item.type)) { throw new Error("not a MintRequestEvent type");

 }

 return MintRequestEvent.reified( ).new( { user: decodeFromFieldsWithTypes("address", item.fields.user), vrfInput: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.vrf_input), remaining: decodeFromFieldsWithTypes("u64", item.fields.remaining), seed: decodeFromFieldsWithTypes("u64", item.fields.seed) } ) }

 static fromBcs( data: Uint8Array ): MintRequestEvent { return MintRequestEvent.fromFields( MintRequestEvent.bcs.parse(data) ) }

 toJSONField() { return {

 user: this.user,vrfInput: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.vrfInput),remaining: this.remaining.toString(),seed: this.seed.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): MintRequestEvent { return MintRequestEvent.reified( ).new( { user: decodeFromJSONField("address", field.user), vrfInput: decodeFromJSONField(reified.vector("u8"), field.vrfInput), remaining: decodeFromJSONField("u64", field.remaining), seed: decodeFromJSONField("u64", field.seed) } ) }

 static fromJSON( json: Record<string, any> ): MintRequestEvent { if (json.$typeName !== MintRequestEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return MintRequestEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): MintRequestEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isMintRequestEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a MintRequestEvent object`); } return MintRequestEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<MintRequestEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching MintRequestEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isMintRequestEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a MintRequestEvent object`); }
 return MintRequestEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
