import "../load_env";
import config from "../../config.json";
import { getMintToKioskTx } from "../../utils/typus-nft/user-entry";
import { getPool } from "../../utils/typus-nft/fetch";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import { getOwnedKiosks } from "@mysten/kiosk";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const gasBudget = 100000000;
// const address = keypair.toSuiAddress();
const necklace = "kriya_dex";

(async () => {
    const pool = config[necklace];

    const address = await signer.getAddress();

    console.log(address);

    var result = await provider.getOwnedObjects({
        owner: address,
        options: { showType: true, showContent: true },
    });

    var datas = result.data;

    while (result.hasNextPage) {
        result = await provider.getOwnedObjects({
            owner: address,
            options: { showType: true, showContent: true },
            cursor: result.nextCursor,
        });
        datas = datas.concat(result.data);
    }

    const wlTokens = datas.filter((data) => {
        // console.log(data);
        // @ts-ignore
        return data.data?.type?.startsWith(config.NFT_PACKAGE_ORIGIN) && data.data?.content?.fields.for == pool;
    });

    console.log(wlTokens.length);

    const poolData = await getPool(provider, pool);

    console.log(poolData);

    const kiosks = await getOwnedKiosks(provider, address);

    if (wlTokens.length > 0 && kiosks.kioskOwnerCaps.length > 0) {
        const wlToken = wlTokens[0].data?.objectId!;

        const kiosk = kiosks.kioskIds[0];
        const kioskOwnerCap = kiosks.kioskOwnerCaps[0];

        if (kioskOwnerCap.kioskId == kiosk) {
            let transactionBlock = await getMintToKioskTx(
                gasBudget,
                config.NFT_PACKAGE_ORIGIN,
                pool,
                config.NFT_TRANSFER_POLICY,
                wlToken,
                kiosk,
                kioskOwnerCap.objectId
            );

            // let res = await client.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
            let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });

            console.log(res);
        }
    }
})();
