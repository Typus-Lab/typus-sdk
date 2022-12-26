import { getClaimTx } from "../utils/coveredCall/getClaimTx"
import { getClaimAllTx } from "../utils/coveredCall/getClaimAllTx";
import { TEST_MNEMONIC, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY } from "../constants"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { getTypeArgumentFromToken } from "../utils/getTypeArgumentFromToken"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);

/*
    after claim,
*/

(async () => {
    let claimAmount = 13;
    let isRolling = true;
    let token = "0x8f306b0fcbcbdee0b3a5e694c06039dfe8ca7f14"// minted token 
    let vaultIndex = 59;

    let typeArgument = await getTypeArgumentFromToken(token)

    console.log("test for claim, try to claim " + token + " for " + claimAmount + " ...")

    let claimTx: any = await getClaimTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, vaultIndex, claimAmount, isRolling);
    await signer.executeMoveCall(claimTx);
    console.log("claim successfully")

    let claimAllTx: any = await getClaimAllTx(COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, typeArgument, vaultIndex, isRolling);
    await signer.executeMoveCall(claimAllTx);
    console.log("claim all successfully")
})()
