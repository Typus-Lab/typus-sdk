import "../load_env";
import config from "../../nft_config.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection, TransactionBlock } from "@mysten/sui.js";
import { getOwnedKiosks, place, purchase, confirmRequest } from "@mysten/kiosk";
import { getPayRoyaltyTx } from "../../utils/typus-nft/user-entry";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const price = "1000000000";
const fee = "1000000000";

const kiosk_list = "0x51f29e27ffc4f90ef9815cf3d167f220849af3186617e3c0817faa1d98dc896f";
const itemId = "0x61f5f4c3cf3ec010edc1c7640a8c394bd6a22121ca3400c690cd173ce3239357";

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    const kiosks = await getOwnedKiosks(provider, address);

    if (kiosks.kioskOwnerCaps.length > 0) {
        const kiosk = kiosks.kioskOwnerCaps[0];

        let transactionBlock = new TransactionBlock();
        const itemType = `${config.NFT_PACKAGE}::typus_nft::Tails`;

        const [coin, royalty] = transactionBlock.splitCoins(transactionBlock.gas, [
            transactionBlock.pure(price),
            transactionBlock.pure(fee),
        ]);

        const [item, request] = purchase(transactionBlock, itemType, kiosk_list, itemId, coin);

        place(transactionBlock, itemType, kiosk.kioskId, kiosk.objectId, item);

        getPayRoyaltyTx(transactionBlock, config.NFT_PACKAGE, config.NFT_TRANSFER_POLICY, request, royalty);

        confirmRequest(transactionBlock, itemType, config.NFT_TRANSFER_POLICY, request);

        let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
        console.log(res);
    }
})();
