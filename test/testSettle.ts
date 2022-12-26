import { getNewOracleTx } from "../utils/getNewOracleTx"
import { getNewTimeOracleTx } from "../utils/getNewTimeOracleTx"
import { getUpdateOracleTx } from "../utils/getUpdateOracleTx"
import { getNewCoveredCallVaultTx } from "../utils/coveredCall/getNewCoveredCallVaultTx";
import { getDepositTx } from "../utils/coveredCall/getDepositTx"
import { createTimeOracle } from "../utils/coveredCall/createTimeOracle"
import { COVERED_CALL_MANAGER, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, TEST_MNEMONIC, ORACLE_PACKAGE } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { getTypeArgumentFromToken } from "../utils/getTypeArgumentFromToken"
import { getUpdateTimeOracleTx } from "../utils/getUpdateTimeOracleTx";
import { resolve } from "path";
import { getNewAuctionWithNextCoveredCallVaultTx } from "../utils/coveredCall/getNewAuctionWithNextCoveredCallVaultTx"
import { getNewBidTx } from "../utils/coveredCall/getNewBidTx"
import { getDeliveryTx } from "../utils/coveredCall/getDeliveryTx"
import { getUpdatePayoffConfigTx } from "../utils/coveredCall/getUpdatePayoffConfigTx"
import { getSettleTx } from "../utils/coveredCall/getSettleTx"
import { type } from "os";
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);
const token = "0x8f306b0fcbcbdee0b3a5e694c06039dfe8ca7f14"// minted token 
const tokenB = "0xb1bf91e97ea97712903824f2f9f4a29d629e9fab"

const decimal = 8;
const strike = 2000
const isRolling = true;
const expirationTsMs1 = 1000000;
const expirationTsMs2 = 2000000;


// let priceOracle = '0x636b4e02991f13720571d0cbbc8b83d80cd14729';
// let priceOracleManager = '0xd958057a227cdfd2080f4aeda7a16d6fe7135bcc';
// let timeOracle = '0x2b06a0f8109e394258c288b1d90c8c5a9c3832db';
// let timeOracleManager = '0xcad2723ff9c95ce423d3614375e2fa73ce9a7c04';

(async () => {
    let typeArgument: string = await getTypeArgumentFromToken(token)

    //create price oracle and time oracle
    let [priceOracle, priceOracleManager] = await createPriceOracle(typeArgument)
    let [timeOracle, timeOracleManager] = await createTimeOracle()

    // update price oracle and time oracle
    let price = 10000000000;
    let ts = 0  //ms
    await updatePriceOracle(priceOracle, priceOracleManager, typeArgument, price, ts)
    // await updateTimeOracle(timeOracle, timeOracleManager, ts)

    //create new vault
    await createNewVault(typeArgument, expirationTsMs1, priceOracle)

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
    let decaySpeed = 2;
    let initialPrice = 500000000
    let finalPrice = 100000000
    await createNewAuctionWithNextCoveredCallVault(
        typeArgument,
        vaultIndex,
        startAuctionTsMs,
        endAuctionTsMs,
        decaySpeed,
        initialPrice,
        finalPrice,
        expirationTsMs2,
        strike
    )

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

async function createPriceOracle(typeArgument: string): Promise<[string, string]> {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("create new price oracle...")
            let newOracleTx: any = await getNewOracleTx(ORACLE_PACKAGE, typeArgument, decimal);
            let moveCallTxn = await signer.executeMoveCall(newOracleTx);
            //@ts-ignore
            let digest: string = moveCallTxn.EffectsCert.certificate.transactionDigest

            let txn = await provider.getTransactionWithEffects(
                digest
            );

            let priceOracle: string;
            let managerCap: string;
            if (txn.effects.created![0].owner["AddressOwner"] == undefined) {
                priceOracle = txn.effects.created![0].reference.objectId
                managerCap = txn.effects.created![1].reference.objectId
            } else {
                priceOracle = txn.effects.created![1].reference.objectId
                managerCap = txn.effects.created![0].reference.objectId
            }
            resolve([priceOracle, managerCap])
        } catch (e) {
            console.error("err in createPriceOracle")
            reject(e)
        }
    })
}

async function updatePriceOracle(priceOracle: string, priceOracleManager: string, typeArgument: string, price: number, ts: number) {
    return new Promise(async (resolve, reject) => {
        try {
            let updateOracleTx: any = await getUpdateOracleTx(ORACLE_PACKAGE, typeArgument, priceOracle, priceOracleManager, price, ts);
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
            let updateTimeOracleTx: any = await getUpdateTimeOracleTx(ORACLE_PACKAGE, timeOracle, managerCap, ts);
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

async function createNewVault(typeArgument: string, expirationTsMs1: number, priceOracle: string) {
    return new Promise(async (resolve, reject) => {
        try {
            let newCoveredCallVaultTx = await getNewCoveredCallVaultTx(
                COVERED_CALL_PACKAGE,
                COVERED_CALL_REGISTRY,
                typeArgument,
                COVERED_CALL_MANAGER,
                expirationTsMs1,
                strike,
                // "BTC",
                // priceOracle
            )
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
    //@ts-ignore
    let numOfVault = tmp.details.data.fields.num_of_vault
    return numOfVault - 1
}

async function depositToVault(typeArgument: string, vaultIndex: number, depositAmount: number) {
    return new Promise(async (resolve, reject) => {
        try {
            let depositTx: any = await getDepositTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, vaultIndex, isRolling, token, depositAmount);
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
    startAuctionTsMs: number,
    endAuctionTsMs: number,
    decaySpeed: number,
    initialPrice: number,
    finalPrice: number,
    expirationTsMs2: number,
    strike: number
) {
    return new Promise(async (resolve, reject) => {
        try {
            let txn = await getNewAuctionWithNextCoveredCallVaultTx(
                COVERED_CALL_PACKAGE,
                COVERED_CALL_MANAGER,
                COVERED_CALL_REGISTRY,
                typeArgument,
                vaultIndex,
                startAuctionTsMs,
                endAuctionTsMs,
                decaySpeed,
                initialPrice,
                finalPrice,
                8,
                expirationTsMs2,
                strike,
            )
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
            let newBidTx: any = await getNewBidTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, vaultIndex, size, token, timeOracle);
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
            let deliveryTx: any = await getDeliveryTx(COVERED_CALL_PACKAGE, COVERED_CALL_MANAGER, COVERED_CALL_REGISTRY, typeArgument, vaultIndex, sellSize, timeOracle);
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
            let updatePayoffConfigTx: any = await getUpdatePayoffConfigTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, COVERED_CALL_MANAGER, vaultIndex, price, premiumRoi, exposureRatio);
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
            let settleTx: any = await getSettleTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, COVERED_CALL_MANAGER, vaultIndex, priceOracle, timeOracle);
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