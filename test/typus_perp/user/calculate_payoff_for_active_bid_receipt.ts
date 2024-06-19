// calculate_payoff_for_active_bid_receipt;

import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { createTradingOrderWithBidReceipt } from "../../../utils/typus_perp/trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../constants";
import { LiquidityPool, Registry } from "../../../utils/typus_perp/lp-pool/structs";
import { SuiPriceServiceConnection, SuiPythClient } from "@pythnetwork/pyth-sui-js";
import "../../load_env";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    let tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    tx.moveCall({
        target: `0xa4fe84c953785d9dcb388a860d30e3a1e46eeb9647f80c40359c192424f19938::typus_dov_single::calculate_payoff_for_active_bid_receipt`,
        typeArguments: [],
        arguments: [
            tx.object(config.DOV_REGISTRY),
            tx.object("0x0edabd97c679967e00d508c766fb4be0195890f96343bd3a58e10fa5e8063c96"),
            tx.object("0xbadecb77ada0c36164af49d2d808e76c1fdc1c28042a5c37f742c02efb74f6c0"),
            tx.object("0x6"),
        ],
    });

    let res = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9",
    });

    // @ts-ignore
    console.log(res.results[0].returnValues);
})();
