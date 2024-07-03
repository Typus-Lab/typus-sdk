import configs from "../../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { createPythClient } from "../../../../utils/pyth/pythClient";
import { NETWORK } from "../../../../utils/typus_perp";
import { createTradingOrderWithBidReceipt } from "../../../../utils/typus_perp/user/orderWithBidReceipt";
import "../../../load_env";

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
    const bidReceipt = "0xacad42b6e075d22618f9eaca08d33bf69c552c15c1ad6395d478c4b2ddb7398b";

    // 2. Get receipt detail, vault_index, dToken, bToken, oToken
    const index = "8";
    const cToken = "USDC"; // dToken
    const bToken = "USDC";
    const tradingToken = "SOL"; // oToken
    const isLong = true; // call => short, put => long
    const share: string | null = "1000000000";

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
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("CreateTradingOrderEvent")));
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("RealizeFundingEvent"))); // if the order is not filled, there will be no RealizeFundingEvent
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("OrderFilledEvent"))); // if the order is not filled, there will be no OrderFilledEvent

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
    // https://testnet.suivision.xyz/txblock/9BwZRXhRqYxeP6k3NavsVX1yQQjTfJbPBYijDPfaPHPH
})();
