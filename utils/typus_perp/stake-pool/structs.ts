import * as reified from "../../_framework/reified";
import { TypeName } from "../../_dependencies/source/0x1/type-name/structs";
import { UID } from "../../_dependencies/source/0x2/object/structs";
import { VecMap } from "../../_dependencies/source/0x2/vec-map/structs";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    Vector,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    fieldToJSON,
    phantom,
} from "../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../_framework/util";
import { bcs, fromB64, fromHEX, toHEX } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== HarvestEvent =============================== */

export function isHarvestEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::HarvestEvent";
}

export interface HarvestEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveTokenType: ToField<TypeName>;
    harvestAmount: ToField<"u64">;
    fromUserShareIds: ToField<Vector<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
}

export type HarvestEventReified = Reified<HarvestEvent, HarvestEventFields>;

export class HarvestEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::HarvestEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = HarvestEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::HarvestEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveTokenType: ToField<TypeName>;
    readonly harvestAmount: ToField<"u64">;
    readonly fromUserShareIds: ToField<Vector<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: HarvestEventFields) {
        this.$fullTypeName = composeSuiType(HarvestEvent.$typeName, ...typeArgs) as "0x0::stake_pool::HarvestEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveTokenType = fields.incentiveTokenType;
        this.harvestAmount = fields.harvestAmount;
        this.fromUserShareIds = fields.fromUserShareIds;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): HarvestEventReified {
        return {
            typeName: HarvestEvent.$typeName,
            fullTypeName: composeSuiType(HarvestEvent.$typeName, ...[]) as "0x0::stake_pool::HarvestEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => HarvestEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => HarvestEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => HarvestEvent.fromBcs(data),
            bcs: HarvestEvent.bcs,
            fromJSONField: (field: any) => HarvestEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => HarvestEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => HarvestEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => HarvestEvent.fetch(client, id),
            new: (fields: HarvestEventFields) => {
                return new HarvestEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return HarvestEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<HarvestEvent>> {
        return phantom(HarvestEvent.reified());
    }
    static get p() {
        return HarvestEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("HarvestEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            incentive_token_type: TypeName.bcs,
            harvest_amount: bcs.u64(),
            from_user_share_ids: bcs.vector(bcs.u64()),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): HarvestEvent {
        return HarvestEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            incentiveTokenType: decodeFromFields(TypeName.reified(), fields.incentive_token_type),
            harvestAmount: decodeFromFields("u64", fields.harvest_amount),
            fromUserShareIds: decodeFromFields(reified.vector("u64"), fields.from_user_share_ids),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): HarvestEvent {
        if (!isHarvestEvent(item.type)) {
            throw new Error("not a HarvestEvent type");
        }

        return HarvestEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            incentiveTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.incentive_token_type),
            harvestAmount: decodeFromFieldsWithTypes("u64", item.fields.harvest_amount),
            fromUserShareIds: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.from_user_share_ids),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): HarvestEvent {
        return HarvestEvent.fromFields(HarvestEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveTokenType: this.incentiveTokenType.toJSONField(),
            harvestAmount: this.harvestAmount.toString(),
            fromUserShareIds: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.fromUserShareIds),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): HarvestEvent {
        return HarvestEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            incentiveTokenType: decodeFromJSONField(TypeName.reified(), field.incentiveTokenType),
            harvestAmount: decodeFromJSONField("u64", field.harvestAmount),
            fromUserShareIds: decodeFromJSONField(reified.vector("u64"), field.fromUserShareIds),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): HarvestEvent {
        if (json.$typeName !== HarvestEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return HarvestEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): HarvestEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isHarvestEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a HarvestEvent object`);
        }
        return HarvestEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<HarvestEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching HarvestEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isHarvestEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HarvestEvent object`);
        }
        return HarvestEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== ActivateIncentiveTokenEvent =============================== */

export function isActivateIncentiveTokenEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::ActivateIncentiveTokenEvent";
}

export interface ActivateIncentiveTokenEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}

export type ActivateIncentiveTokenEventReified = Reified<ActivateIncentiveTokenEvent, ActivateIncentiveTokenEventFields>;

export class ActivateIncentiveTokenEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::ActivateIncentiveTokenEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = ActivateIncentiveTokenEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::ActivateIncentiveTokenEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: ActivateIncentiveTokenEventFields) {
        this.$fullTypeName = composeSuiType(
            ActivateIncentiveTokenEvent.$typeName,
            ...typeArgs
        ) as "0x0::stake_pool::ActivateIncentiveTokenEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveToken = fields.incentiveToken;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): ActivateIncentiveTokenEventReified {
        return {
            typeName: ActivateIncentiveTokenEvent.$typeName,
            fullTypeName: composeSuiType(ActivateIncentiveTokenEvent.$typeName, ...[]) as "0x0::stake_pool::ActivateIncentiveTokenEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => ActivateIncentiveTokenEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => ActivateIncentiveTokenEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => ActivateIncentiveTokenEvent.fromBcs(data),
            bcs: ActivateIncentiveTokenEvent.bcs,
            fromJSONField: (field: any) => ActivateIncentiveTokenEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => ActivateIncentiveTokenEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => ActivateIncentiveTokenEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => ActivateIncentiveTokenEvent.fetch(client, id),
            new: (fields: ActivateIncentiveTokenEventFields) => {
                return new ActivateIncentiveTokenEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return ActivateIncentiveTokenEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<ActivateIncentiveTokenEvent>> {
        return phantom(ActivateIncentiveTokenEvent.reified());
    }
    static get p() {
        return ActivateIncentiveTokenEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("ActivateIncentiveTokenEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            incentive_token: TypeName.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): ActivateIncentiveTokenEvent {
        return ActivateIncentiveTokenEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            incentiveToken: decodeFromFields(TypeName.reified(), fields.incentive_token),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): ActivateIncentiveTokenEvent {
        if (!isActivateIncentiveTokenEvent(item.type)) {
            throw new Error("not a ActivateIncentiveTokenEvent type");
        }

        return ActivateIncentiveTokenEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            incentiveToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.incentive_token),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): ActivateIncentiveTokenEvent {
        return ActivateIncentiveTokenEvent.fromFields(ActivateIncentiveTokenEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveToken: this.incentiveToken.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): ActivateIncentiveTokenEvent {
        return ActivateIncentiveTokenEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            incentiveToken: decodeFromJSONField(TypeName.reified(), field.incentiveToken),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): ActivateIncentiveTokenEvent {
        if (json.$typeName !== ActivateIncentiveTokenEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return ActivateIncentiveTokenEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): ActivateIncentiveTokenEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isActivateIncentiveTokenEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a ActivateIncentiveTokenEvent object`);
        }
        return ActivateIncentiveTokenEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<ActivateIncentiveTokenEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching ActivateIncentiveTokenEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isActivateIncentiveTokenEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a ActivateIncentiveTokenEvent object`);
        }
        return ActivateIncentiveTokenEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== AddIncentiveTokenEvent =============================== */

export function isAddIncentiveTokenEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::AddIncentiveTokenEvent";
}

export interface AddIncentiveTokenEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveToken: ToField<TypeName>;
    incentiveInfo: ToField<IncentiveInfo>;
    incentiveConfig: ToField<IncentiveConfig>;
    u64Padding: ToField<Vector<"u64">>;
}

export type AddIncentiveTokenEventReified = Reified<AddIncentiveTokenEvent, AddIncentiveTokenEventFields>;

export class AddIncentiveTokenEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::AddIncentiveTokenEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = AddIncentiveTokenEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::AddIncentiveTokenEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveToken: ToField<TypeName>;
    readonly incentiveInfo: ToField<IncentiveInfo>;
    readonly incentiveConfig: ToField<IncentiveConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: AddIncentiveTokenEventFields) {
        this.$fullTypeName = composeSuiType(AddIncentiveTokenEvent.$typeName, ...typeArgs) as "0x0::stake_pool::AddIncentiveTokenEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveToken = fields.incentiveToken;
        this.incentiveInfo = fields.incentiveInfo;
        this.incentiveConfig = fields.incentiveConfig;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): AddIncentiveTokenEventReified {
        return {
            typeName: AddIncentiveTokenEvent.$typeName,
            fullTypeName: composeSuiType(AddIncentiveTokenEvent.$typeName, ...[]) as "0x0::stake_pool::AddIncentiveTokenEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AddIncentiveTokenEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AddIncentiveTokenEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AddIncentiveTokenEvent.fromBcs(data),
            bcs: AddIncentiveTokenEvent.bcs,
            fromJSONField: (field: any) => AddIncentiveTokenEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AddIncentiveTokenEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AddIncentiveTokenEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => AddIncentiveTokenEvent.fetch(client, id),
            new: (fields: AddIncentiveTokenEventFields) => {
                return new AddIncentiveTokenEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AddIncentiveTokenEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AddIncentiveTokenEvent>> {
        return phantom(AddIncentiveTokenEvent.reified());
    }
    static get p() {
        return AddIncentiveTokenEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("AddIncentiveTokenEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            incentive_token: TypeName.bcs,
            incentive_info: IncentiveInfo.bcs,
            incentive_config: IncentiveConfig.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): AddIncentiveTokenEvent {
        return AddIncentiveTokenEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            incentiveToken: decodeFromFields(TypeName.reified(), fields.incentive_token),
            incentiveInfo: decodeFromFields(IncentiveInfo.reified(), fields.incentive_info),
            incentiveConfig: decodeFromFields(IncentiveConfig.reified(), fields.incentive_config),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AddIncentiveTokenEvent {
        if (!isAddIncentiveTokenEvent(item.type)) {
            throw new Error("not a AddIncentiveTokenEvent type");
        }

        return AddIncentiveTokenEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            incentiveToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.incentive_token),
            incentiveInfo: decodeFromFieldsWithTypes(IncentiveInfo.reified(), item.fields.incentive_info),
            incentiveConfig: decodeFromFieldsWithTypes(IncentiveConfig.reified(), item.fields.incentive_config),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): AddIncentiveTokenEvent {
        return AddIncentiveTokenEvent.fromFields(AddIncentiveTokenEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveToken: this.incentiveToken.toJSONField(),
            incentiveInfo: this.incentiveInfo.toJSONField(),
            incentiveConfig: this.incentiveConfig.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): AddIncentiveTokenEvent {
        return AddIncentiveTokenEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            incentiveToken: decodeFromJSONField(TypeName.reified(), field.incentiveToken),
            incentiveInfo: decodeFromJSONField(IncentiveInfo.reified(), field.incentiveInfo),
            incentiveConfig: decodeFromJSONField(IncentiveConfig.reified(), field.incentiveConfig),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): AddIncentiveTokenEvent {
        if (json.$typeName !== AddIncentiveTokenEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AddIncentiveTokenEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AddIncentiveTokenEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAddIncentiveTokenEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AddIncentiveTokenEvent object`);
        }
        return AddIncentiveTokenEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<AddIncentiveTokenEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AddIncentiveTokenEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAddIncentiveTokenEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AddIncentiveTokenEvent object`);
        }
        return AddIncentiveTokenEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== DeactivateIncentiveTokenEvent =============================== */

export function isDeactivateIncentiveTokenEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::DeactivateIncentiveTokenEvent";
}

export interface DeactivateIncentiveTokenEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveToken: ToField<TypeName>;
    u64Padding: ToField<Vector<"u64">>;
}

export type DeactivateIncentiveTokenEventReified = Reified<DeactivateIncentiveTokenEvent, DeactivateIncentiveTokenEventFields>;

export class DeactivateIncentiveTokenEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::DeactivateIncentiveTokenEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = DeactivateIncentiveTokenEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::DeactivateIncentiveTokenEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveToken: ToField<TypeName>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: DeactivateIncentiveTokenEventFields) {
        this.$fullTypeName = composeSuiType(
            DeactivateIncentiveTokenEvent.$typeName,
            ...typeArgs
        ) as "0x0::stake_pool::DeactivateIncentiveTokenEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveToken = fields.incentiveToken;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): DeactivateIncentiveTokenEventReified {
        return {
            typeName: DeactivateIncentiveTokenEvent.$typeName,
            fullTypeName: composeSuiType(
                DeactivateIncentiveTokenEvent.$typeName,
                ...[]
            ) as "0x0::stake_pool::DeactivateIncentiveTokenEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DeactivateIncentiveTokenEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DeactivateIncentiveTokenEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DeactivateIncentiveTokenEvent.fromBcs(data),
            bcs: DeactivateIncentiveTokenEvent.bcs,
            fromJSONField: (field: any) => DeactivateIncentiveTokenEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DeactivateIncentiveTokenEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DeactivateIncentiveTokenEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => DeactivateIncentiveTokenEvent.fetch(client, id),
            new: (fields: DeactivateIncentiveTokenEventFields) => {
                return new DeactivateIncentiveTokenEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DeactivateIncentiveTokenEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DeactivateIncentiveTokenEvent>> {
        return phantom(DeactivateIncentiveTokenEvent.reified());
    }
    static get p() {
        return DeactivateIncentiveTokenEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("DeactivateIncentiveTokenEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            incentive_token: TypeName.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): DeactivateIncentiveTokenEvent {
        return DeactivateIncentiveTokenEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            incentiveToken: decodeFromFields(TypeName.reified(), fields.incentive_token),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DeactivateIncentiveTokenEvent {
        if (!isDeactivateIncentiveTokenEvent(item.type)) {
            throw new Error("not a DeactivateIncentiveTokenEvent type");
        }

        return DeactivateIncentiveTokenEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            incentiveToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.incentive_token),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): DeactivateIncentiveTokenEvent {
        return DeactivateIncentiveTokenEvent.fromFields(DeactivateIncentiveTokenEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveToken: this.incentiveToken.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): DeactivateIncentiveTokenEvent {
        return DeactivateIncentiveTokenEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            incentiveToken: decodeFromJSONField(TypeName.reified(), field.incentiveToken),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): DeactivateIncentiveTokenEvent {
        if (json.$typeName !== DeactivateIncentiveTokenEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DeactivateIncentiveTokenEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DeactivateIncentiveTokenEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDeactivateIncentiveTokenEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DeactivateIncentiveTokenEvent object`);
        }
        return DeactivateIncentiveTokenEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<DeactivateIncentiveTokenEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DeactivateIncentiveTokenEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDeactivateIncentiveTokenEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DeactivateIncentiveTokenEvent object`);
        }
        return DeactivateIncentiveTokenEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== DepositIncentiveEvent =============================== */

export function isDepositIncentiveEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::DepositIncentiveEvent";
}

export interface DepositIncentiveEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveTokenType: ToField<TypeName>;
    depositAmount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type DepositIncentiveEventReified = Reified<DepositIncentiveEvent, DepositIncentiveEventFields>;

export class DepositIncentiveEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::DepositIncentiveEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = DepositIncentiveEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::DepositIncentiveEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveTokenType: ToField<TypeName>;
    readonly depositAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: DepositIncentiveEventFields) {
        this.$fullTypeName = composeSuiType(DepositIncentiveEvent.$typeName, ...typeArgs) as "0x0::stake_pool::DepositIncentiveEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveTokenType = fields.incentiveTokenType;
        this.depositAmount = fields.depositAmount;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): DepositIncentiveEventReified {
        return {
            typeName: DepositIncentiveEvent.$typeName,
            fullTypeName: composeSuiType(DepositIncentiveEvent.$typeName, ...[]) as "0x0::stake_pool::DepositIncentiveEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => DepositIncentiveEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => DepositIncentiveEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => DepositIncentiveEvent.fromBcs(data),
            bcs: DepositIncentiveEvent.bcs,
            fromJSONField: (field: any) => DepositIncentiveEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => DepositIncentiveEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => DepositIncentiveEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => DepositIncentiveEvent.fetch(client, id),
            new: (fields: DepositIncentiveEventFields) => {
                return new DepositIncentiveEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return DepositIncentiveEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<DepositIncentiveEvent>> {
        return phantom(DepositIncentiveEvent.reified());
    }
    static get p() {
        return DepositIncentiveEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("DepositIncentiveEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            incentive_token_type: TypeName.bcs,
            deposit_amount: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): DepositIncentiveEvent {
        return DepositIncentiveEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            incentiveTokenType: decodeFromFields(TypeName.reified(), fields.incentive_token_type),
            depositAmount: decodeFromFields("u64", fields.deposit_amount),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): DepositIncentiveEvent {
        if (!isDepositIncentiveEvent(item.type)) {
            throw new Error("not a DepositIncentiveEvent type");
        }

        return DepositIncentiveEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            incentiveTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.incentive_token_type),
            depositAmount: decodeFromFieldsWithTypes("u64", item.fields.deposit_amount),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): DepositIncentiveEvent {
        return DepositIncentiveEvent.fromFields(DepositIncentiveEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveTokenType: this.incentiveTokenType.toJSONField(),
            depositAmount: this.depositAmount.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): DepositIncentiveEvent {
        return DepositIncentiveEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            incentiveTokenType: decodeFromJSONField(TypeName.reified(), field.incentiveTokenType),
            depositAmount: decodeFromJSONField("u64", field.depositAmount),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): DepositIncentiveEvent {
        if (json.$typeName !== DepositIncentiveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return DepositIncentiveEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): DepositIncentiveEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isDepositIncentiveEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a DepositIncentiveEvent object`);
        }
        return DepositIncentiveEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<DepositIncentiveEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching DepositIncentiveEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isDepositIncentiveEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a DepositIncentiveEvent object`);
        }
        return DepositIncentiveEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== HarvestPerUserShareEvent =============================== */

export function isHarvestPerUserShareEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::HarvestPerUserShareEvent";
}

export interface HarvestPerUserShareEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveTokenType: ToField<TypeName>;
    harvestAmount: ToField<"u64">;
    userShareId: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type HarvestPerUserShareEventReified = Reified<HarvestPerUserShareEvent, HarvestPerUserShareEventFields>;

export class HarvestPerUserShareEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::HarvestPerUserShareEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = HarvestPerUserShareEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::HarvestPerUserShareEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveTokenType: ToField<TypeName>;
    readonly harvestAmount: ToField<"u64">;
    readonly userShareId: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: HarvestPerUserShareEventFields) {
        this.$fullTypeName = composeSuiType(HarvestPerUserShareEvent.$typeName, ...typeArgs) as "0x0::stake_pool::HarvestPerUserShareEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveTokenType = fields.incentiveTokenType;
        this.harvestAmount = fields.harvestAmount;
        this.userShareId = fields.userShareId;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): HarvestPerUserShareEventReified {
        return {
            typeName: HarvestPerUserShareEvent.$typeName,
            fullTypeName: composeSuiType(HarvestPerUserShareEvent.$typeName, ...[]) as "0x0::stake_pool::HarvestPerUserShareEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => HarvestPerUserShareEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => HarvestPerUserShareEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => HarvestPerUserShareEvent.fromBcs(data),
            bcs: HarvestPerUserShareEvent.bcs,
            fromJSONField: (field: any) => HarvestPerUserShareEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => HarvestPerUserShareEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => HarvestPerUserShareEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => HarvestPerUserShareEvent.fetch(client, id),
            new: (fields: HarvestPerUserShareEventFields) => {
                return new HarvestPerUserShareEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return HarvestPerUserShareEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<HarvestPerUserShareEvent>> {
        return phantom(HarvestPerUserShareEvent.reified());
    }
    static get p() {
        return HarvestPerUserShareEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("HarvestPerUserShareEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            incentive_token_type: TypeName.bcs,
            harvest_amount: bcs.u64(),
            user_share_id: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): HarvestPerUserShareEvent {
        return HarvestPerUserShareEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            incentiveTokenType: decodeFromFields(TypeName.reified(), fields.incentive_token_type),
            harvestAmount: decodeFromFields("u64", fields.harvest_amount),
            userShareId: decodeFromFields("u64", fields.user_share_id),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): HarvestPerUserShareEvent {
        if (!isHarvestPerUserShareEvent(item.type)) {
            throw new Error("not a HarvestPerUserShareEvent type");
        }

        return HarvestPerUserShareEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            incentiveTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.incentive_token_type),
            harvestAmount: decodeFromFieldsWithTypes("u64", item.fields.harvest_amount),
            userShareId: decodeFromFieldsWithTypes("u64", item.fields.user_share_id),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): HarvestPerUserShareEvent {
        return HarvestPerUserShareEvent.fromFields(HarvestPerUserShareEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveTokenType: this.incentiveTokenType.toJSONField(),
            harvestAmount: this.harvestAmount.toString(),
            userShareId: this.userShareId.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): HarvestPerUserShareEvent {
        return HarvestPerUserShareEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            incentiveTokenType: decodeFromJSONField(TypeName.reified(), field.incentiveTokenType),
            harvestAmount: decodeFromJSONField("u64", field.harvestAmount),
            userShareId: decodeFromJSONField("u64", field.userShareId),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): HarvestPerUserShareEvent {
        if (json.$typeName !== HarvestPerUserShareEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return HarvestPerUserShareEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): HarvestPerUserShareEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isHarvestPerUserShareEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a HarvestPerUserShareEvent object`);
        }
        return HarvestPerUserShareEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<HarvestPerUserShareEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching HarvestPerUserShareEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isHarvestPerUserShareEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a HarvestPerUserShareEvent object`);
        }
        return HarvestPerUserShareEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== Incentive =============================== */

export function isIncentive(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::Incentive";
}

export interface IncentiveFields {
    tokenType: ToField<TypeName>;
    config: ToField<IncentiveConfig>;
    info: ToField<IncentiveInfo>;
}

export type IncentiveReified = Reified<Incentive, IncentiveFields>;

export class Incentive implements StructClass {
    static readonly $typeName = "0x0::stake_pool::Incentive";
    static readonly $numTypeParams = 0;

    readonly $typeName = Incentive.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::Incentive";

    readonly $typeArgs: [];

    readonly tokenType: ToField<TypeName>;
    readonly config: ToField<IncentiveConfig>;
    readonly info: ToField<IncentiveInfo>;

    private constructor(typeArgs: [], fields: IncentiveFields) {
        this.$fullTypeName = composeSuiType(Incentive.$typeName, ...typeArgs) as "0x0::stake_pool::Incentive";
        this.$typeArgs = typeArgs;

        this.tokenType = fields.tokenType;
        this.config = fields.config;
        this.info = fields.info;
    }

    static reified(): IncentiveReified {
        return {
            typeName: Incentive.$typeName,
            fullTypeName: composeSuiType(Incentive.$typeName, ...[]) as "0x0::stake_pool::Incentive",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Incentive.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Incentive.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Incentive.fromBcs(data),
            bcs: Incentive.bcs,
            fromJSONField: (field: any) => Incentive.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Incentive.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Incentive.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => Incentive.fetch(client, id),
            new: (fields: IncentiveFields) => {
                return new Incentive([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Incentive.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Incentive>> {
        return phantom(Incentive.reified());
    }
    static get p() {
        return Incentive.phantom();
    }

    static get bcs() {
        return bcs.struct("Incentive", {
            token_type: TypeName.bcs,
            config: IncentiveConfig.bcs,
            info: IncentiveInfo.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): Incentive {
        return Incentive.reified().new({
            tokenType: decodeFromFields(TypeName.reified(), fields.token_type),
            config: decodeFromFields(IncentiveConfig.reified(), fields.config),
            info: decodeFromFields(IncentiveInfo.reified(), fields.info),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Incentive {
        if (!isIncentive(item.type)) {
            throw new Error("not a Incentive type");
        }

        return Incentive.reified().new({
            tokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.token_type),
            config: decodeFromFieldsWithTypes(IncentiveConfig.reified(), item.fields.config),
            info: decodeFromFieldsWithTypes(IncentiveInfo.reified(), item.fields.info),
        });
    }

    static fromBcs(data: Uint8Array): Incentive {
        return Incentive.fromFields(Incentive.bcs.parse(data));
    }

    toJSONField() {
        return {
            tokenType: this.tokenType.toJSONField(),
            config: this.config.toJSONField(),
            info: this.info.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): Incentive {
        return Incentive.reified().new({
            tokenType: decodeFromJSONField(TypeName.reified(), field.tokenType),
            config: decodeFromJSONField(IncentiveConfig.reified(), field.config),
            info: decodeFromJSONField(IncentiveInfo.reified(), field.info),
        });
    }

    static fromJSON(json: Record<string, any>): Incentive {
        if (json.$typeName !== Incentive.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Incentive.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Incentive {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isIncentive(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Incentive object`);
        }
        return Incentive.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<Incentive> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Incentive object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isIncentive(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Incentive object`);
        }
        return Incentive.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== IncentiveConfig =============================== */

export function isIncentiveConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::IncentiveConfig";
}

export interface IncentiveConfigFields {
    lockedUpIncentiveMultiplierBp: ToField<Vector<"u64">>;
    periodIncentiveAmount: ToField<"u64">;
    incentiveIntervalTsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type IncentiveConfigReified = Reified<IncentiveConfig, IncentiveConfigFields>;

export class IncentiveConfig implements StructClass {
    static readonly $typeName = "0x0::stake_pool::IncentiveConfig";
    static readonly $numTypeParams = 0;

    readonly $typeName = IncentiveConfig.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::IncentiveConfig";

    readonly $typeArgs: [];

    readonly lockedUpIncentiveMultiplierBp: ToField<Vector<"u64">>;
    readonly periodIncentiveAmount: ToField<"u64">;
    readonly incentiveIntervalTsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: IncentiveConfigFields) {
        this.$fullTypeName = composeSuiType(IncentiveConfig.$typeName, ...typeArgs) as "0x0::stake_pool::IncentiveConfig";
        this.$typeArgs = typeArgs;

        this.lockedUpIncentiveMultiplierBp = fields.lockedUpIncentiveMultiplierBp;
        this.periodIncentiveAmount = fields.periodIncentiveAmount;
        this.incentiveIntervalTsMs = fields.incentiveIntervalTsMs;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): IncentiveConfigReified {
        return {
            typeName: IncentiveConfig.$typeName,
            fullTypeName: composeSuiType(IncentiveConfig.$typeName, ...[]) as "0x0::stake_pool::IncentiveConfig",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => IncentiveConfig.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => IncentiveConfig.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => IncentiveConfig.fromBcs(data),
            bcs: IncentiveConfig.bcs,
            fromJSONField: (field: any) => IncentiveConfig.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => IncentiveConfig.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => IncentiveConfig.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => IncentiveConfig.fetch(client, id),
            new: (fields: IncentiveConfigFields) => {
                return new IncentiveConfig([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return IncentiveConfig.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<IncentiveConfig>> {
        return phantom(IncentiveConfig.reified());
    }
    static get p() {
        return IncentiveConfig.phantom();
    }

    static get bcs() {
        return bcs.struct("IncentiveConfig", {
            locked_up_incentive_multiplier_bp: bcs.vector(bcs.u64()),
            period_incentive_amount: bcs.u64(),
            incentive_interval_ts_ms: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): IncentiveConfig {
        return IncentiveConfig.reified().new({
            lockedUpIncentiveMultiplierBp: decodeFromFields(reified.vector("u64"), fields.locked_up_incentive_multiplier_bp),
            periodIncentiveAmount: decodeFromFields("u64", fields.period_incentive_amount),
            incentiveIntervalTsMs: decodeFromFields("u64", fields.incentive_interval_ts_ms),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): IncentiveConfig {
        if (!isIncentiveConfig(item.type)) {
            throw new Error("not a IncentiveConfig type");
        }

        return IncentiveConfig.reified().new({
            lockedUpIncentiveMultiplierBp: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.locked_up_incentive_multiplier_bp),
            periodIncentiveAmount: decodeFromFieldsWithTypes("u64", item.fields.period_incentive_amount),
            incentiveIntervalTsMs: decodeFromFieldsWithTypes("u64", item.fields.incentive_interval_ts_ms),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): IncentiveConfig {
        return IncentiveConfig.fromFields(IncentiveConfig.bcs.parse(data));
    }

    toJSONField() {
        return {
            lockedUpIncentiveMultiplierBp: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.lockedUpIncentiveMultiplierBp),
            periodIncentiveAmount: this.periodIncentiveAmount.toString(),
            incentiveIntervalTsMs: this.incentiveIntervalTsMs.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): IncentiveConfig {
        return IncentiveConfig.reified().new({
            lockedUpIncentiveMultiplierBp: decodeFromJSONField(reified.vector("u64"), field.lockedUpIncentiveMultiplierBp),
            periodIncentiveAmount: decodeFromJSONField("u64", field.periodIncentiveAmount),
            incentiveIntervalTsMs: decodeFromJSONField("u64", field.incentiveIntervalTsMs),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): IncentiveConfig {
        if (json.$typeName !== IncentiveConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return IncentiveConfig.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): IncentiveConfig {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isIncentiveConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a IncentiveConfig object`);
        }
        return IncentiveConfig.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<IncentiveConfig> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching IncentiveConfig object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isIncentiveConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a IncentiveConfig object`);
        }
        return IncentiveConfig.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== IncentiveInfo =============================== */

export function isIncentiveInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::IncentiveInfo";
}

export interface IncentiveInfoFields {
    active: ToField<"bool">;
    lastAllocateTsMs: ToField<"u64">;
    incentivePriceIndex: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type IncentiveInfoReified = Reified<IncentiveInfo, IncentiveInfoFields>;

export class IncentiveInfo implements StructClass {
    static readonly $typeName = "0x0::stake_pool::IncentiveInfo";
    static readonly $numTypeParams = 0;

    readonly $typeName = IncentiveInfo.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::IncentiveInfo";

    readonly $typeArgs: [];

    readonly active: ToField<"bool">;
    readonly lastAllocateTsMs: ToField<"u64">;
    readonly incentivePriceIndex: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: IncentiveInfoFields) {
        this.$fullTypeName = composeSuiType(IncentiveInfo.$typeName, ...typeArgs) as "0x0::stake_pool::IncentiveInfo";
        this.$typeArgs = typeArgs;

        this.active = fields.active;
        this.lastAllocateTsMs = fields.lastAllocateTsMs;
        this.incentivePriceIndex = fields.incentivePriceIndex;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): IncentiveInfoReified {
        return {
            typeName: IncentiveInfo.$typeName,
            fullTypeName: composeSuiType(IncentiveInfo.$typeName, ...[]) as "0x0::stake_pool::IncentiveInfo",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => IncentiveInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => IncentiveInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => IncentiveInfo.fromBcs(data),
            bcs: IncentiveInfo.bcs,
            fromJSONField: (field: any) => IncentiveInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => IncentiveInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => IncentiveInfo.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => IncentiveInfo.fetch(client, id),
            new: (fields: IncentiveInfoFields) => {
                return new IncentiveInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return IncentiveInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<IncentiveInfo>> {
        return phantom(IncentiveInfo.reified());
    }
    static get p() {
        return IncentiveInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("IncentiveInfo", {
            active: bcs.bool(),
            last_allocate_ts_ms: bcs.u64(),
            incentive_price_index: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): IncentiveInfo {
        return IncentiveInfo.reified().new({
            active: decodeFromFields("bool", fields.active),
            lastAllocateTsMs: decodeFromFields("u64", fields.last_allocate_ts_ms),
            incentivePriceIndex: decodeFromFields("u64", fields.incentive_price_index),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): IncentiveInfo {
        if (!isIncentiveInfo(item.type)) {
            throw new Error("not a IncentiveInfo type");
        }

        return IncentiveInfo.reified().new({
            active: decodeFromFieldsWithTypes("bool", item.fields.active),
            lastAllocateTsMs: decodeFromFieldsWithTypes("u64", item.fields.last_allocate_ts_ms),
            incentivePriceIndex: decodeFromFieldsWithTypes("u64", item.fields.incentive_price_index),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): IncentiveInfo {
        return IncentiveInfo.fromFields(IncentiveInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            active: this.active,
            lastAllocateTsMs: this.lastAllocateTsMs.toString(),
            incentivePriceIndex: this.incentivePriceIndex.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): IncentiveInfo {
        return IncentiveInfo.reified().new({
            active: decodeFromJSONField("bool", field.active),
            lastAllocateTsMs: decodeFromJSONField("u64", field.lastAllocateTsMs),
            incentivePriceIndex: decodeFromJSONField("u64", field.incentivePriceIndex),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): IncentiveInfo {
        if (json.$typeName !== IncentiveInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return IncentiveInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): IncentiveInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isIncentiveInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a IncentiveInfo object`);
        }
        return IncentiveInfo.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<IncentiveInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching IncentiveInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isIncentiveInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a IncentiveInfo object`);
        }
        return IncentiveInfo.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== LpUserShare =============================== */

export function isLpUserShare(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::LpUserShare";
}

export interface LpUserShareFields {
    user: ToField<"address">;
    userShareId: ToField<"u64">;
    share: ToField<"u64">;
    stakeTsMs: ToField<"u64">;
    lockedUpPeriodTsMs: ToField<"u64">;
    lastIncentivePriceIndex: ToField<VecMap<TypeName, "u64">>;
    lastHarvestTsMs: ToField<VecMap<TypeName, "u64">>;
    u64Padding: ToField<Vector<"u64">>;
}

export type LpUserShareReified = Reified<LpUserShare, LpUserShareFields>;

export class LpUserShare implements StructClass {
    static readonly $typeName = "0x0::stake_pool::LpUserShare";
    static readonly $numTypeParams = 0;

    readonly $typeName = LpUserShare.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::LpUserShare";

    readonly $typeArgs: [];

    readonly user: ToField<"address">;
    readonly userShareId: ToField<"u64">;
    readonly share: ToField<"u64">;
    readonly stakeTsMs: ToField<"u64">;
    readonly lockedUpPeriodTsMs: ToField<"u64">;
    readonly lastIncentivePriceIndex: ToField<VecMap<TypeName, "u64">>;
    readonly lastHarvestTsMs: ToField<VecMap<TypeName, "u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: LpUserShareFields) {
        this.$fullTypeName = composeSuiType(LpUserShare.$typeName, ...typeArgs) as "0x0::stake_pool::LpUserShare";
        this.$typeArgs = typeArgs;

        this.user = fields.user;
        this.userShareId = fields.userShareId;
        this.share = fields.share;
        this.stakeTsMs = fields.stakeTsMs;
        this.lockedUpPeriodTsMs = fields.lockedUpPeriodTsMs;
        this.lastIncentivePriceIndex = fields.lastIncentivePriceIndex;
        this.lastHarvestTsMs = fields.lastHarvestTsMs;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): LpUserShareReified {
        return {
            typeName: LpUserShare.$typeName,
            fullTypeName: composeSuiType(LpUserShare.$typeName, ...[]) as "0x0::stake_pool::LpUserShare",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => LpUserShare.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => LpUserShare.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => LpUserShare.fromBcs(data),
            bcs: LpUserShare.bcs,
            fromJSONField: (field: any) => LpUserShare.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => LpUserShare.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => LpUserShare.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => LpUserShare.fetch(client, id),
            new: (fields: LpUserShareFields) => {
                return new LpUserShare([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return LpUserShare.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<LpUserShare>> {
        return phantom(LpUserShare.reified());
    }
    static get p() {
        return LpUserShare.phantom();
    }

    static get bcs() {
        return bcs.struct("LpUserShare", {
            user: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            user_share_id: bcs.u64(),
            share: bcs.u64(),
            stake_ts_ms: bcs.u64(),
            locked_up_period_ts_ms: bcs.u64(),
            last_incentive_price_index: VecMap.bcs(TypeName.bcs, bcs.u64()),
            last_harvest_ts_ms: VecMap.bcs(TypeName.bcs, bcs.u64()),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): LpUserShare {
        return LpUserShare.reified().new({
            user: decodeFromFields("address", fields.user),
            userShareId: decodeFromFields("u64", fields.user_share_id),
            share: decodeFromFields("u64", fields.share),
            stakeTsMs: decodeFromFields("u64", fields.stake_ts_ms),
            lockedUpPeriodTsMs: decodeFromFields("u64", fields.locked_up_period_ts_ms),
            lastIncentivePriceIndex: decodeFromFields(VecMap.reified(TypeName.reified(), "u64"), fields.last_incentive_price_index),
            lastHarvestTsMs: decodeFromFields(VecMap.reified(TypeName.reified(), "u64"), fields.last_harvest_ts_ms),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): LpUserShare {
        if (!isLpUserShare(item.type)) {
            throw new Error("not a LpUserShare type");
        }

        return LpUserShare.reified().new({
            user: decodeFromFieldsWithTypes("address", item.fields.user),
            userShareId: decodeFromFieldsWithTypes("u64", item.fields.user_share_id),
            share: decodeFromFieldsWithTypes("u64", item.fields.share),
            stakeTsMs: decodeFromFieldsWithTypes("u64", item.fields.stake_ts_ms),
            lockedUpPeriodTsMs: decodeFromFieldsWithTypes("u64", item.fields.locked_up_period_ts_ms),
            lastIncentivePriceIndex: decodeFromFieldsWithTypes(
                VecMap.reified(TypeName.reified(), "u64"),
                item.fields.last_incentive_price_index
            ),
            lastHarvestTsMs: decodeFromFieldsWithTypes(VecMap.reified(TypeName.reified(), "u64"), item.fields.last_harvest_ts_ms),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): LpUserShare {
        return LpUserShare.fromFields(LpUserShare.bcs.parse(data));
    }

    toJSONField() {
        return {
            user: this.user,
            userShareId: this.userShareId.toString(),
            share: this.share.toString(),
            stakeTsMs: this.stakeTsMs.toString(),
            lockedUpPeriodTsMs: this.lockedUpPeriodTsMs.toString(),
            lastIncentivePriceIndex: this.lastIncentivePriceIndex.toJSONField(),
            lastHarvestTsMs: this.lastHarvestTsMs.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): LpUserShare {
        return LpUserShare.reified().new({
            user: decodeFromJSONField("address", field.user),
            userShareId: decodeFromJSONField("u64", field.userShareId),
            share: decodeFromJSONField("u64", field.share),
            stakeTsMs: decodeFromJSONField("u64", field.stakeTsMs),
            lockedUpPeriodTsMs: decodeFromJSONField("u64", field.lockedUpPeriodTsMs),
            lastIncentivePriceIndex: decodeFromJSONField(VecMap.reified(TypeName.reified(), "u64"), field.lastIncentivePriceIndex),
            lastHarvestTsMs: decodeFromJSONField(VecMap.reified(TypeName.reified(), "u64"), field.lastHarvestTsMs),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): LpUserShare {
        if (json.$typeName !== LpUserShare.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return LpUserShare.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): LpUserShare {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isLpUserShare(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a LpUserShare object`);
        }
        return LpUserShare.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<LpUserShare> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching LpUserShare object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isLpUserShare(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a LpUserShare object`);
        }
        return LpUserShare.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== NewStakePoolEvent =============================== */

export function isNewStakePoolEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::NewStakePoolEvent";
}

export interface NewStakePoolEventFields {
    sender: ToField<"address">;
    stakePoolInfo: ToField<StakePoolInfo>;
    stakePoolConfig: ToField<StakePoolConfig>;
    u64Padding: ToField<Vector<"u64">>;
}

export type NewStakePoolEventReified = Reified<NewStakePoolEvent, NewStakePoolEventFields>;

export class NewStakePoolEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::NewStakePoolEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = NewStakePoolEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::NewStakePoolEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly stakePoolInfo: ToField<StakePoolInfo>;
    readonly stakePoolConfig: ToField<StakePoolConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: NewStakePoolEventFields) {
        this.$fullTypeName = composeSuiType(NewStakePoolEvent.$typeName, ...typeArgs) as "0x0::stake_pool::NewStakePoolEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.stakePoolInfo = fields.stakePoolInfo;
        this.stakePoolConfig = fields.stakePoolConfig;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): NewStakePoolEventReified {
        return {
            typeName: NewStakePoolEvent.$typeName,
            fullTypeName: composeSuiType(NewStakePoolEvent.$typeName, ...[]) as "0x0::stake_pool::NewStakePoolEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => NewStakePoolEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => NewStakePoolEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => NewStakePoolEvent.fromBcs(data),
            bcs: NewStakePoolEvent.bcs,
            fromJSONField: (field: any) => NewStakePoolEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => NewStakePoolEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => NewStakePoolEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => NewStakePoolEvent.fetch(client, id),
            new: (fields: NewStakePoolEventFields) => {
                return new NewStakePoolEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return NewStakePoolEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<NewStakePoolEvent>> {
        return phantom(NewStakePoolEvent.reified());
    }
    static get p() {
        return NewStakePoolEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("NewStakePoolEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            stake_pool_info: StakePoolInfo.bcs,
            stake_pool_config: StakePoolConfig.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): NewStakePoolEvent {
        return NewStakePoolEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            stakePoolInfo: decodeFromFields(StakePoolInfo.reified(), fields.stake_pool_info),
            stakePoolConfig: decodeFromFields(StakePoolConfig.reified(), fields.stake_pool_config),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): NewStakePoolEvent {
        if (!isNewStakePoolEvent(item.type)) {
            throw new Error("not a NewStakePoolEvent type");
        }

        return NewStakePoolEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            stakePoolInfo: decodeFromFieldsWithTypes(StakePoolInfo.reified(), item.fields.stake_pool_info),
            stakePoolConfig: decodeFromFieldsWithTypes(StakePoolConfig.reified(), item.fields.stake_pool_config),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): NewStakePoolEvent {
        return NewStakePoolEvent.fromFields(NewStakePoolEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            stakePoolInfo: this.stakePoolInfo.toJSONField(),
            stakePoolConfig: this.stakePoolConfig.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): NewStakePoolEvent {
        return NewStakePoolEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            stakePoolInfo: decodeFromJSONField(StakePoolInfo.reified(), field.stakePoolInfo),
            stakePoolConfig: decodeFromJSONField(StakePoolConfig.reified(), field.stakePoolConfig),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): NewStakePoolEvent {
        if (json.$typeName !== NewStakePoolEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return NewStakePoolEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): NewStakePoolEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isNewStakePoolEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a NewStakePoolEvent object`);
        }
        return NewStakePoolEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<NewStakePoolEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching NewStakePoolEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isNewStakePoolEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a NewStakePoolEvent object`);
        }
        return NewStakePoolEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== RemoveIncentiveTokenEvent =============================== */

export function isRemoveIncentiveTokenEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::RemoveIncentiveTokenEvent";
}

export interface RemoveIncentiveTokenEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveToken: ToField<TypeName>;
    incentiveBalanceValue: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type RemoveIncentiveTokenEventReified = Reified<RemoveIncentiveTokenEvent, RemoveIncentiveTokenEventFields>;

export class RemoveIncentiveTokenEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::RemoveIncentiveTokenEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = RemoveIncentiveTokenEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::RemoveIncentiveTokenEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveToken: ToField<TypeName>;
    readonly incentiveBalanceValue: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: RemoveIncentiveTokenEventFields) {
        this.$fullTypeName = composeSuiType(
            RemoveIncentiveTokenEvent.$typeName,
            ...typeArgs
        ) as "0x0::stake_pool::RemoveIncentiveTokenEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveToken = fields.incentiveToken;
        this.incentiveBalanceValue = fields.incentiveBalanceValue;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): RemoveIncentiveTokenEventReified {
        return {
            typeName: RemoveIncentiveTokenEvent.$typeName,
            fullTypeName: composeSuiType(RemoveIncentiveTokenEvent.$typeName, ...[]) as "0x0::stake_pool::RemoveIncentiveTokenEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RemoveIncentiveTokenEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RemoveIncentiveTokenEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RemoveIncentiveTokenEvent.fromBcs(data),
            bcs: RemoveIncentiveTokenEvent.bcs,
            fromJSONField: (field: any) => RemoveIncentiveTokenEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RemoveIncentiveTokenEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RemoveIncentiveTokenEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => RemoveIncentiveTokenEvent.fetch(client, id),
            new: (fields: RemoveIncentiveTokenEventFields) => {
                return new RemoveIncentiveTokenEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RemoveIncentiveTokenEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RemoveIncentiveTokenEvent>> {
        return phantom(RemoveIncentiveTokenEvent.reified());
    }
    static get p() {
        return RemoveIncentiveTokenEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RemoveIncentiveTokenEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            incentive_token: TypeName.bcs,
            incentive_balance_value: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): RemoveIncentiveTokenEvent {
        return RemoveIncentiveTokenEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            incentiveToken: decodeFromFields(TypeName.reified(), fields.incentive_token),
            incentiveBalanceValue: decodeFromFields("u64", fields.incentive_balance_value),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RemoveIncentiveTokenEvent {
        if (!isRemoveIncentiveTokenEvent(item.type)) {
            throw new Error("not a RemoveIncentiveTokenEvent type");
        }

        return RemoveIncentiveTokenEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            incentiveToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.incentive_token),
            incentiveBalanceValue: decodeFromFieldsWithTypes("u64", item.fields.incentive_balance_value),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): RemoveIncentiveTokenEvent {
        return RemoveIncentiveTokenEvent.fromFields(RemoveIncentiveTokenEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveToken: this.incentiveToken.toJSONField(),
            incentiveBalanceValue: this.incentiveBalanceValue.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): RemoveIncentiveTokenEvent {
        return RemoveIncentiveTokenEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            incentiveToken: decodeFromJSONField(TypeName.reified(), field.incentiveToken),
            incentiveBalanceValue: decodeFromJSONField("u64", field.incentiveBalanceValue),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): RemoveIncentiveTokenEvent {
        if (json.$typeName !== RemoveIncentiveTokenEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RemoveIncentiveTokenEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RemoveIncentiveTokenEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRemoveIncentiveTokenEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RemoveIncentiveTokenEvent object`);
        }
        return RemoveIncentiveTokenEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<RemoveIncentiveTokenEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RemoveIncentiveTokenEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRemoveIncentiveTokenEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RemoveIncentiveTokenEvent object`);
        }
        return RemoveIncentiveTokenEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== RestakeEvent =============================== */

export function isRestakeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::RestakeEvent";
}

export interface RestakeEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    userShareId: ToField<"u64">;
    addAmount: ToField<"u64">;
    lpUserShareStakeAmount: ToField<"u64">;
    lockedUpPeriodTsMs: ToField<"u64">;
    stakeTsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type RestakeEventReified = Reified<RestakeEvent, RestakeEventFields>;

export class RestakeEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::RestakeEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = RestakeEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::RestakeEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly userShareId: ToField<"u64">;
    readonly addAmount: ToField<"u64">;
    readonly lpUserShareStakeAmount: ToField<"u64">;
    readonly lockedUpPeriodTsMs: ToField<"u64">;
    readonly stakeTsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: RestakeEventFields) {
        this.$fullTypeName = composeSuiType(RestakeEvent.$typeName, ...typeArgs) as "0x0::stake_pool::RestakeEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.userShareId = fields.userShareId;
        this.addAmount = fields.addAmount;
        this.lpUserShareStakeAmount = fields.lpUserShareStakeAmount;
        this.lockedUpPeriodTsMs = fields.lockedUpPeriodTsMs;
        this.stakeTsMs = fields.stakeTsMs;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): RestakeEventReified {
        return {
            typeName: RestakeEvent.$typeName,
            fullTypeName: composeSuiType(RestakeEvent.$typeName, ...[]) as "0x0::stake_pool::RestakeEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => RestakeEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => RestakeEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => RestakeEvent.fromBcs(data),
            bcs: RestakeEvent.bcs,
            fromJSONField: (field: any) => RestakeEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => RestakeEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => RestakeEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => RestakeEvent.fetch(client, id),
            new: (fields: RestakeEventFields) => {
                return new RestakeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return RestakeEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<RestakeEvent>> {
        return phantom(RestakeEvent.reified());
    }
    static get p() {
        return RestakeEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("RestakeEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            lp_token_type: TypeName.bcs,
            user_share_id: bcs.u64(),
            add_amount: bcs.u64(),
            lp_user_share_stake_amount: bcs.u64(),
            locked_up_period_ts_ms: bcs.u64(),
            stake_ts_ms: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): RestakeEvent {
        return RestakeEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            lpTokenType: decodeFromFields(TypeName.reified(), fields.lp_token_type),
            userShareId: decodeFromFields("u64", fields.user_share_id),
            addAmount: decodeFromFields("u64", fields.add_amount),
            lpUserShareStakeAmount: decodeFromFields("u64", fields.lp_user_share_stake_amount),
            lockedUpPeriodTsMs: decodeFromFields("u64", fields.locked_up_period_ts_ms),
            stakeTsMs: decodeFromFields("u64", fields.stake_ts_ms),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): RestakeEvent {
        if (!isRestakeEvent(item.type)) {
            throw new Error("not a RestakeEvent type");
        }

        return RestakeEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            lpTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.lp_token_type),
            userShareId: decodeFromFieldsWithTypes("u64", item.fields.user_share_id),
            addAmount: decodeFromFieldsWithTypes("u64", item.fields.add_amount),
            lpUserShareStakeAmount: decodeFromFieldsWithTypes("u64", item.fields.lp_user_share_stake_amount),
            lockedUpPeriodTsMs: decodeFromFieldsWithTypes("u64", item.fields.locked_up_period_ts_ms),
            stakeTsMs: decodeFromFieldsWithTypes("u64", item.fields.stake_ts_ms),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): RestakeEvent {
        return RestakeEvent.fromFields(RestakeEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            userShareId: this.userShareId.toString(),
            addAmount: this.addAmount.toString(),
            lpUserShareStakeAmount: this.lpUserShareStakeAmount.toString(),
            lockedUpPeriodTsMs: this.lockedUpPeriodTsMs.toString(),
            stakeTsMs: this.stakeTsMs.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): RestakeEvent {
        return RestakeEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            lpTokenType: decodeFromJSONField(TypeName.reified(), field.lpTokenType),
            userShareId: decodeFromJSONField("u64", field.userShareId),
            addAmount: decodeFromJSONField("u64", field.addAmount),
            lpUserShareStakeAmount: decodeFromJSONField("u64", field.lpUserShareStakeAmount),
            lockedUpPeriodTsMs: decodeFromJSONField("u64", field.lockedUpPeriodTsMs),
            stakeTsMs: decodeFromJSONField("u64", field.stakeTsMs),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): RestakeEvent {
        if (json.$typeName !== RestakeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return RestakeEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): RestakeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isRestakeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a RestakeEvent object`);
        }
        return RestakeEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<RestakeEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching RestakeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isRestakeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a RestakeEvent object`);
        }
        return RestakeEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== StakeEvent =============================== */

export function isStakeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::StakeEvent";
}

export interface StakeEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    stakeAmount: ToField<"u64">;
    userShareId: ToField<"u64">;
    stakeTsMs: ToField<"u64">;
    lockedUpPeriodTsMs: ToField<"u64">;
    lastIncentivePriceIndex: ToField<VecMap<TypeName, "u64">>;
    u64Padding: ToField<Vector<"u64">>;
}

export type StakeEventReified = Reified<StakeEvent, StakeEventFields>;

export class StakeEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::StakeEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = StakeEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::StakeEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly stakeAmount: ToField<"u64">;
    readonly userShareId: ToField<"u64">;
    readonly stakeTsMs: ToField<"u64">;
    readonly lockedUpPeriodTsMs: ToField<"u64">;
    readonly lastIncentivePriceIndex: ToField<VecMap<TypeName, "u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: StakeEventFields) {
        this.$fullTypeName = composeSuiType(StakeEvent.$typeName, ...typeArgs) as "0x0::stake_pool::StakeEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.stakeAmount = fields.stakeAmount;
        this.userShareId = fields.userShareId;
        this.stakeTsMs = fields.stakeTsMs;
        this.lockedUpPeriodTsMs = fields.lockedUpPeriodTsMs;
        this.lastIncentivePriceIndex = fields.lastIncentivePriceIndex;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): StakeEventReified {
        return {
            typeName: StakeEvent.$typeName,
            fullTypeName: composeSuiType(StakeEvent.$typeName, ...[]) as "0x0::stake_pool::StakeEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => StakeEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => StakeEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => StakeEvent.fromBcs(data),
            bcs: StakeEvent.bcs,
            fromJSONField: (field: any) => StakeEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => StakeEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => StakeEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => StakeEvent.fetch(client, id),
            new: (fields: StakeEventFields) => {
                return new StakeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return StakeEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<StakeEvent>> {
        return phantom(StakeEvent.reified());
    }
    static get p() {
        return StakeEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("StakeEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            lp_token_type: TypeName.bcs,
            stake_amount: bcs.u64(),
            user_share_id: bcs.u64(),
            stake_ts_ms: bcs.u64(),
            locked_up_period_ts_ms: bcs.u64(),
            last_incentive_price_index: VecMap.bcs(TypeName.bcs, bcs.u64()),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): StakeEvent {
        return StakeEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            lpTokenType: decodeFromFields(TypeName.reified(), fields.lp_token_type),
            stakeAmount: decodeFromFields("u64", fields.stake_amount),
            userShareId: decodeFromFields("u64", fields.user_share_id),
            stakeTsMs: decodeFromFields("u64", fields.stake_ts_ms),
            lockedUpPeriodTsMs: decodeFromFields("u64", fields.locked_up_period_ts_ms),
            lastIncentivePriceIndex: decodeFromFields(VecMap.reified(TypeName.reified(), "u64"), fields.last_incentive_price_index),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): StakeEvent {
        if (!isStakeEvent(item.type)) {
            throw new Error("not a StakeEvent type");
        }

        return StakeEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            lpTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.lp_token_type),
            stakeAmount: decodeFromFieldsWithTypes("u64", item.fields.stake_amount),
            userShareId: decodeFromFieldsWithTypes("u64", item.fields.user_share_id),
            stakeTsMs: decodeFromFieldsWithTypes("u64", item.fields.stake_ts_ms),
            lockedUpPeriodTsMs: decodeFromFieldsWithTypes("u64", item.fields.locked_up_period_ts_ms),
            lastIncentivePriceIndex: decodeFromFieldsWithTypes(
                VecMap.reified(TypeName.reified(), "u64"),
                item.fields.last_incentive_price_index
            ),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): StakeEvent {
        return StakeEvent.fromFields(StakeEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            stakeAmount: this.stakeAmount.toString(),
            userShareId: this.userShareId.toString(),
            stakeTsMs: this.stakeTsMs.toString(),
            lockedUpPeriodTsMs: this.lockedUpPeriodTsMs.toString(),
            lastIncentivePriceIndex: this.lastIncentivePriceIndex.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): StakeEvent {
        return StakeEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            lpTokenType: decodeFromJSONField(TypeName.reified(), field.lpTokenType),
            stakeAmount: decodeFromJSONField("u64", field.stakeAmount),
            userShareId: decodeFromJSONField("u64", field.userShareId),
            stakeTsMs: decodeFromJSONField("u64", field.stakeTsMs),
            lockedUpPeriodTsMs: decodeFromJSONField("u64", field.lockedUpPeriodTsMs),
            lastIncentivePriceIndex: decodeFromJSONField(VecMap.reified(TypeName.reified(), "u64"), field.lastIncentivePriceIndex),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): StakeEvent {
        if (json.$typeName !== StakeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return StakeEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): StakeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStakeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a StakeEvent object`);
        }
        return StakeEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<StakeEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching StakeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isStakeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakeEvent object`);
        }
        return StakeEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== StakePool =============================== */

export function isStakePool(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::StakePool";
}

export interface StakePoolFields {
    id: ToField<UID>;
    poolInfo: ToField<StakePoolInfo>;
    config: ToField<StakePoolConfig>;
    incentives: ToField<Vector<Incentive>>;
    u64Padding: ToField<Vector<"u64">>;
}

export type StakePoolReified = Reified<StakePool, StakePoolFields>;

export class StakePool implements StructClass {
    static readonly $typeName = "0x0::stake_pool::StakePool";
    static readonly $numTypeParams = 0;

    readonly $typeName = StakePool.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::StakePool";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly poolInfo: ToField<StakePoolInfo>;
    readonly config: ToField<StakePoolConfig>;
    readonly incentives: ToField<Vector<Incentive>>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: StakePoolFields) {
        this.$fullTypeName = composeSuiType(StakePool.$typeName, ...typeArgs) as "0x0::stake_pool::StakePool";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.poolInfo = fields.poolInfo;
        this.config = fields.config;
        this.incentives = fields.incentives;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): StakePoolReified {
        return {
            typeName: StakePool.$typeName,
            fullTypeName: composeSuiType(StakePool.$typeName, ...[]) as "0x0::stake_pool::StakePool",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => StakePool.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => StakePool.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => StakePool.fromBcs(data),
            bcs: StakePool.bcs,
            fromJSONField: (field: any) => StakePool.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => StakePool.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => StakePool.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => StakePool.fetch(client, id),
            new: (fields: StakePoolFields) => {
                return new StakePool([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return StakePool.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<StakePool>> {
        return phantom(StakePool.reified());
    }
    static get p() {
        return StakePool.phantom();
    }

    static get bcs() {
        return bcs.struct("StakePool", {
            id: UID.bcs,
            pool_info: StakePoolInfo.bcs,
            config: StakePoolConfig.bcs,
            incentives: bcs.vector(Incentive.bcs),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): StakePool {
        return StakePool.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            poolInfo: decodeFromFields(StakePoolInfo.reified(), fields.pool_info),
            config: decodeFromFields(StakePoolConfig.reified(), fields.config),
            incentives: decodeFromFields(reified.vector(Incentive.reified()), fields.incentives),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): StakePool {
        if (!isStakePool(item.type)) {
            throw new Error("not a StakePool type");
        }

        return StakePool.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            poolInfo: decodeFromFieldsWithTypes(StakePoolInfo.reified(), item.fields.pool_info),
            config: decodeFromFieldsWithTypes(StakePoolConfig.reified(), item.fields.config),
            incentives: decodeFromFieldsWithTypes(reified.vector(Incentive.reified()), item.fields.incentives),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): StakePool {
        return StakePool.fromFields(StakePool.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            poolInfo: this.poolInfo.toJSONField(),
            config: this.config.toJSONField(),
            incentives: fieldToJSON<Vector<Incentive>>(`vector<0x0::stake_pool::Incentive>`, this.incentives),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): StakePool {
        return StakePool.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            poolInfo: decodeFromJSONField(StakePoolInfo.reified(), field.poolInfo),
            config: decodeFromJSONField(StakePoolConfig.reified(), field.config),
            incentives: decodeFromJSONField(reified.vector(Incentive.reified()), field.incentives),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): StakePool {
        if (json.$typeName !== StakePool.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return StakePool.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): StakePool {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStakePool(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a StakePool object`);
        }
        return StakePool.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<StakePool> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching StakePool object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isStakePool(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakePool object`);
        }
        return StakePool.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== StakePoolConfig =============================== */

export function isStakePoolConfig(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::StakePoolConfig";
}

export interface StakePoolConfigFields {
    availableLockedUpPeriodTsMs: ToField<Vector<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
}

export type StakePoolConfigReified = Reified<StakePoolConfig, StakePoolConfigFields>;

export class StakePoolConfig implements StructClass {
    static readonly $typeName = "0x0::stake_pool::StakePoolConfig";
    static readonly $numTypeParams = 0;

    readonly $typeName = StakePoolConfig.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::StakePoolConfig";

    readonly $typeArgs: [];

    readonly availableLockedUpPeriodTsMs: ToField<Vector<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: StakePoolConfigFields) {
        this.$fullTypeName = composeSuiType(StakePoolConfig.$typeName, ...typeArgs) as "0x0::stake_pool::StakePoolConfig";
        this.$typeArgs = typeArgs;

        this.availableLockedUpPeriodTsMs = fields.availableLockedUpPeriodTsMs;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): StakePoolConfigReified {
        return {
            typeName: StakePoolConfig.$typeName,
            fullTypeName: composeSuiType(StakePoolConfig.$typeName, ...[]) as "0x0::stake_pool::StakePoolConfig",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => StakePoolConfig.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => StakePoolConfig.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => StakePoolConfig.fromBcs(data),
            bcs: StakePoolConfig.bcs,
            fromJSONField: (field: any) => StakePoolConfig.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => StakePoolConfig.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => StakePoolConfig.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => StakePoolConfig.fetch(client, id),
            new: (fields: StakePoolConfigFields) => {
                return new StakePoolConfig([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return StakePoolConfig.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<StakePoolConfig>> {
        return phantom(StakePoolConfig.reified());
    }
    static get p() {
        return StakePoolConfig.phantom();
    }

    static get bcs() {
        return bcs.struct("StakePoolConfig", {
            available_locked_up_period_ts_ms: bcs.vector(bcs.u64()),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): StakePoolConfig {
        return StakePoolConfig.reified().new({
            availableLockedUpPeriodTsMs: decodeFromFields(reified.vector("u64"), fields.available_locked_up_period_ts_ms),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): StakePoolConfig {
        if (!isStakePoolConfig(item.type)) {
            throw new Error("not a StakePoolConfig type");
        }

        return StakePoolConfig.reified().new({
            availableLockedUpPeriodTsMs: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.available_locked_up_period_ts_ms),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): StakePoolConfig {
        return StakePoolConfig.fromFields(StakePoolConfig.bcs.parse(data));
    }

    toJSONField() {
        return {
            availableLockedUpPeriodTsMs: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.availableLockedUpPeriodTsMs),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): StakePoolConfig {
        return StakePoolConfig.reified().new({
            availableLockedUpPeriodTsMs: decodeFromJSONField(reified.vector("u64"), field.availableLockedUpPeriodTsMs),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): StakePoolConfig {
        if (json.$typeName !== StakePoolConfig.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return StakePoolConfig.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): StakePoolConfig {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStakePoolConfig(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a StakePoolConfig object`);
        }
        return StakePoolConfig.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<StakePoolConfig> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching StakePoolConfig object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isStakePoolConfig(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakePoolConfig object`);
        }
        return StakePoolConfig.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== StakePoolInfo =============================== */

export function isStakePoolInfo(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::StakePoolInfo";
}

export interface StakePoolInfoFields {
    stakeToken: ToField<TypeName>;
    index: ToField<"u64">;
    nextUserShareId: ToField<"u64">;
    totalShare: ToField<"u64">;
    active: ToField<"bool">;
    u64Padding: ToField<Vector<"u64">>;
}

export type StakePoolInfoReified = Reified<StakePoolInfo, StakePoolInfoFields>;

export class StakePoolInfo implements StructClass {
    static readonly $typeName = "0x0::stake_pool::StakePoolInfo";
    static readonly $numTypeParams = 0;

    readonly $typeName = StakePoolInfo.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::StakePoolInfo";

    readonly $typeArgs: [];

    readonly stakeToken: ToField<TypeName>;
    readonly index: ToField<"u64">;
    readonly nextUserShareId: ToField<"u64">;
    readonly totalShare: ToField<"u64">;
    readonly active: ToField<"bool">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: StakePoolInfoFields) {
        this.$fullTypeName = composeSuiType(StakePoolInfo.$typeName, ...typeArgs) as "0x0::stake_pool::StakePoolInfo";
        this.$typeArgs = typeArgs;

        this.stakeToken = fields.stakeToken;
        this.index = fields.index;
        this.nextUserShareId = fields.nextUserShareId;
        this.totalShare = fields.totalShare;
        this.active = fields.active;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): StakePoolInfoReified {
        return {
            typeName: StakePoolInfo.$typeName,
            fullTypeName: composeSuiType(StakePoolInfo.$typeName, ...[]) as "0x0::stake_pool::StakePoolInfo",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => StakePoolInfo.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => StakePoolInfo.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => StakePoolInfo.fromBcs(data),
            bcs: StakePoolInfo.bcs,
            fromJSONField: (field: any) => StakePoolInfo.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => StakePoolInfo.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => StakePoolInfo.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => StakePoolInfo.fetch(client, id),
            new: (fields: StakePoolInfoFields) => {
                return new StakePoolInfo([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return StakePoolInfo.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<StakePoolInfo>> {
        return phantom(StakePoolInfo.reified());
    }
    static get p() {
        return StakePoolInfo.phantom();
    }

    static get bcs() {
        return bcs.struct("StakePoolInfo", {
            stake_token: TypeName.bcs,
            index: bcs.u64(),
            next_user_share_id: bcs.u64(),
            total_share: bcs.u64(),
            active: bcs.bool(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): StakePoolInfo {
        return StakePoolInfo.reified().new({
            stakeToken: decodeFromFields(TypeName.reified(), fields.stake_token),
            index: decodeFromFields("u64", fields.index),
            nextUserShareId: decodeFromFields("u64", fields.next_user_share_id),
            totalShare: decodeFromFields("u64", fields.total_share),
            active: decodeFromFields("bool", fields.active),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): StakePoolInfo {
        if (!isStakePoolInfo(item.type)) {
            throw new Error("not a StakePoolInfo type");
        }

        return StakePoolInfo.reified().new({
            stakeToken: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.stake_token),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            nextUserShareId: decodeFromFieldsWithTypes("u64", item.fields.next_user_share_id),
            totalShare: decodeFromFieldsWithTypes("u64", item.fields.total_share),
            active: decodeFromFieldsWithTypes("bool", item.fields.active),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): StakePoolInfo {
        return StakePoolInfo.fromFields(StakePoolInfo.bcs.parse(data));
    }

    toJSONField() {
        return {
            stakeToken: this.stakeToken.toJSONField(),
            index: this.index.toString(),
            nextUserShareId: this.nextUserShareId.toString(),
            totalShare: this.totalShare.toString(),
            active: this.active,
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): StakePoolInfo {
        return StakePoolInfo.reified().new({
            stakeToken: decodeFromJSONField(TypeName.reified(), field.stakeToken),
            index: decodeFromJSONField("u64", field.index),
            nextUserShareId: decodeFromJSONField("u64", field.nextUserShareId),
            totalShare: decodeFromJSONField("u64", field.totalShare),
            active: decodeFromJSONField("bool", field.active),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): StakePoolInfo {
        if (json.$typeName !== StakePoolInfo.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return StakePoolInfo.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): StakePoolInfo {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStakePoolInfo(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a StakePoolInfo object`);
        }
        return StakePoolInfo.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<StakePoolInfo> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching StakePoolInfo object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isStakePoolInfo(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakePoolInfo object`);
        }
        return StakePoolInfo.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== StakePoolRegistry =============================== */

export function isStakePoolRegistry(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::StakePoolRegistry";
}

export interface StakePoolRegistryFields {
    id: ToField<UID>;
    numPool: ToField<"u64">;
}

export type StakePoolRegistryReified = Reified<StakePoolRegistry, StakePoolRegistryFields>;

export class StakePoolRegistry implements StructClass {
    static readonly $typeName = "0x0::stake_pool::StakePoolRegistry";
    static readonly $numTypeParams = 0;

    readonly $typeName = StakePoolRegistry.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::StakePoolRegistry";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly numPool: ToField<"u64">;

    private constructor(typeArgs: [], fields: StakePoolRegistryFields) {
        this.$fullTypeName = composeSuiType(StakePoolRegistry.$typeName, ...typeArgs) as "0x0::stake_pool::StakePoolRegistry";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.numPool = fields.numPool;
    }

    static reified(): StakePoolRegistryReified {
        return {
            typeName: StakePoolRegistry.$typeName,
            fullTypeName: composeSuiType(StakePoolRegistry.$typeName, ...[]) as "0x0::stake_pool::StakePoolRegistry",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => StakePoolRegistry.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => StakePoolRegistry.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => StakePoolRegistry.fromBcs(data),
            bcs: StakePoolRegistry.bcs,
            fromJSONField: (field: any) => StakePoolRegistry.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => StakePoolRegistry.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => StakePoolRegistry.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => StakePoolRegistry.fetch(client, id),
            new: (fields: StakePoolRegistryFields) => {
                return new StakePoolRegistry([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return StakePoolRegistry.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<StakePoolRegistry>> {
        return phantom(StakePoolRegistry.reified());
    }
    static get p() {
        return StakePoolRegistry.phantom();
    }

    static get bcs() {
        return bcs.struct("StakePoolRegistry", {
            id: UID.bcs,
            num_pool: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): StakePoolRegistry {
        return StakePoolRegistry.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            numPool: decodeFromFields("u64", fields.num_pool),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): StakePoolRegistry {
        if (!isStakePoolRegistry(item.type)) {
            throw new Error("not a StakePoolRegistry type");
        }

        return StakePoolRegistry.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            numPool: decodeFromFieldsWithTypes("u64", item.fields.num_pool),
        });
    }

    static fromBcs(data: Uint8Array): StakePoolRegistry {
        return StakePoolRegistry.fromFields(StakePoolRegistry.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            numPool: this.numPool.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): StakePoolRegistry {
        return StakePoolRegistry.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            numPool: decodeFromJSONField("u64", field.numPool),
        });
    }

    static fromJSON(json: Record<string, any>): StakePoolRegistry {
        if (json.$typeName !== StakePoolRegistry.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return StakePoolRegistry.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): StakePoolRegistry {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isStakePoolRegistry(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a StakePoolRegistry object`);
        }
        return StakePoolRegistry.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<StakePoolRegistry> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching StakePoolRegistry object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isStakePoolRegistry(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a StakePoolRegistry object`);
        }
        return StakePoolRegistry.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UnstakeEvent =============================== */

export function isUnstakeEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::UnstakeEvent";
}

export interface UnstakeEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    lpTokenType: ToField<TypeName>;
    userShareId: ToField<"u64">;
    unstakeAmount: ToField<"u64">;
    unstakeTsMs: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type UnstakeEventReified = Reified<UnstakeEvent, UnstakeEventFields>;

export class UnstakeEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::UnstakeEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UnstakeEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::UnstakeEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly lpTokenType: ToField<TypeName>;
    readonly userShareId: ToField<"u64">;
    readonly unstakeAmount: ToField<"u64">;
    readonly unstakeTsMs: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: UnstakeEventFields) {
        this.$fullTypeName = composeSuiType(UnstakeEvent.$typeName, ...typeArgs) as "0x0::stake_pool::UnstakeEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.lpTokenType = fields.lpTokenType;
        this.userShareId = fields.userShareId;
        this.unstakeAmount = fields.unstakeAmount;
        this.unstakeTsMs = fields.unstakeTsMs;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): UnstakeEventReified {
        return {
            typeName: UnstakeEvent.$typeName,
            fullTypeName: composeSuiType(UnstakeEvent.$typeName, ...[]) as "0x0::stake_pool::UnstakeEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UnstakeEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UnstakeEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UnstakeEvent.fromBcs(data),
            bcs: UnstakeEvent.bcs,
            fromJSONField: (field: any) => UnstakeEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UnstakeEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UnstakeEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => UnstakeEvent.fetch(client, id),
            new: (fields: UnstakeEventFields) => {
                return new UnstakeEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UnstakeEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UnstakeEvent>> {
        return phantom(UnstakeEvent.reified());
    }
    static get p() {
        return UnstakeEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UnstakeEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            lp_token_type: TypeName.bcs,
            user_share_id: bcs.u64(),
            unstake_amount: bcs.u64(),
            unstake_ts_ms: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): UnstakeEvent {
        return UnstakeEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            lpTokenType: decodeFromFields(TypeName.reified(), fields.lp_token_type),
            userShareId: decodeFromFields("u64", fields.user_share_id),
            unstakeAmount: decodeFromFields("u64", fields.unstake_amount),
            unstakeTsMs: decodeFromFields("u64", fields.unstake_ts_ms),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UnstakeEvent {
        if (!isUnstakeEvent(item.type)) {
            throw new Error("not a UnstakeEvent type");
        }

        return UnstakeEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            lpTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.lp_token_type),
            userShareId: decodeFromFieldsWithTypes("u64", item.fields.user_share_id),
            unstakeAmount: decodeFromFieldsWithTypes("u64", item.fields.unstake_amount),
            unstakeTsMs: decodeFromFieldsWithTypes("u64", item.fields.unstake_ts_ms),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): UnstakeEvent {
        return UnstakeEvent.fromFields(UnstakeEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            lpTokenType: this.lpTokenType.toJSONField(),
            userShareId: this.userShareId.toString(),
            unstakeAmount: this.unstakeAmount.toString(),
            unstakeTsMs: this.unstakeTsMs.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): UnstakeEvent {
        return UnstakeEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            lpTokenType: decodeFromJSONField(TypeName.reified(), field.lpTokenType),
            userShareId: decodeFromJSONField("u64", field.userShareId),
            unstakeAmount: decodeFromJSONField("u64", field.unstakeAmount),
            unstakeTsMs: decodeFromJSONField("u64", field.unstakeTsMs),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): UnstakeEvent {
        if (json.$typeName !== UnstakeEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UnstakeEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UnstakeEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUnstakeEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UnstakeEvent object`);
        }
        return UnstakeEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<UnstakeEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UnstakeEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUnstakeEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UnstakeEvent object`);
        }
        return UnstakeEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpdateAvailableLockedUpPeriodTsMsEvent =============================== */

export function isUpdateAvailableLockedUpPeriodTsMsEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::UpdateAvailableLockedUpPeriodTsMsEvent";
}

export interface UpdateAvailableLockedUpPeriodTsMsEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    previousAvailableLockedUpPeriodTsMs: ToField<Vector<"u64">>;
    newAvailableLockedUpPeriodTsMs: ToField<Vector<"u64">>;
    u64Padding: ToField<Vector<"u64">>;
}

export type UpdateAvailableLockedUpPeriodTsMsEventReified = Reified<
    UpdateAvailableLockedUpPeriodTsMsEvent,
    UpdateAvailableLockedUpPeriodTsMsEventFields
>;

export class UpdateAvailableLockedUpPeriodTsMsEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::UpdateAvailableLockedUpPeriodTsMsEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateAvailableLockedUpPeriodTsMsEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::UpdateAvailableLockedUpPeriodTsMsEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly previousAvailableLockedUpPeriodTsMs: ToField<Vector<"u64">>;
    readonly newAvailableLockedUpPeriodTsMs: ToField<Vector<"u64">>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: UpdateAvailableLockedUpPeriodTsMsEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateAvailableLockedUpPeriodTsMsEvent.$typeName,
            ...typeArgs
        ) as "0x0::stake_pool::UpdateAvailableLockedUpPeriodTsMsEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.previousAvailableLockedUpPeriodTsMs = fields.previousAvailableLockedUpPeriodTsMs;
        this.newAvailableLockedUpPeriodTsMs = fields.newAvailableLockedUpPeriodTsMs;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): UpdateAvailableLockedUpPeriodTsMsEventReified {
        return {
            typeName: UpdateAvailableLockedUpPeriodTsMsEvent.$typeName,
            fullTypeName: composeSuiType(
                UpdateAvailableLockedUpPeriodTsMsEvent.$typeName,
                ...[]
            ) as "0x0::stake_pool::UpdateAvailableLockedUpPeriodTsMsEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateAvailableLockedUpPeriodTsMsEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateAvailableLockedUpPeriodTsMsEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateAvailableLockedUpPeriodTsMsEvent.fromBcs(data),
            bcs: UpdateAvailableLockedUpPeriodTsMsEvent.bcs,
            fromJSONField: (field: any) => UpdateAvailableLockedUpPeriodTsMsEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateAvailableLockedUpPeriodTsMsEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateAvailableLockedUpPeriodTsMsEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => UpdateAvailableLockedUpPeriodTsMsEvent.fetch(client, id),
            new: (fields: UpdateAvailableLockedUpPeriodTsMsEventFields) => {
                return new UpdateAvailableLockedUpPeriodTsMsEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateAvailableLockedUpPeriodTsMsEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateAvailableLockedUpPeriodTsMsEvent>> {
        return phantom(UpdateAvailableLockedUpPeriodTsMsEvent.reified());
    }
    static get p() {
        return UpdateAvailableLockedUpPeriodTsMsEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateAvailableLockedUpPeriodTsMsEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            previous_available_locked_up_period_ts_ms: bcs.vector(bcs.u64()),
            new_available_locked_up_period_ts_ms: bcs.vector(bcs.u64()),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateAvailableLockedUpPeriodTsMsEvent {
        return UpdateAvailableLockedUpPeriodTsMsEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            previousAvailableLockedUpPeriodTsMs: decodeFromFields(reified.vector("u64"), fields.previous_available_locked_up_period_ts_ms),
            newAvailableLockedUpPeriodTsMs: decodeFromFields(reified.vector("u64"), fields.new_available_locked_up_period_ts_ms),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateAvailableLockedUpPeriodTsMsEvent {
        if (!isUpdateAvailableLockedUpPeriodTsMsEvent(item.type)) {
            throw new Error("not a UpdateAvailableLockedUpPeriodTsMsEvent type");
        }

        return UpdateAvailableLockedUpPeriodTsMsEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            previousAvailableLockedUpPeriodTsMs: decodeFromFieldsWithTypes(
                reified.vector("u64"),
                item.fields.previous_available_locked_up_period_ts_ms
            ),
            newAvailableLockedUpPeriodTsMs: decodeFromFieldsWithTypes(
                reified.vector("u64"),
                item.fields.new_available_locked_up_period_ts_ms
            ),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): UpdateAvailableLockedUpPeriodTsMsEvent {
        return UpdateAvailableLockedUpPeriodTsMsEvent.fromFields(UpdateAvailableLockedUpPeriodTsMsEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            previousAvailableLockedUpPeriodTsMs: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.previousAvailableLockedUpPeriodTsMs),
            newAvailableLockedUpPeriodTsMs: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.newAvailableLockedUpPeriodTsMs),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): UpdateAvailableLockedUpPeriodTsMsEvent {
        return UpdateAvailableLockedUpPeriodTsMsEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            previousAvailableLockedUpPeriodTsMs: decodeFromJSONField(reified.vector("u64"), field.previousAvailableLockedUpPeriodTsMs),
            newAvailableLockedUpPeriodTsMs: decodeFromJSONField(reified.vector("u64"), field.newAvailableLockedUpPeriodTsMs),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateAvailableLockedUpPeriodTsMsEvent {
        if (json.$typeName !== UpdateAvailableLockedUpPeriodTsMsEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateAvailableLockedUpPeriodTsMsEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateAvailableLockedUpPeriodTsMsEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateAvailableLockedUpPeriodTsMsEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateAvailableLockedUpPeriodTsMsEvent object`);
        }
        return UpdateAvailableLockedUpPeriodTsMsEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateAvailableLockedUpPeriodTsMsEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateAvailableLockedUpPeriodTsMsEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateAvailableLockedUpPeriodTsMsEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateAvailableLockedUpPeriodTsMsEvent object`);
        }
        return UpdateAvailableLockedUpPeriodTsMsEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== UpdateIncentiveConfigEvent =============================== */

export function isUpdateIncentiveConfigEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::UpdateIncentiveConfigEvent";
}

export interface UpdateIncentiveConfigEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    previousIncentiveConfig: ToField<IncentiveConfig>;
    newIncentiveConfig: ToField<IncentiveConfig>;
    u64Padding: ToField<Vector<"u64">>;
}

export type UpdateIncentiveConfigEventReified = Reified<UpdateIncentiveConfigEvent, UpdateIncentiveConfigEventFields>;

export class UpdateIncentiveConfigEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::UpdateIncentiveConfigEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = UpdateIncentiveConfigEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::UpdateIncentiveConfigEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly previousIncentiveConfig: ToField<IncentiveConfig>;
    readonly newIncentiveConfig: ToField<IncentiveConfig>;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: UpdateIncentiveConfigEventFields) {
        this.$fullTypeName = composeSuiType(
            UpdateIncentiveConfigEvent.$typeName,
            ...typeArgs
        ) as "0x0::stake_pool::UpdateIncentiveConfigEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.previousIncentiveConfig = fields.previousIncentiveConfig;
        this.newIncentiveConfig = fields.newIncentiveConfig;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): UpdateIncentiveConfigEventReified {
        return {
            typeName: UpdateIncentiveConfigEvent.$typeName,
            fullTypeName: composeSuiType(UpdateIncentiveConfigEvent.$typeName, ...[]) as "0x0::stake_pool::UpdateIncentiveConfigEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => UpdateIncentiveConfigEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => UpdateIncentiveConfigEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => UpdateIncentiveConfigEvent.fromBcs(data),
            bcs: UpdateIncentiveConfigEvent.bcs,
            fromJSONField: (field: any) => UpdateIncentiveConfigEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => UpdateIncentiveConfigEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => UpdateIncentiveConfigEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => UpdateIncentiveConfigEvent.fetch(client, id),
            new: (fields: UpdateIncentiveConfigEventFields) => {
                return new UpdateIncentiveConfigEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return UpdateIncentiveConfigEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<UpdateIncentiveConfigEvent>> {
        return phantom(UpdateIncentiveConfigEvent.reified());
    }
    static get p() {
        return UpdateIncentiveConfigEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("UpdateIncentiveConfigEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            previous_incentive_config: IncentiveConfig.bcs,
            new_incentive_config: IncentiveConfig.bcs,
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): UpdateIncentiveConfigEvent {
        return UpdateIncentiveConfigEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            previousIncentiveConfig: decodeFromFields(IncentiveConfig.reified(), fields.previous_incentive_config),
            newIncentiveConfig: decodeFromFields(IncentiveConfig.reified(), fields.new_incentive_config),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): UpdateIncentiveConfigEvent {
        if (!isUpdateIncentiveConfigEvent(item.type)) {
            throw new Error("not a UpdateIncentiveConfigEvent type");
        }

        return UpdateIncentiveConfigEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            previousIncentiveConfig: decodeFromFieldsWithTypes(IncentiveConfig.reified(), item.fields.previous_incentive_config),
            newIncentiveConfig: decodeFromFieldsWithTypes(IncentiveConfig.reified(), item.fields.new_incentive_config),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): UpdateIncentiveConfigEvent {
        return UpdateIncentiveConfigEvent.fromFields(UpdateIncentiveConfigEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            previousIncentiveConfig: this.previousIncentiveConfig.toJSONField(),
            newIncentiveConfig: this.newIncentiveConfig.toJSONField(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): UpdateIncentiveConfigEvent {
        return UpdateIncentiveConfigEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            previousIncentiveConfig: decodeFromJSONField(IncentiveConfig.reified(), field.previousIncentiveConfig),
            newIncentiveConfig: decodeFromJSONField(IncentiveConfig.reified(), field.newIncentiveConfig),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): UpdateIncentiveConfigEvent {
        if (json.$typeName !== UpdateIncentiveConfigEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return UpdateIncentiveConfigEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): UpdateIncentiveConfigEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isUpdateIncentiveConfigEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a UpdateIncentiveConfigEvent object`);
        }
        return UpdateIncentiveConfigEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<UpdateIncentiveConfigEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching UpdateIncentiveConfigEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isUpdateIncentiveConfigEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a UpdateIncentiveConfigEvent object`);
        }
        return UpdateIncentiveConfigEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== WithdrawIncentiveEvent =============================== */

export function isWithdrawIncentiveEvent(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x0::stake_pool::WithdrawIncentiveEvent";
}

export interface WithdrawIncentiveEventFields {
    sender: ToField<"address">;
    index: ToField<"u64">;
    incentiveTokenType: ToField<TypeName>;
    withdrawalAmount: ToField<"u64">;
    u64Padding: ToField<Vector<"u64">>;
}

export type WithdrawIncentiveEventReified = Reified<WithdrawIncentiveEvent, WithdrawIncentiveEventFields>;

export class WithdrawIncentiveEvent implements StructClass {
    static readonly $typeName = "0x0::stake_pool::WithdrawIncentiveEvent";
    static readonly $numTypeParams = 0;

    readonly $typeName = WithdrawIncentiveEvent.$typeName;

    readonly $fullTypeName: "0x0::stake_pool::WithdrawIncentiveEvent";

    readonly $typeArgs: [];

    readonly sender: ToField<"address">;
    readonly index: ToField<"u64">;
    readonly incentiveTokenType: ToField<TypeName>;
    readonly withdrawalAmount: ToField<"u64">;
    readonly u64Padding: ToField<Vector<"u64">>;

    private constructor(typeArgs: [], fields: WithdrawIncentiveEventFields) {
        this.$fullTypeName = composeSuiType(WithdrawIncentiveEvent.$typeName, ...typeArgs) as "0x0::stake_pool::WithdrawIncentiveEvent";
        this.$typeArgs = typeArgs;

        this.sender = fields.sender;
        this.index = fields.index;
        this.incentiveTokenType = fields.incentiveTokenType;
        this.withdrawalAmount = fields.withdrawalAmount;
        this.u64Padding = fields.u64Padding;
    }

    static reified(): WithdrawIncentiveEventReified {
        return {
            typeName: WithdrawIncentiveEvent.$typeName,
            fullTypeName: composeSuiType(WithdrawIncentiveEvent.$typeName, ...[]) as "0x0::stake_pool::WithdrawIncentiveEvent",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => WithdrawIncentiveEvent.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => WithdrawIncentiveEvent.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => WithdrawIncentiveEvent.fromBcs(data),
            bcs: WithdrawIncentiveEvent.bcs,
            fromJSONField: (field: any) => WithdrawIncentiveEvent.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => WithdrawIncentiveEvent.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => WithdrawIncentiveEvent.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => WithdrawIncentiveEvent.fetch(client, id),
            new: (fields: WithdrawIncentiveEventFields) => {
                return new WithdrawIncentiveEvent([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return WithdrawIncentiveEvent.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<WithdrawIncentiveEvent>> {
        return phantom(WithdrawIncentiveEvent.reified());
    }
    static get p() {
        return WithdrawIncentiveEvent.phantom();
    }

    static get bcs() {
        return bcs.struct("WithdrawIncentiveEvent", {
            sender: bcs.bytes(32).transform({ input: (val: string) => fromHEX(val), output: (val: Uint8Array) => toHEX(val) }),
            index: bcs.u64(),
            incentive_token_type: TypeName.bcs,
            withdrawal_amount: bcs.u64(),
            u64_padding: bcs.vector(bcs.u64()),
        });
    }

    static fromFields(fields: Record<string, any>): WithdrawIncentiveEvent {
        return WithdrawIncentiveEvent.reified().new({
            sender: decodeFromFields("address", fields.sender),
            index: decodeFromFields("u64", fields.index),
            incentiveTokenType: decodeFromFields(TypeName.reified(), fields.incentive_token_type),
            withdrawalAmount: decodeFromFields("u64", fields.withdrawal_amount),
            u64Padding: decodeFromFields(reified.vector("u64"), fields.u64_padding),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): WithdrawIncentiveEvent {
        if (!isWithdrawIncentiveEvent(item.type)) {
            throw new Error("not a WithdrawIncentiveEvent type");
        }

        return WithdrawIncentiveEvent.reified().new({
            sender: decodeFromFieldsWithTypes("address", item.fields.sender),
            index: decodeFromFieldsWithTypes("u64", item.fields.index),
            incentiveTokenType: decodeFromFieldsWithTypes(TypeName.reified(), item.fields.incentive_token_type),
            withdrawalAmount: decodeFromFieldsWithTypes("u64", item.fields.withdrawal_amount),
            u64Padding: decodeFromFieldsWithTypes(reified.vector("u64"), item.fields.u64_padding),
        });
    }

    static fromBcs(data: Uint8Array): WithdrawIncentiveEvent {
        return WithdrawIncentiveEvent.fromFields(WithdrawIncentiveEvent.bcs.parse(data));
    }

    toJSONField() {
        return {
            sender: this.sender,
            index: this.index.toString(),
            incentiveTokenType: this.incentiveTokenType.toJSONField(),
            withdrawalAmount: this.withdrawalAmount.toString(),
            u64Padding: fieldToJSON<Vector<"u64">>(`vector<u64>`, this.u64Padding),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): WithdrawIncentiveEvent {
        return WithdrawIncentiveEvent.reified().new({
            sender: decodeFromJSONField("address", field.sender),
            index: decodeFromJSONField("u64", field.index),
            incentiveTokenType: decodeFromJSONField(TypeName.reified(), field.incentiveTokenType),
            withdrawalAmount: decodeFromJSONField("u64", field.withdrawalAmount),
            u64Padding: decodeFromJSONField(reified.vector("u64"), field.u64Padding),
        });
    }

    static fromJSON(json: Record<string, any>): WithdrawIncentiveEvent {
        if (json.$typeName !== WithdrawIncentiveEvent.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return WithdrawIncentiveEvent.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): WithdrawIncentiveEvent {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isWithdrawIncentiveEvent(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a WithdrawIncentiveEvent object`);
        }
        return WithdrawIncentiveEvent.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<WithdrawIncentiveEvent> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching WithdrawIncentiveEvent object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isWithdrawIncentiveEvent(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a WithdrawIncentiveEvent object`);
        }
        return WithdrawIncentiveEvent.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
