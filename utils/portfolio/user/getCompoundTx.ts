import { TransactionBlock } from "@mysten/sui.js";
/**
    public entry fun compound<TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: u64,
        ctx: &mut TxContext,
    )
 * @param typeArguments [TOKEN, O_TOKEN]
*/
export async function getCompoundTx(
  gasBudget: number,
  packageId: string,
  module: string,
  registry: string,
  typeArguments: string[],
  index: string
): Promise<any> {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::compound` as any;
  const txArguments = [tx.pure(registry), tx.pure(index)];

  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);

  return tx;
}
