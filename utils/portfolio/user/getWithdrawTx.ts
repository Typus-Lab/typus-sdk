import { TransactionBlock } from "@mysten/sui.js";
/**
    public(friend) entry fun withdraw<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: u64,
        share: Option<u64>,
        ctx: &mut TxContext
    )
 * @param typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
*/
export async function getWithdrawTx(
  gasBudget: number,
  packageId: string,
  module: string,
  registry: string,
  typeArguments: string[],
  vaultIndex: string,
  share: string[]
): Promise<any> {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::withdraw` as any;
  const txArguments = [tx.pure(registry), tx.pure(vaultIndex), tx.pure(share)];

  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);

  return tx;
}
