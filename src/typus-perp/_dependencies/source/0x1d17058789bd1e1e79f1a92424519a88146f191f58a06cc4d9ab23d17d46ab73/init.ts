import * as oracle from "./oracle/structs";
import * as pythParser from "./pyth-parser/structs";
import * as supra from "./supra/structs";
import * as switchboardFeedParser from "./switchboard-feed-parser/structs";
import { StructClassLoader } from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(switchboardFeedParser.AggregatorInfo);
    loader.register(supra.SupraPrice);
    loader.register(pythParser.PythPrice);
    loader.register(pythParser.PythPriceInfoObject);
    loader.register(oracle.ManagerCap);
    loader.register(oracle.Oracle);
    loader.register(oracle.PriceEvent);
    loader.register(oracle.UpdateAuthority);
}
