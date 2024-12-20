import { Fund, getAllFunds, getVault } from "src/typus-launch/funding-vault";
import { SuiClient } from "@mysten/sui/client";
import { TypusConfig } from "src/utils";
import slack from "slack";

let process = require("process");
process.removeAllListeners("warning");

(async () => {
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    let config = await TypusConfig.default("MAINNET", null);
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let index = "0";
    let vault = (await getVault(config, { indexes: [index] }))[index][0];
    let interestBp = Number.parseInt(vault.config[7]);
    let users: string[] = [];
    let result = await provider.getDynamicFields({ parentId: vault.fund });
    while (true) {
        users = users.concat(
            result.data.map((fund) => {
                return new String(fund.name.value).toString();
            })
        );
        if (!result.hasNextPage) {
            break;
        }
        await sleep(1000);
        result = await provider.getDynamicFields({
            parentId: "0x5abf51dbb82ada2401f0610d118b090a0b54a47247c5302cb4b5951480fa0115",
            cursor: result.nextCursor,
        });
    }
    let funds: Fund[] = [];
    let n = 900;
    let count = 0;
    let length = users.length;
    while (users.length > 0) {
        console.log(`progress: ${count}/${length}`);
        count += n;
        count = Math.min(count, length);
        let slice = users.splice(0, n);
        funds = funds.concat(await getAllFunds(config, { index: "0", users: slice }));
        await sleep(1000);
    }
    console.log(`progress: ${count}/${length}`);

    let log = `<< Funding Vault Index ${index} >>\n`;
    log = log.concat(`*  vault interest apr: ${getNumberStringWithDecimal(interestBp.toString(), 4)}\n`);
    let lockedBalance = 0;
    let issuedInterest = 0;
    funds.forEach((fund) => {
        let interest = Math.floor(
            Math.floor(
                (Number.parseInt(fund.balance) * interestBp * (Number.parseInt(vault.config[1]) - Number.parseInt(fund.tsMs))) / 10000
            ) / Number.parseInt(vault.config[8])
        );
        lockedBalance += Number.parseInt(fund.balance);
        issuedInterest += interest;
    });
    log = log.concat(`*      locked balance: ${getNumberStringWithDecimal(lockedBalance.toString(), 9)}\n`);
    log = log.concat(`*     issued interest: ${getNumberStringWithDecimal(issuedInterest.toString(), 9)}\n`);
    let remainingCapacity = Number.parseInt(vault.config[2]) - lockedBalance;
    let currentTsMs = new Date().getTime();
    let unissuedInterest = Math.floor(
        Math.floor((remainingCapacity * interestBp * (Number.parseInt(vault.config[1]) - currentTsMs)) / 10000) /
            Number.parseInt(vault.config[8])
    );
    log = log.concat(`*  remaining capacity: ${getNumberStringWithDecimal(remainingCapacity.toString(), 9)}\n`);
    log = log.concat(`*   unissued interest: ${getNumberStringWithDecimal(unissuedInterest.toString(), 9)}\n`);
    let totalInterest = issuedInterest + unissuedInterest;
    log = log.concat(`*      total interest: ${getNumberStringWithDecimal(totalInterest.toString(), 9)}`);
    console.log(log);
    slack.chat.postMessage({
        token: String(process.env.SLACK_BOT_TOKEN),
        channel: String(process.env.SLACK_CHANNEL),
        text: `\`\`\`${log}\`\`\``,
    });
})();

function getNumberStringWithDecimal(input: string, decimal: number): string {
    let integer = input.slice(0, input.length - decimal).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let float = input.slice(input.length - decimal, input.length);
    return `${integer == "" ? "0" : integer}.${float}`;
}
