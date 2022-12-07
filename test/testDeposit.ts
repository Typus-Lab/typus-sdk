// import { getNewSharkFinVaultTx } from "../utils/getNewSharkFinVaultTx"
// import { getDepositTx } from "../utils/coveredCall/getDepositTx"
// import { SHARKFIN_PACKAGE, SHARKFIN_REGISTRY, TEST_MNEMONIC, TOKEN_REGISTRY } from "../constants"
// import { JsonRpcProvider, Ed25519Keypair, RawSigner, Network } from '@mysten/sui.js';

// const provider = new JsonRpcProvider(Network.DEVNET);//for read only operations
// const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
// const signer = new RawSigner(keypair, provider);

// /*
//     after deposit, token object balance will decrease, and new vault "deposit" in fields will increase
// */

// (async () => {
//     let depositAmount = 123;
//     let typeArgument = "0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC" //0x27b3674c685046f66cad1d5496d2967894fa5329:TOKEN_PACKAGE
//     let expiration = 1671344789
//     let bullish = true
//     let lowBarrierPrice = 1
//     let highBarrierPrice = 10
//     let isRolling = true;
//     let token = "0xdb85a3efc1706010fa9530ef3b8a8a5cf4b290b7"

//     console.log("test for deposit, try to deposit " + token + " for " + depositAmount + " ...")

//     let registry = await provider.getObject(SHARKFIN_REGISTRY)
//     //@ts-ignore
//     let numOfVaultBeforeCreateVault = registry.details.data.fields.num_of_vault
//     console.log("numOfVaultBeforeCreateVault: " + numOfVaultBeforeCreateVault)

//     let newSharkFinVaultTx: any = await getNewSharkFinVaultTx(SHARKFIN_PACKAGE, SHARKFIN_REGISTRY, typeArgument, expiration, bullish, lowBarrierPrice, highBarrierPrice);
//     let moveCallTxn = await signer.executeMoveCall(newSharkFinVaultTx);

//     let txn = await provider.getTransactionWithEffects(
//         //@ts-ignore
//         moveCallTxn.EffectsCert.certificate.transactionDigest
//     );
//     let newVault = txn.effects.created![0].reference.objectId

//     console.log("create new vault " + newVault + " for token successfully")

//     registry = await provider.getObject(SHARKFIN_REGISTRY)
//     //@ts-ignore
//     let numOfVaultAfterCreateVault = registry.details.data.fields.num_of_vault
//     console.log("numOfVaultAfterCreateVault: " + numOfVaultAfterCreateVault)

//     let vaultIndex = numOfVaultAfterCreateVault - 1

//     let depositTx: any = await getDepositTx(SHARKFIN_PACKAGE, SHARKFIN_REGISTRY, typeArgument, vaultIndex, isRolling, token, depositAmount);
//     moveCallTxn = await signer.executeMoveCall(depositTx);
//     console.log("deposit to new vault successfully")
// })()