import {
  JsonRpcProvider,
  Ed25519Keypair,
  RawSigner,
  devnetConnection,
} from "@mysten/sui.js";
import { getWhiteListFromRegistry } from "../utils/getWhiteListFromRegistry";

const provider = new JsonRpcProvider(devnetConnection); //for read only operations
const registry =
  "0xcfeb92f91aabe41c760b408018beaa315cf1bd91a5b22e1182742161fd468548";
const BTC =
  "0x01b9cf11792b0d5f044aad0b02b62ead616dda2449976b9b7b3a29b979beae07";

const test = async () => {
  const tokenInfo = await provider.getObject({
    id: BTC,
    options: { showContent: true },
  });

  if (tokenInfo.error !== undefined) {
    console.log("obj not exists, but is:");
    console.log(tokenInfo.error.tag);
    return;
  }
  1;
  console.log(tokenInfo);

  //@ts-ignore
  let typeArgument: string = tokenInfo.data.content.type;
  console.log(typeArgument);
  typeArgument = typeArgument.split("<")[1];
  typeArgument = typeArgument.split(">")[0];
  console.log(typeArgument);
};

test();
