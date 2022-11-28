import { getMintTx } from "../utils/getMintTx"
import { REGISTRY, PACKAGE_ID, TEST_MNEMONIC } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);
const mintAmount = 10000;
(async () => {
    console.log("test for mint, try to mint " + mintAmount + " ...")

    let mintTx: any = await getMintTx(PACKAGE_ID, REGISTRY, mintAmount);
    // console.log(mintTx)

    //use test wallet to mint test coin by mintTx
    const moveCallTxn = await signer.executeMoveCall(mintTx);
    // console.log('moveCallTxn', moveCallTxn);

    //@ts-ignore
    let digest: string = moveCallTxn.EffectsCert.certificate.transactionDigest
    // console.log("digest: " + digest);
    const txn = await provider.getTransactionWithEffects(
        digest
    );

    //@ts-ignore
    let coinObjectId = txn.effects.sharedObjects[0].objectId
    console.log("coinObjectId " + coinObjectId)

    let coinObj = await provider.getObject(coinObjectId)
    //@ts-ignore
    let coinAmount = coinObj.details.data.fields.supply.fields.value
    console.log("coinAmount: " + coinAmount)
})()