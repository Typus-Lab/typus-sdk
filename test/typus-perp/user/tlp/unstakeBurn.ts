import "src/utils/load_env";
import { TypusConfig } from "src/utils";
import { SuiClient } from "@mysten/sui/client";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { Transaction } from "@mysten/sui/transactions";
import { NETWORK, getUserStake, unstakeBurn } from "src/typus-perp";
import { LiquidityPool, Registry } from "src/typus-perp";
import { createPythClient } from "src/utils";

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

    let field = dynamicFields.data[0];
    let lpPool = await LiquidityPool.fetch(provider, field.objectId);
    // console.log(lpPool);

    let pythClient = createPythClient(provider, NETWORK);

    // 1. Get user's stake
    let stakes = await getUserStake(config, user);
    console.log(stakes);

    let unlockedStakes = stakes.filter((s) => s.deactivatingShares.filter((d) => d.unlockedTsMs < Date.now()).length > 0);
    console.log(unlockedStakes);

    let stake = unlockedStakes[0];
    console.log(stake);

    let tx = new Transaction();

    unstakeBurn(config, tx, pythClient, {
        userShareId: stake.userShareId.toString(),
        lpPool,
        cTOKEN: "USDC",
        share: "987450000000",
        user,
    });

    let dryrunRes = await provider.devInspectTransactionBlock({
        transactionBlock: tx,
        sender: user,
    });
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("UnstakeEvent")));
    console.log(dryrunRes.events.filter((e) => e.type.endsWith("BurnLpEvent")));

    let res = await provider.signAndExecuteTransaction({ signer: keypair, transaction: tx });
    console.log(res);
    // https://testnet.suivision.xyz/txblock/EvBgQwKFay8YMYDG9WtStsfvR7MzhPa4nu5aKMgeptzX?tab=Events
})();
