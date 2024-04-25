import * as reified from "../../../../_framework/reified";
import {
    PhantomReified,
    Reified,
    StructClass,
    ToField,
    ToTypeStr,
    decodeFromFields,
    decodeFromFieldsWithTypes,
    decodeFromJSONField,
    phantom,
    ToTypeStr as ToPhantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { UID } from "../../0x2/object/structs";
import { AcTableCap } from "../../0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162/ac-table/structs";
import { InterestModels } from "../interest-model/structs";
import { RiskModels } from "../risk-model/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== AdminCap =============================== */

export function isAdminCap(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::app::AdminCap";
}

export interface AdminCapFields {
    id: ToField<UID>;
    interestModelCap: ToField<AcTableCap<ToPhantom<InterestModels>>>;
    interestModelChangeDelay: ToField<"u64">;
    riskModelCap: ToField<AcTableCap<ToPhantom<RiskModels>>>;
    riskModelChangeDelay: ToField<"u64">;
    limiterChangeDelay: ToField<"u64">;
}

export type AdminCapReified = Reified<AdminCap, AdminCapFields>;

export class AdminCap implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::app::AdminCap";
    static readonly $numTypeParams = 0;

    readonly $typeName = AdminCap.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::app::AdminCap";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly interestModelCap: ToField<AcTableCap<ToPhantom<InterestModels>>>;
    readonly interestModelChangeDelay: ToField<"u64">;
    readonly riskModelCap: ToField<AcTableCap<ToPhantom<RiskModels>>>;
    readonly riskModelChangeDelay: ToField<"u64">;
    readonly limiterChangeDelay: ToField<"u64">;

    private constructor(typeArgs: [], fields: AdminCapFields) {
        this.$fullTypeName = composeSuiType(
            AdminCap.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::app::AdminCap";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.interestModelCap = fields.interestModelCap;
        this.interestModelChangeDelay = fields.interestModelChangeDelay;
        this.riskModelCap = fields.riskModelCap;
        this.riskModelChangeDelay = fields.riskModelChangeDelay;
        this.limiterChangeDelay = fields.limiterChangeDelay;
    }

    static reified(): AdminCapReified {
        return {
            typeName: AdminCap.$typeName,
            fullTypeName: composeSuiType(
                AdminCap.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::app::AdminCap",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => AdminCap.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => AdminCap.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => AdminCap.fromBcs(data),
            bcs: AdminCap.bcs,
            fromJSONField: (field: any) => AdminCap.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => AdminCap.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => AdminCap.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => AdminCap.fetch(client, id),
            new: (fields: AdminCapFields) => {
                return new AdminCap([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return AdminCap.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<AdminCap>> {
        return phantom(AdminCap.reified());
    }
    static get p() {
        return AdminCap.phantom();
    }

    static get bcs() {
        return bcs.struct("AdminCap", {
            id: UID.bcs,
            interest_model_cap: AcTableCap.bcs,
            interest_model_change_delay: bcs.u64(),
            risk_model_cap: AcTableCap.bcs,
            risk_model_change_delay: bcs.u64(),
            limiter_change_delay: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): AdminCap {
        return AdminCap.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            interestModelCap: decodeFromFields(AcTableCap.reified(reified.phantom(InterestModels.reified())), fields.interest_model_cap),
            interestModelChangeDelay: decodeFromFields("u64", fields.interest_model_change_delay),
            riskModelCap: decodeFromFields(AcTableCap.reified(reified.phantom(RiskModels.reified())), fields.risk_model_cap),
            riskModelChangeDelay: decodeFromFields("u64", fields.risk_model_change_delay),
            limiterChangeDelay: decodeFromFields("u64", fields.limiter_change_delay),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): AdminCap {
        if (!isAdminCap(item.type)) {
            throw new Error("not a AdminCap type");
        }

        return AdminCap.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            interestModelCap: decodeFromFieldsWithTypes(
                AcTableCap.reified(reified.phantom(InterestModels.reified())),
                item.fields.interest_model_cap
            ),
            interestModelChangeDelay: decodeFromFieldsWithTypes("u64", item.fields.interest_model_change_delay),
            riskModelCap: decodeFromFieldsWithTypes(AcTableCap.reified(reified.phantom(RiskModels.reified())), item.fields.risk_model_cap),
            riskModelChangeDelay: decodeFromFieldsWithTypes("u64", item.fields.risk_model_change_delay),
            limiterChangeDelay: decodeFromFieldsWithTypes("u64", item.fields.limiter_change_delay),
        });
    }

    static fromBcs(data: Uint8Array): AdminCap {
        return AdminCap.fromFields(AdminCap.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            interestModelCap: this.interestModelCap.toJSONField(),
            interestModelChangeDelay: this.interestModelChangeDelay.toString(),
            riskModelCap: this.riskModelCap.toJSONField(),
            riskModelChangeDelay: this.riskModelChangeDelay.toString(),
            limiterChangeDelay: this.limiterChangeDelay.toString(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): AdminCap {
        return AdminCap.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            interestModelCap: decodeFromJSONField(AcTableCap.reified(reified.phantom(InterestModels.reified())), field.interestModelCap),
            interestModelChangeDelay: decodeFromJSONField("u64", field.interestModelChangeDelay),
            riskModelCap: decodeFromJSONField(AcTableCap.reified(reified.phantom(RiskModels.reified())), field.riskModelCap),
            riskModelChangeDelay: decodeFromJSONField("u64", field.riskModelChangeDelay),
            limiterChangeDelay: decodeFromJSONField("u64", field.limiterChangeDelay),
        });
    }

    static fromJSON(json: Record<string, any>): AdminCap {
        if (json.$typeName !== AdminCap.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return AdminCap.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): AdminCap {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAdminCap(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a AdminCap object`);
        }
        return AdminCap.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<AdminCap> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching AdminCap object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAdminCap(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a AdminCap object`);
        }
        return AdminCap.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}

/* ============================== APP =============================== */

export function isAPP(type: string): boolean {
    type = compressSuiType(type);
    return type === "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::app::APP";
}

export interface APPFields {
    dummyField: ToField<"bool">;
}

export type APPReified = Reified<APP, APPFields>;

export class APP implements StructClass {
    static readonly $typeName = "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::app::APP";
    static readonly $numTypeParams = 0;

    readonly $typeName = APP.$typeName;

    readonly $fullTypeName: "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::app::APP";

    readonly $typeArgs: [];

    readonly dummyField: ToField<"bool">;

    private constructor(typeArgs: [], fields: APPFields) {
        this.$fullTypeName = composeSuiType(
            APP.$typeName,
            ...typeArgs
        ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::app::APP";
        this.$typeArgs = typeArgs;

        this.dummyField = fields.dummyField;
    }

    static reified(): APPReified {
        return {
            typeName: APP.$typeName,
            fullTypeName: composeSuiType(
                APP.$typeName,
                ...[]
            ) as "0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf::app::APP",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => APP.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => APP.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => APP.fromBcs(data),
            bcs: APP.bcs,
            fromJSONField: (field: any) => APP.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => APP.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => APP.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => APP.fetch(client, id),
            new: (fields: APPFields) => {
                return new APP([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return APP.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<APP>> {
        return phantom(APP.reified());
    }
    static get p() {
        return APP.phantom();
    }

    static get bcs() {
        return bcs.struct("APP", {
            dummy_field: bcs.bool(),
        });
    }

    static fromFields(fields: Record<string, any>): APP {
        return APP.reified().new({ dummyField: decodeFromFields("bool", fields.dummy_field) });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): APP {
        if (!isAPP(item.type)) {
            throw new Error("not a APP type");
        }

        return APP.reified().new({ dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) });
    }

    static fromBcs(data: Uint8Array): APP {
        return APP.fromFields(APP.bcs.parse(data));
    }

    toJSONField() {
        return {
            dummyField: this.dummyField,
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): APP {
        return APP.reified().new({ dummyField: decodeFromJSONField("bool", field.dummyField) });
    }

    static fromJSON(json: Record<string, any>): APP {
        if (json.$typeName !== APP.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return APP.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): APP {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isAPP(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a APP object`);
        }
        return APP.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<APP> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching APP object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isAPP(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a APP object`);
        }
        return APP.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
