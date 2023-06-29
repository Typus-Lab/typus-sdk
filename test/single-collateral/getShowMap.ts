import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import config from "../../config.json";
import { getPortfolioVaults } from "../../utils/typus-dov-single/portfolio-vault";
import { getShowMap } from "../../utils/typus-dov-single/db-data";

(async () => {
    const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
    let portfolioVaults = await getPortfolioVaults(
        provider,
        config.SINGLE_COLLATERAL_REGISTRY,
        config.SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY,
        config.SINGLE_COLLATERAL_BID_VAULT_REGISTRY
    );

    const apiUrl = "https://us-central1-aqueous-freedom-378103.cloudfunctions.net/mongodb-testnet";

    const showMap = await getShowMap(apiUrl, portfolioVaults);
    console.log(showMap);
})();
