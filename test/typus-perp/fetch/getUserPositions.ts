import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";
import { getLiquidationPrice, getUserPositions, NETWORK } from "src/typus-perp";
import { createPythClient } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let user = "0xb6b29d18c728503fb59cc59ecbe52611d26b2746b2cedc8d38cabf81428cae6c";
    console.log(user);

    let positions = await getUserPositions(config, user);
    console.log(positions);

    let pythClient = createPythClient(provider, NETWORK);

    let liquidationPrices = await getLiquidationPrice(config, pythClient, {
        positions,
        user,
    });
    console.log(liquidationPrices);
})();
