import { PhantomReified, PhantomTypeArgument, Primitive, Reified, StructClass, StructClassReified, TypeArgument, VectorClass, VectorClassReified } from "./reified";
export type PrimitiveValue = string | number | boolean | bigint;
interface _StructClass {
    $typeName: string;
    $numTypeParams: number;
    reified(...Ts: Array<Reified<TypeArgument, any> | PhantomReified<PhantomTypeArgument>>): StructClassReified<StructClass, any>;
}
export declare class StructClassLoader {
    private map;
    register(...classes: _StructClass[]): void;
    reified<T extends Primitive>(type: T): T;
    reified(type: `vector<${string}>`): VectorClassReified<VectorClass>;
    reified(type: string): StructClassReified<StructClass, any>;
}
export declare const structClassLoaderSource: StructClassLoader;
export declare const structClassLoaderOnchain: StructClassLoader;
export {};
