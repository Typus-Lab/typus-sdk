import * as lockedPeriodVault from "./locked-period-vault/structs";
import { StructClassLoader } from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(lockedPeriodVault.AddIncentiveEvent);
    loader.register(lockedPeriodVault.CrankLeaveEvent);
    loader.register(lockedPeriodVault.HotPotato);
    loader.register(lockedPeriodVault.IncentiviseEvent);
    loader.register(lockedPeriodVault.LeaveEvent);
    loader.register(lockedPeriodVault.LockReceiptEvent);
    loader.register(lockedPeriodVault.LockedReceipt);
    loader.register(lockedPeriodVault.LockedVault);
    loader.register(lockedPeriodVault.LockedVaultRegistry);
    loader.register(lockedPeriodVault.NewLockedVaultEvent);
    loader.register(lockedPeriodVault.RemoveIncentiveEvent);
    loader.register(lockedPeriodVault.UnlockReceiptEvent);
    loader.register(lockedPeriodVault.WithdrawIncentiveEvent);
    loader.register(lockedPeriodVault.WithdrawPremiumEvent);
}
