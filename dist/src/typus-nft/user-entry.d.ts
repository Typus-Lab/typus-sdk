import { TransactionArgument, TransactionBlock } from "@mysten/sui.js/transactions";
/**
    entry fun free_mint(
        pool: &mut Pool,
        whitelist_token: Whitelist,
        ctx: &mut TxContext,
    )
*/
export declare function getMintTx(gasBudget: number, nftPackageId: string, policy: string, pool: string, whitelist_token: string): Promise<TransactionBlock>;
/**
    entry fun free_mint_into_kiosk(
        pool: &mut Pool,
        whitelist_token: Whitelist,
        kiosk: &mut Kiosk,
        kiosk_cap: &KioskOwnerCap,
        ctx: &mut TxContext,
    )
*/
export declare function getMintToKioskTx(gasBudget: number, nftPackageId: string, pool: string, policy: string, whitelist_token: string, kiosk: string, kiosk_cap: string): Promise<TransactionBlock>;
/**
    public fun pay<T>(
        policy: &mut TransferPolicy<T>,
        request: &mut TransferRequest<T>,
        payment: Coin<SUI>
    )
*/
export declare function getPayRoyaltyTx(tx: TransactionBlock, nftPackageId: string, policy: string, request: TransactionArgument, coin: any): Promise<TransactionBlock>;
/**
    entry fun request_mint(
        pool: &mut Pool,
        seed: u64, // 0, 1, 2
        coin: Coin<SUI>,
        clock: &Clock,
        ctx: & TxContext
    )
*/
export declare function getRequestMintTx(gasBudget: number, nftPackageId: string, pool: string, seed: string, price: string): Promise<TransactionBlock>;
export declare function getIsWhitelistTx(gasBudget: number, nftPackageId: string, pool: string, user: string): Promise<TransactionBlock>;
