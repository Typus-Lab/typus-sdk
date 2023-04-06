import { TransactionBlock } from "@mysten/sui.js";

export async function getAuthorizedUpdateCapacityTx(
  gasBudget: number,
  packageId: string,
  typeArguments: string[],
  registry: string,
  index: string,
  capacity: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::authorized_update_capacity` as any;
  const txArguments = [tx.pure(registry), tx.pure(index), tx.pure(capacity)];
  tx.moveCall({
    target,
    typeArguments: [],
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);
  return tx;
}
