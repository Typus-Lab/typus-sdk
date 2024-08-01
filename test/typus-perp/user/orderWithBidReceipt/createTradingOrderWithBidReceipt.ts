import configs from "config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { createTradingOrderWithBidReceipt, NETWORK } from "src/typus-perp";
import { createPythClient } from "src/utils";
import "src/utils/load_env";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    const pythClient = createPythClient(provider, NETWORK);

    var tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    // 1. Get user's bid receipt
    const bidReceipt = "0xb1b3e07b526a05b705dde1aadf76a9af8906a3e1479ea0d4a9eb33fafeba777c";

    // 2. Get receipt detail, vault_index, dToken, bToken, oToken
    const index = "5";
    const cToken = "USDC"; // dToken
    const bToken = "USDC";
    const tradingToken = "SOL"; // oToken
    const isLong = false; // call => short, put => long
    const share: string | null = "100000000";

    tx = await createTradingOrderWithBidReceipt(config, {
        pythClient,
        tx,
        cToken,
        tradingToken,
        isLong,
        user,
        index,
        bToken,
        bidReceipt,
        share,
    });

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: user,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("CreateTradingOrderWithBidReceiptsEvent")));
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("OrderFilledEvent"))); // if the order is not filled, there will be no OrderFilledEvent

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
    // https://testnet.suivision.xyz/txblock/9BwZRXhRqYxeP6k3NavsVX1yQQjTfJbPBYijDPfaPHPH
})();
