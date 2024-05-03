import "../../../test/load_env";
import { getPortfolioVaults } from "../../typus-dov-single/portfolio-vault";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import config from "../../../config.json";
import { executeSponsorTransactionBlock, getSponsoredNewBid } from "../../../utils/sponsorTransaction";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let gasBudget = 10000000;
    let size = "100000000";
    let index = "3";

    let portfolioVaults = await getPortfolioVaults(
        provider,
        config.SINGLE_COLLATERAL_REGISTRY,
        config.SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY,
        config.SINGLE_COLLATERAL_BID_VAULT_REGISTRY
    );
    let coins = (await provider.getCoins({ owner: await signer.getAddress(), coinType: portfolioVaults[index].bidVault.token })).data.map(
        (coin) => coin.coinObjectId
    );

    const signerAddress = await signer.getAddress();

    const [sponsoredResponse, transactionBlock] = await getSponsoredNewBid(
        config.SPONSOR_API,
        config.SINGLE_COLLATERAL_PACKAGE,
        portfolioVaults[index].typeArgs,
        config.SINGLE_COLLATERAL_REGISTRY,
        index,
        config.BTC_ORACLE,
        coins,
        size,
        signerAddress
    );

    const senderSig = await signer.signTransactionBlock({ transactionBlock: transactionBlock });

    await executeSponsorTransactionBlock(provider, sponsoredResponse, senderSig);
})();
