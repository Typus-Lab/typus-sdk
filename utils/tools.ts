export function U64FromBytes(x) {
    var val = BigInt(0);
    for (var i = 0; i < x.length; i++) {
        val = val << BigInt(8);
        val += BigInt(x[i]);
    }
    return val;
}