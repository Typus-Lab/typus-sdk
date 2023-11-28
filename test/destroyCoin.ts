import "./load_env";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection, TransactionBlock } from "@mysten/sui.js/transactions";

import config from "../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let coins = [
        {
            typeArgument:
                "0x5a9020b8cba51a1acbe16bee819d18d167ba29aa874116bf82d2ed79899edc7e::congratulationsyouwon1000suiclaimyourgainnowatwwwrafflesuicom::CONGRATULATIONSYOUWON1000SUICLAIMYOURGAINNOWATWWWRAFFLESUICOM",
            object: "0x3ff126a7c9713e15a867aebb5c88c682ce2f0da3b85a70f4f2a75c4390781a2e",
        },
    ];

    let transactionBlock = new TransactionBlock();
    coins.forEach(({ typeArgument, object }) => {
        transactionBlock.moveCall({
            target: `0x0000000000000000000000000000000000000000000000000000000000000002::coin::destroy_zero`,
            typeArguments: [typeArgument],
            arguments: [transactionBlock.pure(object)],
        });
    });
    transactionBlock.setGasBudget(100000000);

    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
