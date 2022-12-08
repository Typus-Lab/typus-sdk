import { getNewOracleTx } from "../utils/getNewOracleTx"
import { getUpdateOracleTx } from "../utils/getUpdateOracleTx"
import { getNewCoveredCallVaultTx } from "../utils/coveredCall/getNewCoveredCallVaultTx";
import { COVERED_CALL_MANAGER, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, TEST_MNEMONIC, ORACLE_PACKAGE, DEFAULT_TYPE_ARGUMENT } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

// - test_new_vault(mainly test: new_covered_call_vault)
// 1. we have manager cap and registry
// 2. new price oracle and update
// 3. call new_covered_call_vault
// 4. check result

(async () => {
    let price = 98;
    let unix = 10000000;
    let decimal = 8;
    let expiration = 1;
    let assetName = "BTC"
    let strike = 105

    // 2. new price oracle and update
    console.log("create new oracle...")
    let newOracleTx: any = await getNewOracleTx(ORACLE_PACKAGE, DEFAULT_TYPE_ARGUMENT, decimal);
    let moveCallTxn = await signer.executeMoveCall(newOracleTx);
    //@ts-ignore
    let digest: string = moveCallTxn.EffectsCert.certificate.transactionDigest

    let txn = await provider.getTransactionWithEffects(
        digest
    );

    // @ts-ignore
    let priceOracle;
    let managerCap;
    if (txn.effects.created![0].owner["AddressOwner"] == undefined) {
        priceOracle = txn.effects.created![0].reference.objectId
        managerCap = txn.effects.created![1].reference.objectId
    } else {
        priceOracle = txn.effects.created![1].reference.objectId
        managerCap = txn.effects.created![0].reference.objectId
    }

    console.log("newOracle: " + priceOracle)
    console.log("managerCap: " + managerCap)

    console.log("update oracle...")
    let updateOracleTx: any = await getUpdateOracleTx(ORACLE_PACKAGE, DEFAULT_TYPE_ARGUMENT, priceOracle, managerCap, price, unix);
    await signer.executeMoveCall(updateOracleTx);

    let newOracleObj = await provider.getObject(priceOracle)
    console.log("updated oracle data:")
    //@ts-ignore
    console.log(newOracleObj.details.data.fields)

    // 3. call new_covered_call_vault
    let newCoveredCallVaultTx = await getNewCoveredCallVaultTx(
        COVERED_CALL_PACKAGE,
        COVERED_CALL_REGISTRY,
        DEFAULT_TYPE_ARGUMENT,
        COVERED_CALL_MANAGER,
        expiration,
        assetName,
        strike,
        priceOracle,
    )
    moveCallTxn = await signer.executeMoveCall(newCoveredCallVaultTx);

    // 4. check result
    txn = await provider.getTransactionWithEffects(
        //@ts-ignore
        moveCallTxn.EffectsCert.certificate.transactionDigest
    );
    console.log("new covered call vault: " + txn.effects.created![0].reference.objectId)
})()