import { getNewOracleTx } from "../utils/getNewOracleTx"
import { getNewTimeOracleTx } from "../utils/getNewTimeOracleTx"
import { getUpdateOracleTx } from "../utils/getUpdateOracleTx"
import { getNewCoveredCallVaultTx } from "../utils/coveredCall/getNewCoveredCallVaultTx";
import { getDepositTx } from "../utils/coveredCall/getDepositTx"
import { createTimeOracle } from "../utils/coveredCall/createTimeOracle"
import { COVERED_CALL_MANAGER, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, TEST_MNEMONIC, ORACLE_PACKAGE, TESTNET_RPC_ENDPOINT } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { getTypeArgumentFromToken } from "../utils/getTypeArgumentFromToken"
import { getUpdateTimeOracleTx } from "../utils/getUpdateTimeOracleTx";
import { resolve } from "path";
import { getNewAuctionWithNextCoveredCallVaultTx } from "../utils/coveredCall/getNewAuctionWithNextCoveredCallVaultTx"
import { getNewBidTx } from "../utils/coveredCall/getNewBidTx"
import { getDeliveryTx } from "../utils/coveredCall/getDeliveryTx"
import { getUpdatePayoffConfigTx } from "../utils/coveredCall/getUpdatePayoffConfigTx"
import { getSettleTx } from "../utils/coveredCall/getSettleTx"
import { createPriceOracle } from "../utils/coveredCall/createPriceOracle"
import { type } from "os";
import { share } from "rxjs";
const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);
const token = "0x8f306b0fcbcbdee0b3a5e694c06039dfe8ca7f14"// minted token 
const tokenB = "0xb1bf91e97ea97712903824f2f9f4a29d629e9fab"

const decimal = 8;
const strike = 2000
const isRolling = true;
const expirationTsMs1 = 1000000;
const expirationTsMs2 = 2000000;
const gasBudget = 100000;

// let priceOracle = '0x636b4e02991f13720571d0cbbc8b83d80cd14729';
// let priceOracleManager = '0xd958057a227cdfd2080f4aeda7a16d6fe7135bcc';
// let timeOracle = '0x2b06a0f8109e394258c288b1d90c8c5a9c3832db';
// let timeOracleManager = '0xcad2723ff9c95ce423d3614375e2fa73ce9a7c04';

(async () => {
    let typeArgument: string = await getTypeArgumentFromToken(token, provider)

    //create price oracle and time oracle
    let [priceOracle, priceOracleManager] = await createPriceOracle(typeArgument)
    let [timeOracle, timeOracleManager] = await createTimeOracle()

    // update price oracle and time oracle
    let price = 10000000000;
    let ts = 0  //ms
    await updatePriceOracle(priceOracle, priceOracleManager, typeArgument, price, ts)
    // await updateTimeOracle(timeOracle, timeOracleManager, ts)

    //create new vault
    let tokenDecimal = 9;
    let shareDecimal = 4;
    let period = 1;
    let activationTsMs = 1671782400000;
    let expirationTsMs = 1671782400000 + 604800000;
    let capacity = 1000000000;
    let strikeOtmPct = 500;
    let strikeIncrement = 10000
    let decaySpeed = 1;
    let initialPrice = 5000;
    let finalPrice = 1000;
    let auctionDurationInMs = 3600000;
    let prevBalance = 0;

    await createNewVault(
        COVERED_CALL_PACKAGE,
        COVERED_CALL_REGISTRY,
        typeArgument,
        COVERED_CALL_MANAGER,
        timeOracle,
        period,
        activationTsMs,
        expirationTsMs,
        tokenDecimal,
        shareDecimal,
        capacity,
        strikeOtmPct,
        strikeIncrement,
        decaySpeed,
        initialPrice,
        finalPrice,
        auctionDurationInMs,
        prevBalance,
    );

    //deposit to new vault
    let vaultIndex = await getNewestVaultIndex(COVERED_CALL_REGISTRY);
    let depositAmount = 50000000000;

    await depositToVault(typeArgument, vaultIndex, depositAmount)

    //================================start auction================================

    //update price oracle and time oracle
    let startAuctionTsMs = expirationTsMs1 - 1000
    await updatePriceOracle(priceOracle, priceOracleManager, typeArgument, price, startAuctionTsMs)
    await updateTimeOracle(timeOracle, timeOracleManager, startAuctionTsMs)

    //new_auction_with_next_covered_call_vault
    let endAuctionTsMs = startAuctionTsMs + 500
    decaySpeed = 2;
    initialPrice = 500000000
    finalPrice = 100000000
    activationTsMs = 1672992000000
    expirationTsMs = 1672992000000 + 604800000
    await createNewAuctionWithNextCoveredCallVault(
        typeArgument,
        vaultIndex,
        priceOracle,
        timeOracle,
        activationTsMs,
        expirationTsMs,
    );

    //update time oracle
    let currentTime = startAuctionTsMs + 300
    await updateTimeOracle(timeOracle, timeOracleManager, currentTime)

    //new bid
    let bidSize = 50000000000
    await newBid(typeArgument, vaultIndex, bidSize, tokenB, timeOracle)

    // //check some data
    // //TODO

    //update time oracle
    await updateTimeOracle(timeOracle, timeOracleManager, endAuctionTsMs + 1)

    //delivery
    let sellSize = 50000000000;//should be rolling and regular subvault balance
    await delivery(typeArgument, vaultIndex, sellSize, timeOracle)

    // //================================end auction================================

    //update price oracle and time oracle
    await updatePriceOracle(priceOracle, priceOracleManager, typeArgument, price, endAuctionTsMs)
    await updateTimeOracle(timeOracle, timeOracleManager, endAuctionTsMs)

    //update payoff config
    let premiumRoi = 100000;
    let exposureRatio = bidSize * (10 ** decimal) / depositAmount;
    await updatePayoffConfig(typeArgument, vaultIndex, price, premiumRoi, exposureRatio)

    //update price oracle and time oracle
    price = 9800000000
    await updatePriceOracle(priceOracle, priceOracleManager, typeArgument, price, expirationTsMs1)
    await updateTimeOracle(timeOracle, timeOracleManager, expirationTsMs1)

    //settle 
    await settle(typeArgument, vaultIndex, priceOracle, timeOracle)
})()

async function updatePriceOracle(priceOracle: string, priceOracleManager: string, typeArgument: string, price: number, ts: number) {
    return new Promise(async (resolve, reject) => {
        try {

            let updateOracleTx: any = await getUpdateOracleTx(
                gasBudget, ORACLE_PACKAGE, typeArgument, priceOracle, priceOracleManager, price, ts);
            await signer.executeMoveCall(updateOracleTx);
            console.log("update price oracle successfully")
            resolve(null)
        } catch (e) {
            console.error("err in updatePriceOracle")
            reject()
        }
    }).catch((error) => {
        console.error(error);
    })
}

async function updateTimeOracle(timeOracle: string, managerCap: string, ts: number) {
    return new Promise(async (resolve, reject) => {
        try {
            let updateTimeOracleTx: any = await getUpdateTimeOracleTx(
                gasBudget, ORACLE_PACKAGE, timeOracle, managerCap, ts);
            await signer.executeMoveCall(updateTimeOracleTx);
            console.log("update time oracle successfully")
            resolve(null)
        } catch (e) {
            console.error("err in updateTimeOracle")
            reject()
        }
    }).catch((error) => {
        console.error(error);
    })
}

async function createNewVault(

    packageId: string,
    registry: string,
    typeArgument: string,
    managerCap: string,
    timeOracle: string,
    period: number,
    activationTsMs: number,
    expirationTsMs: number,
    tokenDecimal: number,
    shareDecimal: number,
    capacity: number,
    strikeOtmPct: number,
    strikeIncrement: number,
    decaySpeed: number,
    initialPrice: number,
    finalPrice: number,
    auctionDurationInMs: number,
    leverage: number,

) {
    return new Promise(async (resolve, reject) => {
        try {
            let newCoveredCallVaultTx = await getNewCoveredCallVaultTx(
                gasBudget,
                COVERED_CALL_PACKAGE,
                COVERED_CALL_REGISTRY,
                typeArgument,
                COVERED_CALL_MANAGER,
                timeOracle,
                period.toString(),
                activationTsMs.toString(),
                expirationTsMs.toString(),
                tokenDecimal.toString(),
                shareDecimal.toString(),
                capacity.toString(),
                strikeOtmPct.toString(),
                strikeIncrement.toString(),
                decaySpeed.toString(),
                initialPrice.toString(),
                finalPrice.toString(),
                auctionDurationInMs.toString(),
                [],
                leverage.toString(),
            );
            let moveCallTxn = await signer.executeMoveCall(newCoveredCallVaultTx);
            await checkData(moveCallTxn)
            console.log("create new vault successfully")
            resolve(null)
        } catch (e) {
            console.error("err in createNewVault")
            reject()
        }
    }).catch((error) => {
        console.error(error);
    })
}

async function checkData(moveCallTxn: any) {
    try {
        let txn = await provider.getTransactionWithEffects(
            //@ts-ignore
            moveCallTxn.EffectsCert.certificate.transactionDigest
        );
        for (let obj of txn.effects.created!) {
            //@ts-ignore
            if (obj.owner.ObjectOwner == COVERED_CALL_REGISTRY) console.log("new covered call vault: " + obj.reference.objectId)
        }
    } catch (e) {
        console.error(e)
    }
}

async function getNewestVaultIndex(registry: string): Promise<number> {
    let tmp = await provider.getObject(registry)
    if (tmp.status != "Exists") {
        console.log("obj not exists")
        return -1
    }
    //@ts-ignore
    let numOfVault = tmp.details.data.fields.num_of_vault
    return numOfVault - 1
}

async function depositToVault(typeArgument: string, vaultIndex: number, depositAmount: number) {
    return new Promise(async (resolve, reject) => {
        try {
            let depositTx: any = await getDepositTx(
                gasBudget, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, vaultIndex.toString(), token, depositAmount.toString());
            await signer.executeMoveCall(depositTx);
            console.log("deposit to vault successfully")
            resolve(null)
        } catch (e) {
            console.log(e)
            console.error("err in depositToVault")
        }
    }).catch((error) => {
        console.error(error);
    })
}

async function createNewAuctionWithNextCoveredCallVault(
    typeArgument: string,
    vaultIndex: number,
    priceOracle: string,
    timeOracle: string,
    activationTsMs: number,
    expirationTsMs: number,
) {
    return new Promise(async (resolve, reject) => {
        try {
            let txn = await getNewAuctionWithNextCoveredCallVaultTx(
                gasBudget,
                COVERED_CALL_PACKAGE,
                COVERED_CALL_MANAGER,
                COVERED_CALL_REGISTRY,
                typeArgument,
                vaultIndex,
                priceOracle,
                timeOracle,
                activationTsMs,
                expirationTsMs,
            );
            await signer.executeMoveCall(txn);
            console.log("create new auction with next covered call successfully")
            resolve(null)
        } catch (e) {
            console.error("err in createNewAuctionWithNextCoveredCallVault")
        }
    }).catch((error) => {
        console.error(error);
    })
}

async function newBid(typeArgument: string, vaultIndex: number, size: number, token: string, timeOracle: string) {
    return new Promise(async (resolve, reject) => {
        try {
            let newBidTx: any = await getNewBidTx(
                gasBudget, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, vaultIndex.toString(), size.toString(), token, timeOracle);
            await signer.executeMoveCall(newBidTx);
            console.log("new bid successfully ")
            resolve(null)
        } catch (e) {
            console.error(e)
        }
    }).catch((error) => {
        console.error(error);
    })
}

async function delivery(typeArgument: string, vaultIndex: number, sellSize: number, timeOracle: string) {
    return new Promise(async (resolve, reject) => {
        try {
            let deliveryTx: any = await getDeliveryTx(
                gasBudget, COVERED_CALL_PACKAGE, COVERED_CALL_MANAGER, COVERED_CALL_REGISTRY, typeArgument, vaultIndex.toString(), timeOracle);
            await signer.executeMoveCall(deliveryTx);
            console.log("delivery successfully")
            resolve(null)
        } catch (e) {
            console.error("err in delivery")
            reject()
        }
    }).catch((error) => {
        console.error(error);
    })
}

async function updatePayoffConfig(typeArgument: string, vaultIndex: number, price: number, premiumRoi: number, exposureRatio: number) {
    return new Promise(async (resolve, reject) => {
        try {
            let updatePayoffConfigTx: any = await getUpdatePayoffConfigTx(
                gasBudget, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, COVERED_CALL_MANAGER, vaultIndex.toString(), premiumRoi.toString(), exposureRatio.toString());
            await signer.executeMoveCall(updatePayoffConfigTx);
            console.log("update payoff config successfully")
            resolve(null)
        } catch (e) {
            console.error(e)
            reject()
        }
    }).catch((error) => {
        console.error(error);
    })
}

async function settle(typeArgument: string, vaultIndex: number, priceOracle: string, timeOracle: string) {
    return new Promise(async (resolve, reject) => {
        try {
            let settleTx: any = await getSettleTx(
                gasBudget, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, COVERED_CALL_MANAGER, vaultIndex.toString(), priceOracle, timeOracle);
            await signer.executeMoveCall(settleTx);
            console.log("settle successfully")
            resolve(null)
        } catch (e) {
            console.error(e)
            reject()
        }
    }).catch((error) => {
        console.error(error);
    })
}