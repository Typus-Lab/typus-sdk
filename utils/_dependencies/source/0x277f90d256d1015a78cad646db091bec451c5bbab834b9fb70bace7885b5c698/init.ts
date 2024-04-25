import * as validator from "./validator/structs";
import { StructClassLoader } from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(validator.DkgState);
}
