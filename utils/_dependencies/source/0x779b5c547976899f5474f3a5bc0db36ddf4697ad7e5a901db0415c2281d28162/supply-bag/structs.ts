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
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { Bag } from "../../0x2/bag/structs";
import { UID } from "../../0x2/object/structs";
import { bcs, fromB64 } from "@mysten/bcs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";

/* ============================== SupplyBag =============================== */

export function isSupplyBag(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::supply_bag::SupplyBag";
}

export interface SupplyBagFields {
    id: ToField<UID>;
    bag: ToField<Bag>;
}

export type SupplyBagReified = Reified<SupplyBag, SupplyBagFields>;

export class SupplyBag implements StructClass {
    static readonly $typeName = "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::supply_bag::SupplyBag";
    static readonly $numTypeParams = 0;

    readonly $typeName = SupplyBag.$typeName;

    readonly $fullTypeName: "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::supply_bag::SupplyBag";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly bag: ToField<Bag>;

    private constructor(typeArgs: [], fields: SupplyBagFields) {
        this.$fullTypeName = composeSuiType(
            SupplyBag.$typeName,
            ...typeArgs
        ) as "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::supply_bag::SupplyBag";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.bag = fields.bag;
    }

    static reified(): SupplyBagReified {
        return {
            typeName: SupplyBag.$typeName,
            fullTypeName: composeSuiType(
                SupplyBag.$typeName,
                ...[]
            ) as "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::supply_bag::SupplyBag",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => SupplyBag.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => SupplyBag.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => SupplyBag.fromBcs(data),
            bcs: SupplyBag.bcs,
            fromJSONField: (field: any) => SupplyBag.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => SupplyBag.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => SupplyBag.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => SupplyBag.fetch(client, id),
            new: (fields: SupplyBagFields) => {
                return new SupplyBag([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return SupplyBag.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<SupplyBag>> {
        return phantom(SupplyBag.reified());
    }
    static get p() {
        return SupplyBag.phantom();
    }

    static get bcs() {
        return bcs.struct("SupplyBag", {
            id: UID.bcs,
            bag: Bag.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): SupplyBag {
        return SupplyBag.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            bag: decodeFromFields(Bag.reified(), fields.bag),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): SupplyBag {
        if (!isSupplyBag(item.type)) {
            throw new Error("not a SupplyBag type");
        }

        return SupplyBag.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            bag: decodeFromFieldsWithTypes(Bag.reified(), item.fields.bag),
        });
    }

    static fromBcs(data: Uint8Array): SupplyBag {
        return SupplyBag.fromFields(SupplyBag.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            bag: this.bag.toJSONField(),
        };
    }

    toJSON() {
        return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
    }

    static fromJSONField(field: any): SupplyBag {
        return SupplyBag.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            bag: decodeFromJSONField(Bag.reified(), field.bag),
        });
    }

    static fromJSON(json: Record<string, any>): SupplyBag {
        if (json.$typeName !== SupplyBag.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return SupplyBag.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): SupplyBag {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isSupplyBag(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a SupplyBag object`);
        }
        return SupplyBag.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<SupplyBag> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching SupplyBag object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isSupplyBag(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a SupplyBag object`);
        }
        return SupplyBag.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
