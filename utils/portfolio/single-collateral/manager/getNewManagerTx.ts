import { TransactionBlock } from "@mysten/sui.js";

/**
    public(friend) entry fun new_manager(
        _manager_cap: &ManagerCap,
        users: vector<address>,
        ctx: &mut TxContext
    )
*/
export async function getNewManagerTx(
  gasBudget: number,
  packageId: string,
  managerCap: string,
  addresses: string[]
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::new_manager` as any;
  const txArguments = [tx.pure(managerCap), tx.pure(addresses)];
  tx.moveCall({
    target,
    typeArguments: [],
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);
  return tx;
}
