import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getUserOtcConfigs, otc } from "src/typus-dov-single-v2/otc-entry";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let user = "0x74c7a18d6de49f31bc6007e24afa3ea0693fefa5db6c7174c68730540c82d275";
    let otcConfig = await getUserOtcConfigs(config, { user, indexes: ["125"] });
    console.log(otcConfig);
})();
