import { TypusConfig } from "src/utils";
import { getVaults, parseAssets } from "src/typus-dov-single-v2";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);

    let indexes = ["108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122"];
    let vaults = await getVaults(config, { indexes });
    // Object.values(vaults).forEach((vault) => {
    //     console.log(parseAssets(vault.info));
    // });
    // console.log(JSON.stringify(vaults, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
    console.log(
        JSON.stringify(
            Object.values(vaults).map((vault) => vault.info.index + ": https://suivision.xyz/object/" + vault.id),
            null,
            2
        )
    );
})();
