import "../load_env";
import config_v2 from "../../config_v2.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection, TransactionBlock } from "@mysten/sui.js";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config_v2.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const gasBudget = 100000000;

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    let tx = new TransactionBlock();

    const dynamicFields = await provider.getDynamicFields({
        parentId: config_v2.NFT_TABLE,
    });
    console.log(dynamicFields);

    const users = dynamicFields.data?.map((d) => d.name.value);
    console.log(users);

    tx.moveCall({
        target: `${config_v2.SINGLE_COLLATERAL_PACKAGE}::tails_staking::snapshot_and_calibrate`,
        typeArguments: [],
        arguments: [tx.object(config_v2.SINGLE_COLLATERAL_REGISTRY), tx.pure(users), tx.object("0x6")],
    });

    tx.setGasBudget(gasBudget);

    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock: tx });

    console.log(res);
})();
