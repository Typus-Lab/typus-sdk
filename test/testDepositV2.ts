// import { getNewSharkFinVaultTx } from "../utils/getNewSharkFinVaultTx"
// import { getDepositTx } from "../utils/coveredCall/getDepositTx"
// import { SHARKFIN_PACKAGE, SHARKFIN_REGISTRY, TEST_MNEMONIC, TOKEN_REGISTRY } from "../constants"
// import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';
// import { expect } from 'chai';
// import * as assert from "assert";
// const provider = new JsonRpcProvider(TESTNET_RPC_ENDPOINT);//for read only operations
// const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
// const signer = new RawSigner(keypair, provider);

// /*
//     after deposit, token object balance will decrease, and new vault "deposit" in fields will increase
// */

// describe('deposit', async () => {
//     //init
//     let depositAmount = 123;
//     let typeArgument = "0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC" //0x27b3674c685046f66cad1d5496d2967894fa5329:TOKEN_PACKAGE
//     let expiration = 1671344789
//     let bullish = true
//     let lowBarrierPrice = 1
//     let highBarrierPrice = 10
//     let isRolling = true;
//     let token = "0xdb85a3efc1706010fa9530ef3b8a8a5cf4b290b7"

//     console.log("test for deposit, try to deposit " + token + " for " + depositAmount + " ...")

//     it('Check registry', async () => {
//         try {
//             await provider.getObject(SHARKFIN_REGISTRY)
//             assert.ok("Get registry successfully");
//         } catch (e) {
//             assert.fail("Wrong registry")
//         }
//     })

//     it('Create new vault in registry', async () => {
//         try {
//             let newSharkFinVaultTx: any = await getNewSharkFinVaultTx(SHARKFIN_PACKAGE, SHARKFIN_REGISTRY, typeArgument, expiration, bullish, lowBarrierPrice, highBarrierPrice);

//             let moveCallTxn = await signer.executeMoveCall(newSharkFinVaultTx);
//             console.log(moveCallTxn)
//             assert.ok("Create new vault in registry successfully");
//         } catch (e) {
//             assert.fail("Can't create new vault in registry")
//         }
//     })

//     it('Check vault number after create new vault', async () => {
//         try {
//             let registry = await provider.getObject(SHARKFIN_REGISTRY)
//             //@ts-ignore
//             let numOfVaultBeforeCreateVault = registry.details.data.fields.num_of_vault
//             // console.log("numOfVaultBeforeCreateVault: " + numOfVaultBeforeCreateVault)

//             let newSharkFinVaultTx: any = await getNewSharkFinVaultTx(SHARKFIN_PACKAGE, SHARKFIN_REGISTRY, typeArgument, expiration, bullish, lowBarrierPrice, highBarrierPrice);
//             await signer.executeMoveCall(newSharkFinVaultTx);

//             registry = await provider.getObject(SHARKFIN_REGISTRY)
//             //@ts-ignore
//             let numOfVaultAfterCreateVault = registry.details.data.fields.num_of_vault
//             // console.log("numOfVaultAfterCreateVault: " + numOfVaultAfterCreateVault)

//             assert.ok(numOfVaultAfterCreateVault == numOfVaultBeforeCreateVault + 1, "wrong vault number");
//         } catch (e) {
//             assert.fail("Error in check vault number after create new vault")
//         }
//     })

//     it('Deposit to new vault', async () => {

//     })
// })