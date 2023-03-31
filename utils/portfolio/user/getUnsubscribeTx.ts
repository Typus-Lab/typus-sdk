import { TransactionBlock } from "@mysten/sui.js"; /**
    public(friend) entry fun unsubscribe<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: u64,
        share: Option<u64>,
        ctx: &mut TxContext
    )
 * @param typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
*/
export async function getUnsubscribeTx(
  gasBudget: number,
  packageId: string,
  module: string,
  registry: string,
  typeArguments: string[],
  index: string,
  share: string[]
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::unsubscribe` as any;
  const vec = tx.makeMoveVec({ objects: share.map((id) => tx.object(id)) });
  const txArguments = [tx.pure(registry), tx.pure(index), vec];

  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);

  return tx;
}
