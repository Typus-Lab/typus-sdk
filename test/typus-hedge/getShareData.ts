import { getShareData } from "src/typus-hedge";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);

    let user = "0x978f65df8570a075298598a9965c18de9087f9e888eb3430fe20334f5c554cfd";
    let shares = await getShareData(config, {
        user,
        indexes: [...Array(1).keys()].map((n) => {
            return n.toString();
        }),
    });
    console.log(JSON.stringify(shares, null, 2));
})();
