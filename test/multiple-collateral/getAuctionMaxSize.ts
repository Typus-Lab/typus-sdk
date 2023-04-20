import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import config from "../../config.json";
import { getAuctionMaxSize } from "../../utils/portfolio/multiple-collateral/view-function";
import { getPortfolioVaults } from "../../utils/portfolio/multiple-collateral/portfolio-vault";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const index = "5";
(async () => {
    let portfolioVaults = await getPortfolioVaults(
        provider,
        config.MULTIPLE_COLLATERAL_REGISTRY,
        config.MULTIPLE_COLLATERAL_TOKEN_DEPOSIT_VAULT_REGISTRY,
        config.MULTIPLE_COLLATERAL_TOKEN_DEPOSIT_VAULT_REGISTRY,
        config.MULTIPLE_COLLATERAL_BID_VAULT_REGISTRY
    );
    let result = await getAuctionMaxSize(
        provider,
        config.PORTFOLIO_PACKAGE,
        portfolioVaults[index].typeArgs,
        config.MULTIPLE_COLLATERAL_REGISTRY,
        index
    );
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
