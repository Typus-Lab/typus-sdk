import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";
import { createTradingOrderWithBidReceipt, NETWORK } from "src/typus-perp";
import { createPythClient } from "src/utils";
import "src/utils/load_env";
import { TOKEN } from "src/constants";

(async () => {
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let user = keypair.toSuiAddress();
    console.log(user);

    let pythClient = createPythClient(provider, NETWORK);

    var tx = new Transaction();

    // 1. Get user's bid receipt
    let bidReceipt = "0xb1b3e07b526a05b705dde1aadf76a9af8906a3e1479ea0d4a9eb33fafeba777c";

    // 2. Get receipt detail, vaultIndex, dToken, bToken, oToken
    let index = "5";
    let cToken: TOKEN = "USDC"; // dToken
    let bToken: TOKEN = "USDC";
    let tradingToken: TOKEN = "SOL"; // oToken
    let isLong = false; // call => short, put => long
    let share: string | null = "100000000";

    tx = await createTradingOrderWithBidReceipt(config, tx, pythClient, {
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

    let res = await provider.signAndExecuteTransaction({ signer: keypair, transaction: tx });
    console.log(res);
    // https://testnet.suivision.xyz/txblock/9BwZRXhRqYxeP6k3NavsVX1yQQjTfJbPBYijDPfaPHPH
})();
