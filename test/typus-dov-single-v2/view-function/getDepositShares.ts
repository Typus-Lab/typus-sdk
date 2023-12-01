import config from "../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { getDepositShares } from "../../../utils/typus-dov-single-v2/view-function";

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    var temp = await provider.getOwnedObjects({
        owner: address,
        options: { showType: true, showContent: true },
    });

    var datas = temp.data;

    while (temp.hasNextPage) {
        temp = await provider.getOwnedObjects({
            owner: address,
            options: { showType: true, showContent: true },
            cursor: temp.nextCursor,
        });
        datas = datas.concat(temp.data);
    }

    const receipts = datas
        .filter((obj) => obj.data?.type! == `${config.FRAMEWORK_PACKAGE}::vault::TypusDepositReceipt`)
        .map((obj) => obj.data?.objectId!);
    // console.log(receipts);

    const result = await getDepositShares(provider, config.FRAMEWORK_PACKAGE, config.PACKAGE, config.REGISTRY, receipts);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
