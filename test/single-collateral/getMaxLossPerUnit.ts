import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import config from "../../config.json";
import { getMaxLossPerUnit } from "../../utils/portfolio/single-collateral/view-function";
import { getPortfolioVaults } from "../../utils/portfolio/single-collateral/portfolio-vault";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const index = "5";
(async () => {
    let portfolioVaults = await getPortfolioVaults(
        provider,
        config.SINGLE_COLLATERAL_REGISTRY,
        config.SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY,
        config.SINGLE_COLLATERAL_BID_VAULT_REGISTRY
    );
    let result = await getMaxLossPerUnit(
        provider,
        config.PORTFOLIO_PACKAGE,
        portfolioVaults[index].typeArgs,
        config.SINGLE_COLLATERAL_REGISTRY,
        index,
        config.ETH_ORACLE
    );
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
