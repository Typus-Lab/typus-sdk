import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import config from "../../config.json";
import { getPortfolioVaults } from "../../utils/typus-dov-double/portfolio-vault";
import { getBids } from "../../utils/typus-framework/dutch";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));

(async () => {
    let index = "0";
    let portfolioVaults = await getPortfolioVaults(
        provider,
        config.MULTIPLE_COLLATERAL_REGISTRY,
        config.MULTIPLE_COLLATERAL_TOKEN_DEPOSIT_VAULT_REGISTRY,
        config.MULTIPLE_COLLATERAL_TOKEN_DEPOSIT_VAULT_REGISTRY,
        config.SINGLE_COLLATERAL_BID_VAULT_REGISTRY
    );

    let bid = await getBids(provider, portfolioVaults[index].auction);
    console.log(bid);
})();
