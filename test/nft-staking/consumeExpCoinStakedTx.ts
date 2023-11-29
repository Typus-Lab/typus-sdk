import "../load_env";
import config from "../../config_v2.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import { consumeExpCoinStakedTx } from "../../utils/nft-staking/user-entry";
import { getOwnedKiosks } from "@mysten/kiosk";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const gasBudget = 100000000;

const amount = "10";

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    const kiosks = await getOwnedKiosks(provider, address);

    if (kiosks.kioskOwnerCaps.length > 0) {
        let coins = (await provider.getCoins({ owner: await signer.getAddress(), coinType: config.NFT_EXP_TOKEN })).data.map(
            (coin) => coin.coinObjectId
        );

        console.log(coins);

        let transactionBlock = await consumeExpCoinStakedTx(
            gasBudget,
            config.SINGLE_COLLATERAL_PACKAGE,
            [config.NFT_EXP_TOKEN],
            config.SINGLE_COLLATERAL_REGISTRY,
            coins,
            amount
        );

        // let res = await client.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
        let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });

        console.log(res);
    }
})();
