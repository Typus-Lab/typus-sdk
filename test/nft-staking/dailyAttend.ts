import "../load_env";
import config from "../../config_v2.json";
import { getDailyAttendTx } from "../../utils/nft-staking/user-entry";
import { getDailyAttendExp } from "../../utils/nft-staking/fetch";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    let dailyAttendExp = await getDailyAttendExp(provider, config.dailyAttendExp);
    console.log("Earn Exp: " + dailyAttendExp);

    let transactionBlock = await getDailyAttendTx(gasBudget, config.PACKAGE.DOV_SINGLE, config.REGISTRY.DOV_SINGLE);

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
    console.log(res);
})();
