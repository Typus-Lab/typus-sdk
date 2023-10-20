import "../load_env";
import config from "../../config.json";
import config_v2 from "../../config_v2.json";

import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection, TransactionBlock } from "@mysten/sui.js";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const gasBudget = 100000000;

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    let tx = new TransactionBlock();

    const [table, nft_manager_cap, policy, coin] = tx.moveCall({
        target: `${config.SINGLE_COLLATERAL_PACKAGE}::tails_staking::migrate_nft_extension`,
        typeArguments: [],
        arguments: [tx.object(config.SINGLE_COLLATERAL_REGISTRY), tx.object(config.SINGLE_COLLATERAL_MANAGER_CAP)],
    });

    tx.moveCall({
        target: `${config_v2.SINGLE_COLLATERAL_PACKAGE}::tails_staking::migrate_nft_extension`,
        typeArguments: [],
        arguments: [tx.object(config_v2.SINGLE_COLLATERAL_REGISTRY), table, nft_manager_cap, policy, coin],
    });

    tx.setGasBudget(gasBudget);

    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock: tx });

    console.log(res);
})();
