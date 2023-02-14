import { getUpdateOracleTx } from "../utils/getUpdateOracleTx"
import { getNewOracleTx } from "../utils/getNewOracleTx"
import { TEST_MNEMONIC, ORACLE_PACKAGE, DEFAULT_TYPE_ARGUMENT, TESTNET_RPC_ENDPOINT } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

(async () => {

    let price = 1234;
    let unix = 5678;
    let decimal = 8;

    console.log("create new oracle...")
    let gasBudget = "100000"
    let newOracleTx: any = await getNewOracleTx(
        gasBudget, ORACLE_PACKAGE, DEFAULT_TYPE_ARGUMENT, decimal);
    let moveCallTxn = await signer.executeMoveCall(newOracleTx);
    //@ts-ignore
    let digest: string = moveCallTxn.EffectsCert.certificate.transactionDigest

    let txn = await provider.getTransactionWithEffects(
        digest
    );

    // @ts-ignore
    let newOracle;
    let managerCap;
    if (txn.effects.created![0].owner["AddressOwner"] == undefined) {
        newOracle = txn.effects.created![0].reference.objectId
        managerCap = txn.effects.created![1].reference.objectId
    } else {
        newOracle = txn.effects.created![1].reference.objectId
        managerCap = txn.effects.created![0].reference.objectId
    }

    console.log("update oracle...")
    let updateOracleTx: any = await getUpdateOracleTx(
        gasBudget, ORACLE_PACKAGE, DEFAULT_TYPE_ARGUMENT, newOracle, managerCap, price, unix);
    moveCallTxn = await signer.executeMoveCall(updateOracleTx);

    let newOracleObj = await provider.getObject(newOracle)
    if (newOracleObj.status != "Exists") {
        console.log("obj not exists")
        return
    }
    console.log("updated oracle:")
    //@ts-ignore
    console.log(newOracleObj.details.data.fields)
})()