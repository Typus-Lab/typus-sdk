import { TransactionBlock } from "@mysten/sui.js";

export async function getUpdateCapacityTx(
  gasBudget: number,
  packageId: string,
  managerCap: string,
  typeArguments: string[],
  registry: string,
  index: string,
  capacity: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::update_capacity` as any;
  const txArguments = [tx.pure(managerCap), tx.pure(registry), tx.pure(index), tx.pure(capacity)];
  tx.moveCall({
    target,
    typeArguments: [],
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);
  return tx;
}
