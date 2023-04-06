import { TransactionBlock } from "@mysten/sui.js";

/**
 * @param  typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
 */
export async function getAuthorizedAddPortfolioVaultAuthorizedUserTx(
  gasBudget: number,
  packageId: string,
  registry: string,
  typeArguments: string[],
  index: string,
  users: string[]
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::authorized_add_portfolio_vault_authorized_user` as any;
  const txArguments = [tx.pure(registry), tx.pure(index), tx.pure(users)];
  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);
  return tx;
}
