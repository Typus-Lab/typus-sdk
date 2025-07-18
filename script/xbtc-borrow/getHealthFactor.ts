import "src/utils/load_env";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { BcsReader } from "@mysten/bcs";
import { TypusConfig } from "src/utils";
import { CLOCK, SENDER } from "src/constants";
import BigNumber from "bignumber.js";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    let target = `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_health_factor` as any;
    let transactionBlockArguments = [
        transaction.object(CLOCK),
        transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
        transaction.object("0x1568865ed9a0b5ec414220e8f79b3d04c77acc82358f6e5ae4635687392ffbef"),
        transaction.pure.address("0xd9ad801966569a212cc9e7ecbe33400307c2083ebf7e34f64c6c48fe40707c2f"),
    ];
    transaction.moveCall({
        target,
        typeArguments: [],
        arguments: transactionBlockArguments,
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock: transaction, sender: SENDER })).results;
    // @ts-ignore
    let bytes = results[results.length - 1].returnValues[0][0];
    let reader = new BcsReader(new Uint8Array(bytes));
    let result = reader.read256();
    let healthFactor = BigNumber(result).div(BigNumber(10).pow(27));
    console.log(healthFactor.toString());
})();
