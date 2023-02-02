import { getWithdrawTx } from "../utils/coveredCall/getWithdrawTx"
import { TEST_MNEMONIC, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, TESTNET_RPC_ENDPOINT } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { getTypeArgumentFromToken } from "../utils/getTypeArgumentFromToken"
const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);


(async () => {
    let withdrawAmount = 12;
    //================================ refer to testDeposit ================================
    let isRolling = true;
    let token = "0x82416a9dacea43afa6570863f1bcd3e55e75448e"// minted token 
    let vaultIndex = 0;
    //======================================================================================

    let typeArgument = await getTypeArgumentFromToken(token, provider)

    console.log("test for withdraw, try to withdraw " + token + " for " + withdrawAmount + " ...")

    let withdrawTx = await getWithdrawTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, vaultIndex.toString(), withdrawAmount.toString());
    await signer.executeMoveCall(withdrawTx);
    console.log("withdraw to vault successfully")
})()
