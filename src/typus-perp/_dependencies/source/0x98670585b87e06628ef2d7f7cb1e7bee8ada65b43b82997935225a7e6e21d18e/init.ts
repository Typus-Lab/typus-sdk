import * as aggregator from "./aggregator/structs";
import * as job from "./job/structs";
import * as math from "./math/structs";
import * as quote from "./quote/structs";
import * as switchboard from "./switchboard/structs";
import { StructClassLoader } from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(switchboard.AdminCap);
    loader.register(math.SwitchboardDecimal);
    loader.register(job.Job);
    loader.register(aggregator.Aggregator);
    loader.register(aggregator.AggregatorHistoryData);
    loader.register(aggregator.AggregatorHistoryRow);
    loader.register(aggregator.AggregatorJobData);
    loader.register(aggregator.SlidingWindow);
    loader.register(aggregator.SlidingWindowElement);
    loader.register(quote.Quote);
}
