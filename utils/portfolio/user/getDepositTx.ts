import { TransactionBlock } from "@mysten/sui.js";
/**
    public(friend) entry fun deposit<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: u64,
        coins: vector<Coin<D_TOKEN>>,
        amount: u64,
        ctx: &mut TxContext
    )
 * @param typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
*/
export async function getDepositTx(
  gasBudget: number,
  packageId: string,
  module: string,
  registry: string,
  typeArguments: string[],
  vaultIndex: string,
  coins: string[],
  amount: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::deposit` as any;
  const vec = tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) });
  const txArguments = [tx.pure(registry), tx.pure(vaultIndex), vec, tx.pure(amount)];

  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);

  return tx;
}
