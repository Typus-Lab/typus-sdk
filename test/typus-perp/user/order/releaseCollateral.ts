import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { releaseCollateral, getUserPositions, NETWORK } from "src/typus-perp";
import { createPythClient } from "src/utils";

(async () => {
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let config = TypusConfig.default("TESTNET");
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let user = keypair.toSuiAddress();
    console.log(user);

    var tx = new TransactionBlock();

    let positions = await getUserPositions(config, user);
    let position = positions[0];
    console.log(position);

    let pythClient = createPythClient(provider, NETWORK);

    tx = await releaseCollateral(config, tx, pythClient, {
        amount: "1000000",
        position,
    });
    tx.setGasBudget(100000000);

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: user,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("ReleaseCollateralEvent"))[0].parsedJson);

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
})();
