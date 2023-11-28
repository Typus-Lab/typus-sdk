import { JsonRpcProvider, Connection, Ed25519Keypair, RawSigner } from "@mysten/sui.js";
import { getDepositShares } from "../../../utils/typus-dov-single-v2/view-function";
import config from "../../../config_v2.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    const address = await signer.getAddress();

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

    const result = await getDepositShares(
        provider,
        config.FRAMEWORK_PACKAGE,
        config.SINGLE_COLLATERAL_PACKAGE,
        config.SINGLE_COLLATERAL_REGISTRY,
        receipts
    );
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
