import { JsonRpcProvider, TransactionBlock } from "@mysten/sui.js";
import { BcsReader } from "@mysten/bcs";

export const SENDER = "0xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

export interface DepositShare {
    index: string;
    activeSubVaultUserShare: string;
    deactivatingSubVaultUserShare: string;
    inactiveSubVaultUserShare: string;
    warmupSubVaultUserShare: string;
    premiumSubVaultUserShare: string;
    performanceFeeSubVaultUserShare: string;
}
export async function getDepositShares(
    provider: JsonRpcProvider,
    typusFrameworkPackageId: string,
    packageId: string,
    registry: string,
    receipts: string[]
): Promise<Map<string, DepositShare>> {
    let transactionBlock = new TransactionBlock();
    let target = `${packageId}::typus_dov_single::get_deposit_shares_bcs` as any;
    let transactionBlockArguments = [
        transactionBlock.pure(registry),
        transactionBlock.makeMoveVec({
            type: `${typusFrameworkPackageId}::vault::TypusDepositReceipt`,
            objects: receipts.map((id) => transactionBlock.object(id)),
        }),
    ];
    transactionBlock.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock, sender: SENDER })).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    let result = Array.from(new Map()).reduce((map, [key, value]) => {
        map[key] = value;
        return map;
    }, {});
    reader.readVec((reader, i) => {
        reader.read8();
        let index = reader.read64();
        let activeSubVaultUserShare = reader.read64();
        let deactivatingSubVaultUserShare = reader.read64();
        let inactiveSubVaultUserShare = reader.read64();
        let warmupSubVaultUserShare = reader.read64();
        let premiumSubVaultUserShare = reader.read64();
        let performanceFeeSubVaultUserShare = reader.read64();
        result[index] = {
            index,
            activeSubVaultUserShare,
            deactivatingSubVaultUserShare,
            inactiveSubVaultUserShare,
            warmupSubVaultUserShare,
            premiumSubVaultUserShare,
            performanceFeeSubVaultUserShare,
        } as DepositShare;
    });

    // @ts-ignore
    return result;
}
