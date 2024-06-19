import "../load_env";
import configs from "../../config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getSnapshotTx } from "../../utils/nft-staking/user-entry";

const config = configs.MAINNET;

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

const gasBudget = 100000000;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    const amount = "10000";

    console.log(config.TYPUS_VERSION, config.REGISTRY.USER, config.PACKAGE.DOV_SINGLE, config.REGISTRY.DOV_SINGLE);

    let transactionBlock = await getSnapshotTx(
        gasBudget,
        config.TYPUS_VERSION,
        config.REGISTRY.USER,
        config.PACKAGE.DOV_SINGLE,
        config.REGISTRY.DOV_SINGLE,
        amount
    );

    let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });

    console.log(res);
})();
