import { getMintTx } from "../utils/getMintTx"
import { getCreateTokenRegistryTx } from "../utils/getCreateTokenRegistryTx"
import { TOKEN_PACKAGE, TEST_MNEMONIC } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);
const mintAmount = 10005;
(async () => {
    console.log("test for mint, try to mint " + mintAmount + " ...")

    console.log("create registry in pakcage:")
    let createTokenRegistryTx: any = await getCreateTokenRegistryTx(TOKEN_PACKAGE);

    //use test wallet to create token registry
    let moveCallTxn = await signer.executeMoveCall(createTokenRegistryTx);

    //@ts-ignore
    let digest: string = moveCallTxn.EffectsCert.certificate.transactionDigest

    let txn = await provider.getTransactionWithEffects(
        digest
    );

    // @ts-ignore
    let newRegistry = txn.effects.created![0].reference.objectId

    console.log("new registry for mint token: " + newRegistry)

    let mintTx: any = await getMintTx(TOKEN_PACKAGE, newRegistry, mintAmount);

    moveCallTxn = await signer.executeMoveCall(mintTx);

    //@ts-ignore
    let digest: string = moveCallTxn.EffectsCert.certificate.transactionDigest
    // console.log("digest: " + digest);

    txn = await provider.getTransactionWithEffects(
        digest
    );

    //@ts-ignore
    let tokenObjectId = txn.effects.created[0].reference.objectId

    let tokenObj = await provider.getObject(tokenObjectId)
    //@ts-ignore
    let newTokenId = tokenObj.details.data.fields.id.id
    console.log("newTokenId: " + newTokenId)
    //@ts-ignore
    let tokenAmount = tokenObj.details.data.fields.balance
    console.log("tokenAmount: " + tokenAmount)
})()