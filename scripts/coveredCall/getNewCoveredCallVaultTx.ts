import { getNewCoveredCallVaultTx } from "../../utils/coveredCall/getNewCoveredCallVaultTx"
import { COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, COVERED_CALL_MANAGER, DEFAULT_TYPE_ARGUMENT } from "../../constants"
(async () => {
    console.log("test for getNewCoveredCallVaultTx()")

    let tokenDecimal = 9;
    let shareDecimal = 4;
    let timeOracle = "";
    let period = 1;
    let activationTsMs = 1671782400000;
    let expirationTsMs = 1671782400000 + 604800000;
    let capacity = 1000000000;
    let strikeOtmPct = 500;
    let strikeIncrement = 10000
    let decaySpeed = 1;
    let initialPrice = 5000;
    let finalPrice = 1000;
    let auctionDurationInMs = 3600000;
    let prevBalance = 0;

    let newCoveredCallVaultTx: any = await getNewCoveredCallVaultTx(
        COVERED_CALL_PACKAGE,
        COVERED_CALL_REGISTRY,
        DEFAULT_TYPE_ARGUMENT,
        COVERED_CALL_MANAGER,
        timeOracle,
        period,
        activationTsMs,
        expirationTsMs,
        tokenDecimal,
        shareDecimal,
        capacity,
        strikeOtmPct,
        strikeIncrement,
        decaySpeed,
        initialPrice,
        finalPrice,
        auctionDurationInMs,
        prevBalance,
    );
    console.log(newCoveredCallVaultTx)
})()