export interface DepositVault {
    activeSubVault: SubVault;
    deactivatingSubVault: SubVault;
    inactiveSubVault: SubVault;
    warmupSubVault: SubVault;
    hasNext: boolean;
}

export interface BidVault {
    bidderSubVault: SubVault;
    premiumSubVault: SubVault;
    performanceFeeSubVault: SubVault;
}

export interface SubVault {
    balance: string;
    shareSupply: string;
}

export interface DepositVaultUserShare {
    activeSubVaultUserShare: bigint;
    deactivatingSubVaultUserShare: bigint;
    inactiveSubVaultUserShare: bigint;
    warmupSubVaultUserShare: bigint;
}

export interface BidVaultUserShare {
    bidderSubVaultUserShare: bigint;
    premiumSubVaultUserShare: bigint;
    performanceFeeSubVaultUserShare: bigint;
}

export function parseDepositVault(depositVault): DepositVault {
    return {
        activeSubVault: parseSubVault(depositVault.fields.active_sub_vault),
        deactivatingSubVault: parseSubVault(depositVault.fields.deactivating_sub_vault),
        inactiveSubVault: parseSubVault(depositVault.fields.inactive_sub_vault),
        warmupSubVault: parseSubVault(depositVault.fields.warmup_sub_vault),
        hasNext: depositVault.fields.has_next,
    };
}

export function parseBidVault(bidVault): BidVault {
    return {
        bidderSubVault: parseSubVault(bidVault.fields.bidder_sub_vault),
        premiumSubVault: parseSubVault(bidVault.fields.premium_sub_vault),
        performanceFeeSubVault: parseSubVault(bidVault.fields.performance_fee_sub_vault),
    };
}

export function parseSubVault(subVault): SubVault {
    return {
        balance: subVault.fields.balance,
        shareSupply: subVault.fields.share_supply,
    };
}