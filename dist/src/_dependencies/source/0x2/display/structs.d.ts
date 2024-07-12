import { PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr } from "../../../../_framework/reified";
import { FieldsWithTypes } from "../../../../_framework/util";
import { String } from "../../0x1/string/structs";
import { ID, UID } from "../object/structs";
import { VecMap } from "../vec-map/structs";
import { SuiClient, SuiParsedData } from "@mysten/sui.js/client";
export declare function isDisplay(type: string): boolean;
export interface DisplayFields<T extends PhantomTypeArgument> {
    id: ToField<UID>;
    fields: ToField<VecMap<String, String>>;
    version: ToField<"u16">;
}
export type DisplayReified<T extends PhantomTypeArgument> = Reified<Display<T>, DisplayFields<T>>;
export declare class Display<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::display::Display";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::display::Display";
    readonly $fullTypeName: `0x2::display::Display<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<UID>;
    readonly fields: ToField<VecMap<String, String>>;
    readonly version: ToField<"u16">;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): DisplayReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof Display.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<Display<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof Display.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            id: {
                bytes: string;
            };
        };
        fields: {
            contents: {
                key: {
                    bytes: number[];
                };
                value: {
                    bytes: number[];
                };
            }[];
        };
        version: number;
    }, {
        id: {
            id: {
                bytes: string;
            };
        };
        fields: {
            contents: Iterable<{
                key: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                value: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            }> & {
                length: number;
            };
        };
        version: number;
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): Display<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): Display<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): Display<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        fields: {
            contents: {
                key: string;
                value: string;
            }[];
        };
        version: number;
    };
    toJSON(): {
        id: string;
        fields: {
            contents: {
                key: string;
                value: string;
            }[];
        };
        version: number;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): Display<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): Display<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): Display<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<Display<ToPhantomTypeArgument<T>>>;
}
export declare function isDisplayCreated(type: string): boolean;
export interface DisplayCreatedFields<T extends PhantomTypeArgument> {
    id: ToField<ID>;
}
export type DisplayCreatedReified<T extends PhantomTypeArgument> = Reified<DisplayCreated<T>, DisplayCreatedFields<T>>;
export declare class DisplayCreated<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::display::DisplayCreated";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::display::DisplayCreated";
    readonly $fullTypeName: `0x2::display::DisplayCreated<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<ID>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): DisplayCreatedReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof DisplayCreated.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<DisplayCreated<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof DisplayCreated.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
    }, {
        id: {
            bytes: string;
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): DisplayCreated<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): DisplayCreated<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): DisplayCreated<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
    };
    toJSON(): {
        id: string;
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): DisplayCreated<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): DisplayCreated<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): DisplayCreated<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<DisplayCreated<ToPhantomTypeArgument<T>>>;
}
export declare function isVersionUpdated(type: string): boolean;
export interface VersionUpdatedFields<T extends PhantomTypeArgument> {
    id: ToField<ID>;
    version: ToField<"u16">;
    fields: ToField<VecMap<String, String>>;
}
export type VersionUpdatedReified<T extends PhantomTypeArgument> = Reified<VersionUpdated<T>, VersionUpdatedFields<T>>;
export declare class VersionUpdated<T extends PhantomTypeArgument> implements StructClass {
    static readonly $typeName = "0x2::display::VersionUpdated";
    static readonly $numTypeParams = 1;
    readonly $typeName = "0x2::display::VersionUpdated";
    readonly $fullTypeName: `0x2::display::VersionUpdated<${PhantomToTypeStr<T>}>`;
    readonly $typeArgs: [PhantomToTypeStr<T>];
    readonly id: ToField<ID>;
    readonly version: ToField<"u16">;
    readonly fields: ToField<VecMap<String, String>>;
    private constructor();
    static reified<T extends PhantomReified<PhantomTypeArgument>>(T: T): VersionUpdatedReified<ToPhantomTypeArgument<T>>;
    static get r(): typeof VersionUpdated.reified;
    static phantom<T extends PhantomReified<PhantomTypeArgument>>(T: T): PhantomReified<ToTypeStr<VersionUpdated<ToPhantomTypeArgument<T>>>>;
    static get p(): typeof VersionUpdated.phantom;
    static get bcs(): import("@mysten/bcs").BcsType<{
        id: {
            bytes: string;
        };
        version: number;
        fields: {
            contents: {
                key: {
                    bytes: number[];
                };
                value: {
                    bytes: number[];
                };
            }[];
        };
    }, {
        id: {
            bytes: string;
        };
        version: number;
        fields: {
            contents: Iterable<{
                key: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
                value: {
                    bytes: Iterable<number> & {
                        length: number;
                    };
                };
            }> & {
                length: number;
            };
        };
    }>;
    static fromFields<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, fields: Record<string, any>): VersionUpdated<ToPhantomTypeArgument<T>>;
    static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, item: FieldsWithTypes): VersionUpdated<ToPhantomTypeArgument<T>>;
    static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, data: Uint8Array): VersionUpdated<ToPhantomTypeArgument<T>>;
    toJSONField(): {
        id: string;
        version: number;
        fields: {
            contents: {
                key: string;
                value: string;
            }[];
        };
    };
    toJSON(): {
        id: string;
        version: number;
        fields: {
            contents: {
                key: string;
                value: string;
            }[];
        };
        $typeName: string;
        $typeArgs: [PhantomToTypeStr<T>];
    };
    static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, field: any): VersionUpdated<ToPhantomTypeArgument<T>>;
    static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, json: Record<string, any>): VersionUpdated<ToPhantomTypeArgument<T>>;
    static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(typeArg: T, content: SuiParsedData): VersionUpdated<ToPhantomTypeArgument<T>>;
    static fetch<T extends PhantomReified<PhantomTypeArgument>>(client: SuiClient, typeArg: T, id: string): Promise<VersionUpdated<ToPhantomTypeArgument<T>>>;
}
