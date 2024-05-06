import * as admin from "./admin/structs";
import * as rewardsPool from "./rewards-pool/structs";
import * as spoolAccount from "./spool-account/structs";
import * as spool from "./spool/structs";
import * as user from "./user/structs";
import { StructClassLoader } from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(spool.Spool);
    loader.register(spoolAccount.SpoolAccount);
    loader.register(rewardsPool.RewardsPool);
    loader.register(user.CreateSpoolAccountEvent);
    loader.register(user.SpoolAccountRedeemRewardsEvent);
    loader.register(user.SpoolAccountStakeEvent);
    loader.register(user.SpoolAccountUnstakeEvent);
    loader.register(admin.AdminCap);
    loader.register(admin.CreateSpoolEvent);
    loader.register(admin.UpdateSpoolConfigEvent);
}
