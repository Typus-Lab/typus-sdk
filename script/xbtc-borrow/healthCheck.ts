import "src/utils/load_env";
import dotenv from "dotenv";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import slack from "slack";
import { CLOCK, SENDER } from "src/constants";
import { BcsReader } from "@mysten/bcs";
import BigNumber from "bignumber.js";

let process = require("process");
process.removeAllListeners("warning");

(async () => {
    dotenv.config({ path: ".env" });
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_health_factor`,
        typeArguments: [],
        arguments: [
            transaction.object(CLOCK),
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.object("0x1568865ed9a0b5ec414220e8f79b3d04c77acc82358f6e5ae4635687392ffbef"),
            transaction.pure.address("0xd9ad801966569a212cc9e7ecbe33400307c2083ebf7e34f64c6c48fe40707c2f"),
        ],
    });
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_collateral_balance`,
        typeArguments: [],
        arguments: [
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.pure.u8(0),
            transaction.pure.address("0xd9ad801966569a212cc9e7ecbe33400307c2083ebf7e34f64c6c48fe40707c2f"),
        ],
    });
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_collateral_balance`,
        typeArguments: [],
        arguments: [
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.pure.u8(10),
            transaction.pure.address("0xd9ad801966569a212cc9e7ecbe33400307c2083ebf7e34f64c6c48fe40707c2f"),
        ],
    });
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_collateral_value`,
        typeArguments: [],
        arguments: [
            transaction.object(CLOCK),
            transaction.object("0x1568865ed9a0b5ec414220e8f79b3d04c77acc82358f6e5ae4635687392ffbef"),
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.pure.u8(0),
            transaction.pure.address("0xd9ad801966569a212cc9e7ecbe33400307c2083ebf7e34f64c6c48fe40707c2f"),
        ],
    });
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_collateral_value`,
        typeArguments: [],
        arguments: [
            transaction.object(CLOCK),
            transaction.object("0x1568865ed9a0b5ec414220e8f79b3d04c77acc82358f6e5ae4635687392ffbef"),
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.pure.u8(10),
            transaction.pure.address("0xd9ad801966569a212cc9e7ecbe33400307c2083ebf7e34f64c6c48fe40707c2f"),
        ],
    });
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_loan_balance`,
        typeArguments: [],
        arguments: [
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.pure.u8(26),
            transaction.pure.address("0xd9ad801966569a212cc9e7ecbe33400307c2083ebf7e34f64c6c48fe40707c2f"),
        ],
    });
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_loan_value`,
        typeArguments: [],
        arguments: [
            transaction.object(CLOCK),
            transaction.object("0x1568865ed9a0b5ec414220e8f79b3d04c77acc82358f6e5ae4635687392ffbef"),
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.pure.u8(26),
            transaction.pure.address("0xd9ad801966569a212cc9e7ecbe33400307c2083ebf7e34f64c6c48fe40707c2f"),
        ],
    });
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_health_collateral_value`,
        typeArguments: [],
        arguments: [
            transaction.object(CLOCK),
            transaction.object("0x1568865ed9a0b5ec414220e8f79b3d04c77acc82358f6e5ae4635687392ffbef"),
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.pure.address("0xd9ad801966569a212cc9e7ecbe33400307c2083ebf7e34f64c6c48fe40707c2f"),
        ],
    });
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_health_loan_value`,
        typeArguments: [],
        arguments: [
            transaction.object(CLOCK),
            transaction.object("0x1568865ed9a0b5ec414220e8f79b3d04c77acc82358f6e5ae4635687392ffbef"),
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.pure.address("0xd9ad801966569a212cc9e7ecbe33400307c2083ebf7e34f64c6c48fe40707c2f"),
        ],
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock: transaction, sender: SENDER })).results;
    let msg = "<<NAVI XBTC BORROWING HEALTH CHECK>>\n";
    msg += "  <Health Factor>\n";
    // @ts-ignore
    msg += `  * ${BigNumber(new BcsReader(new Uint8Array(results[0].returnValues[0][0])).read256()).div(BigNumber(10).pow(27))}\n`;
    msg += "  <Collateral Balance>\n";
    // @ts-ignore
    msg += `  * SUI: ${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[1].returnValues[0][0])).read256(), 9)}\n`;
    // @ts-ignore
    msg += `  * USDC: ${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[2].returnValues[0][0])).read256(), 9)}\n`;
    msg += "  <Collateral Usd Value>\n";
    // @ts-ignore
    msg += `  * SUI: ${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[3].returnValues[0][0])).read256(), 9)}\n`;
    // @ts-ignore
    msg += `  * USDC: ${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[4].returnValues[0][0])).read256(), 9)}\n`;
    msg += "  <Loan Balance>\n";
    // @ts-ignore
    msg += `  * XBTC: ${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[5].returnValues[0][0])).read256(), 9)}\n`;
    msg += "  <Loan Usd Value>\n";
    // @ts-ignore
    msg += `  * XBTC: ${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[6].returnValues[0][0])).read256(), 9)}\n`;
    msg += "  <Health Collateral Usd Value>\n";
    // @ts-ignore
    msg += `  * ${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[7].returnValues[0][0])).read256(), 9)}\n`;
    msg += "  <Health Loan Usd Value>\n";
    // @ts-ignore
    msg += `  * ${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[8].returnValues[0][0])).read256(), 9)}\n`;
    slack.chat.postMessage({
        token: String(process.env.SLACK_BOT_TOKEN),
        channel: String(process.env.SLACK_CHANNEL),
        text: `\`\`\`${msg}\`\`\``,
    });
})();

function getNumberStringWithDecimal(input: string, decimal: number): string {
    input = input.padStart(decimal, "0");
    let integer = input.slice(0, input.length - decimal).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let float = input.slice(input.length - decimal, input.length);
    return `${integer == "" ? "0" : integer}.${float}`;
}
