import { getVaultData } from "src/typus-hedge";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);

    let vaults = await getVaultData(config, {
        indexes: [...Array(2).keys()].map((n) => {
            return n.toString();
        }),
    });
    console.log(JSON.stringify(vaults, replacer, 2));
})();

function replacer(_key, value) {
    if (value instanceof Map) {
        return Array.from(value.entries());
    } else {
        return value;
    }
}
