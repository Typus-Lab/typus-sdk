import { TransactionBlock } from "@mysten/sui.js";
/**
    struct GetUserStatusResult has copy, drop {
        active: u64,
        deactivating: u64,
        inactive: u64,
        warmup: u64,
        bidder: u64,
        premium: u64,
        performance_fee: u64,
    }
    public fun get_user_status<D_TOKEN, B_TOKEN, O_TOKEN>(
        registry: &Registry,
        index: u64,
        user: address,
    ): GetUserStatusResult
*/
export async function getUserStatus(
  packageId: string,
  module: string,
  typeArguments: string[],
  registry: string,
  index: string,
  userAddress: string
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::get_user_status` as any;
  const txArguments = [tx.pure(registry), tx.pure(index), tx.pure(userAddress)];

  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });

  return tx;
}

interface GetUserStatusResult {
  active: bigint;
  deactivating: bigint;
  inactive: bigint;
  warmup: bigint;
  bidder: bigint;
  premium: bigint;
  performanceFee: bigint;
}

export function parseUserStatusResult(
  rawData: Uint8Array
): GetUserStatusResult {
  let temp: bigint[] = [];
  for (var i = 0; i < rawData.length / 8; ++i) {
    // console.log(i)
    temp.push(U64FromBytes(rawData.slice(i * 8, (i + 1) * 8).reverse()));
  }
  let userStatusResult: GetUserStatusResult = {
    active: temp[0],
    deactivating: temp[1],
    inactive: temp[2],
    warmup: temp[3],
    bidder: temp[4],
    premium: temp[5],
    performanceFee: temp[6],
  };
  return userStatusResult;
}

export function U64FromBytes(x) {
  var val = BigInt(0);
  for (var i = 0; i < x.length; i++) {
    val = val << BigInt(8);
    val += BigInt(x[i]);
  }
  return val;
}
