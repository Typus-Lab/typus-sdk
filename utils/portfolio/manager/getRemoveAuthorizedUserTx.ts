import { TransactionBlock } from "@mysten/sui.js";

/**
    public(friend) entry fun remove_authorized_user(
        manager_cap: &ManagerCap,
        registry: &mut Registry,
        user_address: address,
    )
*/
export async function getRemoveAuthorizedUserTx(
  gasBudget: number,
  packageId: string,
  managerCap: string,
  registry: string,
  address: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::remove_authorized_user` as any;
  const txArguments = [tx.pure(managerCap), tx.pure(registry), tx.pure(address)];
  tx.moveCall({
    target,
    typeArguments: [],
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);
  return tx;
}
