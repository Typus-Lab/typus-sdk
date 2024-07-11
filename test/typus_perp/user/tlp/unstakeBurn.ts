import configs from "../../../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { CLOCK } from "@/constants";
import { unstakeBurn } from "@/typus-perp/user/tlp";
import { getUserStake } from "@/typus-perp/fetch";
import { createPythClient } from "@/utils/pyth/pythClient";
import { NETWORK } from "@/typus-perp";
import { LiquidityPool, Registry } from "@/typus-perp/lp-pool/structs";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const config = configs.TESTNET;
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    const lpPoolRegistry = await Registry.fetch(provider, config.REGISTRY.LP_POOL_REGISTRY);
    // console.log(lpPoolRegistry);

    const dynamicFields = await provider.getDynamicFields({
        parentId: lpPoolRegistry.liquidityPoolRegistry,
    });

    const field = dynamicFields.data[0];
    const lpPool = await LiquidityPool.fetch(provider, field.objectId);
    // console.log(lpPool);

    const pythClient = createPythClient(provider, NETWORK);

    // 1. Get user's stake
    const stakes = await getUserStake(provider, config, user);
    console.log(stakes);

    const unlockedStakes = stakes.filter((s) => s.deactivatingShares.filter((d) => d.unlockedTsMs < Date.now()).length > 0);
    console.log(unlockedStakes);

    const stake = unlockedStakes[0];
    console.log(stake);

    const tx = new TransactionBlock();
    tx.setGasBudget(gasBudget);

    unstakeBurn(config, {
        pythClient,
        tx,
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

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock: tx });
    console.log(res);
    // https://testnet.suivision.xyz/txblock/EvBgQwKFay8YMYDG9WtStsfvR7MzhPa4nu5aKMgeptzX?tab=Events
})();
