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

const test = async () => {
  const data = await getWhiteListFromRegistry(registry, provider);
  console.log(data);
};

test();
