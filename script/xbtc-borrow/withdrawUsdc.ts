import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { withdrawCollateralNavi } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { tokenType } from "src/constants";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    config.package.dovSingle = "0xe4da96f1c34f80f1d08b2c753400b96e35a8f2817942ed06dbb0d3b79fe3991a";
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let token = tokenType["MAINNET"].USDC;

    let transaction = new Transaction();
    withdrawCollateralNavi(config, transaction, {
        typeArguments: [token],
        index: "126",
        naviOracleConfig: "0x1afe1cb83634f581606cc73c4487ddd8cc39a944b951283af23f7d69d5589478",
        naviPriceOracle: "0x1568865ed9a0b5ec414220e8f79b3d04c77acc82358f6e5ae4635687392ffbef",
        naviSupraOracleHolder: "0xaa0315f0748c1f24ddb2b45f7939cff40f7a8104af5ccbc4a1d32f870c0b4105",
        naviPythPriceInfo: "0x5dec622733a204ca27f5a90d8c2fad453cc6665186fd5dff13a83d0b6c9027ab",
        naviFeedAddress: "0xe120611435395f144b4bcc4466a00b6b26d7a27318f96e148648852a9dd6b31c",
        naviStorage: "0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe",
        naviPool: "0xa3582097b4c57630046c0c49a88bfc6b202a3ec0a9db5597c31765f7563755a8",
        naviAsset: 10,
        naviIncentiveV2: "0xf87a8acb8b81d14307894d12595541a73f19933f88e1326d5be349c7a6f7559c",
        naviIncentiveV3: "0x62982dad27fb10bb314b3384d5de8d2ac2d72ab2dbeae5d801dbdb9efa816c80",
        amount: undefined,
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });

    console.log(res);
})();
