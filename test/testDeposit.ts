import { getDepositTx } from "../utils/getDepositTx"
import { REGISTRY, PACKAGE_ID, TEST_MNEMONIC } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);
const depositAmount = 10000;
(async () => {
    console.log("test for deposit, try to deposit " + depositAmount + " ...")

    let isRolling = true;
    let coin = "0x7e200466dc7fee2303d8b19c8b311c6471999f61"
    let amount = 9999;

    // //change coin type to 0x2::coin::Coin<T0>
    // let tmpObj = await provider.getObject(coin)
    // //@ts-ignore
    // let type = tmpObj.details.data.type
    // const expectedType = `0x2::coin::Coin<${type}>`;
    // console.log(expectedType)

    let depositTx: any = await getDepositTx(PACKAGE_ID, REGISTRY, isRolling, coin, amount);
    console.log(depositTx)

    // //use test wallet to mint test coin by mintTx
    // const moveCallTxn = await signer.executeMoveCall(depositTx);
    // console.log('moveCallTxn', moveCallTxn);

    // //@ts-ignore
    // let digest: string = moveCallTxn.EffectsCert.certificate.transactionDigest
    // // console.log("digest: " + digest);
    // const txn = await provider.getTransactionWithEffects(
    //     digest
    // );

    // //@ts-ignore
    // let coinObjectId = txn.effects.sharedObjects[0].objectId
    // console.log("coinObjectId " + coinObjectId)

    // let coinObj = await provider.getObject(coinObjectId)
    // //@ts-ignore
    // let coinAmount = coinObj.details.data.fields.supply.fields.value
    // console.log("coinAmount: " + coinAmount)
})()