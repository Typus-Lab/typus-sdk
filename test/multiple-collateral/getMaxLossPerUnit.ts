import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import config from "../../config.json";
import { getMaxLossPerUnit } from "../../utils/typus-dov-double/view-function";
import { getPortfolioVaults } from "../../utils/typus-dov-double/portfolio-vault";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
(async () => {
    let index = "0";
    let portfolioVaults = await getPortfolioVaults(
        provider,
        config.MULTIPLE_COLLATERAL_REGISTRY,
        config.MULTIPLE_COLLATERAL_TOKEN_DEPOSIT_VAULT_REGISTRY,
        config.MULTIPLE_COLLATERAL_TOKEN_DEPOSIT_VAULT_REGISTRY,
        config.MULTIPLE_COLLATERAL_BID_VAULT_REGISTRY
    );
    let result = await getMaxLossPerUnit(
        provider,
        config.PORTFOLIO_PACKAGE,
        portfolioVaults[index].typeArgs,
        config.MULTIPLE_COLLATERAL_REGISTRY,
        index
    );
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
