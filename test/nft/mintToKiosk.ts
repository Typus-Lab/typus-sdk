import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { getMintToKioskTx, getPool } from "src/typus-nft";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { KioskClient, Network } from "@mysten/kiosk";
import { TransactionBlock } from "@mysten/sui.js/dist/cjs/transactions";
let config = TypusConfig.default("TESTNET");

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const client = new SuiClient({ url: config.rpcEndpoint });

const gasBudget = 100000000;
// const address = keypair.toSuiAddress();
const necklace = "kriya_dex";

(async () => {
    const pool = config[necklace];

    const address = keypair.toSuiAddress();

    console.log(address);

    var result = await client.getOwnedObjects({
        owner: address,
        options: { showType: true, showContent: true },
    });

    var datas = result.data;

    while (result.hasNextPage) {
        result = await client.getOwnedObjects({
            owner: address,
            options: { showType: true, showContent: true },
            cursor: result.nextCursor,
        });
        datas = datas.concat(result.data);
    }

    const wlTokens = datas.filter((data) => {
        // console.log(data);
        // @ts-ignore
        return data.data?.type?.startsWith(config.packageOrigin.nft) && data.data?.content?.fields.for == pool;
    });

    console.log(wlTokens.length);

    const poolData = await getPool(client, pool);

    console.log(poolData);

    const kioskClient = new KioskClient({
        client,
        network: Network.TESTNET,
    });

    const kiosks = await kioskClient.getOwnedKiosks({ address });

    if (wlTokens.length > 0 && kiosks.kioskOwnerCaps.length > 0) {
        const wlToken = wlTokens[0].data?.objectId!;

        const kiosk = kiosks.kioskIds[0];
        const kioskOwnerCap = kiosks.kioskOwnerCaps[0];

        if (kioskOwnerCap.kioskId == kiosk) {
            let transactionBlock = await getMintToKioskTx(config, new TransactionBlock(), {
                pool,
                whitelist_token: wlToken,
                kiosk,
                kiosk_cap: kioskOwnerCap.objectId,
            });
            transactionBlock.setGasBudget(100000000);
            let res = await client.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
            console.log(res);
        }
    }
})();
