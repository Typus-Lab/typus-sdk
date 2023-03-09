import { getClaimTx } from "../utils/coveredCall/getClaimTx"
import { getClaimAllTx } from "../utils/coveredCall/getClaimAllTx";
import { TEST_MNEMONIC, COVERED_CALL_PACKAGE, REGISTRY, TESTNET_RPC_ENDPOINT } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { getTypeArgumentFromToken } from "../utils/getTypeArgumentFromToken"
const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

/*
    after claim,
*/

(async () => {
    let claimAmount = 13;
    let isRolling = true;
    let token = "0x8f306b0fcbcbdee0b3a5e694c06039dfe8ca7f14"// minted token
    let vaultIndex = ["59"];

    let typeArgument = await getTypeArgumentFromToken(token, provider)

    console.log("test for claim, try to claim " + token + " for " + claimAmount + " ...")

    let gasBudget = 100000;
    let claimTx: any = await getClaimTx(
        gasBudget, COVERED_CALL_PACKAGE, REGISTRY, typeArgument, vaultIndex[0]);
    await signer.executeMoveCall(claimTx);
    console.log("claim successfully")

    let claimAllTx: any = await getClaimAllTx(
        gasBudget, COVERED_CALL_PACKAGE, REGISTRY, typeArgument, vaultIndex);
    await signer.executeMoveCall(claimAllTx);
    console.log("claim all successfully")
})()
