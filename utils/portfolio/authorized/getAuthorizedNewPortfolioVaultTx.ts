import { TransactionBlock } from "@mysten/sui.js";

/**
 *  registry: & mut Registry,
    time_oracle: & Time,
    option_type: u64,
    period: u8,
    activation_ts_ms: u64,
    expiration_ts_ms: u64,
    d_token_decimal: u64,
    b_token_decimal: u64,
    o_token_decimal: u64,
    capacity: u64,
    strike_pct: vector<u64>,
    weight: vector<u64>,
    is_buyer: vector<bool>,
    strike_increment: u64,
    lot_size: u64,
    decay_speed: u64,
    initial_price: u64,
    final_price: u64,
    auction_duration_in_ms: u64,
    leverage: u64,
    has_next: bool,
    whitelist: vector<address>,
 * @param  typeArguments [D_TOKEN, B_TOKEN, O_TOKEN]
 */
export async function getAuthorizedNewPortfolioVaultTx(
  gasBudget: number,
  packageId: string,
  registry: string,
  typeArguments: string[],
  timeOracle: string,
  optionType: string, // u64
  period: string, // u8
  activationTsMs: string, // u64
  expirationTsMs: string, // u64
  dTokenDecimal: string, // u64
  bTokenDecimal: string, // u64
  oTokenDecimal: string, // u64
  capacity: string, // u64
  strikePct: string[], // vector<u64>
  weight: string[], // vector<u64>
  isBuyer: boolean[], // vector<bool>
  strikeIncrement: string, // u64
  lotSize: string,
  decaySpeed: string,
  initialPrice: string,
  finalPrice: string,
  auctionDurationInMs: string,
  whitelist: string[],
  leverage: string,
  hasNext: boolean // bool
) {
  const tx = new TransactionBlock();
  const target = `${packageId}::${module}::authorized_new_portfolio_vault` as any;
  const txArguments = [
    tx.pure(registry),
    tx.pure(timeOracle),
    tx.pure(optionType),
    tx.pure(period),
    tx.pure(activationTsMs),
    tx.pure(expirationTsMs),
    tx.pure(dTokenDecimal),
    tx.pure(bTokenDecimal),
    tx.pure(oTokenDecimal),
    tx.pure(capacity),
    tx.pure(strikePct),
    tx.pure(weight),
    tx.pure(isBuyer),
    tx.pure(strikeIncrement),
    tx.pure(lotSize),
    tx.pure(decaySpeed),
    tx.pure(initialPrice),
    tx.pure(finalPrice),
    tx.pure(auctionDurationInMs),
    tx.pure(leverage),
    tx.pure(whitelist),
  ];
  tx.moveCall({
    target,
    typeArguments,
    arguments: txArguments,
  });
  tx.setGasBudget(gasBudget);
  return tx;
}
