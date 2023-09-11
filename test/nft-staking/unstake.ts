import "../load_env";
import config from "../../nft_config.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import { getTailsIds } from "../../utils/typus-nft/fetch";
import { getUnstakeNftTx } from "../../utils/nft-staking/user-entry";

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

    if (kiosks.kioskOwnerCaps.length > 0) {
        let kioskOwnerCap = kiosks.kioskOwnerCaps[0];

        let transactionBlock = await getUnstakeNftTx(
            gasBudget,
            config.PACKAGE,
            config.REGISTRY,
            kioskOwnerCap.kioskId,
            kioskOwnerCap.objectId
        );

        // let res = await client.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
        let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });

        console.log(res);
    }
})();