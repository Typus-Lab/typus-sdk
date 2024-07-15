import "../../load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import configs from "../../config.json";
import { CLOCK } from "../../constants";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const config = configs.MAINNET;
const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({ url: config.RPC_ENDPOINT });
const nftTable = "0xa537a287cf99264b905cb0a5400df6ed2612ba82db6c536548ad9f3fd9843c1f";

(async () => {
    let result = await provider.getDynamicFields({
        parentId: nftTable,
    });
    let stakedTailses = result.data;
    while (result.hasNextPage) {
        result = await provider.getDynamicFields({
            parentId: nftTable,
            cursor: result.nextCursor,
        });
        stakedTailses = stakedTailses.concat(result.data);
    }
    let stakedUsers = stakedTailses.map((stakedTails) => {
        return stakedTails.name.value;
    });
    // console.log(stakedUsers);
    const chunkSize = 300;
    for (let i = 0; i < stakedUsers.length; i += chunkSize) {
        const chunk = stakedUsers.slice(i, i + chunkSize);
        const chunkReversed = stakedUsers.slice(i, i + chunkSize).reverse();
        let transactionBlock = new TransactionBlock();
        let result = transactionBlock.moveCall({
            target: `${config.PACKAGE.DOV_SINGLE}::tails_staking::remove_nft_table_tails`,
            typeArguments: [],
            arguments: [
                transactionBlock.object(config.REGISTRY.DOV_SINGLE),
                transactionBlock.object(nftTable),
                transactionBlock.pure(chunk),
            ],
        });
        transactionBlock.moveCall({
            target: `${config.PACKAGE.TYPUS}::tails_staking::import_tails`,
            typeArguments: [],
            arguments: [
                transactionBlock.object(config.OBJECT.TYPUS_VERSION),
                transactionBlock.object(config.REGISTRY.TAILS_STAKING),
                transactionBlock.object(result[0]),
                transactionBlock.pure(chunkReversed),
            ],
        });
        transactionBlock.setGasBudget(1000000000);
        let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
        console.log(res);
        await sleep(5000);
    }
})();
