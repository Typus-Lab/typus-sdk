import "../../load_env";
import { getNewBidTx } from "../../../utils/typus-dov-single/user-entry";
import { getPortfolioVaults } from "../../../utils/typus-dov-single/portfolio-vault";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import config from "../../../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let gasBudget = 10000000;
    let size = "100000000";
    let index = "0";

    let portfolioVaults = await getPortfolioVaults(
        provider,
        config.SINGLE_COLLATERAL_REGISTRY,
        config.SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY,
        config.SINGLE_COLLATERAL_BID_VAULT_REGISTRY
    );
    let coins = (await provider.getCoins({ owner: await signer.getAddress(), coinType: portfolioVaults[index].bidVault.token })).data.map(
        (coin) => coin.coinObjectId
    );
    let transactionBlock = await getNewBidTx(
        gasBudget,
        config.SINGLE_COLLATERAL_PACKAGE,
        portfolioVaults[index].typeArgs,
        config.SINGLE_COLLATERAL_REGISTRY,
        config.SINGLE_COLLATERAL_ADDITIONAL_CONFIG_REGISTRY,
        index,
        config.SUI_ORACLE,
        coins,
        size,
        "1000000000000"
    );

    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
