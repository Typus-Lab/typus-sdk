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
    fieldToJSON,
    phantom,
} from "../../../../_framework/reified";
import { FieldsWithTypes, composeSuiType, compressSuiType } from "../../../../_framework/util";
import { Vector } from "../../../../_framework/vector";
import { UID } from "../../0x2/object/structs";
import { PKG_V1 } from "../index";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromB64, fromHEX, toHEX } from "@mysten/sui/utils";

/* ============================== Quote =============================== */

export function isQuote(type: string): boolean {
    type = compressSuiType(type);
    return type === `${PKG_V1}::quote::Quote`;
}

export interface QuoteFields {
    id: ToField<UID>;
    nodeAddr: ToField<"address">;
    nodeAuthority: ToField<"address">;
    queueAddr: ToField<"address">;
    quoteBuffer: ToField<Vector<"u8">>;
    verificationStatus: ToField<"u8">;
    verificationTimestamp: ToField<"u64">;
    validUntil: ToField<"u64">;
    contentHashEnabled: ToField<"bool">;
    friendKey: ToField<Vector<"u8">>;
    version: ToField<"u64">;
}

export type QuoteReified = Reified<Quote, QuoteFields>;

export class Quote implements StructClass {
    __StructClass = true as const;

    static readonly $typeName = `${PKG_V1}::quote::Quote`;
    static readonly $numTypeParams = 0;
    static readonly $isPhantom = [] as const;

    readonly $typeName = Quote.$typeName;
    readonly $fullTypeName: `${typeof PKG_V1}::quote::Quote`;
    readonly $typeArgs: [];
    readonly $isPhantom = Quote.$isPhantom;

    readonly id: ToField<UID>;
    readonly nodeAddr: ToField<"address">;
    readonly nodeAuthority: ToField<"address">;
    readonly queueAddr: ToField<"address">;
    readonly quoteBuffer: ToField<Vector<"u8">>;
    readonly verificationStatus: ToField<"u8">;
    readonly verificationTimestamp: ToField<"u64">;
    readonly validUntil: ToField<"u64">;
    readonly contentHashEnabled: ToField<"bool">;
    readonly friendKey: ToField<Vector<"u8">>;
    readonly version: ToField<"u64">;

    private constructor(typeArgs: [], fields: QuoteFields) {
        this.$fullTypeName = composeSuiType(Quote.$typeName, ...typeArgs) as `${typeof PKG_V1}::quote::Quote`;
        this.$typeArgs = typeArgs;

        this.id = fields.id;
        this.nodeAddr = fields.nodeAddr;
        this.nodeAuthority = fields.nodeAuthority;
        this.queueAddr = fields.queueAddr;
        this.quoteBuffer = fields.quoteBuffer;
        this.verificationStatus = fields.verificationStatus;
        this.verificationTimestamp = fields.verificationTimestamp;
        this.validUntil = fields.validUntil;
        this.contentHashEnabled = fields.contentHashEnabled;
        this.friendKey = fields.friendKey;
        this.version = fields.version;
    }

    static reified(): QuoteReified {
        return {
            typeName: Quote.$typeName,
            fullTypeName: composeSuiType(Quote.$typeName, ...[]) as `${typeof PKG_V1}::quote::Quote`,
            typeArgs: [] as [],
            isPhantom: Quote.$isPhantom,
            reifiedTypeArgs: [],
            fromFields: (fields: Record<string, any>) => Quote.fromFields(fields),
            fromFieldsWithTypes: (item: FieldsWithTypes) => Quote.fromFieldsWithTypes(item),
            fromBcs: (data: Uint8Array) => Quote.fromBcs(data),
            bcs: Quote.bcs,
            fromJSONField: (field: any) => Quote.fromJSONField(field),
            fromJSON: (json: Record<string, any>) => Quote.fromJSON(json),
            fromSuiParsedData: (content: SuiParsedData) => Quote.fromSuiParsedData(content),
            fromSuiObjectData: (content: SuiObjectData) => Quote.fromSuiObjectData(content),
            fetch: async (client: SuiClient, id: string) => Quote.fetch(client, id),
            new: (fields: QuoteFields) => {
                return new Quote([], fields);
            },
            kind: "StructClassReified",
        };
    }

    static get r() {
        return Quote.reified();
    }

    static phantom(): PhantomReified<ToTypeStr<Quote>> {
        return phantom(Quote.reified());
    }
    static get p() {
        return Quote.phantom();
    }

    static get bcs() {
        return bcs.struct("Quote", {
            id: UID.bcs,
            node_addr: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            node_authority: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            queue_addr: bcs.bytes(32).transform({
                input: (val: string) => fromHEX(val),
                output: (val: Uint8Array) => toHEX(val),
            }),
            quote_buffer: bcs.vector(bcs.u8()),
            verification_status: bcs.u8(),
            verification_timestamp: bcs.u64(),
            valid_until: bcs.u64(),
            content_hash_enabled: bcs.bool(),
            friend_key: bcs.vector(bcs.u8()),
            version: bcs.u64(),
        });
    }

    static fromFields(fields: Record<string, any>): Quote {
        return Quote.reified().new({
            id: decodeFromFields(UID.reified(), fields.id),
            nodeAddr: decodeFromFields("address", fields.node_addr),
            nodeAuthority: decodeFromFields("address", fields.node_authority),
            queueAddr: decodeFromFields("address", fields.queue_addr),
            quoteBuffer: decodeFromFields(reified.vector("u8"), fields.quote_buffer),
            verificationStatus: decodeFromFields("u8", fields.verification_status),
            verificationTimestamp: decodeFromFields("u64", fields.verification_timestamp),
            validUntil: decodeFromFields("u64", fields.valid_until),
            contentHashEnabled: decodeFromFields("bool", fields.content_hash_enabled),
            friendKey: decodeFromFields(reified.vector("u8"), fields.friend_key),
            version: decodeFromFields("u64", fields.version),
        });
    }

    static fromFieldsWithTypes(item: FieldsWithTypes): Quote {
        if (!isQuote(item.type)) {
            throw new Error("not a Quote type");
        }

        return Quote.reified().new({
            id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
            nodeAddr: decodeFromFieldsWithTypes("address", item.fields.node_addr),
            nodeAuthority: decodeFromFieldsWithTypes("address", item.fields.node_authority),
            queueAddr: decodeFromFieldsWithTypes("address", item.fields.queue_addr),
            quoteBuffer: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.quote_buffer),
            verificationStatus: decodeFromFieldsWithTypes("u8", item.fields.verification_status),
            verificationTimestamp: decodeFromFieldsWithTypes("u64", item.fields.verification_timestamp),
            validUntil: decodeFromFieldsWithTypes("u64", item.fields.valid_until),
            contentHashEnabled: decodeFromFieldsWithTypes("bool", item.fields.content_hash_enabled),
            friendKey: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.friend_key),
            version: decodeFromFieldsWithTypes("u64", item.fields.version),
        });
    }

    static fromBcs(data: Uint8Array): Quote {
        return Quote.fromFields(Quote.bcs.parse(data));
    }

    toJSONField() {
        return {
            id: this.id,
            nodeAddr: this.nodeAddr,
            nodeAuthority: this.nodeAuthority,
            queueAddr: this.queueAddr,
            quoteBuffer: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.quoteBuffer),
            verificationStatus: this.verificationStatus,
            verificationTimestamp: this.verificationTimestamp.toString(),
            validUntil: this.validUntil.toString(),
            contentHashEnabled: this.contentHashEnabled,
            friendKey: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.friendKey),
            version: this.version.toString(),
        };
    }

    toJSON() {
        return {
            $typeName: this.$typeName,
            $typeArgs: this.$typeArgs,
            ...this.toJSONField(),
        };
    }

    static fromJSONField(field: any): Quote {
        return Quote.reified().new({
            id: decodeFromJSONField(UID.reified(), field.id),
            nodeAddr: decodeFromJSONField("address", field.nodeAddr),
            nodeAuthority: decodeFromJSONField("address", field.nodeAuthority),
            queueAddr: decodeFromJSONField("address", field.queueAddr),
            quoteBuffer: decodeFromJSONField(reified.vector("u8"), field.quoteBuffer),
            verificationStatus: decodeFromJSONField("u8", field.verificationStatus),
            verificationTimestamp: decodeFromJSONField("u64", field.verificationTimestamp),
            validUntil: decodeFromJSONField("u64", field.validUntil),
            contentHashEnabled: decodeFromJSONField("bool", field.contentHashEnabled),
            friendKey: decodeFromJSONField(reified.vector("u8"), field.friendKey),
            version: decodeFromJSONField("u64", field.version),
        });
    }

    static fromJSON(json: Record<string, any>): Quote {
        if (json.$typeName !== Quote.$typeName) {
            throw new Error("not a WithTwoGenerics json object");
        }

        return Quote.fromJSONField(json);
    }

    static fromSuiParsedData(content: SuiParsedData): Quote {
        if (content.dataType !== "moveObject") {
            throw new Error("not an object");
        }
        if (!isQuote(content.type)) {
            throw new Error(`object at ${(content.fields as any).id} is not a Quote object`);
        }
        return Quote.fromFieldsWithTypes(content);
    }

    static fromSuiObjectData(data: SuiObjectData): Quote {
        if (data.bcs) {
            if (data.bcs.dataType !== "moveObject" || !isQuote(data.bcs.type)) {
                throw new Error(`object at is not a Quote object`);
            }

            return Quote.fromBcs(fromB64(data.bcs.bcsBytes));
        }
        if (data.content) {
            return Quote.fromSuiParsedData(data.content);
        }
        throw new Error("Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.");
    }

    static async fetch(client: SuiClient, id: string): Promise<Quote> {
        const res = await client.getObject({ id, options: { showBcs: true } });
        if (res.error) {
            throw new Error(`error fetching Quote object at id ${id}: ${res.error.code}`);
        }
        if (res.data?.bcs?.dataType !== "moveObject" || !isQuote(res.data.bcs.type)) {
            throw new Error(`object at id ${id} is not a Quote object`);
        }

        return Quote.fromSuiObjectData(res.data);
    }
}
