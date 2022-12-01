import { getUpdateOracleTx } from "../utils/getUpdateOracleTx"
import { getNewOracleTx } from "../utils/getNewOracleTx"
import { TEST_MNEMONIC, DOV_PACKAGE } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

(async () => {
    let typeArgument = "0x2::sui::SUI";
    let price = 1234;
    let unix = 5678;

    console.log("create new oracle...")
    let newOracleTx: any = await getNewOracleTx(DOV_PACKAGE, typeArgument);
    let moveCallTxn = await signer.executeMoveCall(newOracleTx);
    //@ts-ignore
    let digest: string = moveCallTxn.EffectsCert.certificate.transactionDigest

    let txn = await provider.getTransactionWithEffects(
        digest
    );

    // @ts-ignore
    let newOracle = txn.effects.created![0].reference.objectId
    console.log("newOracle: " + newOracle)
    let managerCap = txn.effects.created![1].reference.objectId
    console.log("managerCap: " + managerCap)

    console.log("update oracle...")
    let updateOracleTx: any = await getUpdateOracleTx(DOV_PACKAGE, typeArgument, newOracle, managerCap, price, unix);
    moveCallTxn = await signer.executeMoveCall(updateOracleTx);

    let newOracleObj = await provider.getObject(newOracle)
    console.log("updated oracle:")
    //@ts-ignore
    console.log(newOracleObj.details.data.fields)
})()