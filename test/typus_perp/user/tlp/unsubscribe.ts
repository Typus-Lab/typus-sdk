import configs from "../../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../../constants";
import { unsubscribe } from "../../../../utils/typus_perp/user/tlp";
import { getUserStake } from "../../../../utils/typus_perp/fetch";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const config = configs.TESTNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    // 1. Get user's stake
    const stakes = await getUserStake(provider, config, user);
    // console.log(stakes);
    const stake = stakes[1];
    console.log(stake);

    const tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    unsubscribe(config, {
        tx,
        userShareId: stake.userShareId.toString(),
        share: "5000000",
    });

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: user,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("UnsubscribeEvent")));

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
    // https://testnet.suivision.xyz/txblock/EvBgQwKFay8YMYDG9WtStsfvR7MzhPa4nu5aKMgeptzX?tab=Events
})();
