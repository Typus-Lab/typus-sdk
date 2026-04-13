import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { DrawEvent, getPlaygrounds, playTx } from "src/dice";
import { SuiGrpcClient } from "@mysten/sui/grpc";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";


const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

(async () => {
    let network: "MAINNET" | "TESTNET" = "MAINNET";
    let module: "combo_dice" | "tails_exp" = "combo_dice";
    let config = await TypusConfig.default(network, null);
    const provider = config.gRpcClient();
    let user = keypair.toSuiAddress();

    let index = "0";
    let amount = "1000000000";
    let guess_1 = "5000";
    let larger_than_1 = true;
    let guess_2 = "5000";
    let larger_than_2 = true;

    let playgrounds = await getPlaygrounds(config, { module });
    let playground = playgrounds[index];
    // console.log(playground);
    let coinType = "0x" + playground.stake_token;
    let coins = (await provider.getCoins({ owner: user, coinType })).data.map((coin) => coin.coinObjectId);

    let transaction = await playTx(config, new Transaction(), {
        module,
        typeArguments: [coinType],
        index,
        coins,
        amount,
        guess_1,
        larger_than_1,
        guess_2,
        larger_than_2,
    });

    let res = await provider.signAndExecuteTransaction({ signer: keypair, transaction, include: { showEvents: true } });
    console.log(res);

    try {
        // New Version
        let result = res.events![2].parsedJson!;
        let drawResultV2 = result as DrawEvent;
        console.log(drawResultV2);
    } catch (e) { }
})();
