
import { getNewTimeOracleTx } from "../getNewTimeOracleTx"

import { TEST_MNEMONIC, ORACLE_PACKAGE, TESTNET_RPC_ENDPOINT } from "../../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

export async function createTimeOracle(): Promise<[string, string]> {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("create new time oracle...")
            let gasBudget = "100000"
            let newTimeOracleTx: any = await getNewTimeOracleTx(
                gasBudget, ORACLE_PACKAGE);
            let moveCallTxn = await signer.executeMoveCall(newTimeOracleTx);
            //@ts-ignore
            let digest: string = moveCallTxn.EffectsCert.certificate.transactionDigest

            let txn = await provider.getTransactionWithEffects(
                digest
            );

            let timeOracle: string;
            let managerCap: string;
            if (txn.effects.created![0].owner["AddressOwner"] == undefined) {
                timeOracle = txn.effects.created![0].reference.objectId
                managerCap = txn.effects.created![1].reference.objectId
            } else {
                timeOracle = txn.effects.created![1].reference.objectId
                managerCap = txn.effects.created![0].reference.objectId
            }
            resolve([timeOracle, managerCap])
        } catch (e) {
            console.log("err in createTimeOracle")
            reject(e)
        }
    })

}