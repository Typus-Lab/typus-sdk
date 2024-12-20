import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";
import { increaseCollateral, getUserPositions, NETWORK } from "src/typus-perp";
import { createPythClient } from "src/utils";
import { tokenType, typeArgToToken } from "src/constants";

(async () => {
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let user = keypair.toSuiAddress();
    console.log(user);

    var tx = new Transaction();

    let positions = await getUserPositions(config, user);
    let position = positions[0];
    console.log(position);

    let cToken = typeArgToToken(position.collateralToken.name);

    let pythClient = createPythClient(provider, NETWORK);

    let coins = (
        await provider.getCoins({
            owner: user,
            coinType: tokenType[NETWORK][cToken],
        })
    ).data.map((coin) => coin.coinObjectId);

    tx = await increaseCollateral(config, tx, pythClient, {
        coins,
        amount: "1000000",
        position,
    });

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: user,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("IncreaseCollateralEvent"))[0].parsedJson);

    let res = await provider.signAndExecuteTransaction({ signer: keypair, transaction: tx });
    console.log(res);
})();
