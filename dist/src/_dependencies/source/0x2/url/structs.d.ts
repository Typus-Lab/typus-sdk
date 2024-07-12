import { PhantomReified, Reified, StructClass, ToField, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { String } from "../../0x1/ascii/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isUrl(type: string): boolean;
export interface UrlFields {
    url: ToField<String>;
}
export type UrlReified = Reified<Url, UrlFields>;
export declare class Url implements StructClass {
    static readonly $typeName = "0x2::url::Url";
    static readonly $numTypeParams = 0;
    readonly $typeName = "0x2::url::Url";
    readonly $fullTypeName: "0x2::url::Url";
    readonly $typeArgs: [];
    readonly url: ToField<String>;
    private constructor();
    static reified(): UrlReified;
    static get r(): import("../../../../_framework/reified").StructClassReified<Url, UrlFields>;
    static phantom(): PhantomReified<ToTypeStr<Url>>;
    static get p(): PhantomReified<"0x2::url::Url">;
    static get bcs(): import("@mysten/bcs").BcsType<{
        url: {
            bytes: number[];
        };
    }, {
        url: {
            bytes: Iterable<number> & {
                length: number;
            };
        };
    }>;
    static fromFields(fields: Record<string, any>): Url;
    static fromFieldsWithTypes(item: FieldsWithTypes): Url;
    static fromBcs(data: Uint8Array): Url;
    toJSONField(): {
        url: string;
    };
    toJSON(): {
        url: string;
        $typeName: string;
        $typeArgs: [];
    };
    static fromJSONField(field: any): Url;
    static fromJSON(json: Record<string, any>): Url;
    static fromSuiParsedData(content: SuiParsedData): Url;
    static fetch(client: SuiClient, id: string): Promise<Url>;
}
