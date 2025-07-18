import { TypusConfig } from "src/utils";
import { getVaults, parseAssets } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);

    let indexes = ["43"];
    let vaults = await getVaults(config, { indexes });
    // Object.values(vaults).forEach((vault) => {
    //     console.log(parseAssets(vault.info));
    // });
    console.log(JSON.stringify(vaults, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
    // console.log(
    //     JSON.stringify(
    //         Object.values(vaults).map((vault) => vault.info.index + ": https://suivision.xyz/object/" + vault.id),
    //         null,
    //         2
    //     )
    // );
})();
