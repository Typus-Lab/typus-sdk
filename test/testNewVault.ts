import { getNewOracleTx } from "../utils/getNewOracleTx"
import { getUpdateOracleTx } from "../utils/getUpdateOracleTx"
import { getNewCoveredCallVaultTx } from "../utils/coveredCall/getNewCoveredCallVaultTx";
import { createTimeOracle } from "../utils/coveredCall/createTimeOracle"
import { COVERED_CALL_MANAGER, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, TEST_MNEMONIC, ORACLE_PACKAGE, DEFAULT_TYPE_ARGUMENT } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { getTypeArgumentFromToken } from "../utils/getTypeArgumentFromToken"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);
const token = "0x686be0d0337df87267ff147c9b6c45b2b8e96976"// minted token 
const expiration = 1;
const strike = 105
const price = 98;
const unix = 10000000;
const tokenDecimal = 9;
const shareDecimal = 4;

(async () => {
    let typeArgument: string = await getTypeArgumentFromToken(token)
    // let priceOracle: string = await createAndUpdatePriceOracle(typeArgument)
    let [timeOracle, _] = await createTimeOracle()

    let newCoveredCallVaultTx = await getNewCoveredCallVaultTx(
        COVERED_CALL_PACKAGE,
        COVERED_CALL_REGISTRY,
        typeArgument,
        COVERED_CALL_MANAGER,
        tokenDecimal,
        shareDecimal,
        timeOracle,
        expiration,
        strike,
    )
    let moveCallTxn = await signer.executeMoveCall(newCoveredCallVaultTx);

    await checkData(moveCallTxn)
})()

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