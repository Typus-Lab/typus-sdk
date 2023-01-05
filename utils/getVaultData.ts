
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { TOKEN_NAME } from '../constants';
import { CoveredCallVault, PayoffConfig, Config, VaultConfig, Vault, SubVault } from "../utils/fetchData"

const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

export async function getVaultDataFromRegistry(registry: string): Promise<CoveredCallVault[]> {
    console.log("registry: " + registry)

    let coveredCallVaults: any[] = await provider.getObjectsOwnedByObject(registry)
    let coveredCallVaultsId: string[] = coveredCallVaults.map(e => e.objectId as string)
    let objsInfo = await provider.getObjectBatch(coveredCallVaultsId)

    let vaults: CoveredCallVault[] = [];

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
            strike: Number(payoffConfig.strike),
        }

        let configRes: Config = {
            period: config.period,// daily:0 weekly:1 monthly:2
            activationTsMs: config.activation_ts_ms,
            expirationTsMs: config.expiration_ts_ms,
            tokenDecimal: config.token_decimal,
            shareDecimal: config.share_decimal,
            capacity: config.capacity,
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

        let tvl = Number(vault.regular_sub_vault.fields.balance) + Number(vault.rolling_sub_vault.fields.balance)

        //@ts-ignore
        let next = objInfo.details.data.fields.value.fields.next as number

        let res: CoveredCallVault = {
            vaultId: vaultId,
            vaultIdx: vaultIdx,
            asset: asset,
            config: configRes,
            vault: vaultRes,
            prevBalance: prevBalance,
            next: next,
            tvl: tvl,
        }

        vaults.push(res)
    }

    return vaults
}