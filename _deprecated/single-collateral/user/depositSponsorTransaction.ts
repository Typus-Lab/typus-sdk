import "../../../test/load_env";
import { getDepositTx } from "../../typus-dov-single/user-entry";
import { getPortfolioVaults } from "../../typus-dov-single/portfolio-vault";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import config from "../../../config.json";
import {
    sponsorTransactionE2E,
    sponsorRpcClient,
    sponsorTransactionBlock,
    executeSponsorTransactionBlock,
} from "../../../utils/sponsorTransaction";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let gasBudget = 50000000;
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
    let transactionBlock = await getDepositTx(
        gasBudget,
        config.SINGLE_COLLATERAL_PACKAGE,
        portfolioVaults[index].typeArgs,
        config.SINGLE_COLLATERAL_REGISTRY,
        portfolioVaults[index].info.index,
        coins,
        depositAmount
    );

    const sponsor = sponsorRpcClient(config.SPONSOR_RPC_URL);

    const [sponsoredResponse, sponsorTxB] = await sponsorTransactionBlock(
        transactionBlock,
        sponsor,
        provider,
        gasBudget,
        await signer.getAddress()
    );

    // // Sign the full transaction payload with the sender's key.
    const senderSig = await signer.signTransactionBlock({ transactionBlock: sponsorTxB });

    await executeSponsorTransactionBlock(provider, sponsoredResponse, senderSig);
})();
