import { TransactionBlock } from "@mysten/sui.js";
/**
    public(friend) entry fun new_bid<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &mut Registry,
        index: u64,
        price_oracle: &Oracle<O_TOKEN>,
        time: &Time,
        coins: vector<Coin<B_TOKEN>>,
        size: u64,
        ctx: &mut TxContext,
    )
 * @param typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
*/
export async function getNewBidTx(
  gasBudget: number,
  packageId: string,
  module: string,
  registry: string,
  typeArguments: string[],
  index: string,
  priceOracle: string,
  timeOracle: string,
  coins: string[],
  size: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::new_bid` as any;
  const txArguments = [
    tx.pure(registry),
    tx.pure(index),
    tx.pure(priceOracle),
    tx.pure(timeOracle),
    tx.pure(coins),
    tx.pure(size),
  ];

  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);

  return tx;
}
