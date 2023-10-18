import "../load_env";
import config from "../../config_v2.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import { consumeExpCoinUnstakedTx } from "../../utils/nft-staking/user-entry";
import { getOwnedKiosks } from "@mysten/kiosk";
import { getTailsIds } from "../../utils/typus-nft/fetch";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const gasBudget = 100000000;

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    const kiosks = await getOwnedKiosks(provider, address);

    const tailsIds = await getTailsIds(provider, config, kiosks);
    console.log(tailsIds);

    if (tailsIds.length > 0) {
        let nft = tailsIds[0];

        let coins = (await provider.getCoins({ owner: await signer.getAddress(), coinType: config.NFT_EXP_TOKEN })).data.map(
            (coin) => coin.coinObjectId
        );

        console.log(coins);

        let transactionBlock = await consumeExpCoinUnstakedTx(
            gasBudget,
            config.SINGLE_COLLATERAL_PACKAGE,
            [config.NFT_EXP_TOKEN],
            config.SINGLE_COLLATERAL_REGISTRY,
            nft.kiosk,
            nft.kioskCap,
            nft.nftId,
            coins
        );

        // let res = await client.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
        let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });

        console.log(res);
    }
})();
