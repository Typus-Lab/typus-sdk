import { getDepositTx } from "../utils/coveredCall/getDepositTx"
import { TEST_MNEMONIC, COVERED_CALL_PACKAGE, REGISTRY, TEST_MINT_TOKEN, TESTNET_RPC_ENDPOINT } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { getTypeArgumentFromToken } from "../utils/getTypeArgumentFromToken"
const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

/*
    after deposit, token object (minted token) balance will decrease,
    and subVault "rolling_sub_vault" will increase
*/

(async () => {
    let depositAmount = "100000000";
    let isRolling = true;
    let token = TEST_MINT_TOKEN
    let vaultIndex = "0";

    let typeArgument = await getTypeArgumentFromToken(token, provider)

    console.log("test for deposit, try to deposit " + token + " for " + depositAmount + " ...")
    let gasBudget = 100000
    let depositTx: any = await getDepositTx(
        gasBudget, COVERED_CALL_PACKAGE, REGISTRY, typeArgument, vaultIndex, token, depositAmount);
    await signer.executeMoveCall(depositTx);
    console.log("deposit to vault successfully")
})()
