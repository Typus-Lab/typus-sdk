import "../../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../../config.json";
import { CLOCK } from "../../constants";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const config = configs.TESTNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({ url: config.RPC_ENDPOINT });
const tailsManagerCap = "";
const transferPolicy = "";
const tailsStakingRegistry = config.REGISTRY.TAILS_STAKING;

(async () => {
    await step1();
    // await step2();
    // await step3();
    // await step4();
})();

async function step1() {
    let transactionBlock = new TransactionBlock();
    let result = transactionBlock.moveCall({
        target: `${config.PACKAGE.DOV_SINGLE}::tails_staking::remove_nft_extension`,
        typeArguments: [],
        arguments: [transactionBlock.object(config.REGISTRY.DOV_SINGLE), transactionBlock.object(CLOCK)],
    });
    transactionBlock.transferObjects([result[0], result[1], result[2], result[3]], signer.toSuiAddress());
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
}

async function step2() {
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.PACKAGE.TYPUS}::tails_staking::init_tails_staking_registry`,
        typeArguments: [],
        arguments: [
            transactionBlock.object(config.TYPUS_VERSION),
            transactionBlock.object(tailsManagerCap),
            transactionBlock.object(transferPolicy),
        ],
    });
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
}

async function step3() {
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.PACKAGE.TYPUS}::tails_staking::upload_ids`,
        typeArguments: [],
        arguments: [transactionBlock.object(config.TYPUS_VERSION), transactionBlock.object(tailsStakingRegistry)],
    });
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
}

async function step4() {
    let transactionBlock = new TransactionBlock();
    transactionBlock.moveCall({
        target: `${config.PACKAGE.TYPUS}::tails_staking::upload_levels`,
        typeArguments: [],
        arguments: [transactionBlock.object(config.TYPUS_VERSION), transactionBlock.object(tailsStakingRegistry)],
    });
    transactionBlock.setGasBudget(100000000);
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
}
