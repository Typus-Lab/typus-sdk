import { TransactionBlock } from "@mysten/sui.js";
/**
    public(friend) entry fun claim_and_harvest<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: u64,
        ctx: &mut TxContext
    )
 * @param typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
*/
export async function getClaimAndHarvestTx(
  gasBudget: number,
  packageId: string,
  module: string,
  registry: string,
  typeArguments: string[],
  index: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::claim_and_harvest` as any;
  const txArguments = [tx.pure(registry), tx.pure(index)];

  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);

  return tx;
}
