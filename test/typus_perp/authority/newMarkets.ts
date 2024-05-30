import configs from "../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { newMarkets } from "../../../utils/typus_perp/trading/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../constants";

import mnemonic from "../../../mnemonic.json";
const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));

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

    newMarkets(tx, ["0x2::sui::SUI", "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC"], {
        version: "",
        registry: "",
        protocolFeeShareBp: BigInt(10),
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
