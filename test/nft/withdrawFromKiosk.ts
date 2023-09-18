import "../load_env";
import config from "../../config.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection, TransactionBlock } from "@mysten/sui.js";
import { getOwnedKiosks, withdrawFromKiosk } from "@mysten/kiosk";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    const kiosks = await getOwnedKiosks(provider, address);

    console.log(kiosks.kioskOwnerCaps.length);

    if (kiosks.kioskOwnerCaps.length > 0) {
        let transactionBlock = new TransactionBlock();
        let coin = withdrawFromKiosk(transactionBlock, kiosks.kioskOwnerCaps[0].kioskId, kiosks.kioskOwnerCaps[0].objectId, null);
        transactionBlock.transferObjects([coin], transactionBlock.pure(address));
        let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
        console.log(res);
    }
})();
