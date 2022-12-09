import { getNewOracleTx } from "../utils/getNewOracleTx"
import { getUpdateOracleTx } from "../utils/getUpdateOracleTx"
import { getNewCoveredCallVaultTx } from "../utils/coveredCall/getNewCoveredCallVaultTx";
import { COVERED_CALL_MANAGER, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, TEST_MNEMONIC, ORACLE_PACKAGE, DEFAULT_TYPE_ARGUMENT } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { getTypeArgumentFromToken } from "../utils/getTypeArgumentFromToken"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);
const token = "0xaa8f8ccf372b461e5b8778b250bf13d9b1013174"// minted token 
const decimal = 8;
const expiration = 1;
const assetName = "BTC" //TODO: it will show BTC base64 string in obj fields(for example, BTC will turn into "QlRD")
const strike = 105
const price = 98;
const unix = 10000000;

(async () => {
    let typeArgument: string = await getTypeArgumentFromToken(token)
    let priceOracle: string = await createAndUpdatePriceOracle(typeArgument)

    let newCoveredCallVaultTx = await getNewCoveredCallVaultTx(
        COVERED_CALL_PACKAGE,
        COVERED_CALL_REGISTRY,
        typeArgument,
        COVERED_CALL_MANAGER,
        expiration,
        assetName,
        strike,
        priceOracle,
    )
    let moveCallTxn = await signer.executeMoveCall(newCoveredCallVaultTx);

    await checkData(moveCallTxn)
})()

async function createAndUpdatePriceOracle(typeArgument: string): Promise<any> {
    console.log("create new oracle...")
    let newOracleTx: any = await getNewOracleTx(ORACLE_PACKAGE, typeArgument, decimal);
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

    console.log("priceOracle: " + priceOracle)
    console.log("managerCap of priceOracle: " + managerCap)

    console.log("update oracle...")
    let updateOracleTx: any = await getUpdateOracleTx(ORACLE_PACKAGE, typeArgument, priceOracle, managerCap, price, unix);
    await signer.executeMoveCall(updateOracleTx);

    let newOracleObj = await provider.getObject(priceOracle)
    console.log("updated oracle data:")
    //@ts-ignore
    console.log(newOracleObj.details.data.fields)
    return priceOracle
}

async function checkData(moveCallTxn: any): Promise<any> {
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