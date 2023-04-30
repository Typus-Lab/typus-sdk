import { Connection, Ed25519Keypair, JsonRpcProvider, RawSigner } from "@mysten/sui.js";
import { rpcClient } from "typed-rpc";
import { PORTFOLIO_PACKAGE, REGISTRY } from "../constants";
import { getDepositTx } from "../utils/portfolio/single-collateral/user-entry";

// The initiator of the transaction
const SENDER_ADDRESS = "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9";
const SENDER_RECOVERY_PHRASE = "";

// gas budget, in MIST
const GAS_BUDGET = 10000000;

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
const progTxnMoveCall = async () => {
    let typeArguments = [
        "0xd175cff04f1d49574efb6f138bc3b9b7313915a57b5ca04141fb1cb4f66984b2::eth::ETH",
        "0xd175cff04f1d49574efb6f138bc3b9b7313915a57b5ca04141fb1cb4f66984b2::eth::ETH",
        "0xd175cff04f1d49574efb6f138bc3b9b7313915a57b5ca04141fb1cb4f66984b2::eth::ETH",
    ];
    let vaultIndex = "1";
    let coins = ["0x490c9ea233152eeb5d4c6285fb4b94a28110b783670e38ac0f00d7d719972410"];
    let depositAmount = "100000000";
    let transactionBlock = await getDepositTx(GAS_BUDGET, PORTFOLIO_PACKAGE, typeArguments, REGISTRY, vaultIndex, coins, depositAmount);
    return transactionBlock;
};

const sponsorTransactionE2E = async () => {
    // get the gasless TransactionBlock for the desired programmable transaction
    const gaslessTxb = await progTxnMoveCall();

    // generate the bcs serialized transaction data without any gas object data
    const gaslessPayloadBytes = await gaslessTxb.build({ provider: suiProvider, onlyTransactionKind: true });

    // convert the byte array to a base64 encoded string to return
    const gaslessPayloadBase64 = btoa(gaslessPayloadBytes.reduce((data, byte) => data + String.fromCharCode(byte), ""));
    // console.log("PAYLOAD", gaslessPayloadBase64);

    // Send the gasless programmable payload to Shinami Gas Station for sponsorship
    const sponsoredResponse = await sponsor.gas_sponsorTransactionBlock(gaslessPayloadBase64, SENDER_ADDRESS, GAS_BUDGET);
    // console.log("SIG: ", sponsoredResponse.signature);
    // console.log("TXBYTES: ", sponsoredResponse.txBytes);
    // console.log("DIGEST: ", sponsoredResponse.txDigest);

    // The transaction should be sponsored now, so its status will be "IN_FLIGHT"
    const sponsoredStatus = await sponsor.gas_getSponsoredTransactionBlockStatus(sponsoredResponse.txDigest);
    console.log("Sponsorship Status:", sponsoredStatus);

    // The sponsoredReponse will contain the full transaction payload and the signature of the gas object owner. To send it off for execution,
    // the full transaction payload still needs to be signed by the sender of the transaction.

    let transactionBlock = Uint8Array.from(atob(sponsoredResponse.txBytes), (c) => c.charCodeAt(0));

    // Sign the full transaction payload with the sender's key.
    const senderSig = await signer.signTransactionBlock({ transactionBlock });

    // Send the full transaction payload, along with the gas owner and sender's signatures for execution on the sui network
    const executeResponse = await suiProvider.executeTransactionBlock({
        transactionBlock: sponsoredResponse.txBytes,
        signature: [senderSig.signature, sponsoredResponse.signature],
        options: { showEffects: true },
        requestType: "WaitForLocalExecution",
    });
    console.log("Execution Status:", executeResponse.effects?.status.status);
};

const normalTransactionE2E = async () => {
    const transactionBlock = await progTxnMoveCall();
    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
};

sponsorTransactionE2E();
// normalTransactionE2E();
