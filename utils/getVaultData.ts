
import { JsonRpcProvider, Network } from '@mysten/sui.js';
import { TOKEN_NAME } from '../constants';
import { Vault, PayoffConfig } from "../utils/fetchData"

const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations

export async function getVaultDataFromRegistry(registry: string): Promise<Vault[]> {
    console.log("registry: " + registry)

    let coveredCallVaults: any[] = await provider.getObjectsOwnedByObject(registry)
    let coveredCallVaultsId: string[] = coveredCallVaults.map(e => e.objectId as string)
    let objsInfo = await provider.getObjectBatch(coveredCallVaultsId)

    let vaults: Vault[] = [];

    for (let objInfo of objsInfo) {
        //vault
        //@ts-ignore
        let vault = objInfo.details.data.fields.value.fields.vault.fields

        //config
        //@ts-ignore
        let config = objInfo.details.data.fields.value.fields.config.fields

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

        //vaultId
        //@ts-ignore
        let vaultId = objInfo.details.data.fields.id.id

        //payoff config
        let payoffConfig: PayoffConfig = {
            exposureRatio: Number(config.payoff_config.fields.exposure_ratio),
            premiumRoi: Number(config.payoff_config.fields.premium_roi),
            strike: Number(config.payoff_config.fields.strike),
            strikeOtmPct: Number(config.payoff_config.fields.strike_otm_pct)
        }

        let res: Vault = {
            vaultId: vaultId,
            vaultIdx: vaultIdx,
            asset: asset,
            ableToDeposit: vault.able_to_deposit,
            ableToWithdraw: vault.able_to_withdraw,
            expirationTsMs: config.expiration_ts_ms,
            payoffConfig: payoffConfig,
            period: Number(config.period),// daily:0 weekly:1 monthly:2
            shareDecimal: config.share_decimal,
            startTsMs: config.start_ts_ms,
            tokenDecimal: config.token_decimal,
        }

        vaults.push(res)
    }

    return vaults
}