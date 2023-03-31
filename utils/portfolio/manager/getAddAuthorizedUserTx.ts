import { TransactionBlock } from "@mysten/sui.js";
/**
    public(friend) entry fun add_authorized_user(
        manager_cap: & ManagerCap,
        registry: & mut Registry,
        user_addresses: vector<address>,
    )
*/
export async function getAddAuthorizedUserTx(
  gasBudget: number,
  packageId: string,
  module: string,
  managerCap: string,
  registry: string,
  userAddresses: string[]
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::add_authorized_user` as any;
  const txArguments = [tx.pure(managerCap), tx.pure(registry), tx.pure(userAddresses)];
  tx.moveCall({
    target,
    typeArguments: [],
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);
  return tx;
}
