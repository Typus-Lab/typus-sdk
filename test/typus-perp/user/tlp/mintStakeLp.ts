import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";
import { mintStakeLp, NETWORK, getUserStake } from "src/typus-perp";
import { LiquidityPool, Registry } from "src/typus-perp";
import { createPythClient } from "src/utils";
import { TOKEN, tokenType } from "src/constants";

(async () => {
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let config = await TypusConfig.default("TESTNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let user = keypair.toSuiAddress();
    console.log(user);

    let lpPoolRegistry = await Registry.fetch(provider, config.registry.perp.lpPool);
    // console.log(lpPoolRegistry);

    let dynamicFields = await provider.getDynamicFields({
        parentId: lpPoolRegistry.liquidityPoolRegistry,
    });

    // console.log(dynamicFields.data);
    let field = dynamicFields.data[0];
    let lpPool = await LiquidityPool.fetch(provider, field.objectId);
    // console.log(lpPool);

    let pythClient = createPythClient(provider, NETWORK);

    let stakes = await getUserStake(config, user);
    // console.log(stakes);

    // INPUT
    let cTOKEN: TOKEN = "USDT";
    let cToken = tokenType[NETWORK][cTOKEN];

    // coins
    let coins = (
        await provider.getCoins({
            owner: user,
            coinType: cToken,
        })
    ).data.map((coin) => coin.coinObjectId);
    console.log(coins.length);

    let tx = new Transaction();

    tx = await mintStakeLp(config, tx, pythClient, {
        lpPool,
        coins,
        cTOKEN,
        amount: "1000000",
        userShareId: stakes.length > 0 ? stakes[0].userShareId.toString() : null,
    });

    // console.log(tx.getData());

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: user,
    });
    // console.log(dryrunRes);
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("MintLpEvent")));
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("StakeEvent")));

    let res = await provider.signAndExecuteTransaction({ signer: keypair, transaction: tx });
    console.log(res);
    // https://testnet.suivision.xyz/txblock/GRjmdrHtcqzAP4a8i6nTef88zDpPZ2ouLSVX4DTj8JnC
})();
