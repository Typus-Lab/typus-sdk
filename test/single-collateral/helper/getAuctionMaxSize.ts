import {
    BTC_ORACLE,
    ETH_ORACLE,
    MODULE,
    PORTFOLIO_PACKAGE,
    REGISTRY,
    SINGLE_COLLATERAL_BID_VAULT_REGISTRY,
    SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY,
    testnetConnection,
} from "../../../constants";
import { JsonRpcProvider } from "@mysten/sui.js";
import { getPortfolioVaults } from "../../../utils/portfolio/single-collateral/portfolio-vault";

const provider = new JsonRpcProvider(testnetConnection); //for read only operations

(async () => {
    let sender = "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9";
    let oracle = ETH_ORACLE;
    let index = "7";

    let portfolioVaults = await getPortfolioVaults(
        provider,
        REGISTRY,
        SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY,
        SINGLE_COLLATERAL_BID_VAULT_REGISTRY
    );
    let portfolioVault = portfolioVaults[index];
    console.log(portfolioVault);
    console.log(portfolioVault.config.activeVaultConfig.payoffConfigs);

    // let transactionBlock = await getAuctionMaxSize(PORTFOLIO_PACKAGE, MODULE, portfolioVault.typeArgs, REGISTRY, portfolioVault.info.index, oracle);
    // success only during auction period
    // let res = await provider.devInspectTransactionBlock({ transactionBlock, sender });
    // console.log(res);
    // @ts-ignore
    let rawData = res.results[0].returnValues[0][0];
    console.log(rawData);
    // console.log(U64FromBytes(rawData.reverse()));
})();
