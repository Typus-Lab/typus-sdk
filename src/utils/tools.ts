import { normalizeStructTag } from "@mysten/sui/utils";
import { tokenType } from "src/constants";
import { Transaction } from "@mysten/sui/transactions";
import * as readline from "readline";
import BigNumber from "bignumber.js";

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
    let coin;

    if (coins.length == 0) {
        // support zero coin input for closing position
        [coin] = tx.moveCall({
            target: `0x2::coin::zero`,
            typeArguments: [token],
            arguments: [],
        });
    } else {
        [coin] =
            normalizeStructTag(token) == tokenType.MAINNET.SUI
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
    }

    return coin;
}

export function promptYesNo(question: string): Promise<boolean> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(`${question} [y/N] `, (answer) => {
            const normalizedAnswer = answer.toLowerCase();
            if (normalizedAnswer === "y" || normalizedAnswer === "yes") {
                resolve(true);
            } else {
                resolve(false);
            }
            rl.close();
        });
    });
}

export function getNumberStringWithDecimal(input: string, decimal: number): string {
    input = input.padStart(decimal, "0");
    let integer = input.slice(0, input.length - decimal).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let float = input.slice(input.length - decimal, input.length);
    return `${integer == "" ? "0" : integer}.${float}`;
}
