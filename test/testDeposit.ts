import { getDepositTx } from "../utils/coveredCall/getDepositTx"
import { TEST_MNEMONIC, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { getTypeArgumentFromToken } from "../utils/getTypeArgumentFromToken"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

/*
    after deposit, token object balance will decrease, and new vault "deposit" in fields will increase
*/

(async () => {
    let depositAmount = 123;
    let isRolling = true;
    let token = "0xaa8f8ccf372b461e5b8778b250bf13d9b1013174"// minted token 
    let vaultIndex = 3;

    let typeArgument = await getTypeArgumentFromToken(token)

    console.log("test for deposit, try to deposit " + token + " for " + depositAmount + " ...")

    let depositTx: any = await getDepositTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, vaultIndex, isRolling, token, depositAmount);
    await signer.executeMoveCall(depositTx);
    console.log("deposit to new vault successfully")
})()
