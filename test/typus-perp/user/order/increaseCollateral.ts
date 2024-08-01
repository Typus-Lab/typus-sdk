import configs from "config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { increaseCollateral, getUserPositions, NETWORK } from "src/typus-perp";
import { createPythClient } from "src/utils";
import { tokenType, typeArgToToken } from "src/constants";
import "src/utils/load_env";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    var tx = new TransactionBlock();

    const positions = await getUserPositions(provider, config, user);
    const position = positions[0];
    console.log(position);

    const cToken = typeArgToToken(position.collateralToken.name);

    const pythClient = createPythClient(provider, NETWORK);

    const coins = (
        await provider.getCoins({
            owner: user,
            coinType: tokenType[NETWORK][cToken],
        })
    ).data.map((coin) => coin.coinObjectId);

    tx = await increaseCollateral(config, {
        pythClient,
        tx,
        coins,
        amount: "1000000",
        position,
    });

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: user,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("IncreaseCollateralEvent"))[0].parsedJson);

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
})();
