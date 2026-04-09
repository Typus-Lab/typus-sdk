import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { getRaiseFundTx, getReduceFundTx } from "src/typus-dov-single-v2";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { tokenType } from "src/constants";
import { TGE_AIRDROP } from "mnemonic.json";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(TGE_AIRDROP));
    let user = signer.toSuiAddress();
    console.log(user);
    const provider = config.gRpcClient();

    let transaction = getReduceFundTx(config, new Transaction(), {
        typeArguments: [tokenType[config.network].TYPUS, tokenType[config.network].TYPUS, tokenType[config.network].TYPUS],
        index: "89",
        receipts: ["0x4201464ab2c8c3f0c0fdf8cd9d239e94334135b6f394c4855691e70619876ea8"],
        user,
        reduceFromWarmup: "0",
        reduceFromActive: "0",
        reduceFromPremium: false,
        reduceFromInactive: true,
        reduceFromIncentive: false,
    });

    let res = await provider.signAndExecuteTransaction({ signer, transaction });

    console.log(res);
})();
