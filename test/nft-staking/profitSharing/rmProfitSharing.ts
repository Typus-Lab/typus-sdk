import "../../load_env";
import config_v2 from "../../../config_v2.json";
import mnemonic from "../../../mnemonic.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection, TransactionBlock } from "@mysten/sui.js";

const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
const provider = new JsonRpcProvider(new Connection({ fullnode: config_v2.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const gasBudget = 100000000;

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    const transactionBlock = new TransactionBlock();

    transactionBlock.moveCall({
        target: `${config_v2.SINGLE_COLLATERAL_PACKAGE}::tails_staking::rm_profit_sharing`,
        typeArguments: ["0x2::sui::SUI"],
        arguments: [transactionBlock.object(config_v2.SINGLE_COLLATERAL_REGISTRY)],
    });

    transactionBlock.setGasBudget(gasBudget);

    const res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
