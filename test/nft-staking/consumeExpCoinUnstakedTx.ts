import configs from "../../config.json";
import { getConsumeExpCoinUnstakedTx, getTailsIds, getkioskOwnerCaps, getExpUpWithoutStakingTx } from "../../src";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";

const config = configs.TESTNET;
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

const amount = "1";

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    var result = await provider.getOwnedObjects({
        owner: address,
        options: { showType: true, showContent: true },
    });

    var datas = result.data;

    while (result.hasNextPage) {
        result = await provider.getOwnedObjects({
            owner: address,
            options: { showType: true, showContent: true },
            cursor: result.nextCursor,
        });
        datas = datas.concat(result.data);
    }

    const kioskOwnerCaps = getkioskOwnerCaps(datas);
    // console.log(kioskOwnerCaps);

    const kioskClient = new KioskClient({
        client: provider,
        network: Network.TESTNET,
    });

    const personalKioskRulePackageId = kioskClient.getRulePackageId("personalKioskRulePackageId");

    const tailsIds = await getTailsIds(kioskClient, config.PACKAGE_ORIGIN.NFT, kioskOwnerCaps);
    console.log(tailsIds);
    console.log(tailsIds.length);

    if (tailsIds.length > 0) {
        let nft = tailsIds[0];
        // let nft = tailsIds.find((x) => x.isPersonal)!;
        console.log(nft);

        const coinType = `${config.PACKAGE_ORIGIN.EXP_GUESS}::tails_exp::TAILS_EXP`;

        let coins = (await provider.getCoins({ owner: address, coinType })).data.map((coin) => coin.coinObjectId);
        console.log(coins);

        let tx = new TransactionBlock();

        getConsumeExpCoinUnstakedTx({
            tx,
            packageId: config.PACKAGE.EXP_GUESS,
            tailsExpRegistry: config.REGISTRY.EXP_GUESS,
            typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
            tailsStakingRegistry: config.REGISTRY.TAILS_STAKING,
            kiosk: nft.kiosk,
            kioskCap: nft.kioskCap,
            tails: nft.nftId,
            coins,
            amount,
            personalKioskPackageId: nft.isPersonal ? personalKioskRulePackageId : undefined,
        });

        // getExpUpWithoutStakingTx({
        //     tx,
        //     typusPackageId: config.PACKAGE.TYPUS,
        //     typusEcosystemVersion: config.OBJECT.TYPUS_VERSION,
        //     typusTailsStakingRegistry: config.REGISTRY.TAILS_STAKING,
        //     typusUserRegistry: config.REGISTRY.USER,
        //     kiosk: nft.kiosk,
        //     kioskCap: nft.kioskCap,
        //     tails: nft.nftId,
        //     amount,
        //     personalKioskPackageId: nft.isPersonal ? personalKioskRulePackageId : undefined,
        // });

        const result = await provider.signAndExecuteTransactionBlock({
            signer: keypair,
            transactionBlock: tx,
        });
        console.log(result);
    }
})();
