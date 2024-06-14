import "../../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../../config.json";
import { CLOCK } from "../../constants";
import * as fs from "fs";

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
    // await step5();
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

async function step5() {
    for (let level = 1; level <= 7; level++) {
        console.log(`process level${level}_url.txt`);
        let ipfs_urls = fs.readFileSync(`level${level}_url.txt`, "utf8").split("\n");
        const chunkSize = 200;
        for (let i = 0; i < ipfs_urls.length; i += chunkSize) {
            const chunk = ipfs_urls.slice(i, i + chunkSize).reverse();
            let transactionBlock = new TransactionBlock();
            transactionBlock.moveCall({
                target: `${config.PACKAGE.TYPUS}::tails_staking::upload_ipfs_urls`,
                // target: `0x8bd855143697184048bd85ce6be4b18b8fd40d78b56f9e54e4d5d704cc35aedb::test::upload_ipfs_urls`,
                typeArguments: [],
                arguments: [
                    transactionBlock.object(config.TYPUS_VERSION),
                    transactionBlock.object(tailsStakingRegistry),
                    // transactionBlock.object("0x8af71b9537769c65714e0de2a5772566ca1dca36b4f1c00519ddc87fb259d20e"),
                    transactionBlock.pure(level),
                    transactionBlock.pure(chunk),
                ],
            });
            transactionBlock.setGasBudget(1000000000);
            let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
            console.log(res);
            await sleep(5000);
        }
    }
}
