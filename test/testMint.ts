import { getMintTx } from "../utils/getMintTx"
import { TOKEN_PACKAGE, TOKEN_REGISTRY, TEST_MNEMONIC, TOKEN_NAME, TOKEN_NAME_TO_MODULE } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);
const mintAmount = 10005;
(async () => {
    console.log("test for mint, try to mint " + mintAmount + " ...")

    let obj = await provider.getObject(TOKEN_REGISTRY);

    //@ts-ignore
    let type: string = obj.details.data.fields.treasury_cap.fields.total_supply.type
    let tokenName: string | undefined = TOKEN_NAME.find(e => type.includes(e))
    if (!tokenName) {
        console.log("can't find token in type: " + type)
        return
    }
    let moudleName = TOKEN_NAME_TO_MODULE[tokenName]

    //@ts-ignore
    console.log("Before: total mint fake " + tokenName + " token in the registry: " + obj.details.data.fields.treasury_cap.fields.total_supply.fields.value)

    let mintTx: any = await getMintTx(TOKEN_PACKAGE, TOKEN_REGISTRY, moudleName, mintAmount);

    let moveCallTxn = await signer.executeMoveCall(mintTx);

    //@ts-ignore
    let digest: string = moveCallTxn.EffectsCert.certificate.transactionDigest
    // console.log("digest: " + digest);

    let txn = await provider.getTransactionWithEffects(
        digest
    );

    //@ts-ignore
    let tokenObjectId = txn.effects.created[0].reference.objectId

    let tokenObj = await provider.getObject(tokenObjectId)
    //@ts-ignore
    let newTokenId = tokenObj.details.data.fields.id.id
    console.log("newTokenId: " + newTokenId)

    obj = await provider.getObject(TOKEN_REGISTRY);
    //@ts-ignore
    console.log("After: total mint fake " + tokenName + " token in the registry: " + obj.details.data.fields.treasury_cap.fields.total_supply.fields.value)
})()