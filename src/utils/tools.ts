import BigNumber from "bignumber.js";
import { tokenType } from "src/constants";
import { Transaction } from "@mysten/sui/transactions";
import { normalizeStructTag } from "@mysten/sui/utils";

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const prettify_big_number = (value, decimal) => {
    return new BigNumber(value).div(BigNumber(10).pow(decimal)).toFormat(decimal);
};

export function U64FromBytes(x) {
    var u64 = BigInt(0);
    for (var i = 0; i < x.length; i++) {
        u64 = u64 << BigInt(8);
        u64 += BigInt(x[i]);
    }
    return u64;
}

export function AddressFromBytes(x) {
    var address = "0x";
    for (var i = 0; i < x.length; i++) {
        address = address.concat(x[i].toString(16).padStart(2, "0"));
    }
    return address;
}

export const insertAt = (str: string, sub: string, pos: number) => `${str.slice(0, pos)}${sub}${str.slice(pos)}`;

export const checkNumber = (str: any) => {
    if (typeof str != "string") return false; // we only process strings!
    return (
        // @ts-ignore
        !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str))
    ); // ...and ensure strings of whitespace fail
};

export const countFloating = (value: number | BigNumber) => {
    let num = BigNumber(value).toFixed().replace(/,/g, "");
    if (value instanceof BigNumber) {
        num = value.toFixed().replace(/,/g, "");
    }
    if (!num.includes(".")) return 0;
    return num.split(".")[1].length;
};

export function splitCoins(
    tx: Transaction,
    token: string,
    coins: string[],
    amount: string
): {
    $kind: "NestedResult";
    NestedResult: [number, number];
} {
    let [coin] =
        normalizeStructTag(token) == tokenType.SUI
            ? tx.splitCoins(tx.gas, [tx.pure.u64(amount)])
            : (() => {
                  let coin = coins.pop()!;
                  if (coins.length > 0) {
                      tx.mergeCoins(
                          tx.object(coin),
                          coins.map((id) => tx.object(id))
                      );
                  }
                  return tx.splitCoins(tx.object(coin), [tx.pure.u64(amount)]);
              })();

    return coin;
}
