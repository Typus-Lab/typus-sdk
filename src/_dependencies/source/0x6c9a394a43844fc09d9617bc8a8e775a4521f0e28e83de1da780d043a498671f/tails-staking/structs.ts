import * as reified from "../../../../_framework/reified";
import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, Vector, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, fieldToJSON, phantom, ToTypeStr as ToPhantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {String} from "../../0x1/string/structs";
import {TypeName} from "../../0x1/type-name/structs";
import {Balance} from "../../0x2/balance/structs";
import {ObjectTable} from "../../0x2/object-table/structs";
import {ID, UID} from "../../0x2/object/structs";
import {SUI} from "../../0x2/sui/structs";
import {TransferPolicy} from "../../0x2/transfer-policy/structs";
import {VecMap} from "../../0x2/vec-map/structs";
import {ManagerCap, Tails} from "../../0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828/typus-nft/structs";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== WithdrawEvent =============================== */

export function isWithdrawEvent(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::WithdrawEvent"; }

export interface WithdrawEventFields { sender: ToField<"address">; receiver: ToField<"address">; amount: ToField<"u64"> }

export type WithdrawEventReified = Reified< WithdrawEvent, WithdrawEventFields >;

export class WithdrawEvent implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::WithdrawEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = WithdrawEvent.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::WithdrawEvent";

 readonly $typeArgs: [];

 readonly sender: ToField<"address">; readonly receiver: ToField<"address">; readonly amount: ToField<"u64">

 private constructor(typeArgs: [], fields: WithdrawEventFields, ) { this.$fullTypeName = composeSuiType( WithdrawEvent.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::WithdrawEvent"; this.$typeArgs = typeArgs;

 this.sender = fields.sender;; this.receiver = fields.receiver;; this.amount = fields.amount; }

 static reified( ): WithdrawEventReified { return { typeName: WithdrawEvent.$typeName, fullTypeName: composeSuiType( WithdrawEvent.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::WithdrawEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => WithdrawEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => WithdrawEvent.fromBcs( data, ), bcs: WithdrawEvent.bcs, fromJSONField: (field: any) => WithdrawEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => WithdrawEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => WithdrawEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => WithdrawEvent.fetch( client, id, ), new: ( fields: WithdrawEventFields, ) => { return new WithdrawEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return WithdrawEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<WithdrawEvent>> { return phantom(WithdrawEvent.reified( )); } static get p() { return WithdrawEvent.phantom() }

 static get bcs() { return bcs.struct("WithdrawEvent", {

 sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), receiver: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), amount: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): WithdrawEvent { return WithdrawEvent.reified( ).new( { sender: decodeFromFields("address", fields.sender), receiver: decodeFromFields("address", fields.receiver), amount: decodeFromFields("u64", fields.amount) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): WithdrawEvent { if (!isWithdrawEvent(item.type)) { throw new Error("not a WithdrawEvent type");

 }

 return WithdrawEvent.reified( ).new( { sender: decodeFromFieldsWithTypes("address", item.fields.sender), receiver: decodeFromFieldsWithTypes("address", item.fields.receiver), amount: decodeFromFieldsWithTypes("u64", item.fields.amount) } ) }

 static fromBcs( data: Uint8Array ): WithdrawEvent { return WithdrawEvent.fromFields( WithdrawEvent.bcs.parse(data) ) }

 toJSONField() { return {

 sender: this.sender,receiver: this.receiver,amount: this.amount.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): WithdrawEvent { return WithdrawEvent.reified( ).new( { sender: decodeFromJSONField("address", field.sender), receiver: decodeFromJSONField("address", field.receiver), amount: decodeFromJSONField("u64", field.amount) } ) }

 static fromJSON( json: Record<string, any> ): WithdrawEvent { if (json.$typeName !== WithdrawEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return WithdrawEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): WithdrawEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isWithdrawEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a WithdrawEvent object`); } return WithdrawEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<WithdrawEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching WithdrawEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a WithdrawEvent object`); }
 return WithdrawEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== LevelUpEvent =============================== */

export function isLevelUpEvent(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::LevelUpEvent"; }

export interface LevelUpEventFields { nftId: ToField<ID>; number: ToField<"u64">; sender: ToField<"address">; level: ToField<"u64"> }

export type LevelUpEventReified = Reified< LevelUpEvent, LevelUpEventFields >;

export class LevelUpEvent implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::LevelUpEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = LevelUpEvent.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::LevelUpEvent";

 readonly $typeArgs: [];

 readonly nftId: ToField<ID>; readonly number: ToField<"u64">; readonly sender: ToField<"address">; readonly level: ToField<"u64">

 private constructor(typeArgs: [], fields: LevelUpEventFields, ) { this.$fullTypeName = composeSuiType( LevelUpEvent.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::LevelUpEvent"; this.$typeArgs = typeArgs;

 this.nftId = fields.nftId;; this.number = fields.number;; this.sender = fields.sender;; this.level = fields.level; }

 static reified( ): LevelUpEventReified { return { typeName: LevelUpEvent.$typeName, fullTypeName: composeSuiType( LevelUpEvent.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::LevelUpEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => LevelUpEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => LevelUpEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => LevelUpEvent.fromBcs( data, ), bcs: LevelUpEvent.bcs, fromJSONField: (field: any) => LevelUpEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => LevelUpEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => LevelUpEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => LevelUpEvent.fetch( client, id, ), new: ( fields: LevelUpEventFields, ) => { return new LevelUpEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return LevelUpEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<LevelUpEvent>> { return phantom(LevelUpEvent.reified( )); } static get p() { return LevelUpEvent.phantom() }

 static get bcs() { return bcs.struct("LevelUpEvent", {

 nft_id: ID.bcs, number: bcs.u64(), sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), level: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): LevelUpEvent { return LevelUpEvent.reified( ).new( { nftId: decodeFromFields(ID.reified(), fields.nft_id), number: decodeFromFields("u64", fields.number), sender: decodeFromFields("address", fields.sender), level: decodeFromFields("u64", fields.level) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): LevelUpEvent { if (!isLevelUpEvent(item.type)) { throw new Error("not a LevelUpEvent type");

 }

 return LevelUpEvent.reified( ).new( { nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id), number: decodeFromFieldsWithTypes("u64", item.fields.number), sender: decodeFromFieldsWithTypes("address", item.fields.sender), level: decodeFromFieldsWithTypes("u64", item.fields.level) } ) }

 static fromBcs( data: Uint8Array ): LevelUpEvent { return LevelUpEvent.fromFields( LevelUpEvent.bcs.parse(data) ) }

 toJSONField() { return {

 nftId: this.nftId,number: this.number.toString(),sender: this.sender,level: this.level.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): LevelUpEvent { return LevelUpEvent.reified( ).new( { nftId: decodeFromJSONField(ID.reified(), field.nftId), number: decodeFromJSONField("u64", field.number), sender: decodeFromJSONField("address", field.sender), level: decodeFromJSONField("u64", field.level) } ) }

 static fromJSON( json: Record<string, any> ): LevelUpEvent { if (json.$typeName !== LevelUpEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return LevelUpEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): LevelUpEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isLevelUpEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a LevelUpEvent object`); } return LevelUpEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<LevelUpEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching LevelUpEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isLevelUpEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a LevelUpEvent object`); }
 return LevelUpEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== NftExtension =============================== */

export function isNftExtension(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::NftExtension"; }

export interface NftExtensionFields { id: ToField<UID>; nftTable: ToField<ObjectTable<"address", ToPhantom<Tails>>>; nftManagerCap: ToField<ManagerCap>; policy: ToField<TransferPolicy<ToPhantom<Tails>>>; fee: ToField<Balance<ToPhantom<SUI>>> }

export type NftExtensionReified = Reified< NftExtension, NftExtensionFields >;

export class NftExtension implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::NftExtension"; static readonly $numTypeParams = 0;

 readonly $typeName = NftExtension.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::NftExtension";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly nftTable: ToField<ObjectTable<"address", ToPhantom<Tails>>>; readonly nftManagerCap: ToField<ManagerCap>; readonly policy: ToField<TransferPolicy<ToPhantom<Tails>>>; readonly fee: ToField<Balance<ToPhantom<SUI>>>

 private constructor(typeArgs: [], fields: NftExtensionFields, ) { this.$fullTypeName = composeSuiType( NftExtension.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::NftExtension"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.nftTable = fields.nftTable;; this.nftManagerCap = fields.nftManagerCap;; this.policy = fields.policy;; this.fee = fields.fee; }

 static reified( ): NftExtensionReified { return { typeName: NftExtension.$typeName, fullTypeName: composeSuiType( NftExtension.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::NftExtension", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => NftExtension.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => NftExtension.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => NftExtension.fromBcs( data, ), bcs: NftExtension.bcs, fromJSONField: (field: any) => NftExtension.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => NftExtension.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => NftExtension.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => NftExtension.fetch( client, id, ), new: ( fields: NftExtensionFields, ) => { return new NftExtension( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return NftExtension.reified() }

 static phantom( ): PhantomReified<ToTypeStr<NftExtension>> { return phantom(NftExtension.reified( )); } static get p() { return NftExtension.phantom() }

 static get bcs() { return bcs.struct("NftExtension", {

 id: UID.bcs, nft_table: ObjectTable.bcs, nft_manager_cap: ManagerCap.bcs, policy: TransferPolicy.bcs, fee: Balance.bcs

}) };

 static fromFields( fields: Record<string, any> ): NftExtension { return NftExtension.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), nftTable: decodeFromFields(ObjectTable.reified(reified.phantom("address"), reified.phantom(Tails.reified())), fields.nft_table), nftManagerCap: decodeFromFields(ManagerCap.reified(), fields.nft_manager_cap), policy: decodeFromFields(TransferPolicy.reified(reified.phantom(Tails.reified())), fields.policy), fee: decodeFromFields(Balance.reified(reified.phantom(SUI.reified())), fields.fee) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): NftExtension { if (!isNftExtension(item.type)) { throw new Error("not a NftExtension type");

 }

 return NftExtension.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), nftTable: decodeFromFieldsWithTypes(ObjectTable.reified(reified.phantom("address"), reified.phantom(Tails.reified())), item.fields.nft_table), nftManagerCap: decodeFromFieldsWithTypes(ManagerCap.reified(), item.fields.nft_manager_cap), policy: decodeFromFieldsWithTypes(TransferPolicy.reified(reified.phantom(Tails.reified())), item.fields.policy), fee: decodeFromFieldsWithTypes(Balance.reified(reified.phantom(SUI.reified())), item.fields.fee) } ) }

 static fromBcs( data: Uint8Array ): NftExtension { return NftExtension.fromFields( NftExtension.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,nftTable: this.nftTable.toJSONField(),nftManagerCap: this.nftManagerCap.toJSONField(),policy: this.policy.toJSONField(),fee: this.fee.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): NftExtension { return NftExtension.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), nftTable: decodeFromJSONField(ObjectTable.reified(reified.phantom("address"), reified.phantom(Tails.reified())), field.nftTable), nftManagerCap: decodeFromJSONField(ManagerCap.reified(), field.nftManagerCap), policy: decodeFromJSONField(TransferPolicy.reified(reified.phantom(Tails.reified())), field.policy), fee: decodeFromJSONField(Balance.reified(reified.phantom(SUI.reified())), field.fee) } ) }

 static fromJSON( json: Record<string, any> ): NftExtension { if (json.$typeName !== NftExtension.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return NftExtension.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): NftExtension { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isNftExtension(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a NftExtension object`); } return NftExtension.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<NftExtension> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching NftExtension object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isNftExtension(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a NftExtension object`); }
 return NftExtension.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ClaimProfitSharingEvent =============================== */

export function isClaimProfitSharingEvent(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ClaimProfitSharingEvent"; }

export interface ClaimProfitSharingEventFields { value: ToField<"u64">; token: ToField<TypeName>; sender: ToField<"address">; nftId: ToField<ID>; number: ToField<"u64">; level: ToField<"u64"> }

export type ClaimProfitSharingEventReified = Reified< ClaimProfitSharingEvent, ClaimProfitSharingEventFields >;

export class ClaimProfitSharingEvent implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ClaimProfitSharingEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = ClaimProfitSharingEvent.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ClaimProfitSharingEvent";

 readonly $typeArgs: [];

 readonly value: ToField<"u64">; readonly token: ToField<TypeName>; readonly sender: ToField<"address">; readonly nftId: ToField<ID>; readonly number: ToField<"u64">; readonly level: ToField<"u64">

 private constructor(typeArgs: [], fields: ClaimProfitSharingEventFields, ) { this.$fullTypeName = composeSuiType( ClaimProfitSharingEvent.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ClaimProfitSharingEvent"; this.$typeArgs = typeArgs;

 this.value = fields.value;; this.token = fields.token;; this.sender = fields.sender;; this.nftId = fields.nftId;; this.number = fields.number;; this.level = fields.level; }

 static reified( ): ClaimProfitSharingEventReified { return { typeName: ClaimProfitSharingEvent.$typeName, fullTypeName: composeSuiType( ClaimProfitSharingEvent.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ClaimProfitSharingEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ClaimProfitSharingEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ClaimProfitSharingEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ClaimProfitSharingEvent.fromBcs( data, ), bcs: ClaimProfitSharingEvent.bcs, fromJSONField: (field: any) => ClaimProfitSharingEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ClaimProfitSharingEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ClaimProfitSharingEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ClaimProfitSharingEvent.fetch( client, id, ), new: ( fields: ClaimProfitSharingEventFields, ) => { return new ClaimProfitSharingEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ClaimProfitSharingEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ClaimProfitSharingEvent>> { return phantom(ClaimProfitSharingEvent.reified( )); } static get p() { return ClaimProfitSharingEvent.phantom() }

 static get bcs() { return bcs.struct("ClaimProfitSharingEvent", {

 value: bcs.u64(), token: TypeName.bcs, sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), nft_id: ID.bcs, number: bcs.u64(), level: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): ClaimProfitSharingEvent { return ClaimProfitSharingEvent.reified( ).new( { value: decodeFromFields("u64", fields.value), token: decodeFromFields(TypeName.reified(), fields.token), sender: decodeFromFields("address", fields.sender), nftId: decodeFromFields(ID.reified(), fields.nft_id), number: decodeFromFields("u64", fields.number), level: decodeFromFields("u64", fields.level) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ClaimProfitSharingEvent { if (!isClaimProfitSharingEvent(item.type)) { throw new Error("not a ClaimProfitSharingEvent type");

 }

 return ClaimProfitSharingEvent.reified( ).new( { value: decodeFromFieldsWithTypes("u64", item.fields.value), token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token), sender: decodeFromFieldsWithTypes("address", item.fields.sender), nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id), number: decodeFromFieldsWithTypes("u64", item.fields.number), level: decodeFromFieldsWithTypes("u64", item.fields.level) } ) }

 static fromBcs( data: Uint8Array ): ClaimProfitSharingEvent { return ClaimProfitSharingEvent.fromFields( ClaimProfitSharingEvent.bcs.parse(data) ) }

 toJSONField() { return {

 value: this.value.toString(),token: this.token.toJSONField(),sender: this.sender,nftId: this.nftId,number: this.number.toString(),level: this.level.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ClaimProfitSharingEvent { return ClaimProfitSharingEvent.reified( ).new( { value: decodeFromJSONField("u64", field.value), token: decodeFromJSONField(TypeName.reified(), field.token), sender: decodeFromJSONField("address", field.sender), nftId: decodeFromJSONField(ID.reified(), field.nftId), number: decodeFromJSONField("u64", field.number), level: decodeFromJSONField("u64", field.level) } ) }

 static fromJSON( json: Record<string, any> ): ClaimProfitSharingEvent { if (json.$typeName !== ClaimProfitSharingEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ClaimProfitSharingEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ClaimProfitSharingEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isClaimProfitSharingEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ClaimProfitSharingEvent object`); } return ClaimProfitSharingEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ClaimProfitSharingEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ClaimProfitSharingEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isClaimProfitSharingEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ClaimProfitSharingEvent object`); }
 return ClaimProfitSharingEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ClaimProfitSharingEventV2 =============================== */

export function isClaimProfitSharingEventV2(type: string): boolean { type = compressSuiType(type); return type === "0x48b15aafeb26ade39d0c2a3b8c3635bfe8396084812b6fcaeb1104eac793b4a5::tails_staking::ClaimProfitSharingEventV2"; }

export interface ClaimProfitSharingEventV2Fields { value: ToField<"u64">; token: ToField<TypeName>; sender: ToField<"address">; nftId: ToField<ID>; number: ToField<"u64">; level: ToField<"u64">; name: ToField<String> }

export type ClaimProfitSharingEventV2Reified = Reified< ClaimProfitSharingEventV2, ClaimProfitSharingEventV2Fields >;

export class ClaimProfitSharingEventV2 implements StructClass { static readonly $typeName = "0x48b15aafeb26ade39d0c2a3b8c3635bfe8396084812b6fcaeb1104eac793b4a5::tails_staking::ClaimProfitSharingEventV2"; static readonly $numTypeParams = 0;

 readonly $typeName = ClaimProfitSharingEventV2.$typeName;

 readonly $fullTypeName: "0x48b15aafeb26ade39d0c2a3b8c3635bfe8396084812b6fcaeb1104eac793b4a5::tails_staking::ClaimProfitSharingEventV2";

 readonly $typeArgs: [];

 readonly value: ToField<"u64">; readonly token: ToField<TypeName>; readonly sender: ToField<"address">; readonly nftId: ToField<ID>; readonly number: ToField<"u64">; readonly level: ToField<"u64">; readonly name: ToField<String>

 private constructor(typeArgs: [], fields: ClaimProfitSharingEventV2Fields, ) { this.$fullTypeName = composeSuiType( ClaimProfitSharingEventV2.$typeName, ...typeArgs ) as "0x48b15aafeb26ade39d0c2a3b8c3635bfe8396084812b6fcaeb1104eac793b4a5::tails_staking::ClaimProfitSharingEventV2"; this.$typeArgs = typeArgs;

 this.value = fields.value;; this.token = fields.token;; this.sender = fields.sender;; this.nftId = fields.nftId;; this.number = fields.number;; this.level = fields.level;; this.name = fields.name; }

 static reified( ): ClaimProfitSharingEventV2Reified { return { typeName: ClaimProfitSharingEventV2.$typeName, fullTypeName: composeSuiType( ClaimProfitSharingEventV2.$typeName, ...[] ) as "0x48b15aafeb26ade39d0c2a3b8c3635bfe8396084812b6fcaeb1104eac793b4a5::tails_staking::ClaimProfitSharingEventV2", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ClaimProfitSharingEventV2.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ClaimProfitSharingEventV2.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ClaimProfitSharingEventV2.fromBcs( data, ), bcs: ClaimProfitSharingEventV2.bcs, fromJSONField: (field: any) => ClaimProfitSharingEventV2.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ClaimProfitSharingEventV2.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ClaimProfitSharingEventV2.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ClaimProfitSharingEventV2.fetch( client, id, ), new: ( fields: ClaimProfitSharingEventV2Fields, ) => { return new ClaimProfitSharingEventV2( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ClaimProfitSharingEventV2.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ClaimProfitSharingEventV2>> { return phantom(ClaimProfitSharingEventV2.reified( )); } static get p() { return ClaimProfitSharingEventV2.phantom() }

 static get bcs() { return bcs.struct("ClaimProfitSharingEventV2", {

 value: bcs.u64(), token: TypeName.bcs, sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), nft_id: ID.bcs, number: bcs.u64(), level: bcs.u64(), name: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): ClaimProfitSharingEventV2 { return ClaimProfitSharingEventV2.reified( ).new( { value: decodeFromFields("u64", fields.value), token: decodeFromFields(TypeName.reified(), fields.token), sender: decodeFromFields("address", fields.sender), nftId: decodeFromFields(ID.reified(), fields.nft_id), number: decodeFromFields("u64", fields.number), level: decodeFromFields("u64", fields.level), name: decodeFromFields(String.reified(), fields.name) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ClaimProfitSharingEventV2 { if (!isClaimProfitSharingEventV2(item.type)) { throw new Error("not a ClaimProfitSharingEventV2 type");

 }

 return ClaimProfitSharingEventV2.reified( ).new( { value: decodeFromFieldsWithTypes("u64", item.fields.value), token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token), sender: decodeFromFieldsWithTypes("address", item.fields.sender), nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id), number: decodeFromFieldsWithTypes("u64", item.fields.number), level: decodeFromFieldsWithTypes("u64", item.fields.level), name: decodeFromFieldsWithTypes(String.reified(), item.fields.name) } ) }

 static fromBcs( data: Uint8Array ): ClaimProfitSharingEventV2 { return ClaimProfitSharingEventV2.fromFields( ClaimProfitSharingEventV2.bcs.parse(data) ) }

 toJSONField() { return {

 value: this.value.toString(),token: this.token.toJSONField(),sender: this.sender,nftId: this.nftId,number: this.number.toString(),level: this.level.toString(),name: this.name,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ClaimProfitSharingEventV2 { return ClaimProfitSharingEventV2.reified( ).new( { value: decodeFromJSONField("u64", field.value), token: decodeFromJSONField(TypeName.reified(), field.token), sender: decodeFromJSONField("address", field.sender), nftId: decodeFromJSONField(ID.reified(), field.nftId), number: decodeFromJSONField("u64", field.number), level: decodeFromJSONField("u64", field.level), name: decodeFromJSONField(String.reified(), field.name) } ) }

 static fromJSON( json: Record<string, any> ): ClaimProfitSharingEventV2 { if (json.$typeName !== ClaimProfitSharingEventV2.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ClaimProfitSharingEventV2.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ClaimProfitSharingEventV2 { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isClaimProfitSharingEventV2(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ClaimProfitSharingEventV2 object`); } return ClaimProfitSharingEventV2.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ClaimProfitSharingEventV2> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ClaimProfitSharingEventV2 object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isClaimProfitSharingEventV2(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ClaimProfitSharingEventV2 object`); }
 return ClaimProfitSharingEventV2.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== DailyAttendEvent =============================== */

export function isDailyAttendEvent(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::DailyAttendEvent"; }

export interface DailyAttendEventFields { sender: ToField<"address">; nftId: ToField<ID>; number: ToField<"u64">; tsMs: ToField<"u64">; expEarn: ToField<"u64"> }

export type DailyAttendEventReified = Reified< DailyAttendEvent, DailyAttendEventFields >;

export class DailyAttendEvent implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::DailyAttendEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = DailyAttendEvent.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::DailyAttendEvent";

 readonly $typeArgs: [];

 readonly sender: ToField<"address">; readonly nftId: ToField<ID>; readonly number: ToField<"u64">; readonly tsMs: ToField<"u64">; readonly expEarn: ToField<"u64">

 private constructor(typeArgs: [], fields: DailyAttendEventFields, ) { this.$fullTypeName = composeSuiType( DailyAttendEvent.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::DailyAttendEvent"; this.$typeArgs = typeArgs;

 this.sender = fields.sender;; this.nftId = fields.nftId;; this.number = fields.number;; this.tsMs = fields.tsMs;; this.expEarn = fields.expEarn; }

 static reified( ): DailyAttendEventReified { return { typeName: DailyAttendEvent.$typeName, fullTypeName: composeSuiType( DailyAttendEvent.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::DailyAttendEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => DailyAttendEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => DailyAttendEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => DailyAttendEvent.fromBcs( data, ), bcs: DailyAttendEvent.bcs, fromJSONField: (field: any) => DailyAttendEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => DailyAttendEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => DailyAttendEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => DailyAttendEvent.fetch( client, id, ), new: ( fields: DailyAttendEventFields, ) => { return new DailyAttendEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return DailyAttendEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<DailyAttendEvent>> { return phantom(DailyAttendEvent.reified( )); } static get p() { return DailyAttendEvent.phantom() }

 static get bcs() { return bcs.struct("DailyAttendEvent", {

 sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), nft_id: ID.bcs, number: bcs.u64(), ts_ms: bcs.u64(), exp_earn: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): DailyAttendEvent { return DailyAttendEvent.reified( ).new( { sender: decodeFromFields("address", fields.sender), nftId: decodeFromFields(ID.reified(), fields.nft_id), number: decodeFromFields("u64", fields.number), tsMs: decodeFromFields("u64", fields.ts_ms), expEarn: decodeFromFields("u64", fields.exp_earn) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): DailyAttendEvent { if (!isDailyAttendEvent(item.type)) { throw new Error("not a DailyAttendEvent type");

 }

 return DailyAttendEvent.reified( ).new( { sender: decodeFromFieldsWithTypes("address", item.fields.sender), nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id), number: decodeFromFieldsWithTypes("u64", item.fields.number), tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms), expEarn: decodeFromFieldsWithTypes("u64", item.fields.exp_earn) } ) }

 static fromBcs( data: Uint8Array ): DailyAttendEvent { return DailyAttendEvent.fromFields( DailyAttendEvent.bcs.parse(data) ) }

 toJSONField() { return {

 sender: this.sender,nftId: this.nftId,number: this.number.toString(),tsMs: this.tsMs.toString(),expEarn: this.expEarn.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): DailyAttendEvent { return DailyAttendEvent.reified( ).new( { sender: decodeFromJSONField("address", field.sender), nftId: decodeFromJSONField(ID.reified(), field.nftId), number: decodeFromJSONField("u64", field.number), tsMs: decodeFromJSONField("u64", field.tsMs), expEarn: decodeFromJSONField("u64", field.expEarn) } ) }

 static fromJSON( json: Record<string, any> ): DailyAttendEvent { if (json.$typeName !== DailyAttendEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return DailyAttendEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): DailyAttendEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isDailyAttendEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a DailyAttendEvent object`); } return DailyAttendEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<DailyAttendEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching DailyAttendEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isDailyAttendEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a DailyAttendEvent object`); }
 return DailyAttendEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== Partner =============================== */

export function isPartner(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::Partner"; }

export interface PartnerFields { id: ToField<UID>; expAllocation: ToField<"u64">; partnerTraits: ToField<VecMap<String, String>> }

export type PartnerReified = Reified< Partner, PartnerFields >;

export class Partner implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::Partner"; static readonly $numTypeParams = 0;

 readonly $typeName = Partner.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::Partner";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly expAllocation: ToField<"u64">; readonly partnerTraits: ToField<VecMap<String, String>>

 private constructor(typeArgs: [], fields: PartnerFields, ) { this.$fullTypeName = composeSuiType( Partner.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::Partner"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.expAllocation = fields.expAllocation;; this.partnerTraits = fields.partnerTraits; }

 static reified( ): PartnerReified { return { typeName: Partner.$typeName, fullTypeName: composeSuiType( Partner.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::Partner", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Partner.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Partner.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Partner.fromBcs( data, ), bcs: Partner.bcs, fromJSONField: (field: any) => Partner.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Partner.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Partner.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Partner.fetch( client, id, ), new: ( fields: PartnerFields, ) => { return new Partner( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Partner.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Partner>> { return phantom(Partner.reified( )); } static get p() { return Partner.phantom() }

 static get bcs() { return bcs.struct("Partner", {

 id: UID.bcs, exp_allocation: bcs.u64(), partner_traits: VecMap.bcs(String.bcs, String.bcs)

}) };

 static fromFields( fields: Record<string, any> ): Partner { return Partner.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), expAllocation: decodeFromFields("u64", fields.exp_allocation), partnerTraits: decodeFromFields(VecMap.reified(String.reified(), String.reified()), fields.partner_traits) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Partner { if (!isPartner(item.type)) { throw new Error("not a Partner type");

 }

 return Partner.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), expAllocation: decodeFromFieldsWithTypes("u64", item.fields.exp_allocation), partnerTraits: decodeFromFieldsWithTypes(VecMap.reified(String.reified(), String.reified()), item.fields.partner_traits) } ) }

 static fromBcs( data: Uint8Array ): Partner { return Partner.fromFields( Partner.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,expAllocation: this.expAllocation.toString(),partnerTraits: this.partnerTraits.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Partner { return Partner.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), expAllocation: decodeFromJSONField("u64", field.expAllocation), partnerTraits: decodeFromJSONField(VecMap.reified(String.reified(), String.reified()), field.partnerTraits) } ) }

 static fromJSON( json: Record<string, any> ): Partner { if (json.$typeName !== Partner.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Partner.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Partner { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPartner(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Partner object`); } return Partner.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Partner> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Partner object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPartner(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Partner object`); }
 return Partner.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== PartnerKey =============================== */

export function isPartnerKey(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::PartnerKey"; }

export interface PartnerKeyFields { id: ToField<UID>; for: ToField<ID>; partner: ToField<String> }

export type PartnerKeyReified = Reified< PartnerKey, PartnerKeyFields >;

export class PartnerKey implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::PartnerKey"; static readonly $numTypeParams = 0;

 readonly $typeName = PartnerKey.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::PartnerKey";

 readonly $typeArgs: [];

 readonly id: ToField<UID>; readonly for: ToField<ID>; readonly partner: ToField<String>

 private constructor(typeArgs: [], fields: PartnerKeyFields, ) { this.$fullTypeName = composeSuiType( PartnerKey.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::PartnerKey"; this.$typeArgs = typeArgs;

 this.id = fields.id;; this.for = fields.for;; this.partner = fields.partner; }

 static reified( ): PartnerKeyReified { return { typeName: PartnerKey.$typeName, fullTypeName: composeSuiType( PartnerKey.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::PartnerKey", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => PartnerKey.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => PartnerKey.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => PartnerKey.fromBcs( data, ), bcs: PartnerKey.bcs, fromJSONField: (field: any) => PartnerKey.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => PartnerKey.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => PartnerKey.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => PartnerKey.fetch( client, id, ), new: ( fields: PartnerKeyFields, ) => { return new PartnerKey( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return PartnerKey.reified() }

 static phantom( ): PhantomReified<ToTypeStr<PartnerKey>> { return phantom(PartnerKey.reified( )); } static get p() { return PartnerKey.phantom() }

 static get bcs() { return bcs.struct("PartnerKey", {

 id: UID.bcs, for: ID.bcs, partner: String.bcs

}) };

 static fromFields( fields: Record<string, any> ): PartnerKey { return PartnerKey.reified( ).new( { id: decodeFromFields(UID.reified(), fields.id), for: decodeFromFields(ID.reified(), fields.for), partner: decodeFromFields(String.reified(), fields.partner) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): PartnerKey { if (!isPartnerKey(item.type)) { throw new Error("not a PartnerKey type");

 }

 return PartnerKey.reified( ).new( { id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id), for: decodeFromFieldsWithTypes(ID.reified(), item.fields.for), partner: decodeFromFieldsWithTypes(String.reified(), item.fields.partner) } ) }

 static fromBcs( data: Uint8Array ): PartnerKey { return PartnerKey.fromFields( PartnerKey.bcs.parse(data) ) }

 toJSONField() { return {

 id: this.id,for: this.for,partner: this.partner,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): PartnerKey { return PartnerKey.reified( ).new( { id: decodeFromJSONField(UID.reified(), field.id), for: decodeFromJSONField(ID.reified(), field.for), partner: decodeFromJSONField(String.reified(), field.partner) } ) }

 static fromJSON( json: Record<string, any> ): PartnerKey { if (json.$typeName !== PartnerKey.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return PartnerKey.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): PartnerKey { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isPartnerKey(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a PartnerKey object`); } return PartnerKey.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<PartnerKey> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching PartnerKey object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isPartnerKey(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a PartnerKey object`); }
 return PartnerKey.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ProfitSharing =============================== */

export function isProfitSharing(type: string): boolean { type = compressSuiType(type); return type.startsWith("0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharing<"); }

export interface ProfitSharingFields<TOKEN extends PhantomTypeArgument> { levelProfits: ToField<Vector<"u64">>; levelUsers: ToField<Vector<"u64">>; total: ToField<"u64">; remaining: ToField<"u64">; pool: ToField<Balance<TOKEN>> }

export type ProfitSharingReified<TOKEN extends PhantomTypeArgument> = Reified< ProfitSharing<TOKEN>, ProfitSharingFields<TOKEN> >;

export class ProfitSharing<TOKEN extends PhantomTypeArgument> implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharing"; static readonly $numTypeParams = 1;

 readonly $typeName = ProfitSharing.$typeName;

 readonly $fullTypeName: `0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharing<${PhantomToTypeStr<TOKEN>}>`;

 readonly $typeArgs: [PhantomToTypeStr<TOKEN>];

 readonly levelProfits: ToField<Vector<"u64">>; readonly levelUsers: ToField<Vector<"u64">>; readonly total: ToField<"u64">; readonly remaining: ToField<"u64">; readonly pool: ToField<Balance<TOKEN>>

 private constructor(typeArgs: [PhantomToTypeStr<TOKEN>], fields: ProfitSharingFields<TOKEN>, ) { this.$fullTypeName = composeSuiType( ProfitSharing.$typeName, ...typeArgs ) as `0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharing<${PhantomToTypeStr<TOKEN>}>`; this.$typeArgs = typeArgs;

 this.levelProfits = fields.levelProfits;; this.levelUsers = fields.levelUsers;; this.total = fields.total;; this.remaining = fields.remaining;; this.pool = fields.pool; }

 static reified<TOKEN extends PhantomReified<PhantomTypeArgument>>( TOKEN: TOKEN ): ProfitSharingReified<ToPhantomTypeArgument<TOKEN>> { return { typeName: ProfitSharing.$typeName, fullTypeName: composeSuiType( ProfitSharing.$typeName, ...[extractType(TOKEN)] ) as `0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharing<${PhantomToTypeStr<ToPhantomTypeArgument<TOKEN>>}>`, typeArgs: [ extractType(TOKEN) ] as [PhantomToTypeStr<ToPhantomTypeArgument<TOKEN>>], reifiedTypeArgs: [TOKEN], fromFields: (fields: Record<string, any>) => ProfitSharing.fromFields( TOKEN, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ProfitSharing.fromFieldsWithTypes( TOKEN, item, ), fromBcs: (data: Uint8Array) => ProfitSharing.fromBcs( TOKEN, data, ), bcs: ProfitSharing.bcs, fromJSONField: (field: any) => ProfitSharing.fromJSONField( TOKEN, field, ), fromJSON: (json: Record<string, any>) => ProfitSharing.fromJSON( TOKEN, json, ), fromSuiParsedData: (content: SuiParsedData) => ProfitSharing.fromSuiParsedData( TOKEN, content, ), fetch: async (client: SuiClient, id: string) => ProfitSharing.fetch( client, TOKEN, id, ), new: ( fields: ProfitSharingFields<ToPhantomTypeArgument<TOKEN>>, ) => { return new ProfitSharing( [extractType(TOKEN)], fields ) }, kind: "StructClassReified", } }

 static get r() { return ProfitSharing.reified }

 static phantom<TOKEN extends PhantomReified<PhantomTypeArgument>>( TOKEN: TOKEN ): PhantomReified<ToTypeStr<ProfitSharing<ToPhantomTypeArgument<TOKEN>>>> { return phantom(ProfitSharing.reified( TOKEN )); } static get p() { return ProfitSharing.phantom }

 static get bcs() { return bcs.struct("ProfitSharing", {

 level_profits: bcs.vector(bcs.u64()), level_users: bcs.vector(bcs.u64()), total: bcs.u64(), remaining: bcs.u64(), pool: Balance.bcs

}) };

 static fromFields<TOKEN extends PhantomReified<PhantomTypeArgument>>( typeArg: TOKEN, fields: Record<string, any> ): ProfitSharing<ToPhantomTypeArgument<TOKEN>> { return ProfitSharing.reified( typeArg, ).new( { levelProfits: decodeFromFields(reified.vector("u64"), fields.level_profits), levelUsers: decodeFromFields(reified.vector("u64"), fields.level_users), total: decodeFromFields("u64", fields.total), remaining: decodeFromFields("u64", fields.remaining), pool: decodeFromFields(Balance.reified(typeArg), fields.pool) } ) }

 static fromFieldsWithTypes<TOKEN extends PhantomReified<PhantomTypeArgument>>( typeArg: TOKEN, item: FieldsWithTypes ): ProfitSharing<ToPhantomTypeArgument<TOKEN>> { if (!isProfitSharing(item.type)) { throw new Error("not a ProfitSharing type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return ProfitSharing.reified( typeArg, ).new( { levelProfits: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.level_profits), levelUsers: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.level_users), total: decodeFromFieldsWithTypes("u64", item.fields.total), remaining: decodeFromFieldsWithTypes("u64", item.fields.remaining), pool: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.pool) } ) }

 static fromBcs<TOKEN extends PhantomReified<PhantomTypeArgument>>( typeArg: TOKEN, data: Uint8Array ): ProfitSharing<ToPhantomTypeArgument<TOKEN>> { return ProfitSharing.fromFields( typeArg, ProfitSharing.bcs.parse(data) ) }

 toJSONField() { return {

 levelProfits: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.levelProfits),levelUsers: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.levelUsers),total: this.total.toString(),remaining: this.remaining.toString(),pool: this.pool.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<TOKEN extends PhantomReified<PhantomTypeArgument>>( typeArg: TOKEN, field: any ): ProfitSharing<ToPhantomTypeArgument<TOKEN>> { return ProfitSharing.reified( typeArg, ).new( { levelProfits: decodeFromJSONField(reified.vector("u64"), field.levelProfits), levelUsers: decodeFromJSONField(reified.vector("u64"), field.levelUsers), total: decodeFromJSONField("u64", field.total), remaining: decodeFromJSONField("u64", field.remaining), pool: decodeFromJSONField(Balance.reified(typeArg), field.pool) } ) }

 static fromJSON<TOKEN extends PhantomReified<PhantomTypeArgument>>( typeArg: TOKEN, json: Record<string, any> ): ProfitSharing<ToPhantomTypeArgument<TOKEN>> { if (json.$typeName !== ProfitSharing.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(ProfitSharing.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return ProfitSharing.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<TOKEN extends PhantomReified<PhantomTypeArgument>>( typeArg: TOKEN, content: SuiParsedData ): ProfitSharing<ToPhantomTypeArgument<TOKEN>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isProfitSharing(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ProfitSharing object`); } return ProfitSharing.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<TOKEN extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: TOKEN, id: string ): Promise<ProfitSharing<ToPhantomTypeArgument<TOKEN>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ProfitSharing object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProfitSharing(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ProfitSharing object`); }
 return ProfitSharing.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== ProfitSharingEvent =============================== */

export function isProfitSharingEvent(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharingEvent"; }

export interface ProfitSharingEventFields { levelProfits: ToField<Vector<"u64">>; value: ToField<"u64">; token: ToField<TypeName> }

export type ProfitSharingEventReified = Reified< ProfitSharingEvent, ProfitSharingEventFields >;

export class ProfitSharingEvent implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharingEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = ProfitSharingEvent.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharingEvent";

 readonly $typeArgs: [];

 readonly levelProfits: ToField<Vector<"u64">>; readonly value: ToField<"u64">; readonly token: ToField<TypeName>

 private constructor(typeArgs: [], fields: ProfitSharingEventFields, ) { this.$fullTypeName = composeSuiType( ProfitSharingEvent.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharingEvent"; this.$typeArgs = typeArgs;

 this.levelProfits = fields.levelProfits;; this.value = fields.value;; this.token = fields.token; }

 static reified( ): ProfitSharingEventReified { return { typeName: ProfitSharingEvent.$typeName, fullTypeName: composeSuiType( ProfitSharingEvent.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::ProfitSharingEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => ProfitSharingEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => ProfitSharingEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => ProfitSharingEvent.fromBcs( data, ), bcs: ProfitSharingEvent.bcs, fromJSONField: (field: any) => ProfitSharingEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => ProfitSharingEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => ProfitSharingEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => ProfitSharingEvent.fetch( client, id, ), new: ( fields: ProfitSharingEventFields, ) => { return new ProfitSharingEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return ProfitSharingEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<ProfitSharingEvent>> { return phantom(ProfitSharingEvent.reified( )); } static get p() { return ProfitSharingEvent.phantom() }

 static get bcs() { return bcs.struct("ProfitSharingEvent", {

 level_profits: bcs.vector(bcs.u64()), value: bcs.u64(), token: TypeName.bcs

}) };

 static fromFields( fields: Record<string, any> ): ProfitSharingEvent { return ProfitSharingEvent.reified( ).new( { levelProfits: decodeFromFields(reified.vector("u64"), fields.level_profits), value: decodeFromFields("u64", fields.value), token: decodeFromFields(TypeName.reified(), fields.token) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): ProfitSharingEvent { if (!isProfitSharingEvent(item.type)) { throw new Error("not a ProfitSharingEvent type");

 }

 return ProfitSharingEvent.reified( ).new( { levelProfits: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.level_profits), value: decodeFromFieldsWithTypes("u64", item.fields.value), token: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token) } ) }

 static fromBcs( data: Uint8Array ): ProfitSharingEvent { return ProfitSharingEvent.fromFields( ProfitSharingEvent.bcs.parse(data) ) }

 toJSONField() { return {

 levelProfits: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.levelProfits),value: this.value.toString(),token: this.token.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): ProfitSharingEvent { return ProfitSharingEvent.reified( ).new( { levelProfits: decodeFromJSONField(reified.vector("u64"), field.levelProfits), value: decodeFromJSONField("u64", field.value), token: decodeFromJSONField(TypeName.reified(), field.token) } ) }

 static fromJSON( json: Record<string, any> ): ProfitSharingEvent { if (json.$typeName !== ProfitSharingEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return ProfitSharingEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): ProfitSharingEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isProfitSharingEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a ProfitSharingEvent object`); } return ProfitSharingEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<ProfitSharingEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching ProfitSharingEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isProfitSharingEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a ProfitSharingEvent object`); }
 return ProfitSharingEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== SnapshotNftEvent =============================== */

export function isSnapshotNftEvent(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::SnapshotNftEvent"; }

export interface SnapshotNftEventFields { sender: ToField<"address">; nftId: ToField<ID>; number: ToField<"u64">; tsMs: ToField<"u64">; expEarn: ToField<"u64"> }

export type SnapshotNftEventReified = Reified< SnapshotNftEvent, SnapshotNftEventFields >;

export class SnapshotNftEvent implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::SnapshotNftEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = SnapshotNftEvent.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::SnapshotNftEvent";

 readonly $typeArgs: [];

 readonly sender: ToField<"address">; readonly nftId: ToField<ID>; readonly number: ToField<"u64">; readonly tsMs: ToField<"u64">; readonly expEarn: ToField<"u64">

 private constructor(typeArgs: [], fields: SnapshotNftEventFields, ) { this.$fullTypeName = composeSuiType( SnapshotNftEvent.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::SnapshotNftEvent"; this.$typeArgs = typeArgs;

 this.sender = fields.sender;; this.nftId = fields.nftId;; this.number = fields.number;; this.tsMs = fields.tsMs;; this.expEarn = fields.expEarn; }

 static reified( ): SnapshotNftEventReified { return { typeName: SnapshotNftEvent.$typeName, fullTypeName: composeSuiType( SnapshotNftEvent.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::SnapshotNftEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => SnapshotNftEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => SnapshotNftEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => SnapshotNftEvent.fromBcs( data, ), bcs: SnapshotNftEvent.bcs, fromJSONField: (field: any) => SnapshotNftEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => SnapshotNftEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => SnapshotNftEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => SnapshotNftEvent.fetch( client, id, ), new: ( fields: SnapshotNftEventFields, ) => { return new SnapshotNftEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return SnapshotNftEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<SnapshotNftEvent>> { return phantom(SnapshotNftEvent.reified( )); } static get p() { return SnapshotNftEvent.phantom() }

 static get bcs() { return bcs.struct("SnapshotNftEvent", {

 sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), nft_id: ID.bcs, number: bcs.u64(), ts_ms: bcs.u64(), exp_earn: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): SnapshotNftEvent { return SnapshotNftEvent.reified( ).new( { sender: decodeFromFields("address", fields.sender), nftId: decodeFromFields(ID.reified(), fields.nft_id), number: decodeFromFields("u64", fields.number), tsMs: decodeFromFields("u64", fields.ts_ms), expEarn: decodeFromFields("u64", fields.exp_earn) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): SnapshotNftEvent { if (!isSnapshotNftEvent(item.type)) { throw new Error("not a SnapshotNftEvent type");

 }

 return SnapshotNftEvent.reified( ).new( { sender: decodeFromFieldsWithTypes("address", item.fields.sender), nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id), number: decodeFromFieldsWithTypes("u64", item.fields.number), tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms), expEarn: decodeFromFieldsWithTypes("u64", item.fields.exp_earn) } ) }

 static fromBcs( data: Uint8Array ): SnapshotNftEvent { return SnapshotNftEvent.fromFields( SnapshotNftEvent.bcs.parse(data) ) }

 toJSONField() { return {

 sender: this.sender,nftId: this.nftId,number: this.number.toString(),tsMs: this.tsMs.toString(),expEarn: this.expEarn.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): SnapshotNftEvent { return SnapshotNftEvent.reified( ).new( { sender: decodeFromJSONField("address", field.sender), nftId: decodeFromJSONField(ID.reified(), field.nftId), number: decodeFromJSONField("u64", field.number), tsMs: decodeFromJSONField("u64", field.tsMs), expEarn: decodeFromJSONField("u64", field.expEarn) } ) }

 static fromJSON( json: Record<string, any> ): SnapshotNftEvent { if (json.$typeName !== SnapshotNftEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return SnapshotNftEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): SnapshotNftEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isSnapshotNftEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a SnapshotNftEvent object`); } return SnapshotNftEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<SnapshotNftEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching SnapshotNftEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isSnapshotNftEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a SnapshotNftEvent object`); }
 return SnapshotNftEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== StakeNftEvent =============================== */

export function isStakeNftEvent(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::StakeNftEvent"; }

export interface StakeNftEventFields { sender: ToField<"address">; nftId: ToField<ID>; number: ToField<"u64">; tsMs: ToField<"u64"> }

export type StakeNftEventReified = Reified< StakeNftEvent, StakeNftEventFields >;

export class StakeNftEvent implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::StakeNftEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = StakeNftEvent.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::StakeNftEvent";

 readonly $typeArgs: [];

 readonly sender: ToField<"address">; readonly nftId: ToField<ID>; readonly number: ToField<"u64">; readonly tsMs: ToField<"u64">

 private constructor(typeArgs: [], fields: StakeNftEventFields, ) { this.$fullTypeName = composeSuiType( StakeNftEvent.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::StakeNftEvent"; this.$typeArgs = typeArgs;

 this.sender = fields.sender;; this.nftId = fields.nftId;; this.number = fields.number;; this.tsMs = fields.tsMs; }

 static reified( ): StakeNftEventReified { return { typeName: StakeNftEvent.$typeName, fullTypeName: composeSuiType( StakeNftEvent.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::StakeNftEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => StakeNftEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => StakeNftEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => StakeNftEvent.fromBcs( data, ), bcs: StakeNftEvent.bcs, fromJSONField: (field: any) => StakeNftEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => StakeNftEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => StakeNftEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => StakeNftEvent.fetch( client, id, ), new: ( fields: StakeNftEventFields, ) => { return new StakeNftEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return StakeNftEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<StakeNftEvent>> { return phantom(StakeNftEvent.reified( )); } static get p() { return StakeNftEvent.phantom() }

 static get bcs() { return bcs.struct("StakeNftEvent", {

 sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), nft_id: ID.bcs, number: bcs.u64(), ts_ms: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): StakeNftEvent { return StakeNftEvent.reified( ).new( { sender: decodeFromFields("address", fields.sender), nftId: decodeFromFields(ID.reified(), fields.nft_id), number: decodeFromFields("u64", fields.number), tsMs: decodeFromFields("u64", fields.ts_ms) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): StakeNftEvent { if (!isStakeNftEvent(item.type)) { throw new Error("not a StakeNftEvent type");

 }

 return StakeNftEvent.reified( ).new( { sender: decodeFromFieldsWithTypes("address", item.fields.sender), nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id), number: decodeFromFieldsWithTypes("u64", item.fields.number), tsMs: decodeFromFieldsWithTypes("u64", item.fields.ts_ms) } ) }

 static fromBcs( data: Uint8Array ): StakeNftEvent { return StakeNftEvent.fromFields( StakeNftEvent.bcs.parse(data) ) }

 toJSONField() { return {

 sender: this.sender,nftId: this.nftId,number: this.number.toString(),tsMs: this.tsMs.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): StakeNftEvent { return StakeNftEvent.reified( ).new( { sender: decodeFromJSONField("address", field.sender), nftId: decodeFromJSONField(ID.reified(), field.nftId), number: decodeFromJSONField("u64", field.number), tsMs: decodeFromJSONField("u64", field.tsMs) } ) }

 static fromJSON( json: Record<string, any> ): StakeNftEvent { if (json.$typeName !== StakeNftEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return StakeNftEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): StakeNftEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isStakeNftEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a StakeNftEvent object`); } return StakeNftEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<StakeNftEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching StakeNftEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isStakeNftEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a StakeNftEvent object`); }
 return StakeNftEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== TransferNftEvent =============================== */

export function isTransferNftEvent(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::TransferNftEvent"; }

export interface TransferNftEventFields { sender: ToField<"address">; receiver: ToField<"address">; nftId: ToField<ID>; number: ToField<"u64"> }

export type TransferNftEventReified = Reified< TransferNftEvent, TransferNftEventFields >;

export class TransferNftEvent implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::TransferNftEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = TransferNftEvent.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::TransferNftEvent";

 readonly $typeArgs: [];

 readonly sender: ToField<"address">; readonly receiver: ToField<"address">; readonly nftId: ToField<ID>; readonly number: ToField<"u64">

 private constructor(typeArgs: [], fields: TransferNftEventFields, ) { this.$fullTypeName = composeSuiType( TransferNftEvent.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::TransferNftEvent"; this.$typeArgs = typeArgs;

 this.sender = fields.sender;; this.receiver = fields.receiver;; this.nftId = fields.nftId;; this.number = fields.number; }

 static reified( ): TransferNftEventReified { return { typeName: TransferNftEvent.$typeName, fullTypeName: composeSuiType( TransferNftEvent.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::TransferNftEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => TransferNftEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => TransferNftEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => TransferNftEvent.fromBcs( data, ), bcs: TransferNftEvent.bcs, fromJSONField: (field: any) => TransferNftEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => TransferNftEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => TransferNftEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => TransferNftEvent.fetch( client, id, ), new: ( fields: TransferNftEventFields, ) => { return new TransferNftEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return TransferNftEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<TransferNftEvent>> { return phantom(TransferNftEvent.reified( )); } static get p() { return TransferNftEvent.phantom() }

 static get bcs() { return bcs.struct("TransferNftEvent", {

 sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), receiver: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), nft_id: ID.bcs, number: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): TransferNftEvent { return TransferNftEvent.reified( ).new( { sender: decodeFromFields("address", fields.sender), receiver: decodeFromFields("address", fields.receiver), nftId: decodeFromFields(ID.reified(), fields.nft_id), number: decodeFromFields("u64", fields.number) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): TransferNftEvent { if (!isTransferNftEvent(item.type)) { throw new Error("not a TransferNftEvent type");

 }

 return TransferNftEvent.reified( ).new( { sender: decodeFromFieldsWithTypes("address", item.fields.sender), receiver: decodeFromFieldsWithTypes("address", item.fields.receiver), nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id), number: decodeFromFieldsWithTypes("u64", item.fields.number) } ) }

 static fromBcs( data: Uint8Array ): TransferNftEvent { return TransferNftEvent.fromFields( TransferNftEvent.bcs.parse(data) ) }

 toJSONField() { return {

 sender: this.sender,receiver: this.receiver,nftId: this.nftId,number: this.number.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): TransferNftEvent { return TransferNftEvent.reified( ).new( { sender: decodeFromJSONField("address", field.sender), receiver: decodeFromJSONField("address", field.receiver), nftId: decodeFromJSONField(ID.reified(), field.nftId), number: decodeFromJSONField("u64", field.number) } ) }

 static fromJSON( json: Record<string, any> ): TransferNftEvent { if (json.$typeName !== TransferNftEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return TransferNftEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): TransferNftEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isTransferNftEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a TransferNftEvent object`); } return TransferNftEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<TransferNftEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching TransferNftEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isTransferNftEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a TransferNftEvent object`); }
 return TransferNftEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UnstakeNftEvent =============================== */

export function isUnstakeNftEvent(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UnstakeNftEvent"; }

export interface UnstakeNftEventFields { sender: ToField<"address">; nftId: ToField<ID>; number: ToField<"u64"> }

export type UnstakeNftEventReified = Reified< UnstakeNftEvent, UnstakeNftEventFields >;

export class UnstakeNftEvent implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UnstakeNftEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = UnstakeNftEvent.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UnstakeNftEvent";

 readonly $typeArgs: [];

 readonly sender: ToField<"address">; readonly nftId: ToField<ID>; readonly number: ToField<"u64">

 private constructor(typeArgs: [], fields: UnstakeNftEventFields, ) { this.$fullTypeName = composeSuiType( UnstakeNftEvent.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UnstakeNftEvent"; this.$typeArgs = typeArgs;

 this.sender = fields.sender;; this.nftId = fields.nftId;; this.number = fields.number; }

 static reified( ): UnstakeNftEventReified { return { typeName: UnstakeNftEvent.$typeName, fullTypeName: composeSuiType( UnstakeNftEvent.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UnstakeNftEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UnstakeNftEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UnstakeNftEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UnstakeNftEvent.fromBcs( data, ), bcs: UnstakeNftEvent.bcs, fromJSONField: (field: any) => UnstakeNftEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UnstakeNftEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UnstakeNftEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UnstakeNftEvent.fetch( client, id, ), new: ( fields: UnstakeNftEventFields, ) => { return new UnstakeNftEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UnstakeNftEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UnstakeNftEvent>> { return phantom(UnstakeNftEvent.reified( )); } static get p() { return UnstakeNftEvent.phantom() }

 static get bcs() { return bcs.struct("UnstakeNftEvent", {

 sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), nft_id: ID.bcs, number: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UnstakeNftEvent { return UnstakeNftEvent.reified( ).new( { sender: decodeFromFields("address", fields.sender), nftId: decodeFromFields(ID.reified(), fields.nft_id), number: decodeFromFields("u64", fields.number) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UnstakeNftEvent { if (!isUnstakeNftEvent(item.type)) { throw new Error("not a UnstakeNftEvent type");

 }

 return UnstakeNftEvent.reified( ).new( { sender: decodeFromFieldsWithTypes("address", item.fields.sender), nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id), number: decodeFromFieldsWithTypes("u64", item.fields.number) } ) }

 static fromBcs( data: Uint8Array ): UnstakeNftEvent { return UnstakeNftEvent.fromFields( UnstakeNftEvent.bcs.parse(data) ) }

 toJSONField() { return {

 sender: this.sender,nftId: this.nftId,number: this.number.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UnstakeNftEvent { return UnstakeNftEvent.reified( ).new( { sender: decodeFromJSONField("address", field.sender), nftId: decodeFromJSONField(ID.reified(), field.nftId), number: decodeFromJSONField("u64", field.number) } ) }

 static fromJSON( json: Record<string, any> ): UnstakeNftEvent { if (json.$typeName !== UnstakeNftEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UnstakeNftEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UnstakeNftEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUnstakeNftEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UnstakeNftEvent object`); } return UnstakeNftEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UnstakeNftEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UnstakeNftEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUnstakeNftEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UnstakeNftEvent object`); }
 return UnstakeNftEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UpdateDepositEvent =============================== */

export function isUpdateDepositEvent(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateDepositEvent"; }

export interface UpdateDepositEventFields { sender: ToField<"address">; nftId: ToField<ID>; number: ToField<"u64">; before: ToField<"u64">; after: ToField<"u64"> }

export type UpdateDepositEventReified = Reified< UpdateDepositEvent, UpdateDepositEventFields >;

export class UpdateDepositEvent implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateDepositEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = UpdateDepositEvent.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateDepositEvent";

 readonly $typeArgs: [];

 readonly sender: ToField<"address">; readonly nftId: ToField<ID>; readonly number: ToField<"u64">; readonly before: ToField<"u64">; readonly after: ToField<"u64">

 private constructor(typeArgs: [], fields: UpdateDepositEventFields, ) { this.$fullTypeName = composeSuiType( UpdateDepositEvent.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateDepositEvent"; this.$typeArgs = typeArgs;

 this.sender = fields.sender;; this.nftId = fields.nftId;; this.number = fields.number;; this.before = fields.before;; this.after = fields.after; }

 static reified( ): UpdateDepositEventReified { return { typeName: UpdateDepositEvent.$typeName, fullTypeName: composeSuiType( UpdateDepositEvent.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateDepositEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UpdateDepositEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateDepositEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UpdateDepositEvent.fromBcs( data, ), bcs: UpdateDepositEvent.bcs, fromJSONField: (field: any) => UpdateDepositEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UpdateDepositEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UpdateDepositEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UpdateDepositEvent.fetch( client, id, ), new: ( fields: UpdateDepositEventFields, ) => { return new UpdateDepositEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpdateDepositEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UpdateDepositEvent>> { return phantom(UpdateDepositEvent.reified( )); } static get p() { return UpdateDepositEvent.phantom() }

 static get bcs() { return bcs.struct("UpdateDepositEvent", {

 sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }), nft_id: ID.bcs, number: bcs.u64(), before: bcs.u64(), after: bcs.u64()

}) };

 static fromFields( fields: Record<string, any> ): UpdateDepositEvent { return UpdateDepositEvent.reified( ).new( { sender: decodeFromFields("address", fields.sender), nftId: decodeFromFields(ID.reified(), fields.nft_id), number: decodeFromFields("u64", fields.number), before: decodeFromFields("u64", fields.before), after: decodeFromFields("u64", fields.after) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UpdateDepositEvent { if (!isUpdateDepositEvent(item.type)) { throw new Error("not a UpdateDepositEvent type");

 }

 return UpdateDepositEvent.reified( ).new( { sender: decodeFromFieldsWithTypes("address", item.fields.sender), nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id), number: decodeFromFieldsWithTypes("u64", item.fields.number), before: decodeFromFieldsWithTypes("u64", item.fields.before), after: decodeFromFieldsWithTypes("u64", item.fields.after) } ) }

 static fromBcs( data: Uint8Array ): UpdateDepositEvent { return UpdateDepositEvent.fromFields( UpdateDepositEvent.bcs.parse(data) ) }

 toJSONField() { return {

 sender: this.sender,nftId: this.nftId,number: this.number.toString(),before: this.before.toString(),after: this.after.toString(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UpdateDepositEvent { return UpdateDepositEvent.reified( ).new( { sender: decodeFromJSONField("address", field.sender), nftId: decodeFromJSONField(ID.reified(), field.nftId), number: decodeFromJSONField("u64", field.number), before: decodeFromJSONField("u64", field.before), after: decodeFromJSONField("u64", field.after) } ) }

 static fromJSON( json: Record<string, any> ): UpdateDepositEvent { if (json.$typeName !== UpdateDepositEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UpdateDepositEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UpdateDepositEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpdateDepositEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpdateDepositEvent object`); } return UpdateDepositEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UpdateDepositEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpdateDepositEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateDepositEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpdateDepositEvent object`); }
 return UpdateDepositEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }

/* ============================== UpdateUrlEvent =============================== */

export function isUpdateUrlEvent(type: string): boolean { type = compressSuiType(type); return type === "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateUrlEvent"; }

export interface UpdateUrlEventFields { nftId: ToField<ID>; number: ToField<"u64">; level: ToField<"u64">; url: ToField<Vector<"u8">> }

export type UpdateUrlEventReified = Reified< UpdateUrlEvent, UpdateUrlEventFields >;

export class UpdateUrlEvent implements StructClass { static readonly $typeName = "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateUrlEvent"; static readonly $numTypeParams = 0;

 readonly $typeName = UpdateUrlEvent.$typeName;

 readonly $fullTypeName: "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateUrlEvent";

 readonly $typeArgs: [];

 readonly nftId: ToField<ID>; readonly number: ToField<"u64">; readonly level: ToField<"u64">; readonly url: ToField<Vector<"u8">>

 private constructor(typeArgs: [], fields: UpdateUrlEventFields, ) { this.$fullTypeName = composeSuiType( UpdateUrlEvent.$typeName, ...typeArgs ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateUrlEvent"; this.$typeArgs = typeArgs;

 this.nftId = fields.nftId;; this.number = fields.number;; this.level = fields.level;; this.url = fields.url; }

 static reified( ): UpdateUrlEventReified { return { typeName: UpdateUrlEvent.$typeName, fullTypeName: composeSuiType( UpdateUrlEvent.$typeName, ...[] ) as "0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f::tails_staking::UpdateUrlEvent", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => UpdateUrlEvent.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateUrlEvent.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => UpdateUrlEvent.fromBcs( data, ), bcs: UpdateUrlEvent.bcs, fromJSONField: (field: any) => UpdateUrlEvent.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => UpdateUrlEvent.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => UpdateUrlEvent.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => UpdateUrlEvent.fetch( client, id, ), new: ( fields: UpdateUrlEventFields, ) => { return new UpdateUrlEvent( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return UpdateUrlEvent.reified() }

 static phantom( ): PhantomReified<ToTypeStr<UpdateUrlEvent>> { return phantom(UpdateUrlEvent.reified( )); } static get p() { return UpdateUrlEvent.phantom() }

 static get bcs() { return bcs.struct("UpdateUrlEvent", {

 nft_id: ID.bcs, number: bcs.u64(), level: bcs.u64(), url: bcs.vector(bcs.u8())

}) };

 static fromFields( fields: Record<string, any> ): UpdateUrlEvent { return UpdateUrlEvent.reified( ).new( { nftId: decodeFromFields(ID.reified(), fields.nft_id), number: decodeFromFields("u64", fields.number), level: decodeFromFields("u64", fields.level), url: decodeFromFields(reified.vector("u8"), fields.url) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): UpdateUrlEvent { if (!isUpdateUrlEvent(item.type)) { throw new Error("not a UpdateUrlEvent type");

 }

 return UpdateUrlEvent.reified( ).new( { nftId: decodeFromFieldsWithTypes(ID.reified(), item.fields.nft_id), number: decodeFromFieldsWithTypes("u64", item.fields.number), level: decodeFromFieldsWithTypes("u64", item.fields.level), url: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.url) } ) }

 static fromBcs( data: Uint8Array ): UpdateUrlEvent { return UpdateUrlEvent.fromFields( UpdateUrlEvent.bcs.parse(data) ) }

 toJSONField() { return {

 nftId: this.nftId,number: this.number.toString(),level: this.level.toString(),url: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.url),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): UpdateUrlEvent { return UpdateUrlEvent.reified( ).new( { nftId: decodeFromJSONField(ID.reified(), field.nftId), number: decodeFromJSONField("u64", field.number), level: decodeFromJSONField("u64", field.level), url: decodeFromJSONField(reified.vector("u8"), field.url) } ) }

 static fromJSON( json: Record<string, any> ): UpdateUrlEvent { if (json.$typeName !== UpdateUrlEvent.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return UpdateUrlEvent.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): UpdateUrlEvent { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isUpdateUrlEvent(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a UpdateUrlEvent object`); } return UpdateUrlEvent.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<UpdateUrlEvent> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching UpdateUrlEvent object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateUrlEvent(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a UpdateUrlEvent object`); }
 return UpdateUrlEvent.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
