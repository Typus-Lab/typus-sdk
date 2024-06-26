import configs from "../../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../../constants";
import { unsubscribe } from "../../../../utils/typus_perp/stake-pool/functions";

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

    unsubscribe(tx, config.TOKEN.TLP, {
        version: config.OBJECT.TYPUS_PERP_VERSION,
        registry: config.REGISTRY.STAKE_POOL_REGISTRY,
        index: BigInt(0),
        userShareId: BigInt(0),
        clock: CLOCK,
        unsubscribedShares: BigInt(987450000000),
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
})();
