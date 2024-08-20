import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { harvest, getUserStake } from "src/typus-perp";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const config = TypusConfig.default("TESTNET");
const provider = new SuiClient({
    url: config.rpcEndpoint,
});
const gasBudget = 100000000;

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    // 1. Get user's stake
    const stakes = await getUserStake(provider, config, user);
    // console.log(stakes);
    const stake = stakes[0];
    console.log(stake);

    const tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    harvest(config, {
        tx,
        userShareId: stake.userShareId.toString(),
    });

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: user,
    });

    const events = dryrunRes.events.filter((e) => e.type.endsWith("HarvestPerUserShareEvent"));

    if (events.length > 0) {
        // @ts-ignore
        const harvest_amount = events[0].parsedJson.harvest_amount;
        console.log(`Sui incentive amount: ${harvest_amount / 10e9}`);
    }

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
    // https://testnet.suivision.xyz/txblock/EvBgQwKFay8YMYDG9WtStsfvR7MzhPa4nu5aKMgeptzX?tab=Events
})();
