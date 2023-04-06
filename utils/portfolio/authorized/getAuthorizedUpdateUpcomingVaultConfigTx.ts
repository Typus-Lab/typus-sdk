import { TransactionBlock } from "@mysten/sui.js";

export async function getAuthorizedUpdateUpcomingVaultConfigTx(
  gasBudget: number,
  packageId: string,
  registry: string,
  typeArguments: string[],
  index: string,
  strikePct: string[], // vector<u64>
  weight: string[], // vector<u64>
  isBuyer: boolean[], // vector<bool>
  strikeIncrement: string,
  decaySpeed: string,
  initialPrice: string,
  finalPrice: string,
  auctionDurationInMs: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::authorized_update_upcoming_vault_config` as any;
  const txArguments = [
    tx.pure(registry),
    tx.pure(index),
    tx.pure(strikePct),
    tx.pure(weight),
    tx.pure(isBuyer),
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
