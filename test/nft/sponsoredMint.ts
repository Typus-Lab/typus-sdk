import "../load_env";
import config from "../../nft_config.json";
import { getPool } from "../../utils/typus-nft/fetch";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import { executeSponsorTransactionBlock, getSponsoredMint } from "../../utils/sponsorTransaction";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const gasBudget = 100000000;
// const address = keypair.toSuiAddress();
const necklace = "typus";

(async () => {
    const pool = config[necklace];

    const address = await signer.getAddress();

    console.log(address);

    const objs = await provider.getOwnedObjects({
        owner: address,
        options: { showType: true, showContent: true },
    });
    // console.log(objs);

    const wlTokens = objs.data.filter(
        (obj) =>
            // @ts-ignore
            obj.data?.type?.startsWith(config.NFT_PACKAGE) && obj.data?.content?.fields.for == pool
    );

    // console.log(wlTokens);

    const poolData = await getPool(provider, pool);

    console.log(poolData);

    if (wlTokens.length > 0) {
        const wlToken = wlTokens[0].data?.objectId!;

        const [sponsoredResponse, transactionBlock] = await getSponsoredMint(config.sponsorApi, config.NFT_PACKAGE, pool, wlToken, address);

        const senderSig = await signer.signTransactionBlock({ transactionBlock: transactionBlock });

        const res = await executeSponsorTransactionBlock(provider, sponsoredResponse, senderSig);

        console.log(res);
    }
})();
