import * as reified from "../../../../_framework/reified";
import {PhantomReified, Reified, StructClass, ToField, ToTypeStr, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {LinkedTable} from "../../0x2/linked-table/structs";
import {bcs, fromB64, fromHEX, toHEX} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui.js/client";

/* ============================== Authority =============================== */

export function isAuthority(type: string): boolean { type = compressSuiType(type); return type === "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::authority::Authority"; }

export interface AuthorityFields { whitelist: ToField<LinkedTable<"address", "bool">> }

export type AuthorityReified = Reified< Authority, AuthorityFields >;

export class Authority implements StructClass { static readonly $typeName = "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::authority::Authority"; static readonly $numTypeParams = 0;

 readonly $typeName = Authority.$typeName;

 readonly $fullTypeName: "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::authority::Authority";

 readonly $typeArgs: [];

 readonly whitelist: ToField<LinkedTable<"address", "bool">>

 private constructor(typeArgs: [], fields: AuthorityFields, ) { this.$fullTypeName = composeSuiType( Authority.$typeName, ...typeArgs ) as "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::authority::Authority"; this.$typeArgs = typeArgs;

 this.whitelist = fields.whitelist; }

 static reified( ): AuthorityReified { return { typeName: Authority.$typeName, fullTypeName: composeSuiType( Authority.$typeName, ...[] ) as "0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded::authority::Authority", typeArgs: [ ] as [], reifiedTypeArgs: [], fromFields: (fields: Record<string, any>) => Authority.fromFields( fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Authority.fromFieldsWithTypes( item, ), fromBcs: (data: Uint8Array) => Authority.fromBcs( data, ), bcs: Authority.bcs, fromJSONField: (field: any) => Authority.fromJSONField( field, ), fromJSON: (json: Record<string, any>) => Authority.fromJSON( json, ), fromSuiParsedData: (content: SuiParsedData) => Authority.fromSuiParsedData( content, ), fetch: async (client: SuiClient, id: string) => Authority.fetch( client, id, ), new: ( fields: AuthorityFields, ) => { return new Authority( [], fields ) }, kind: "StructClassReified", } }

 static get r() { return Authority.reified() }

 static phantom( ): PhantomReified<ToTypeStr<Authority>> { return phantom(Authority.reified( )); } static get p() { return Authority.phantom() }

 static get bcs() { return bcs.struct("Authority", {

 whitelist: LinkedTable.bcs(bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val), }))

}) };

 static fromFields( fields: Record<string, any> ): Authority { return Authority.reified( ).new( { whitelist: decodeFromFields(LinkedTable.reified("address", reified.phantom("bool")), fields.whitelist) } ) }

 static fromFieldsWithTypes( item: FieldsWithTypes ): Authority { if (!isAuthority(item.type)) { throw new Error("not a Authority type");

 }

 return Authority.reified( ).new( { whitelist: decodeFromFieldsWithTypes(LinkedTable.reified("address", reified.phantom("bool")), item.fields.whitelist) } ) }

 static fromBcs( data: Uint8Array ): Authority { return Authority.fromFields( Authority.bcs.parse(data) ) }

 toJSONField() { return {

 whitelist: this.whitelist.toJSONField(),

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField( field: any ): Authority { return Authority.reified( ).new( { whitelist: decodeFromJSONField(LinkedTable.reified("address", reified.phantom("bool")), field.whitelist) } ) }

 static fromJSON( json: Record<string, any> ): Authority { if (json.$typeName !== Authority.$typeName) { throw new Error("not a WithTwoGenerics json object") };

 return Authority.fromJSONField( json, ) }

 static fromSuiParsedData( content: SuiParsedData ): Authority { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isAuthority(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Authority object`); } return Authority.fromFieldsWithTypes( content ); }

 static async fetch( client: SuiClient, id: string ): Promise<Authority> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Authority object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isAuthority(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Authority object`); }
 return Authority.fromBcs( fromB64(res.data.bcs.bcsBytes) ); }

 }
