import { getCoveredCallVaultAsset } from "../utils/getCoveredCallVaultAsset"

(async () => {
    console.log("test for getCoveredCallVaultAsset()")
    let testVault = "0xbf816f4205de83403f4fd388d608c6552dc2b2de"

    let asset: string = await getCoveredCallVaultAsset(testVault);
    console.log("the asset of the vault:")
    console.log(asset)
})()
