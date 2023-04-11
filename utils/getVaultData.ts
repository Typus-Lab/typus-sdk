import { JsonRpcProvider } from "@mysten/sui.js";
import {
  PortfolioVault,
  Config,
  DepositVault,
  BidVault,
  Auction,
  PriceConfig,
  DeliveryInfo,
  Info,
  parseVaultConfig,
  parseSubVault,
} from "./fetchData";

export async function getVaultDataFromRegistry(
  registry: string,
  provider: JsonRpcProvider,
  index?: string
): Promise<PortfolioVault[]> {
  const vaults: PortfolioVault[] = [];
  var coveredCallVaults = (
    await provider.getDynamicFields({
      parentId: registry,
    })
  ).data;

  if (index) {
    coveredCallVaults = coveredCallVaults.filter((e) => e.name.value == index);
  }

  let coveredCallVaultsId: string[] = coveredCallVaults.map((e) => e.objectId as string);

  console.log(coveredCallVaultsId);
  let objsInfo = await provider.multiGetObjects({
    ids: coveredCallVaultsId,
    options: { showContent: true },
  });
  for (let objInfo of objsInfo) {
    if (objInfo.error !== undefined) {
      console.log("obj not exist");
      continue;
    }

    // typescript sdk wrong type @@
    //@ts-ignore
    const vaultId: string = objInfo.data.content.fields.id.id;
    //@ts-ignore
    let type: string = objInfo.data.content.fields.value.type;
    type = type.split("<")[1];
    type = type.split(">")[0];
    const typeArgs = type.split(", ");
    const assets = typeArgs.map((x) => x.split("::")[2]);

    //@ts-ignore
    const infoFields = objInfo.data.content.fields.value.fields.info.fields;

    let deliveryInfo: DeliveryInfo;
    //@ts-ignore
    if (infoFields.delivery_info) {
      //@ts-ignore
      const fields =
        //@ts-ignore
        infoFields.delivery_info.fields;
      deliveryInfo = {
        round: fields.round,
        price: fields.price,
        size: fields.size,
        premium: fields.premium,
        tsMs: fields.ts_ms,
      };
    } else {
      deliveryInfo = {} as DeliveryInfo;
    }

    // info
    //@ts-ignore

    let info: Info = {
      index: infoFields.index,
      creator: infoFields.creator,
      createTsMs: infoFields.create_ts_ms,
      round: infoFields.round,
      deliveryInfo,
    };

    //config
    //@ts-ignore
    const config = objInfo.data.content.fields.value.fields.config.fields;

    const configRes: Config = {
      optionType: config.option_type,
      period: config.period, // daily:0 weekly:1 monthly:2
      activationTsMs: config.activation_ts_ms,
      expirationTsMs: config.expiration_ts_ms,
      dTokenDecimal: config.d_token_decimal,
      bTokenDecimal: config.b_token_decimal,
      oTokenDecimal: config.o_token_decimal,
      lotSize: config.lot_size,
      capacity: (Number(config.capacity) / 10 ** config.d_token_decimal).toString(),
      leverage: config.leverage,
      hasNext: config.has_next,
      activeVaultConfig: parseVaultConfig(config.active_vault_config.fields),
      warmupVaultConfig: parseVaultConfig(config.warmup_vault_config.fields),
      upcomingVaultConfig: parseVaultConfig(config.upcoming_vault_config.fields),
    };

    //@ts-ignore
    const depositVaultField =
      //@ts-ignore
      objInfo.data.content.fields.value.fields.deposit_vault.fields;
    const depositVault: DepositVault = {
      activeSubVault: parseSubVault(depositVaultField.active_sub_vault.fields),
      deactivatingSubVault: parseSubVault(depositVaultField.deactivating_sub_vault.fields),
      inactiveSubVault: parseSubVault(depositVaultField.inactive_sub_vault.fields),
      warmupSubVault: parseSubVault(depositVaultField.warmup_sub_vault.fields),
      hasNext: depositVaultField.has_next,
    };

    const bidVaultField =
      //@ts-ignore
      objInfo.data.content.fields.value.fields.bid_vault.fields;
    const bidVault: BidVault = {
      bidderSubVault: parseSubVault(bidVaultField.bidder_sub_vault.fields),
      premiumSubVault: parseSubVault(bidVaultField.premium_sub_vault.fields),
      performanceFeeSubVault: parseSubVault(bidVaultField.performance_fee_sub_vault.fields),
    };

    //@ts-ignore
    const auctionField = objInfo.data.content.fields.value.fields.auction;
    let auctionRes: Auction;
    if (auctionField) {
      const auction = auctionField.fields;

      // console.log(auction);

      const priceConfig = auction.price_config.fields;
      const priceConfigRes: PriceConfig = {
        decaySpeed: priceConfig.decay_speed,
        initialPrice: priceConfig.initial_price,
        finalPrice: priceConfig.final_price,
      };
      auctionRes = {
        startTsMs: auction.start_ts_ms,
        endTsMs: auction.end_ts_ms,
        priceConfig: priceConfigRes,
        index: auction.index,
        bids: auction.bids.fields.id.id,
        ownerships: auction.ownerships.fields.id.id,
        totalBidSize: auction.total_bid_size,
        ableToRemoveBid: auction.able_to_remove_bid,
      };
    } else {
      auctionRes = {} as Auction;
    }

    const tvl =
      Number(depositVault.activeSubVault.balance) + Number(depositVault.warmupSubVault.balance);

    // @ts-ignore
    const authorityId =
      // @ts-ignore
      objInfo.data.content.fields.value.fields.authority.fields.whitelist.fields.id.id;

    const authority = await getNodesKeyFromLinkedList(authorityId, provider);

    const portfolioVaults: PortfolioVault = {
      vaultId: vaultId,
      typeArgs,
      assets,
      info,
      config: configRes,
      depositVault,
      bidVault,
      auction: auctionRes,
      authority,
      tvl: tvl.toString(),
    };

    vaults.push(portfolioVaults);
  }

  return vaults;
}

export async function getNodesKeyFromLinkedList(
  linkedList: string,
  provider: JsonRpcProvider
): Promise<string[]> {
  //@ts-ignore
  let linkedListNodes: string[] = (
    await provider.getDynamicFields({ parentId: linkedList })
  ).data.map((d) => d.name.value);

  return linkedListNodes;
}

export async function getUserShares(
  user_share_registry: string,
  provider: JsonRpcProvider,
  user: string
): Promise<Share[]> {
  var user_shares = (
    await provider.getDynamicFields({
      parentId: user_share_registry,
    })
  ).data;

  // console.log(user_shares);

  user_shares = user_shares.filter((user_share) => user_share.name.value.user == user);

  // console.log(user_shares);

  let objsInfo = await provider.multiGetObjects({
    ids: user_shares.map((user_share) => user_share.objectId),
    options: { showContent: true },
  });

  // console.log(objsInfo);

  let shares: Share[] = [];

  objsInfo.forEach((info) => {
    // @ts-ignore
    let fields = info.data.content.fields;
    if (fields.value.fields.exists) {
      let share: Share = {
        index: fields.name.fields.index,
        tag: fields.name.fields.tag,
        value: fields.value.fields.value,
      };
      shares.push(share);
    }
  });

  return shares;
}

export interface Share {
  index: string;
  tag: string;
  value: string;
}
