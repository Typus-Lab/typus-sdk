import "../load_env";
import config from "../../config.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection, TransactionBlock } from "@mysten/sui.js";
import { getOwnedKiosks, place, purchase, confirmRequest, resolveRoyaltyRule, resolveKioskLockRule } from "@mysten/kiosk";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const price = "30000000000";

const kiosk_list = "0x52c1d13502335705968237472156eef43a2dde5919558867c44430f934d39857";
const itemId = "0x70e12f8c2cc87ea9f9287ef9a7de77467158d79c1226f25cc1b200e6c1d7148e";

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    const kiosks = await getOwnedKiosks(provider, address);

    if (kiosks.kioskOwnerCaps.length > 0) {
        const kiosk = kiosks.kioskOwnerCaps[0];

        let transactionBlock = new TransactionBlock();
        const itemType = `${config.NFT_PACKAGE}::typus_nft::Tails`;

        const [coin] = transactionBlock.splitCoins(transactionBlock.gas, [transactionBlock.pure(price)]);

        const [item, request] = purchase(transactionBlock, itemType, kiosk_list, itemId, coin);

        resolveRoyaltyRule(transactionBlock, itemType, price, config.NFT_TRANSFER_POLICY, request, { env: "mainnet" });

        resolveKioskLockRule(transactionBlock, itemType, item, kiosk.kioskId, kiosk.objectId, config.NFT_TRANSFER_POLICY, request, {
            env: "mainnet",
        });

        confirmRequest(transactionBlock, itemType, config.NFT_TRANSFER_POLICY, request);

        let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
        console.log(res);
    }
})();
