import "../load_env";
import config from "../../config_v2.json";
import { getRequestMintTx } from "../../utils/typus-nft/user-entry";
import { getDiscountPool, getMintHistory } from "../../utils/typus-nft/fetch";
import { getFullnodeUrl, SuiClient, SuiEventFilter } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

// Generate a new Ed25519 Keypair
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

const gasBudget = 100000000;

(async () => {
    const pool = "0x6268d1737c236de6e9b4516013d77255ddbd0ad3cbd49d349dab273c59877e78";

    const address = keypair.toSuiAddress();
    console.log(address);

    const poolData = await getDiscountPool(provider, pool);
    console.log(poolData);

    const seed = "2"; // 0,1,2

    let transactionBlock = await getRequestMintTx(gasBudget, config.NFT_PACKAGE_UPGRADE, pool, seed, poolData.price);

    const result = await provider.signAndExecuteTransactionBlock({
        signer: keypair,
        transactionBlock,
        options: { showEvents: true },
    });
    console.log({ result });

    const vrf_input = result.events![0].parsedJson!["vrf_input"];
    console.log(vrf_input);

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    while (true) {
        const res = await getMintHistory(provider, config.NFT_PACKAGE_UPGRADE, vrf_input);
        if (res) {
            console.log(res);
            break;
        }
        await sleep(5000);
    }
})();
