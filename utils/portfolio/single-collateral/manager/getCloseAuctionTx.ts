import { TransactionBlock } from "@mysten/sui.js";

export async function getCloseAuctionTx(
  gasBudget: number,
  packageId: string,
  managerCap: string,
  typeArguments: string[],
  registry: string,
  index: string,
  priceOracle: string,
  timeOracle: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::close_auction` as any;
  const txArguments = [
    tx.pure(managerCap),
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
