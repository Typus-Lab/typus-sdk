import "../load_env";
import config from "../../config_v2.json";
import { getRequestMintTx } from "../../utils/typus-nft/user-entry";
import { getDiscountPool } from "../../utils/typus-nft/fetch";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

// Generate a new Ed25519 Keypair
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});

const gasBudget = 100000000;

(async () => {
    const pool = "0x7e3172a59cdde0ba50abd57ca82bd4dd9427b1a5ae3b3d386da0db251402aaae";

    const address = keypair.toSuiAddress();
    console.log(address);

    const poolData = await getDiscountPool(provider, pool);
    console.log(poolData);

    const seed = "0"; // 0,1,2

    let transactionBlock = await getRequestMintTx(gasBudget, config.NFT_PACKAGE_UPGRADE, pool, seed, poolData.price);

    const result = await provider.signAndExecuteTransactionBlock({
        signer: keypair,
        transactionBlock,
    });
    console.log({ result });
})();
