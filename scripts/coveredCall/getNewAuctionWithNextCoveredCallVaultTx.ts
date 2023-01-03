import { getNewAuctionWithNextCoveredCallVaultTx } from "../../utils/coveredCall/getNewAuctionWithNextCoveredCallVaultTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, DEFAULT_TYPE_ARGUMENT, COVERED_CALL_MANAGER, ORACLE_PACKAGE } from "../../constants"
(async () => {
    console.log("test for getNewAuctionWithNextCoveredCallVaultTx()")

    let index = 1;
    let timeOracle = ""
    let activationTsMs = 1672992000000
    let expirationTsMs = 1672992000000 + 604800000

    let newAuctionWithNextCoveredCallVaultTx: any =
        await getNewAuctionWithNextCoveredCallVaultTx(
            COVERED_CALL_PACKAGE,
            COVERED_CALL_MANAGER,
            COVERED_CALL_REGISTRY,
            DEFAULT_TYPE_ARGUMENT,
            index,
            timeOracle,
            activationTsMs,
            expirationTsMs,
        );
    console.log(newAuctionWithNextCoveredCallVaultTx)
})()