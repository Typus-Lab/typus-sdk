import * as priceDataPull from "./price-data-pull/structs";
import * as supraSValueFeed from "./suprasvaluefeed/structs";
import { StructClassLoader } from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(supraSValueFeed.Price);
    loader.register(supraSValueFeed.OracleHolder);
    loader.register(priceDataPull.PriceData);
}
