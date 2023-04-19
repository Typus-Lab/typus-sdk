import { TransactionBlock } from "@mysten/sui.js";
/**
    public fun get_auction_max_size<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &Registry,
        index: u64,
        price_oracle: &Oracle<O_TOKEN>,
        clock: &Clock,
    ): u64
*/
export async function getAuctionMaxSize(
  packageId: string,
  module: string,
  typeArguments: string[],
  registry: string,
  index: string,
  priceOracle: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::get_auction_max_size` as any;
  const txArguments = [tx.pure(registry), tx.pure(index), tx.pure(priceOracle), tx.pure("0x6")];
  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });
  return tx;
}
