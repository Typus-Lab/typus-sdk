import * as acTable from "./ac-table/structs";
import * as balanceBag from "./balance-bag/structs";
import * as oneTimeLockValue from "./one-time-lock-value/structs";
import * as ownership from "./ownership/structs";
import * as supplyBag from "./supply-bag/structs";
import * as witTable from "./wit-table/structs";
import * as witness from "./witness/structs";
import { StructClassLoader } from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(witTable.WitTable);
    loader.register(supplyBag.SupplyBag);
    loader.register(balanceBag.BalanceBag);
    loader.register(oneTimeLockValue.OneTimeLockValue);
    loader.register(ownership.Ownership);
    loader.register(acTable.AcTable);
    loader.register(acTable.AcTableCap);
    loader.register(acTable.AcTableOwnership);
    loader.register(witness.Witness);
    loader.register(witness.WitnessGenerator);
}
