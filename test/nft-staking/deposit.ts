import "../load_env";
import config from "../../config.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import { getDepositTx } from "../../utils/nft-staking/user-entry";
import { getUserStake } from "../../utils/nft-staking/fetch";
import { getDepositTx } from "../../utils/typus-dov-single/user-entry";
import { getPortfolioVaults } from "../../utils/typus-dov-single/portfolio-vault";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const gasBudget = 100000000;

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    // 1. check user staking and nft's flag

    let staking_nft = await getUserStake(provider, config.NFT_TABLE, address);
    console.log(staking_nft);

    // 2. normal deposit stuff
    let gasBudget = 100000000;
    let depositAmount = "1000000000";
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

    let transactionBlock;

    if (!staking_nft?.first_deposit) {
        transactionBlock = await getDepositTx(
            gasBudget,
            config.SINGLE_COLLATERAL_PACKAGE,
            portfolioVaults[index].typeArgs,
            config.SINGLE_COLLATERAL_REGISTRY,
            config.SINGLE_COLLATERAL_AC_REGISTRY,
            portfolioVaults[index].info.index,
            coins,
            depositAmount
        );
    } else {
        transactionBlock = await getDepositTx(
            gasBudget,
            config.SINGLE_COLLATERAL_PACKAGE,
            portfolioVaults[index].typeArgs,
            config.SINGLE_COLLATERAL_REGISTRY,
            config.SINGLE_COLLATERAL_AC_REGISTRY,
            portfolioVaults[index].info.index,
            coins,
            depositAmount
        );
    }

    // let res = await client.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });

    console.log(res);
})();
