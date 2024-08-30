import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { mintStakeLp, NETWORK, getUserStake } from "src/typus-perp";
import { LiquidityPool, Registry } from "src/typus-perp/lp-pool/structs";
import { createPythClient } from "src/utils";
import { TOKEN, tokenType } from "src/constants";

(async () => {
    let keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let config = await TypusConfig.default("TESTNET");
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let user = keypair.toSuiAddress();
    console.log(user);

    let lpPoolRegistry = await Registry.fetch(provider, config.registry.perp.lpPool);
    // console.log(lpPoolRegistry);

    let dynamicFields = await provider.getDynamicFields({
        parentId: lpPoolRegistry.liquidityPoolRegistry,
    });

    let field = dynamicFields.data[0];
    let lpPool = await LiquidityPool.fetch(provider, field.objectId);
    // console.log(lpPool);

    let pythClient = createPythClient(provider, NETWORK);

    let stakes = await getUserStake(config, user);

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

    let tx = new TransactionBlock();
    tx.setGasBudget(100000000);

    tx = await mintStakeLp(config, tx, pythClient, {
        lpPool,
        coins,
        cTOKEN,
        amount: "1000000",
        userShareId: stakes.length > 0 ? stakes[0].userShareId.toString() : null,
    });

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: user,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("MintLpEvent")));
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("StakeEvent")));

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
    // https://testnet.suivision.xyz/txblock/GRjmdrHtcqzAP4a8i6nTef88zDpPZ2ouLSVX4DTj8JnC
})();
