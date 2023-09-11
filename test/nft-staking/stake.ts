import "../load_env";
import config from "../../nft_config.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import { getTails, getTailsIds } from "../../utils/typus-nft/fetch";
import { getStakeNftTx } from "../../utils/nft-staking/user-entry";

import { getOwnedKiosks } from "@mysten/kiosk";

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

        let transactionBlock = await getStakeNftTx(gasBudget, config.PACKAGE, config.REGISTRY, nft.kiosk, nft.kioskCap, nft.nftId);

        // let res = await client.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
        let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });

        console.log(res);
    }
})();
