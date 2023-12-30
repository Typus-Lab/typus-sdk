import { getTransferBidReceiptTx } from "../../utils/typus-dov-single-v2/user-entry";
import config from "../../mainnet.json";
import { SuiClient, SuiEventFilter } from "@mysten/sui.js/client";
import { Tails, getTails } from "../../utils/typus-nft/fetch";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getAllocateProfitSharingTx, getSetProfitSharingTx } from "../../utils/nft-staking/authorized-entry";

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

    // var result = await provider.getDynamicFields({
    //     parentId: config.NFT_TABLE,
    // });

    // var datas = result.data;

    // while (result.hasNextPage) {
    //     result = await provider.getDynamicFields({
    //         parentId: config.NFT_TABLE,
    //         cursor: result.nextCursor,
    //     });
    //     datas = datas.concat(result.data);
    // }
    // // console.log(datas);

    // const tails: Tails[] = await getTails(
    //     provider,
    //     datas.map((data) => data.objectId)
    // );
    // // console.log(tails);

    // const users = datas.map((d) => d.name.value as string);
    // console.log("users.length: " + users.length);

    // const levelUsers = [0, 0, 0, 0, 0, 0, 0];
    // tails.forEach((tail) => (levelUsers[Number(tail.level) - 1] += 1));
    // console.log("Level Users: ", levelUsers);

    // const shareByLevel = [1, 10, 20, 100, 300, 500, 5000];
    // const sum = levelUsers.reduce((sum, user, i) => (sum += user * shareByLevel[i]), 0);
    // console.log("Sum Shares: ", sum);

    // const currentTimestampMs: number = Math.floor(new Date().getTime());
    // const startTimeMs = currentTimestampMs - 24 * 60 * 60 * 1000;
    // console.log(startTimeMs);
    // const newStake = await getStakeEvents(provider, config.SINGLE_COLLATERAL_PACKAGE_ORIGIN, startTimeMs);
    // console.log(newStake);

    let recipients = ["0x29d9b41ce1917985e23e59f6566d0acb2624812b29da4acce05b0976849415ad"];

    let share = "100000000000";

    var temp = await provider.getOwnedObjects({
        owner: address,
        options: { showType: true, showContent: true },
    });
    var datas = temp.data;
    while (temp.hasNextPage) {
        temp = await provider.getOwnedObjects({
            owner: address,
            options: { showType: true, showContent: true },
            cursor: temp.nextCursor,
        });
        datas = datas.concat(temp.data);
    }
    var receipts = datas
        .filter((obj) => obj.data?.type! == `${config.FRAMEWORK_PACKAGE}::vault::TypusBidReceipt`)
        .map((obj) => obj.data?.objectId!);

    for (let recipient of recipients) {
        let transactionBlock = new TransactionBlock();
        getTransferBidReceiptTx({
            tx: transactionBlock,
            typusFrameworkOriginPackageId: config.FRAMEWORK_PACKAGE,
            typusDovSinglePackageId: config.SINGLE_COLLATERAL_PACKAGE,
            typusDovSingleRegistry: config.SINGLE_COLLATERAL_REGISTRY,
            typeArguments: ["0x2::sui::SUI", "0x2::sui::SUI"],
            index: "1",
            receipts,
            share,
            recipient,
        });
        transactionBlock.setGasBudget(gasBudget);
        var res = await provider.signAndExecuteTransactionBlock({
            signer: keypair,
            transactionBlock,
            options: { showObjectChanges: true },
        });
        console.log(res.digest);

        receipts = res.objectChanges
            // @ts-ignore
            ?.filter((objectChange) => objectChange.type == "created" && objectChange.owner.AddressOwner == address)
            // @ts-ignore
            .map((objectChange) => objectChange.objectId as string)!;
    }
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
