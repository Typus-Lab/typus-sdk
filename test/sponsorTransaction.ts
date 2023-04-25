import { Connection, Ed25519Keypair, JsonRpcProvider, RawSigner, TransactionBlock } from "@mysten/sui.js";
import { rpcClient } from "typed-rpc";
import { MODULE, PORTFOLIO_PACKAGE, REGISTRY, TEST_MNEMONIC } from "../constants";
import { getDepositTx } from "../utils/portfolio/single-collateral/user/getDepositTx";

// The initiator of the transaction
const SENDER_ADDRESS = "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9";
const SENDER_RECOVERY_PHRASE = TEST_MNEMONIC;

// gas budget, in MIST
const GAS_BUDGET = 5000000;

// Gas Station endpoint:
const SPONSOR_RPC_URL = "https://api.shinami.com/gas/v1/sui_testnet_17aa4c66d7a325601abde1f043793003";

// Sui Node endpoint:
const connection = new Connection({
  fullnode: "https://node.shinami.com:443/api/v1/sui_testnet_c702de54dad05016124f2cfabc1de7e8",
});
const suiProvider = new JsonRpcProvider(connection);

// Create the sender's address key pair from the recovery phrase
const keyPair = Ed25519Keypair.deriveKeypair(SENDER_RECOVERY_PHRASE);

// Create the sender's address key pair from the sender's private key
// const buf = Buffer.from(SENDER_PRIVATE_KEY, "base64");
// const keyPair = Ed25519Keypair.fromSecretKey(buf.slice(1));

// Create a signer for the sender's keypair
const signer = new RawSigner(keyPair, suiProvider);

// Setup for issuing json rpc calls to the gas station for sponsorship. We use typed-rpc typescript lib here.
interface SponsoredTransaction {
  txBytes: string;
  txDigest: string;
  signature: string;
  expireAtTime: number;
  expireAfterEpoch: number;
}
type SponsoredTransactionStatus = "IN_FLIGHT" | "COMPLETE" | "INVALID";

interface SponsorRpc {
  gas_sponsorTransactionBlock(txBytes: string, sender: string, gasBudget: number): SponsoredTransaction;
  gas_getSponsoredTransactionBlockStatus(txDigest: string): SponsoredTransactionStatus;
}
const sponsor = rpcClient<SponsorRpc>(SPONSOR_RPC_URL);

// Different examples of programmable transaction blocks that can be crafted.
const progTxnTransfer = async () => {
  let gasBudget = 100000000;
  let typeArguments = [
    "0xd175cff04f1d49574efb6f138bc3b9b7313915a57b5ca04141fb1cb4f66984b2::eth::ETH",
    "0xd175cff04f1d49574efb6f138bc3b9b7313915a57b5ca04141fb1cb4f66984b2::eth::ETH",
    "0xd175cff04f1d49574efb6f138bc3b9b7313915a57b5ca04141fb1cb4f66984b2::eth::ETH",
  ];
  let vaultIndex = "4";
  let coins = [
    "0x07bb1b0bd176a5e9e0377758282bd0eb27070f2684a88a2cf57964fb4da11c0d",
    "0x2a908b66b02c450fefbede9ef02672dc2291163284e59fd90841a6024bf3aa82",
    "0x99711f3c9a87b3ba9c9a61a6dbb4022f24799a8814c419f106cedc2c2f7b70b1",
    "0xad5ae185437c4ef43d571e7efd188a849e6b5bf49cbd810e90b775458a8495e6",
    "0xb9c0ef30cf9729d6ad54d3a17b524010d494eb5c16fa9b4d4859998dde485282",
    "0xcbc37498f1be79ef68f8a01e025dfa7c83203c9e50f8eebef8b7108cacba1691",
    "0xd162905fccb0332a99b5f5f00172a11d1e5c3e7feb9590165b02e19e5f7ba8b5",
    "0xdd489edccfba1f64d02fd693c22d5faa069d6d3bb65b33b24e5a5d12f99dadce",
    "0xf5426d21d861dc22aef1b78cb7ade67793ff1caa2d2004324954855c203a48bc",
  ];
  let depositAmount = "100000000";
  let transactionBlock = await getDepositTx(gasBudget, PORTFOLIO_PACKAGE, MODULE, REGISTRY, typeArguments, vaultIndex, coins, depositAmount);
  return transactionBlock;
};

const sponsorTransactionE2E = async () => {
  // get the gasless TransactionBlock for the desired programmable transaction
  const gaslessTxb = progTxnTransfer();

  // generate the bcs serialized transaction data without any gas object data
  const gaslessPayloadBytes = await (await gaslessTxb).build({ provider: suiProvider, onlyTransactionKind: true });

  // convert the byte array to a base64 encoded string to return
  const gaslessPayloadBase64 = btoa(gaslessPayloadBytes.reduce((data, byte) => data + String.fromCharCode(byte), ""));

  // Send the gasless programmable payload to Shinami Gas Station for sponsorship
  const sponsoredResponse = await sponsor.gas_sponsorTransactionBlock(gaslessPayloadBase64, SENDER_ADDRESS, GAS_BUDGET);

  // The transaction should be sponsored now, so its status will be "IN_FLIGHT"
  const sponsoredStatus = await sponsor.gas_getSponsoredTransactionBlockStatus(sponsoredResponse.txDigest);
  console.log("Sponsorship Status:", sponsoredStatus);

  // The sponsoredReponse will contain the full transaction payload and the signature of the gas object owner. To send it off for execution,
  // the full transaction payload still needs to be signed by the sender of the transaction.

  // Sign the full transaction payload with the sender's key.
  const senderSig = await signer.signTransactionBlock({ transactionBlock: TransactionBlock.from(sponsoredResponse.txBytes) });

  // Send the full transaction payload, along with the gas owner and sender's signatures for execution on the sui network
  const executeResponse = await suiProvider.executeTransactionBlock({
    transactionBlock: sponsoredResponse.txBytes,
    signature: [senderSig.signature, sponsoredResponse.signature],
    options: { showEffects: true },
    requestType: "WaitForLocalExecution",
  });
  console.log("Execution Status:", executeResponse.effects?.status.status);
};

sponsorTransactionE2E();
