import { getDepositTx } from "../utils/coveredCall/getDepositTx"
import { TEST_MNEMONIC, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { getTypeArgumentFromToken } from "../utils/getTypeArgumentFromToken"
import { getUnsubscribeTx } from "../utils/coveredCall/getUnsubscribeTx";
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

/*
   after unsubscribe, the subvault (is deposited) "balance" in fields will be 0,
   and a regular linked list node will be created if not exist, and the value increase.

   EX: 
   subvault balance:1234, regular linked list node value:1000
   after unsubscribe
   subvault balance:0, regular linked list node value:2234
*/

(async () => {
    let depositAmount = "123";
    let isRolling = true;
    let token = "0xaa8f8ccf372b461e5b8778b250bf13d9b1013174"// minted token 
    let vaultIndex = "3";
    let share = "0"

    let typeArgument = await getTypeArgumentFromToken(token)

    let depositTx: any = await getDepositTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, vaultIndex, isRolling, token, depositAmount);
    await signer.executeMoveCall(depositTx);
    console.log("deposit " + depositAmount + " to new vault successfully")

    let unSubscribedTx: any = await getUnsubscribeTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, vaultIndex, share)
    await signer.executeMoveCall(unSubscribedTx);
    console.log("unsubscribe successfully")
})()
