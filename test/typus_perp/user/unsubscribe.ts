import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../constants";
import { unsubscribe } from "../../../utils/typus_perp/stake-pool/functions";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const config = configs.TESTNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    const tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    unsubscribe(tx, "0x6340d69ce680b0b740d20d7ab866678c0a331ad29795bafa138a5f4055dcc25c::tlp::TLP", {
        version: config.TYPUS_PERP_VERSION,
        registry: config.TYPUS_PERP_STAKE_POOL_REGISTRY,
        index: BigInt(0),
        userShareId: BigInt(0),
        clock: CLOCK,
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
})();
