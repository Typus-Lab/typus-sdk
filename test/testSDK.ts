import {
  JsonRpcProvider,
  devnetConnection,
  Ed25519Keypair,
  RawSigner,
} from "@mysten/sui.js";
import { TEST_MNEMONIC } from "../constants";
import { getUserStatus } from "../utils/portfolio/helper/getUserStatus";
import { getVaultDataFromRegistry } from "../utils/getVaultData";

const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const provider = new JsonRpcProvider(devnetConnection); //for read only operations
const signer = new RawSigner(keypair, provider);
const packageAddress =
  "0xca767e24d77798642a1a5985824247282b1b11532cd3e77c9d54a394568301d0";
const registry =
  "0xcfeb92f91aabe41c760b408018beaa315cf1bd91a5b22e1182742161fd468548";
const BTC =
  "0x01b9cf11792b0d5f044aad0b02b62ead616dda2449976b9b7b3a29b979beae07";
const typeArgs = [
  "0x29fc31d3927124688cc9abee4431b6dec9611beb4677b4e55cebca58641854b6::sui::SUI",
  "0x29fc31d3927124688cc9abee4431b6dec9611beb4677b4e55cebca58641854b6::sui::SUI",
  "0x29fc31d3927124688cc9abee4431b6dec9611beb4677b4e55cebca58641854b6::sui::SUI",
];

const test = async () => {
  //const data = await getVaultDataFromRegistry(registry, provider);
  const userStatusTx = await getUserStatus(
    packageAddress,
    typeArgs,
    registry,
    "12",
    "0x586f88ab13f90a93c955123c0e6fc2510b8c172a"
  );

  const userStatus = await provider.devInspectTransactionBlock({
    sender: "0x586f88ab13f90a93c955123c0e6fc2510b8c172a",
    transactionBlock: userStatusTx,
  });

  console.log(userStatus);
};

test();
