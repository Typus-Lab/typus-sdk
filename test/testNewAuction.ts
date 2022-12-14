import { getNewAuctionTx } from "../utils/coveredCall/getNewAuctionTx"
import { getNewAuctionWithNextCoveredCallVaultTx } from "../utils/coveredCall/getNewAuctionWithNextCoveredCallVaultTx"
import { COVERED_CALL_MANAGER, COVERED_CALL_PACKAGE, COVERED_CALL_REGISTRY, TEST_MNEMONIC, TEST_MINT_TOKEN } from "../constants"
import { getTypeArgumentFromToken } from "../utils/getTypeArgumentFromToken"
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
import { createPriceOracle } from "../utils/coveredCall/createPriceOracle"
import { createTimeOracle } from "../utils/coveredCall/createTimeOracle"
const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);
(async () => {
    let token = TEST_MINT_TOKEN// minted token 
    let typeArgument: string = await getTypeArgumentFromToken(token)
    let vaultIndex = 0;
    let [priceOracle, priceOracleManager] = await createPriceOracle(typeArgument)
    let [timeOracle, timeOracleManager] = await createTimeOracle()
    let activationTsMs = 1671992000000
    let expirationTsMs = 1
    let newAuctionTx: any = await getNewAuctionTx(
        COVERED_CALL_PACKAGE,
        COVERED_CALL_REGISTRY,
        typeArgument,
        COVERED_CALL_MANAGER,
        vaultIndex.toString(),
        priceOracle,
        timeOracle
    );
    // let newAuctionTx: any = await getNewAuctionWithNextCoveredCallVaultTx(
    //     COVERED_CALL_PACKAGE,
    //     COVERED_CALL_MANAGER,
    //     COVERED_CALL_REGISTRY,
    //     typeArgument,
    //     vaultIndex,
    //     priceOracle,
    //     timeOracle,
    //     activationTsMs,
    //     expirationTsMs,
    // );
    let a = await signer.executeMoveCall(newAuctionTx);
    console.log(a)
})()