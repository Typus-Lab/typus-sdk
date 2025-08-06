import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { raiseFund } from "src/typus-hedge";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { tokenType } from "src/constants";

(async () => {
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = signer.toSuiAddress();
    let network: any = "TESTNET";
    let config = await TypusConfig.default(network, null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    // INPUT
    let mainToken = tokenType[network].SUI;
    let hedgeToken = tokenType[network].SUI;
    let coins = (
        await provider.getCoins({
            owner: user,
            coinType: mainToken,
        })
    ).data.map((coin) => coin.coinObjectId);

    let transaction = new Transaction();
    raiseFund(config, transaction, {
        typeArguments: [mainToken, hedgeToken],
        index: "0",
        raiseMainCoins: coins,
        raiseMainAmount: "10000",
        raiseHedgeCoins: coins,
        raiseHedgeAmount: "1000",
        raiseFromDeactivating: "0",
        raiseFromInactive: "0",
    });
    // transaction.setGasBudget(10000000000);
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
