import { getVeTypus } from "src/typus-launch/ve-typus";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let user = "0x978f65df8570a075298598a9965c18de9087f9e888eb3430fe20334f5c554cfd";
    let vaults = await getVeTypus(config, { user });
    console.log(`user: ${user}`);
    console.log(JSON.stringify(vaults, null, 2));
})();
