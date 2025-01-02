import "src/utils/load_env";
import { setReward } from "src/typus-launch/improvement-proposal";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    // let config = TypusConfig.local("../typus-config/config-testnet.json");
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transaction = new Transaction();
    setReward(config, transaction, {
        typeArguments: ["0xaded0918624ba1a31a9818ae73ccb557d46f35cb0d754b34597356ce38e6004d::typus::TYPUS"],
        index: "1",
        key: "Typus Improvement Proposal #1",
        amount: "1000000000000000",
    });
    setReward(config, transaction, {
        typeArguments: ["0xaded0918624ba1a31a9818ae73ccb557d46f35cb0d754b34597356ce38e6004d::typus::TYPUS"],
        index: "2",
        key: "Typus Improvement Proposal #2",
        amount: "50000000000000",
    });
    setReward(config, transaction, {
        typeArguments: ["0xaded0918624ba1a31a9818ae73ccb557d46f35cb0d754b34597356ce38e6004d::typus::TYPUS"],
        index: "3",
        key: "Typus Improvement Proposal #3",
        amount: "15000000000000",
    });
    setReward(config, transaction, {
        typeArguments: ["0xaded0918624ba1a31a9818ae73ccb557d46f35cb0d754b34597356ce38e6004d::typus::TYPUS"],
        index: "4",
        key: "Typus Improvement Proposal #4",
        amount: "2000000000000000",
    });
    setReward(config, transaction, {
        typeArguments: ["0xaded0918624ba1a31a9818ae73ccb557d46f35cb0d754b34597356ce38e6004d::typus::TYPUS"],
        index: "5",
        key: "Typus Improvement Proposal #5",
        amount: "12000000000000000",
    });
    setReward(config, transaction, {
        typeArguments: ["0xaded0918624ba1a31a9818ae73ccb557d46f35cb0d754b34597356ce38e6004d::typus::TYPUS"],
        index: "6",
        key: "Typus Improvement Proposal #6",
        amount: "5000000000000",
    });
    setReward(config, transaction, {
        typeArguments: ["0xaded0918624ba1a31a9818ae73ccb557d46f35cb0d754b34597356ce38e6004d::typus::TYPUS"],
        index: "7",
        key: "Typus Improvement Proposal #7",
        amount: "10000000000000",
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();
