import * as kioskLockRule from "./kiosk-lock-rule/structs";
import * as royaltyRule from "./royalty-rule/structs";
import * as witnessRule from "./witness-rule/structs";
import { StructClassLoader } from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(royaltyRule.Config);
    loader.register(royaltyRule.Rule);
    loader.register(kioskLockRule.Config);
    loader.register(kioskLockRule.Rule);
    loader.register(witnessRule.Rule);
}
