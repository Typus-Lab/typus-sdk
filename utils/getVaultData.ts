
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { TOKEN_NAME, PRICE_DECIMAL, TOKEN_DECIMAL, TESTNET_RPC_ENDPOINT } from '../constants';
import { PortfolioVault, PayoffConfig, Config, VaultConfig, DepositVault, BidVault, SubVault, Auction, PriceConfig, DeliveryInfo, Info } from "./fetchData"

// const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations

export async function getVaultDataFromRegistry(registry: string, provider: JsonRpcProvider): Promise<PortfolioVault[]> {
    // console.log("registry: " + registry)

    let coveredCallVaults: any[] = (await provider.getDynamicFields(registry)).data

    let coveredCallVaultsId: string[] = coveredCallVaults.map(e => e.objectId as string)
    let objsInfo = await provider.getObjectBatch(coveredCallVaultsId)

    let vaults: PortfolioVault[] = [];

    for (let objInfo of objsInfo) {
        if (objInfo.status != "Exists") {
            console.log("obj not exist")
            continue
        }

        //vaultId
        //@ts-ignore
        let vaultId = objInfo.details.data.fields.id.id

        //asset
        //@ts-ignore
        let type = objInfo.details.data.fields.value.type
        let asset: string | undefined = TOKEN_NAME.find(e => type.includes(e))
        if (!asset) {
            console.log("can't find token")
            asset = ""
        }

        let deliveryInfo: DeliveryInfo
        //@ts-ignore
        if (objInfo.details.data.fields.value.fields.delivery_info) {
            //@ts-ignore
            let fields = objInfo.details.data.fields.value.fields.delivery_info.fields;
            deliveryInfo = {
                round: fields.round,
                price: fields.price,
                size: fields.size,
                premium: fields.premium,
                tsMs: fields.ts_ms,
            }
        } else {
            deliveryInfo = {} as DeliveryInfo
        }

        // info
        //@ts-ignore
        let infoF = objInfo.details.data.fields.value.fields.config.fields

        let info: Info = {
            index: infoF.index,
            creator: infoF.creator,
            createTsMs: infoF.create_ts_ms,
            round: infoF.round,
            deliveryInfo
        };

        //config
        //@ts-ignore
        let config = objInfo.details.data.fields.value.fields.config.fields

        //prevBalance
        //@ts-ignore
        let prev = objInfo.details.data.fields.value.fields.prev
        prev = (prev != null) ? prev as number : null

        let vaultConfig = config.vault_config.fields
        let vaultConfigRes: VaultConfig = {
            payoffConfig: vaultConfig.payoffConfig,
            strikeIncrement: vaultConfig.strike_increment,
            lotSize: vaultConfig.lot_size,
            decaySpeed: vaultConfig.decay_speed,
            initialPrice: vaultConfig.initial_price,
            finalPrice: vaultConfig.final_price,
            auctionDurationInMs: vaultConfig.auction_duration_in_ms,
        }

        let nextVaultConfig = config.next_vault_config.fields
        let nextVaultConfigRes: VaultConfig = {
            payoffConfig: nextVaultConfig.payoffConfig,
            strikeIncrement: nextVaultConfig.strike_increment,
            lotSize: nextVaultConfig.lot_size,
            decaySpeed: nextVaultConfig.decay_speed,
            initialPrice: nextVaultConfig.initial_price,
            finalPrice: nextVaultConfig.final_price,
            auctionDurationInMs: nextVaultConfig.auction_duration_in_ms,
        }

        let payoffConfig = config.payoff_config.fields
        let payoffConfigRes: PayoffConfig = {
            strikePct: payoffConfig.strike_pct,
            weight: payoffConfig.weight,
            isBuyer: payoffConfig.is_buyer,
            strike: ((payoffConfig.strike) / (10 ** PRICE_DECIMAL)).toString(),
        }

        let configRes: Config = {
            optionType: config.option_type,
            period: config.period,// daily:0 weekly:1 monthly:2
            activationTsMs: config.activation_ts_ms,
            expirationTsMs: config.expiration_ts_ms,
            dTokenDecimal: config.d_token_decimal,
            bTokenDecimal: config.b_token_decimal,
            oTokenDecimal: config.o_token_decimal,
            capacity: (Number(config.capacity) / (10 ** config.d_token_decimal)).toString(),
            leverage: config.leverage,
            hasNext: config.has_next,
            vaultConfig: vaultConfigRes,
            nextVaultConfig: nextVaultConfigRes,
        }

        //@ts-ignore
        let depositVaultF = objInfo.details.data.fields.value.fields.depositor_vault.fields

        let activeSubVault: SubVault = {
            balance: (depositVaultF.active_sub_vault.fields.balance),
            shareSupply: (depositVaultF.active_sub_vault.fields.share_supply),
        }
        let deactivatingSubVault: SubVault = {
            balance: (depositVaultF.deactivating_sub_vault.fields.balance),
            shareSupply: (depositVaultF.deactivating_sub_vault.fields.share_supply),
        }
        let inactiveSubVault: SubVault = {
            balance: (depositVaultF.inactive_sub_vault.fields.balance),
            shareSupply: (depositVaultF.inactive_sub_vault.fields.share_supply),
        }
        let warmupSubVault: SubVault = {
            balance: (depositVaultF.warmup_sub_vault.fields.balance),
            shareSupply: (depositVaultF.warmup_sub_vault.fields.share_supply),
        }

        let depositVault: DepositVault = {
            activeSubVault: activeSubVault,
            deactivatingSubVault: deactivatingSubVault,
            inactiveSubVault: inactiveSubVault,
            warmupSubVault: warmupSubVault,
            hasNext: depositVaultF.has_next
        }

        //@ts-ignore
        let depositorVault = objInfo.details.data.fields.value.fields.depositor_vault.fields

        let bidderSubVault: SubVault = {
            balance: (depositorVault.bidder_sub_vault.fields.balance),
            shareSupply: (depositorVault.bidder_sub_vault.fields.share_supply),
        }
        let premiumSubVault: SubVault = {
            balance: (depositorVault.premium_sub_vault.fields.balance),
            shareSupply: (depositorVault.premium_sub_vault.fields.share_supply),
        }
        let performanceFeeSubVault: SubVault = {
            balance: (depositorVault.performance_fee_sub_vault.fields.balance),
            shareSupply: (depositorVault.performance_fee_sub_vault.fields.share_supply),
        }

        let bidVault: BidVault = {
            bidderSubVault,
            premiumSubVault,
            performanceFeeSubVault
        }

        let auctionRes: Auction;
        let vaultBidPrice: number;
        //@ts-ignore
        if (objInfo.details.data.fields.value.fields.auction) {
            //@ts-ignore
            let auction = objInfo.details.data.fields.value.fields.auction.fields

            let priceConfig = auction.price_config.fields
            let priceConfigRes: PriceConfig = {
                decaySpeed: (priceConfig.decay_speed),
                initialPrice: (priceConfig.initial_price),
                finalPrice: (priceConfig.final_price),
            }
            auctionRes = {
                startTsMs: (auction.start_ts_ms),
                endTsMs: (auction.end_ts_ms),
                priceConfig: priceConfigRes,
                index: (auction.index),
                totalBidSize: auction.total_bid_size,
                ableToRemoveBid: auction.able_to_remove_bid,
            }
            vaultBidPrice = await getVaultBidPrice(auctionRes)
            // console.log("get auction in " + vaultId)
        } else {
            // console.log("No auction " + vaultId)
            auctionRes = {} as Auction
            vaultBidPrice = 0;
        }

        //@ts-ignore
        let next = objInfo.details.data.fields.value.fields.next

        //@ts-ignore
        let totalBidSize = objInfo.details.data.fields.value.fields.total_bid_size


        //@ts-ignore
        let owner = objInfo.details.data.fields.value.fields.owner as string

        let tvl = Number(depositorVault.regular_sub_vault.fields.balance) + Number(depositorVault.rolling_sub_vault.fields.balance)

        //@ts-ignore
        let authority = await getNodesKeyFromLinkedList(objInfo.details.data.fields.value.fields.authority, provider)

        let res: PortfolioVault = {
            vaultId: vaultId,
            dToken: asset,
            bToken: asset,
            oToken: asset,
            info,
            config: configRes,
            depositVault,
            bidVault,
            auction: auctionRes,
            authority,
            tvl: tvl.toString(),
            vaultBidPrice: vaultBidPrice.toString(),
        }

        vaults.push(res)
    }

    return vaults
}

export async function getVaultBidPrice(auction: Auction): Promise<number> {
    //@ts-ignore
    let current = Date.now()
    let initialPrice = Number(auction.priceConfig.initialPrice);
    let finalPrice = Number(auction.priceConfig.finalPrice);
    let decaySpeed = Number(auction.priceConfig.decaySpeed);
    let start = Number(auction.startTsMs);
    let end = Number(auction.endTsMs);

    /// decayed_price =
    ///     initial_price -
    ///         (initial_price - final_price) *
    ///             (1 - remaining_time / auction_duration) ^ decay_speed

    // 1 - remaining_time / auction_duration => 1 - (end - current) / (end - start) => (current - start) / (end - start)

    return initialPrice -
        (initialPrice - finalPrice) *
        (((current - start) / (end - start)) ^ decaySpeed)
}

export async function getNodesKeyFromLinkedList(linkedList: string, provider: JsonRpcProvider): Promise<string[]> {

    //@ts-ignore
    let linkedListNodes: string[] = (await provider.getDynamicFields(linkedList.fields.whitelist.fields.nodes.fields.id.id)).data.map(d => d.name)

    return linkedListNodes
}