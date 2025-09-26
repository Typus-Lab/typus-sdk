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
    dotenv.config({ path: "script/.env" });
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
            transaction.pure.address(String(process.env.NAVI_ACCOUNT_ADDRESS)),
        ],
    });
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_collateral_balance`,
        typeArguments: [],
        arguments: [
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.pure.u8(0),
            transaction.pure.address(String(process.env.NAVI_ACCOUNT_ADDRESS)),
        ],
    });
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_collateral_balance`,
        typeArguments: [],
        arguments: [
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.pure.u8(10),
            transaction.pure.address(String(process.env.NAVI_ACCOUNT_ADDRESS)),
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
            transaction.pure.address(String(process.env.NAVI_ACCOUNT_ADDRESS)),
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
            transaction.pure.address(String(process.env.NAVI_ACCOUNT_ADDRESS)),
        ],
    });
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_loan_balance`,
        typeArguments: [],
        arguments: [
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.pure.u8(26),
            transaction.pure.address(String(process.env.NAVI_ACCOUNT_ADDRESS)),
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
            transaction.pure.address(String(process.env.NAVI_ACCOUNT_ADDRESS)),
        ],
    });
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_health_collateral_value`,
        typeArguments: [],
        arguments: [
            transaction.object(CLOCK),
            transaction.object("0x1568865ed9a0b5ec414220e8f79b3d04c77acc82358f6e5ae4635687392ffbef"),
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.pure.address(String(process.env.NAVI_ACCOUNT_ADDRESS)),
        ],
    });
    transaction.moveCall({
        target: `0x81c408448d0d57b3e371ea94de1d40bf852784d3e225de1e74acab3e8395c18f::logic::user_health_loan_value`,
        typeArguments: [],
        arguments: [
            transaction.object(CLOCK),
            transaction.object("0x1568865ed9a0b5ec414220e8f79b3d04c77acc82358f6e5ae4635687392ffbef"),
            transaction.object("0xbb4e2f4b6205c2e2a2db47aeb4f830796ec7c005f88537ee775986639bc442fe"),
            transaction.pure.address(String(process.env.NAVI_ACCOUNT_ADDRESS)),
        ],
    });
    let results = (await provider.devInspectTransactionBlock({ transactionBlock: transaction, sender: SENDER })).results;
    let msg = `<<NAVI XBTC BORROWING HEALTH CHECK ${String(process.env.INDEX)}>>\n`;
    msg += "  <Health Factor>\n";
    // @ts-ignore
    msg += `  * ${BigNumber(new BcsReader(new Uint8Array(results[0].returnValues[0][0])).read256()).div(BigNumber(10).pow(27))} (${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[7].returnValues[0][0])).read256(), 9)} / ${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[8].returnValues[0][0])).read256(), 9)})\n`;
    msg += "  <Collateral>\n";
    // @ts-ignore
    msg += `  * SUI: ${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[1].returnValues[0][0])).read256(), 9)} ($${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[3].returnValues[0][0])).read256(), 9)})\n`;
    // @ts-ignore
    msg += `  * USDC: ${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[2].returnValues[0][0])).read256(), 9)} ($${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[4].returnValues[0][0])).read256(), 9)})\n`;
    msg += "  <Loan>\n";
    // @ts-ignore
    msg += `  * XBTC: ${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[5].returnValues[0][0])).read256(), 9)} ($${getNumberStringWithDecimal(new BcsReader(new Uint8Array(results[6].returnValues[0][0])).read256(), 9)})\n`;
    // @ts-ignore
    let deposit_receipt = await provider.getObject({
        id: String(process.env.TYPUS_DEPOSIT_RECEIPT),
        options: { showContent: true },
    });
    // @ts-ignore
    deposit_receipt = deposit_receipt.data.content.fields.value.fields.id.id;
    // @ts-ignore
    let depositShareSlice = await provider.getObject({
        id: String(process.env.DEPOSIT_SHARE_SLICE),
        options: { showContent: true },
    });
    // @ts-ignore
    let depositShares: Object[] = depositShareSlice.data.content.fields.value;
    for (var depositShare of depositShares) {
        // @ts-ignore
        if (depositShare.fields.receipt == deposit_receipt) {
            msg += "  <Deposit Share>\n";
            // @ts-ignore
            msg += `  * Warmup: ${getNumberStringWithDecimal(depositShare.fields.warmup_share, 8)} XBTC\n`;
            // @ts-ignore
            msg += `  * Active: ${getNumberStringWithDecimal(depositShare.fields.active_share, 8)} XBTC\n`;
            // @ts-ignore
            msg += `  * Deactivating: ${getNumberStringWithDecimal(depositShare.fields.deactivating_share, 8)} XBTC\n`;
            // @ts-ignore
            msg += `  * Premium: ${getNumberStringWithDecimal(depositShare.fields.premium_share, 8)} XBTC\n`;
            // @ts-ignore
            msg += `  * Inactive: ${getNumberStringWithDecimal(depositShare.fields.inactive_share, 8)} XBTC\n`;
            // @ts-ignore
            msg += `  * Incentive: ${getNumberStringWithDecimal(depositShare.fields.incentive_share, 9)} SUI\n`;
            break;
        }
    }
    slack.chat.postMessage({
        token: String(process.env.SLACK_BOT_TOKEN),
        channel: String(process.env.SLACK_CHANNEL),
        // channel: "test-alert",
        text: `\`\`\`${msg}\`\`\``,
    });
})();

function getNumberStringWithDecimal(input: string, decimal: number): string {
    input = input.padStart(decimal, "0");
    let integer = input.slice(0, input.length - decimal).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let float = input.slice(input.length - decimal, input.length);
    return `${integer == "" ? "0" : integer}.${float}`;
}
