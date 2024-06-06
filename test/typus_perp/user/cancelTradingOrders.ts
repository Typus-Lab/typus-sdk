import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { cancelTradingOrder } from "../../../utils/typus_perp/trading/functions";
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

    const cToken = "0xa38dad920880f81ea514de6db007d3a84e9116a29c60b3e69bbe418c2d9f553c::usdt::USDT";
    const BASE_TOKEN = "0x2::sui::SUI";

    const token = cancelTradingOrder(tx, [cToken, BASE_TOKEN], {
        version: config.TYPUS_PERP_VERSION,
        registry: config.TYPUS_PERP_MARKET_REGISTRY,
        marketIndex: BigInt(0),
        orderId: BigInt(1),
        triggerPrice: BigInt(2),
    });

    tx.moveCall({
        target: `${config.FRAMEWORK}::utils::transfer_balance`,
        typeArguments: [cToken],
        arguments: [token, tx.pure(address)],
    });

    const res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
})();
