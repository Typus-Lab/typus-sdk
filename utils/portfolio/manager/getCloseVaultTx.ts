import { TransactionBlock } from "@mysten/sui.js";

export async function getCloseVaultTx(
  gasBudget: number,
  packageId: string,
  managerCap: string,
  typeArguments: string[],
  registry: string,
  index: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::close_vault` as any;
  const txArguments = [tx.pure(managerCap), tx.pure(registry), tx.pure(index)];
  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);
  return tx;
}
