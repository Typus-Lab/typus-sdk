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

/* ============================== BalanceBag =============================== */

export function isBalanceBag(type: string): boolean {
    type = compressSuiType(type);
    return type === "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::balance_bag::BalanceBag";
}

export interface BalanceBagFields {
    id: ToField<UID>;
    bag: ToField<Bag>;
}

export type BalanceBagReified = Reified<BalanceBag, BalanceBagFields>;

export class BalanceBag implements StructClass {
    static readonly $typeName = "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::balance_bag::BalanceBag";
    static readonly $numTypeParams = 0;

    readonly $typeName = BalanceBag.$typeName;

    readonly $fullTypeName: "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::balance_bag::BalanceBag";

    readonly $typeArgs: [];

    readonly id: ToField<UID>;
    readonly bag: ToField<Bag>;

    private constructor(typeArgs: [], fields: BalanceBagFields) {
        this.$fullTypeName = composeSuiType(
            BalanceBag.$typeName,
            ...typeArgs
        ) as "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::balance_bag::BalanceBag";
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.bag = fields.bag;
    }

    static reified(): BalanceBagReified {
        return {
            typeName: BalanceBag.$typeName,
            fullTypeName: composeSuiType(
                BalanceBag.$typeName,
                ...[]
            ) as "0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162::balance_bag::BalanceBag",
            typeArgs: [] as [],
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => BalanceBag.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => BalanceBag.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => BalanceBag.fromBcs(data),
            bcs: BalanceBag.bcs,
            fromJSONField: (field: any) => BalanceBag.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => BalanceBag.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => BalanceBag.fromSuiParsedData(content),
            fetch: async (client: SuiClient, id: string) => BalanceBag.fetch(client, id),
            new: (fields: BalanceBagFields) => {
                return new BalanceBag([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return BalanceBag.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<BalanceBag>> {
        return phantom(BalanceBag.reified());
    }
    static get p() {
        return BalanceBag.phantom();
    }

    static get bcs() {
        return bcs.struct("BalanceBag", {
            id: UID.bcs,
            bag: Bag.bcs,
        });
    }

    static fromFields(fields: Record<string, any>): BalanceBag {
        return BalanceBag.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            bag: decodeFromFields(Bag.reified(), fields.bag),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): BalanceBag {
        if (!isBalanceBag(item.type)) {
            throw new Error("not a BalanceBag type");
        }

        return BalanceBag.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            bag: decodeFromFieldsWithTypes(Bag.reified(), item.fields.bag),
        });
    }

    static fromBcs(data: Uint8Array): BalanceBag {
        return BalanceBag.fromFields(BalanceBag.bcs.parse(data));
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

    static fromJSONField(field: any): BalanceBag {
        return BalanceBag.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            bag: decodeFromJSONField(Bag.reified(), field.bag),
        });
    }

    static fromJSON(json: Record<string, any>): BalanceBag {
        if (json.$typeName !== BalanceBag.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return BalanceBag.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): BalanceBag {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isBalanceBag(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a BalanceBag object`);
        }
        return BalanceBag.fromFieldsWithTypes(content);
    }

    static async fetch(client: SuiClient, id: string): Promise<BalanceBag> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching BalanceBag object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isBalanceBag(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a BalanceBag object`);
        }
        return BalanceBag.fromBcs(fromB64(res.data.bcs.bcsBytes));
    }
}
