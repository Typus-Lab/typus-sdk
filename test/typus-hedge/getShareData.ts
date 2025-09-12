import { getShareData } from "src/typus-hedge";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let user = "0x845c22be3e771ac8d90973e9859b5088207527c158f75ba4ac9e6201ca1eedb8";
    let shares = await getShareData(config, {
        user,
        indexes: [...Array(1).keys()].map((n) => {
            return n.toString();
        }),
    });
    console.log(JSON.stringify(shares, null, 2));
})();
