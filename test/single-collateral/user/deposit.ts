import "../../load_env";
import { getDepositTx } from "../../../utils/nft-staking/user-entry";
import { getPortfolioVaults } from "../../../utils/typus-dov-single/portfolio-vault";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import config from "../../../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let gasBudget = 100000000;
    let depositAmount = "10000";
    let index = "0";

    let portfolioVaults = await getPortfolioVaults(
        provider,
        config.SINGLE_COLLATERAL_REGISTRY,
        config.SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY,
        config.SINGLE_COLLATERAL_BID_VAULT_REGISTRY
    );
    let coins = (
        await provider.getCoins({ owner: await signer.getAddress(), coinType: portfolioVaults[index].depositVault.token })
    ).data.map((coin) => coin.coinObjectId);
    let transactionBlock = await getDepositTx(
        gasBudget,
        config.SINGLE_COLLATERAL_PACKAGE,
        portfolioVaults[index].typeArgs,
        config.SINGLE_COLLATERAL_REGISTRY,
        config.SINGLE_COLLATERAL_AC_REGISTRY,
        portfolioVaults[index].info.index,
        coins,
        depositAmount
    );

    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
