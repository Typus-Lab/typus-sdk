export async function getNewCoveredCallVaultTx(
    gasBudget: string,
    packageId: string,
    registry: string,
    typeArgument: string,
    managerCap: string,
    timeOracle: string,
    period: string,
    activationTsMs: string,
    expirationTsMs: string,
    tokenDecimal: string,
    shareDecimal: string,
    capacity: string,
    strikeOtmPct: string,
    strikeIncrement: string,
    decaySpeed: string,
    initialPrice: string,
    finalPrice: string,
    auctionDurationInMs: string,
    whitelist: string[],
    leverage: string,
): Promise<any> {
    let tx = {
        packageObjectId: packageId,
        module: 'covered_call',
        function: 'new_covered_call_vault',
        typeArguments: [typeArgument],
        arguments: [
            managerCap,
            registry,
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
            leverage,
            whitelist,
        ],
        gasBudget: gasBudget,
    }
    return tx
}

/*
sui client call --package 0x1543511bdce9ea3c401c4939126cea518adee965 --module covered_call --function new_covered_call_vault --type-args 0x2::sui::SUI --args 0x8517b2dbaae56eeb84352e4869b289459c68965b 0xb02452d0bbef3cbdc7840ea5bad27bcdd4031675 123 leoAsset 456 --gas-budget 100000
*/