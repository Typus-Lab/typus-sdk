import configs from "../../../perp.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { mintLp } from "../../../utils/typus_perp/lp-pool/functions";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "../../../constants";
import { LiquidityPool, Registry } from "../../../utils/typus_perp/lp-pool/structs";

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

    const lpPoolRegistry = await Registry.fetch(provider, config.TYPUS_PERP_LP_POOL_REGISTRY);
    console.log(lpPoolRegistry);

    const dynamicFields = await provider.getDynamicFields({
        parentId: lpPoolRegistry.liquidityPoolRegistry,
    });

    const field = dynamicFields.data[0];
    const lpPool = await LiquidityPool.fetch(provider, field.objectId);
    console.log(lpPool);

    let tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    tx.splitCoins(tx.gas, ["1000000000"]);

    mintLp(tx, ["0x2::sui::SUI", "0x" + lpPool.lpTokenType.name], {
        version: config.TYPUS_PERP_VERSION,
        registry: config.TYPUS_PERP_LP_POOL_REGISTRY,
        treasuryCaps: config.TYPUS_PERP_TREASURY_CAPS,
        index: 0n,
        pythState: config.PYTH_STATE,
        oracle: config.PRICE_INFO_OBJECT_SUI,
        coin: "",
        clock: CLOCK,
    });

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });

    console.log(res);
})();
