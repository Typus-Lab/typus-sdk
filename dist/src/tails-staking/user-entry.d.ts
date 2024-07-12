import { TransactionBlock } from "@mysten/sui.js/transactions";
import { KioskClient } from "@mysten/kiosk";
/**
    public fun stake_tails(
        version: &mut Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        coin: Coin<SUI>,
        ctx: &mut TxContext,
    ) {
*/
export declare function getStakeTailsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    kiosk: string;
    kioskCap: string;
    tails: string;
    fee: string;
    personalKioskPackageId: string | undefined;
}): Promise<TransactionBlock>;
/**
    public fun unstake_tails(
        version: &mut Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        ctx: &TxContext,
    ) {
*/
export declare function getUnstakeTailsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    kiosk: string;
    kioskCap: string;
    tails: string;
    personalKioskPackageId: string | undefined;
}): Promise<TransactionBlock>;
/**
    public fun transfer_tails(
        version: &mut Version,
        tails_staking_registry: &TailsStakingRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        coin: Coin<SUI>,
        recipient: address,
        ctx: &mut TxContext,
    ) {
*/
export declare function getTransferTailsTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    kiosk: string;
    kioskCap: string;
    tails: string;
    recipient: string;
    fee: string;
    personalKioskPackageId: string | undefined;
}): Promise<TransactionBlock>;
/**
    entry fun daily_sign_up(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        clock: &Clock,
        ctx: &TxContext,
    ) {
*/
export declare function getDailySignUpTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
}): Promise<TransactionBlock>;
/**
    public fun claim_profit_sharing<TOKEN>(
        version: &mut Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        ctx: &mut TxContext,
    ): Balance<TOKEN>
*/
export declare function getClaimProfitSharingTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    typeArguments: string[];
    user: string;
}): Promise<TransactionBlock>;
/**
    entry fun level_up(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        tails: address,
        raw: bool,
    ) {
*/
export declare function getLevelUpTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    tails: string;
    raw: boolean;
}): Promise<TransactionBlock>;
/**
    entry fun exp_up(
        version: &Version,
        tails_staking_registry: &mut TailsStakingRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        tails: address,
        amount: u64,
        ctx: &TxContext,
    ) {
*/
export declare function getExpUpTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    typusUserRegistry: string;
    tails: string;
    amount: string;
}): Promise<TransactionBlock>;
/**
    entry fun exp_up_without_staking(
        version: &Version,
        tails_staking_registry: &TailsStakingRegistry,
        typus_user_registry: &mut TypusUserRegistry,
        kiosk: &mut Kiosk,
        kiosk_owner_cap: &KioskOwnerCap,
        tails: address,
        amount: u64,
        ctx: &TxContext,
    ) {
*/
export declare function getExpUpWithoutStakingTx(input: {
    tx: TransactionBlock;
    typusPackageId: string;
    typusEcosystemVersion: string;
    typusTailsStakingRegistry: string;
    typusUserRegistry: string;
    kiosk: string;
    kioskCap: string;
    tails: string;
    amount: string;
    personalKioskPackageId: string | undefined;
}): Promise<TransactionBlock>;
export declare function getCreateKioskAndLockNftTx(kioskClient: KioskClient, gasBudget: number, nftPackageId: string, policy: string, nft_id: string, singer: string): Promise<TransactionBlock>;
