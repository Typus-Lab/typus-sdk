import BigNumber from "bignumber.js";

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
