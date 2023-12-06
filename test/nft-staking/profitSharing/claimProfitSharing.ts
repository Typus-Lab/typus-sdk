import "../../load_env";
import config_v2 from "../../../config_v2.json";
import { getClaimProfitSharingTx } from "../../../utils/nft-staking/user-entry";
import { getUserStake } from "../../../utils/nft-staking/fetch";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

// Generate a new Ed25519 Keypair
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: config_v2.RPC_ENDPOINT,
});

const gasBudget = 100000000;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    let res_1 = await getUserStake(provider, config_v2.NFT_TABLE, address);
    console.log("Able to claim: " + res_1?.u64_padding.get("dice_profit")); // null

    let transactionBlock = await getClaimProfitSharingTx(
        gasBudget,
        config_v2.SINGLE_COLLATERAL_PACKAGE,
        config_v2.SINGLE_COLLATERAL_REGISTRY
    );
    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
