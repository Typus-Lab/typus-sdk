import { getNewOracleTx } from "../../utils/getNewOracleTx"
import { TEST_MNEMONIC, ORACLE_PACKAGE } from "../../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

const decimal = 8;

export async function createPriceOracle(typeArgument: string): Promise<[string, string]> {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("create new price oracle...")
            let newOracleTx: any = await getNewOracleTx(ORACLE_PACKAGE, typeArgument, decimal);
            let moveCallTxn = await signer.executeMoveCall(newOracleTx);
            //@ts-ignore
            let digest: string = moveCallTxn.EffectsCert.certificate.transactionDigest

            let txn = await provider.getTransactionWithEffects(
                digest
            );

            let priceOracle: string;
            let managerCap: string;
            if (txn.effects.created![0].owner["AddressOwner"] == undefined) {
                priceOracle = txn.effects.created![0].reference.objectId
                managerCap = txn.effects.created![1].reference.objectId
            } else {
                priceOracle = txn.effects.created![1].reference.objectId
                managerCap = txn.effects.created![0].reference.objectId
            }

            resolve([priceOracle, managerCap])
        } catch (e) {
            console.error("err in createPriceOracle")
            reject(e)
        }
    })
}