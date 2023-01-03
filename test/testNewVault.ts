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
const token = "0x07f6ef13aa444a793b11675494a8c7fb3b1acab7"// minted token 
let tokenDecimal = 9;
let shareDecimal = 4;
let timeOracle = "";
let period = 1;
let activationTsMs = 1671782400000;
let expirationTsMs = 1671782400000 + 604800000;
let capacity = 1000000000;
let strikeOtmPct = 500;
let decaySpeed = 1;
let initialPrice = 5000;
let finalPrice = 1000;
let auctionDurationInMs = 3600000;
let prevBalance = 0;

(async () => {
    let typeArgument: string = await getTypeArgumentFromToken(token)
    // let priceOracle: string = await createAndUpdatePriceOracle(typeArgument)
    let [timeOracle, _] = await createTimeOracle()

    let newCoveredCallVaultTx = await getNewCoveredCallVaultTx(
        COVERED_CALL_PACKAGE,
        COVERED_CALL_REGISTRY,
        typeArgument,
        COVERED_CALL_MANAGER,
        timeOracle,
        period,
        activationTsMs,
        expirationTsMs,
        tokenDecimal,
        shareDecimal,
        capacity,
        strikeOtmPct,
        decaySpeed,
        initialPrice,
        finalPrice,
        auctionDurationInMs,
        prevBalance,
    );
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