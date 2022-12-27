import { getDepositTx } from "../utils/coveredCall/getDepositTx"
import { TEST_MNEMONIC, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { getTypeArgumentFromToken } from "../utils/getTypeArgumentFromToken"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

/*
    after deposit, token object (minted token) balance will decrease, 
    and subVault "balance" in fields will increase,
    and a new rolling linked list node will be created if not exist, and the value will increase the same value
*/

(async () => {
    let depositAmount = 10000;
    let isRolling = true;
    let token = "0xa14d4429a88bc9a11568e02399be36abb7387ff9"// minted token 
    let vaultIndex = 0;

    let typeArgument = await getTypeArgumentFromToken(token)

    console.log("test for deposit, try to deposit " + token + " for " + depositAmount + " ...")

    let depositTx: any = await getDepositTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, vaultIndex, isRolling, token, depositAmount);
    await signer.executeMoveCall(depositTx);
    console.log("deposit to vault successfully")
})()
