import "../load_env";
import config from "../../config_v2.json";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiClient } from "@mysten/sui.js/client";
import { getTailsIds, getkioskOwnerCaps } from "../../utils/typus-nft/fetch";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const address = await keypair.toSuiAddress();
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

    const kioskOwnerCaps = getkioskOwnerCaps(datas);
    // console.log(kioskOwnerCaps);

    const kioskClient = new KioskClient({
        client: provider,
        network: Network.TESTNET,
    });

    const personalKioskRulePackageId = kioskClient.getRulePackageId("personalKioskRulePackageId");

    const tailsIds = await getTailsIds(kioskClient, config, kioskOwnerCaps);
    console.log(tailsIds);
    console.log(tailsIds.length);

    if (tailsIds.length > 0) {
        let nft = tailsIds[0];

        let tx = new TransactionBlock();

        const personalKioskCap = tx.moveCall({
            target: `${personalKioskRulePackageId}::personal_kiosk::new`,
            arguments: [tx.object(nft.kiosk), tx.object(nft.kioskCap)],
        });

        tx.moveCall({
            target: `${personalKioskRulePackageId}::personal_kiosk::transfer_to_sender`,
            arguments: [personalKioskCap],
        });

        const result = await provider.signAndExecuteTransactionBlock({
            signer: keypair,
            transactionBlock: tx,
        });
        console.log(result);
    }
})();
