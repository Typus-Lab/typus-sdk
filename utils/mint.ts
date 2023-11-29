import { TransactionBlock } from "@mysten/sui.js/transactions";

export async function getMintTx(gasBudget: number, packageId: string, registry: string, moduleName: string, amount: number) {
    const tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::${moduleName}::mint`,
        arguments: [tx.pure(registry), tx.pure(amount)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

/*
sui client call --gas-budget 10000 --package 0xe879e96fb90a8559127091f1176a2d10bb67c6ff --module "token_btc" --function "mint" --args 0x5dce92f67eeda471369b734deac0d540b751cea6  10000
*/
