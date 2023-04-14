import { getMintTx } from "../../utils/portfolio/single-collateral/getMintTx";
import {
  TOKEN_PACKAGE,
  TOKEN_REGISTRY_SUI,
  TEST_MNEMONIC,
  TOKEN_NAME,
  TOKEN_NAME_TO_MODULE,
} from "../../constants";
import {
  JsonRpcProvider,
  Ed25519Keypair,
  RawSigner,
  devnetConnection,
} from "@mysten/sui.js";

const provider = new JsonRpcProvider(devnetConnection); //for read only operations
const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const signer = new RawSigner(keypair, provider);
const mintAmount = 1000500000;

(async () => {
  let tokenRegistry = TOKEN_REGISTRY_SUI;
  let moduleName: string = await prepareData(tokenRegistry);
  let gasBudget = 100000;
  let mintTx = await getMintTx(
    gasBudget,
    TOKEN_PACKAGE,
    tokenRegistry,
    moduleName,
    mintAmount
  );
  let moveCallTxn = await signer.signAndExecuteTransactionBlock({
    transactionBlock: mintTx,
  });

  await checkData(moveCallTxn, tokenRegistry);
})();

async function prepareData(tokenRegistry: string) {
  try {
    console.log("test for mint, try to mint " + mintAmount + " ...");

    let obj = await provider.getObject({ id: tokenRegistry });
    if (obj.error != undefined) {
      console.log("obj not exists");
      return;
    }
    //@ts-ignore
    let type: string =
      //@ts-ignore
      obj.details.data.fields.treasury_cap.fields.total_supply.type;
    console.log("type arugment : " + type);
    let tokenName: string | undefined = TOKEN_NAME.find((e) =>
      type.includes(e)
    );
    if (!tokenName) {
      console.log("can't find token in type: " + type);
      return;
    }
    let moudleName = TOKEN_NAME_TO_MODULE[tokenName];

    //@ts-ignore
    console.log(
      "Before: total mint fake " +
      tokenName +
      " token in the registry: " +
      //@ts-ignore
      obj.details.data.fields.treasury_cap.fields.total_supply.fields.value
    );
    return moudleName;
  } catch (e) {
    console.error(e);
  }
}

async function checkData(moveCallTxn, tokenRegistry: string) {
  try {
    //@ts-ignore
    let digest: string = moveCallTxn.EffectsCert.certificate.transactionDigest;
    // console.log("digest: " + digest);
    let txn = await provider.getTransactionBlock({ digest });

    //@ts-ignore
    let tokenObjectId = txn.effects.created[0].reference.objectId;

    let tokenObj = await provider.getObject({ id: tokenObjectId });
    //@ts-ignore
    let newTokenId = tokenObj.details.data.fields.id.id;
    console.log("newTokenId: " + newTokenId);

    let obj = await provider.getObject({ id: tokenRegistry });
    //@ts-ignore
    console.log(
      "After: total mint in the registry: " +
      //@ts-ignore
      obj.details.data.fields.treasury_cap.fields.total_supply.fields.value
    );
  } catch (e) {
    console.error(e);
  }
}
