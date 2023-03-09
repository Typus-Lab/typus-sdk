
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { TOKEN_NAME, PRICE_DECIMAL, TOKEN_DECIMAL, TESTNET_RPC_ENDPOINT } from '../constants';
import { PortfolioVault, PayoffConfig, Config, VaultConfig, DepositVault, BidVault, SubVault, Auction, PriceConfig, DeliveryInfo, Info, parseVaultConfig, parseSubVault } from "./fetchData"

// const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations

export async function getVaultDataFromRegistry(registry: string, provider: JsonRpcProvider): Promise<PortfolioVault[]> {
    // console.log("registry: " + registry)

    let coveredCallVaults: any[] = (await provider.getDynamicFields(registry)).data

    let coveredCallVaultsId: string[] = coveredCallVaults.map(e => e.objectId as string)
    // console.log(coveredCallVaultsId)
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

        //@ts-ignore
        let type: string = objInfo.details.data.fields.value.type
        type = type.split("<")[1]
        type = type.split(">")[0]
        let typeArgs = type.split(", ")
        let assets = typeArgs.map(x => x.split("::")[2])

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
        let infoF = objInfo.details.data.fields.value.fields.info.fields
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

        let configRes: Config = {
            optionType: config.option_type,
            period: config.period,// daily:0 weekly:1 monthly:2
            activationTsMs: config.activation_ts_ms,
            expirationTsMs: config.expiration_ts_ms,
            dTokenDecimal: config.d_token_decimal,
            bTokenDecimal: config.b_token_decimal,
            oTokenDecimal: config.o_token_decimal,
            lotSize: config.lot_size,
            capacity: (Number(config.capacity) / (10 ** config.d_token_decimal)).toString(),
            leverage: config.leverage,
            hasNext: config.has_next,
            activeVaultConfig: parseVaultConfig(config.active_vault_config.fields),
            warmupVaultConfig: parseVaultConfig(config.warmup_vault_config.fields),
            upcomingVaultConfig: parseVaultConfig(config.upcoming_vault_config.fields),
        }

        //@ts-ignore
        let depositVaultF = objInfo.details.data.fields.value.fields.deposit_vault.fields
        let depositVault: DepositVault = {
            activeSubVault: parseSubVault(depositVaultF.active_sub_vault.fields),
            deactivatingSubVault: parseSubVault(depositVaultF.deactivating_sub_vault.fields),
            inactiveSubVault: parseSubVault(depositVaultF.inactive_sub_vault.fields),
            warmupSubVault: parseSubVault(depositVaultF.warmup_sub_vault.fields),
            hasNext: depositVaultF.has_next
        }

        //@ts-ignore
        let bidVaultF = objInfo.details.data.fields.value.fields.bid_vault.fields
        let bidVault: BidVault = {
            bidderSubVault: parseSubVault(bidVaultF.bidder_sub_vault.fields),
            premiumSubVault: parseSubVault(bidVaultF.premium_sub_vault.fields),
            performanceFeeSubVault: parseSubVault(bidVaultF.performance_fee_sub_vault.fields),
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

        let tvl = Number(depositVault.activeSubVault.balance) + Number(depositVault.warmupSubVault.balance)

        //@ts-ignore
        let authority = await getNodesKeyFromLinkedList(objInfo.details.data.fields.value.fields.authority, provider)

        let res: PortfolioVault = {
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