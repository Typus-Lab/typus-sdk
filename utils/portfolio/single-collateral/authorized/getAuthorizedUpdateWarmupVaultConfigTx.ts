import { TransactionBlock } from "@mysten/sui.js";

export async function getAuthorizedUpdateWarmupVaultConfigTx(
  gasBudget: number,
  packageId: string,
  typeArguments: string[],
  registry: string,
  index: string,
  strikeIncrement: string,
  decaySpeed: string,
  initialPrice: string,
  finalPrice: string,
  auctionDurationInMs: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::authorized_update_warmup_vault_config` as any;
  const txArguments = [
    tx.pure(registry),
    tx.pure(index),
    tx.pure(strikeIncrement),
    tx.pure(decaySpeed),
    tx.pure(initialPrice),
    tx.pure(finalPrice),
    tx.pure(auctionDurationInMs),
  ];
  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);
  return tx;
}
