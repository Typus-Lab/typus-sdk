import * as admin from "./admin/structs";
import * as stakePool from "./stake-pool/structs";
import { StructClassLoader } from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(admin.Version);
    loader.register(admin.ManagerCap);
    loader.register(admin.FeeInfo);
    loader.register(admin.FeePool);
    loader.register(admin.SendFeeEvent);
    loader.register(stakePool.UnsubscribeEvent);
    loader.register(stakePool.WithdrawIncentiveEvent);
    loader.register(stakePool.ActivateIncentiveTokenEvent);
    loader.register(stakePool.AddIncentiveTokenEvent);
    loader.register(stakePool.DeactivateIncentiveTokenEvent);
    loader.register(stakePool.DeactivatingShares);
    loader.register(stakePool.DepositIncentiveEvent);
    loader.register(stakePool.HarvestPerUserShareEvent);
    loader.register(stakePool.Incentive);
    loader.register(stakePool.IncentiveConfig);
    loader.register(stakePool.IncentiveInfo);
    loader.register(stakePool.LpUserShare);
    loader.register(stakePool.NewStakePoolEvent);
    loader.register(stakePool.RemoveIncentiveTokenEvent);
    loader.register(stakePool.StakeEvent);
    loader.register(stakePool.StakePool);
    loader.register(stakePool.StakePoolConfig);
    loader.register(stakePool.StakePoolInfo);
    loader.register(stakePool.StakePoolRegistry);
    loader.register(stakePool.UnstakeEvent);
    loader.register(stakePool.UpdateIncentiveConfigEvent);
    loader.register(stakePool.UpdateUnlockCountdownTsMsEvent);
}
