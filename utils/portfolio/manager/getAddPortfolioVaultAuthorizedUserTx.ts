import { TransactionBlock } from "@mysten/sui.js";
/**
    public(friend) entry fun add_portfolio_vault_authorized_user<D_TOKEN, B_TOKEN, O_TOKEN>(
        manager_cap: &ManagerCap,
        registry: &mut Registry,
        index: u64,
        user_address: address,
    )
 * @param  typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
 */
export async function getAddPortfolioVaultAuthorizedUserTx(
  gasBudget: number,
  packageId: string,
  managerCap: string,
  registry: string,
  typeArguments: string[],
  index: string,
  address: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::add_portfolio_vault_authorized_user` as any;
  const txArguments = [tx.pure(managerCap), tx.pure(registry), tx.pure(index), tx.pure(address)];
  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);
  return tx;
}
