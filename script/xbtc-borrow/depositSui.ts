import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { depositCollateralNavi } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { tokenType } from "src/constants";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    config.package.dovSingle = "0xe4da96f1c34f80f1d08b2c753400b96e35a8f2817942ed06dbb0d3b79fe3991a";
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = signer.toSuiAddress();
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let token = tokenType["MAINNET"].SUI;
    let amount = "1000000000";

    let transaction = new Transaction();
    depositCollateralNavi(config, transaction, {
        typeArguments: [token],
        index: "126",
        raiseCoins: (await provider.getCoins({ owner: user, coinType: token })).data.map((coin) => coin.coinObjectId),
        raiseAmount: amount,
        naviStorage: "0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe",
        naviPool: "0x96df0fce3c471489f4debaaa762cf960b3d97820bd1f3f025ff8190730e958c5",
        naviAsset: 0,
        naviIncentiveV2: "0xf87a8acb8b81d14307894d12595541a73f19933f88e1326d5be349c7a6f7559c",
        naviIncentiveV3: "0x62982dad27fb10bb314b3384d5de8d2ac2d72ab2dbeae5d801dbdb9efa816c80",
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });

    console.log(res);
})();
