
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { TOKEN_NAME, PRICE_DECIMAL, TOKEN_DECIMAL } from '../constants';
import { CoveredCallVault, PayoffConfig, Config, VaultConfig, Vault, SubVault, Auction, PriceConfig } from "../utils/fetchData"
import { createTimeOracle } from "../utils/coveredCall/createTimeOracle"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

export async function getVaultDataFromRegistry(registry: string): Promise<CoveredCallVault[]> {
    console.log("registry: " + registry)

    let coveredCallVaults: any[] = await provider.getObjectsOwnedByObject(registry)
    let coveredCallVaultsId: string[] = coveredCallVaults.map(e => e.objectId as string)
    let objsInfo = await provider.getObjectBatch(coveredCallVaultsId)

    let vaults: CoveredCallVault[] = [];

    let [timeOracle, _] = await createTimeOracle();

    for (let objInfo of objsInfo) {
        if (objInfo.status != "Exists") {
            console.log("obj not exist")
            continue
        }

        //@ts-ignore
        // console.log(objInfo.details.data.fields.value.fields.config.fields)

        //vaultId
        //@ts-ignore
        let vaultId = objInfo.details.data.fields.id.id

        //vaultIdx
        //@ts-ignore
        let vaultIdx = objInfo.details.data.fields.name as number

        //asset
        //@ts-ignore
        let type = objInfo.details.data.fields.value.type
        let asset: string | undefined = TOKEN_NAME.find(e => type.includes(e))
        if (!asset) {
            console.log("can't find token")
            asset = ""
        }

        //config
        //@ts-ignore
        let config = objInfo.details.data.fields.value.fields.config.fields

        //vault
        //@ts-ignore
        let vault = objInfo.details.data.fields.value.fields.vault.fields

        //prevBalance
        //@ts-ignore
        let prevBalance = objInfo.details.data.fields.value.fields.prev_balance as number

        let vaultConfig = config.vault_config.fields
        let vaultConfigRes: VaultConfig = {
            strikeOtmPct: vaultConfig.strike_otm_pct,
            strikeIncrement: vaultConfig.strike_increment,
            decaySpeed: vaultConfig.decay_speed,
            initialPrice: vaultConfig.initial_price,
            finalPrice: vaultConfig.final_price,
            auctionDurationInMs: vaultConfig.auction_duration_in_ms,
        }

        let nextVaultConfig = config.next_vault_config.fields
        let nextVaultConfigRes: VaultConfig = {
            strikeOtmPct: nextVaultConfig.strike_otm_pct,
            strikeIncrement: nextVaultConfig.strike_increment,
            decaySpeed: nextVaultConfig.decay_speed,
            initialPrice: nextVaultConfig.initial_price,
            finalPrice: nextVaultConfig.final_price,
            auctionDurationInMs: nextVaultConfig.auction_duration_in_ms,
        }

        let payoffConfig = config.payoff_config.fields
        let payoffConfigRes: PayoffConfig = {
            exposureRatio: Number(payoffConfig.exposure_ratio),
            premiumRoi: Number(payoffConfig.premium_roi),
            strike: Number(payoffConfig.strike) / (10 ** PRICE_DECIMAL),
        }

        let configRes: Config = {
            period: config.period,// daily:0 weekly:1 monthly:2
            activationTsMs: config.activation_ts_ms,
            expirationTsMs: config.expiration_ts_ms,
            tokenDecimal: config.token_decimal,
            shareDecimal: config.share_decimal,
            capacity: Number(config.capacity) / (10 ** TOKEN_DECIMAL),
            vaultConfig: vaultConfigRes,
            nextVaultConfig: nextVaultConfigRes,
            payoffConfig: payoffConfigRes,
        }

        let maker: SubVault = {
            balance: Number(vault.maker_sub_vault.fields.balance),
            shareSupply: Number(vault.maker_sub_vault.fields.share_supply),
        }
        let regular: SubVault = {
            balance: Number(vault.regular_sub_vault.fields.balance),
            shareSupply: Number(vault.regular_sub_vault.fields.share_supply),
        }
        let rolling: SubVault = {
            balance: Number(vault.rolling_sub_vault.fields.balance),
            shareSupply: Number(vault.rolling_sub_vault.fields.share_supply),
        }

        let vaultRes: Vault = {
            ableToDeposit: vault.able_to_deposit,
            ableToWithdraw: vault.able_to_withdraw,
            makerSubVault: maker,
            regularSubVault: regular,
            rollingSubVault: rolling,
        }

        let auctionRes: Auction;
        let vaultBidPrice: number;
        //@ts-ignore
        if (objInfo.details.data.fields.value.fields.auction) {
            //@ts-ignore
            let auction = objInfo.details.data.fields.value.fields.auction.fields

            let priceConfig = auction.price_config.fields
            let priceConfigRes: PriceConfig = {
                decaySpeed: Number(priceConfig.decay_speed),
                initialPrice: Number(priceConfig.initial_price),
                finalPrice: Number(priceConfig.final_price),
            }
            auctionRes = {
                startTsMs: Number(auction.start_ts_ms),
                endTsMs: Number(auction.end_ts_ms),
                priceConfig: priceConfigRes,
                index: Number(auction.index),
            }
            vaultBidPrice = await getVaultBidPrice(auctionRes, timeOracle)
        } else {
            console.log("No auction")
            auctionRes = {} as Auction
            vaultBidPrice = 0;
        }

        //@ts-ignore
        let next = objInfo.details.data.fields.value.fields.next as number

        //@ts-ignore
        let deliveryPrice = objInfo.details.data.fields.value.fields.delivery_price as number

        //@ts-ignore
        let deliverySize = objInfo.details.data.fields.value.fields.delivery_size as number

        //@ts-ignore
        let owner = objInfo.details.data.fields.value.fields.owner as string

        let tvl = Number(vault.regular_sub_vault.fields.balance) + Number(vault.rolling_sub_vault.fields.balance)

        let res: CoveredCallVault = {
            vaultId: vaultId,
            vaultIdx: vaultIdx,
            asset: asset,
            config: configRes,
            vault: vaultRes,
            auction: auctionRes,
            prevBalance: prevBalance,
            next: next,
            deliveryPrice: deliveryPrice,
            deliverySize: deliverySize,
            owner: owner,
            tvl: tvl,
            vaultBidPrice: vaultBidPrice,
        }

        vaults.push(res)
    }

    return vaults
}

export async function getVaultBidPrice(auction: Auction, timeOracle: string): Promise<number> {
    let tmp = await provider.getObject(timeOracle);
    //@ts-ignore
    let currentTsMs = Number(tmp.details.data.fields.ts_ms)

    let initialPrice = Number(auction.priceConfig.initialPrice);
    let finalPrice = Number(auction.priceConfig.finalPrice);
    let decaySpeed = Number(auction.priceConfig.decaySpeed);
    let startTsMs = Number(auction.startTsMs);
    let endTsMs = Number(auction.endTsMs);

    let priceDiff = initialPrice - finalPrice;
    // 1 - remaining_time / auction_duration => 1 - (end - current) / (end - start) => (current - start) / (end - start)
    let numerator = currentTsMs - startTsMs;
    let denominator = endTsMs - startTsMs;

    while (decaySpeed > 0) {
        priceDiff = priceDiff * numerator / denominator;
        decaySpeed = decaySpeed - 1;
    };

    return initialPrice - priceDiff
}