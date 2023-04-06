import { TransactionBlock } from "@mysten/sui.js";

export async function getAuthorizedDeliveryTx(
  gasBudget: number,
  packageId: string,
  registry: string,
  typeArguments: string[],
  index: string,
  priceOracle: string,
  timeOracle: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::authorized_delivery` as any;
  const txArguments = [
    tx.pure(registry),
    tx.pure(index),
    tx.pure(priceOracle),
    tx.pure(timeOracle),
  ];
  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);
  return tx;
}
