import { Transaction } from "@mysten/sui/transactions";

export async function getMintTokenTx(packageId: string, registry: string, moduleName: string, amount: number) {
    let tx = new Transaction();
    tx.moveCall({
        target: `${packageId}::${moduleName}::mint`,
        arguments: [tx.object(registry), tx.pure.u64(amount)],
    });

    return tx;
}

/*
sui client call --gas-budget 10000 --package 0xe879e96fb90a8559127091f1176a2d10bb67c6ff --module "token_btc" --function "mint" --args 0x5dce92f67eeda471369b734deac0d540b751cea6  10000
*/
