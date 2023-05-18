import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import config from "../../config.json";
import { getVaultUserShares } from "../../utils/typus-dov-single/view-function";
import { getPortfolioVaults } from "../../utils/typus-dov-single/portfolio-vault";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
(async () => {
    let index = "0";
    let portfolioVaults = await getPortfolioVaults(
        provider,
        config.SINGLE_COLLATERAL_REGISTRY,
        config.SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY,
        config.SINGLE_COLLATERAL_BID_VAULT_REGISTRY
    );
    let result = await getVaultUserShares(
        provider,
        config.SINGLE_COLLATERAL_PACKAGE,
        [portfolioVaults[index].typeArgs[0], portfolioVaults[index].typeArgs[1]],
        config.SINGLE_COLLATERAL_REGISTRY,
        index
    );
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
