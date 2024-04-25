import { getMultiTransferBidReceiptTx } from "../../utils/typus-dov-single-v2/user-entry";
import config from "../../config_v2.json";
import { SuiClient, SuiEventFilter } from "@mysten/sui.js/client";
import { Tails, getTails } from "../../utils/typus-nft/fetch";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

import mnemonic from "../../mnemonic.json";
import { TransactionBlock } from "@mysten/sui.js/transactions";

const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});
const gasBudget = 100000000;

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    var result = await provider.getDynamicFields({
        parentId: config.NFT_TABLE,
    });

    var datas = result.data;

    while (result.hasNextPage) {
        result = await provider.getDynamicFields({
            parentId: config.NFT_TABLE,
            cursor: result.nextCursor,
        });
        datas = datas.concat(result.data);
    }
    // console.log(datas);

    const tails: Tails[] = await getTails(
        provider,
        datas.map((data) => data.objectId)
    );
    // console.log(tails);

    const users = datas.map((d) => d.name.value as string);
    console.log("users.length: " + users.length);

    const levelUsers = [0, 0, 0, 0, 0, 0, 0];
    tails.forEach((tail) => (levelUsers[Number(tail.level) - 1] += 1));
    console.log("Level Users: ", levelUsers);

    const shareByLevel = [1, 10, 20, 100, 300, 0, 0];
    const sum = levelUsers.reduce((sum, user, i) => (sum += user * shareByLevel[i]), 0);
    console.log("Sum Shares: ", sum);

    const currentTimestampMs: number = Math.floor(new Date().getTime());
    const startTimeMs = currentTimestampMs - 24 * 60 * 60 * 1000;
    console.log(startTimeMs);
    const newStake = await getStakeEvents(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN, startTimeMs);
    // console.log("newStake: " + newStake);

    var temp = await provider.getOwnedObjects({
        owner: address,
        options: { showType: true, showContent: true },
    });
    var receipts_datas = temp.data;
    while (temp.hasNextPage) {
        temp = await provider.getOwnedObjects({
            owner: address,
            options: { showType: true, showContent: true },
            cursor: temp.nextCursor,
        });
        receipts_datas = receipts_datas.concat(temp.data);
    }
    var receipts = receipts_datas
        .filter((obj) => obj.data?.type! == `${config.PACKAGE_ORIGIN.FRAMEWORK}::vault::TypusBidReceipt`)
        .map((obj) => obj.data?.objectId!);

    console.log("receipts: " + receipts);

    var n = 0;
    var total = 0;

    const shares: string[] = [];
    const recipients: string[] = [];

    while (n < tails.length) {
        let tail = tails[n];
        let share = (shareByLevel[Number(tail.level) - 1] * 1_000000000).toString();
        let recipient = users[n];
        if (newStake.includes(tail.id)) {
        } else if (Number(share) > 0) {
            console.log(`${n} ${recipient} ${share}`);
            total += Number(share);
            shares.push(share);
            recipients.push(recipient);
        }
        n += 1;
    }

    const transactionBlock = getMultiTransferBidReceiptTx({
        typusFrameworkPackageId: config.PACKAGE.FRAMEWORK,
        typusFrameworkOriginPackageId: config.PACKAGE_ORIGIN.FRAMEWORK,
        typusDovSinglePackageId: config.SINGLE_COLLATERAL_PACKAGE,
        typusDovSingleRegistry: config.SINGLE_COLLATERAL_REGISTRY,
        typeArguments: [
            "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC",
            "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC",
        ],
        index: "22",
        receipts,
        shares,
        recipients,
        sender: address,
    });

    var res = await provider.signAndExecuteTransactionBlock({
        signer: keypair,
        transactionBlock,
        options: { showObjectChanges: true },
    });
    console.log(res.digest);
})();

async function getStakeEvents(provider: SuiClient, PackageOrigin: string, startTimeMs: number) {
    const eventFilter: SuiEventFilter = {
        MoveEventType: `${PackageOrigin}::tails_staking::StakeNftEvent`,
    };

    var result = await provider.queryEvents({ query: eventFilter, order: "descending" });
    // console.log(result);
    var history = result.data;

    while (result.hasNextPage) {
        result = await provider.queryEvents({ query: eventFilter, order: "descending", cursor: result.nextCursor });
        history = history.concat(result.data);
        if (result.hasNextPage && Number(result.data[24].timestampMs) < startTimeMs) {
            break;
        }
    }
    // @ts-ignore
    return history.filter((h) => Number(h.timestampMs) > startTimeMs).map((h) => h.parsedJson.nft_id);
}
