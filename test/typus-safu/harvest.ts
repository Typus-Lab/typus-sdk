import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { getClaimRewardTx } from "src/typus-safu";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

import { tokenType } from "src/constants";

(async () => {
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = signer.toSuiAddress();
    let config = await TypusConfig.default("MAINNET", null);
    const provider = config.gRpcClient();

    // INPUT
    let transaction = getClaimRewardTx(config, new Transaction(), {
        typeArguments: [tokenType["MAINNET"].USDC],
        index: "1",
        user,
    });

    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
