import { getNewAuctionWithNextCoveredCallVaultTx } from "../../utils/coveredCall/getNewAuctionWithNextCoveredCallVaultTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, COVERED_CALL_MANAGER, ORACLE_PACKAGE } from "../../constants"
(async () => {
    console.log("test for getNewAuctionWithNextCoveredCallVaultTx()")

    let index = 1;
    let start = 10;
    let end = 20;
    let decay = 2;
    let initialPrice = 5;
    let finalPrice = 1;
    let expiration = 2000;
    let assetName = "BTC";
    let strikeOtmPct = 2000;
    let priceOracle = ""// new oracle by new_oracle


    let newAuctionWithNextCoveredCallVaultTx: any =
        await getNewAuctionWithNextCoveredCallVaultTx(
            COVERED_CALL_PACKAGE,
            COVERED_CALL_MANAGER,
            COVERED_CALL_REGISTRY,
            DEFAULT_TYPE_ARGUMENT,
            index,
            start,
            end,
            decay,
            initialPrice,
            finalPrice,
            expiration,
            assetName,
            strikeOtmPct,
            priceOracle,
        );
    console.log(newAuctionWithNextCoveredCallVaultTx)
})()