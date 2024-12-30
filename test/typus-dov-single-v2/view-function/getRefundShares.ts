import { TypusConfig } from "src/utils";
import { getRefundShares } from "src/typus-dov-single-v2";
import { tokenType } from "src/constants";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);

    let user = "0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0";
    let typeArguments = Object.values(tokenType["MAINNET"]).filter((t) => t != "");
    // console.log(typeArguments);
    let result = await getRefundShares(config, { typeArguments, user });
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
