import { REGISTRY, PORTFOLIO_PACKAGE, TIME_ORACLE, MODULE, testnetConnection, BTC_ORACLE } from "../../../constants";
import { JsonRpcProvider, Ed25519Keypair, RawSigner } from "@mysten/sui.js";
import config from "../../../config.json";
import { getNewBidTx } from "../../../utils/portfolio/single-collateral/user/getNewBidTx";
import { getPortfolioVaults, PortfolioVault } from "../../../utils/portfolio/single-collateral/portfolio-vault";

const provider = new JsonRpcProvider(testnetConnection); //for read only operations
const keypair = Ed25519Keypair.deriveKeypair("xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx xxx");
const signer = new RawSigner(keypair, provider);

(async () => {
    let size = "330000000";
    let index = "5";

    let portfolioVaults = await getPortfolioVaults(
        provider,
        config.SINGLE_COLLATERAL_REGISTRY,
        config.SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY,
        config.SINGLE_COLLATERAL_BID_VAULT_REGISTRY
    );
    let portfolioVault = portfolioVaults[index];
    console.log(portfolioVault);

    let bToken = portfolioVault.typeArgs[1];
    let typeArguments = portfolioVault.typeArgs;
    let coinObjs = await provider.getCoins({ owner: await signer.getAddress(), coinType: bToken });

    let coins = coinObjs.data.map((coin) => coin.coinObjectId);

    let gasBudget = 10000000;
    let transactionBlock = await getNewBidTx(
        gasBudget,
        config.PORTFOLIO_PACKAGE,
        "single_collateral",
        config.SINGLE_COLLATERAL_REGISTRY,
        typeArguments,
        index,
        config.ETH_ORACLE,
        "0x6",
        coins,
        size
    );

    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
