import { Transaction } from "@mysten/sui/transactions";
import { normalizeStructTag } from "@mysten/sui/utils";
import axios from "axios";
import { oracle } from "src/constants";
import { typeArgToAsset } from "src/constants/token";
import { bcs, fromHex } from "@mysten/bcs";

export type TypusOracleData = {
    success: boolean;
    data: {
        price: string;
        volume: string;
        server_ts_ms: number;
        local_ts_ms: number;
        twap: string;
    };
    signed: {
        pair: string;
        price: string;
        twap: string;
        timestamp: number;
        signature: string;
    };
}

export const parseFullTypusOracleData = (data: TypusOracleData) => {
    if (data.success == true) {
        return {
            data: data.data,
            signed: data.signed,
        }
    }
    return null;
};

export async function updateOracleWithSignatureTx(
    network: "MAINNET" | "TESTNET",
    tx: Transaction,
    oracleContract: string,
    tokenType: string,
) {
    const baseTokenType = tokenType.startsWith("0x") ? tokenType.slice(2) : tokenType;


    let oracleData: Omit<TypusOracleData, "success"> | null = null;
    try {
        const result = await axios.get<TypusOracleData>(`https://asia-east1-aqueous-freedom-378103.cloudfunctions.net/get-price?pair=${tokenType}`)
        if (result.data) {
            oracleData = parseFullTypusOracleData(result.data);
        }
    } catch (error) {
        console.error(error);
        return tx;
    }


    const oracleAddress = oracle[network][typeArgToAsset(normalizeStructTag(tokenType))];
    if (oracleData && oracleAddress) {
        const pairBytes = new Uint8Array(Buffer.from(baseTokenType, "utf8"));
        const priceBytes = bcs.u64().serialize(oracleData.signed.price).toBytes();
        const twapBytes = bcs.u64().serialize(oracleData.signed.twap).toBytes();
        const timestampBytes = bcs.u64().serialize(oracleData.signed.timestamp.toString()).toBytes();

        const totalLength = pairBytes.length + priceBytes.length + twapBytes.length + timestampBytes.length;
        const messageBytes = new Uint8Array(totalLength);
        let offset = 0;
        messageBytes.set(pairBytes, offset);
        offset += pairBytes.length;
        messageBytes.set(priceBytes, offset);
        offset += priceBytes.length;
        messageBytes.set(twapBytes, offset);
        offset += twapBytes.length;
        messageBytes.set(timestampBytes, offset);

        const signatureHex = oracleData.signed.signature;

        const signatureBytes = Uint8Array.from(fromHex(signatureHex));


        // TODO: replace oracle address with the actual oracle address
        tx.moveCall({
            target: `${oracleContract}::oracle::update_with_signature`,
            typeArguments: [],
            arguments: [
                tx.object(oracleAddress),
                tx.pure.vector("u8", signatureBytes),
                tx.pure.vector("u8", messageBytes),
                tx.pure.vector("u8", pairBytes),
                tx.pure.u64(oracleData.signed.price),
                tx.pure.u64(oracleData.signed.twap),
                tx.pure.u64(oracleData.signed.timestamp.toString()),
                tx.object("0x6")
            ],
        });
        return tx;
    }

    console.error("Oracle data not found for token type:", tokenType);
    return tx;
}