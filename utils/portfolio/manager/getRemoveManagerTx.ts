import { TransactionBlock } from "@mysten/sui.js";

/**
    public(friend) entry fun remove_manager(
        manager_cap: ManagerCap,
    )
*/
export async function getRemoveManagerTx(gasBudget: number, packageId: string, managerCap: string) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::remove_manager` as any;
  const txArguments = [tx.pure(managerCap)];
  tx.moveCall({
    target,
    typeArguments: [],
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);
  return tx;
}
