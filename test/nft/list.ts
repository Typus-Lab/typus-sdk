import "../load_env";
import config from "../../nft_config.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection, TransactionBlock } from "@mysten/sui.js";
import { getTails, getTailsIds } from "../../utils/typus-nft/fetch";
import { getOwnedKiosks, list } from "@mysten/kiosk";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const price = "1000000000";

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    const kiosks = await getOwnedKiosks(provider, address);

    const tailsIds = await getTailsIds(provider, config, kiosks);
    console.log(tailsIds);

    const tails = await getTails(
        provider,
        tailsIds.map((tailsId) => tailsId.nftId)
    );
    console.log(tails);

    if (tailsIds.length > 0) {
        let transactionBlock = new TransactionBlock();
        const itemType = `${config.NFT_PACKAGE}::typus_nft::Tails`;
        list(transactionBlock, itemType, tailsIds[0].kiosk, tailsIds[0].kioskCap, tailsIds[0].nftId, price);
        let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
        console.log(res);
    }
})();
