import "../../../test/load_env";
import { PortfolioVault, getPortfolioVaults } from "../../typus-dov-single/portfolio-vault";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import config from "../../../config.json";
import { executeSponsorTransactionBlock, getSponsoredDeposit } from "../../../utils/sponsorTransaction";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    const depositAmount = "10000000";
    const index = "0";

    const portfolioVaults = await getPortfolioVaults(
        provider,
        config.SINGLE_COLLATERAL_REGISTRY,
        config.SINGLE_COLLATERAL_DEPOSIT_VAULT_REGISTRY,
        config.SINGLE_COLLATERAL_BID_VAULT_REGISTRY,
        index
    );
    const portfolioVault: PortfolioVault = portfolioVaults[index];

    let coins = (await provider.getCoins({ owner: await signer.getAddress(), coinType: portfolioVault.depositVault.token })).data.map(
        (coin) => coin.coinObjectId
    );

    const signerAddress = await signer.getAddress();

    const [sponsoredResponse, transactionBlock] = await getSponsoredDeposit(
        config.SPONSOR_API,
        config.SINGLE_COLLATERAL_PACKAGE,
        portfolioVault.typeArgs,
        config.SINGLE_COLLATERAL_REGISTRY,
        portfolioVault.info.index,
        coins,
        depositAmount,
        signerAddress
    );

    console.log(sponsoredResponse);
    console.log(transactionBlock);

    // // Sign the full transaction payload with the sender's key.
    const senderSig = await signer.signTransactionBlock({ transactionBlock: transactionBlock });

    await executeSponsorTransactionBlock(provider, sponsoredResponse, senderSig);
})();
