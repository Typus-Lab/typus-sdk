import { TransactionBlock } from "@mysten/sui.js/transactions";

export function updateWithPyth(
    oraclePackage: string,
    tx: TransactionBlock,
    typusOracle: string,
    pythState: string,
    basePriceInfoObject: string,
    quotePriceInfoObject: string
) {
    tx.moveCall({
        target: `${oraclePackage}::oracle::update_with_pyth`,
        typeArguments: [],
        arguments: [
            tx.object(typusOracle),
            tx.object(pythState),
            tx.object(basePriceInfoObject),
            tx.object(quotePriceInfoObject),
            tx.object("0x6"),
        ],
    });
}
