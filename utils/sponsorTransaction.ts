import { rpcClient } from "typed-rpc";

// Setup for issuing json rpc calls to the gas station for sponsorship. We use typed-rpc typescript lib here.
interface SponsoredTransaction {
    txBytes: string;
    txDigest: string;
    signature: string;
    expireAtTime: number;
    expireAfterEpoch: number;
}
type SponsoredTransactionStatus = "IN_FLIGHT" | "COMPLETE" | "INVALID";

export const sponsorRpcClient = (sponserRpcUrl) => rpcClient<SponsorRpc>(sponserRpcUrl);

export interface SponsorRpc {
    gas_sponsorTransactionBlock(txBytes: string, sender: string, gasBudget: number): SponsoredTransaction;
    gas_getSponsoredTransactionBlockStatus(txDigest: string): SponsoredTransactionStatus;
}

export const sponsorTransactionE2E = async (gaslessTxb, sponsor, provider, signer, gasBudget) => {
    // generate the bcs serialized transaction data without any gas object data
    const gaslessPayloadBytes = await gaslessTxb.build({ provider: provider, onlyTransactionKind: true });

    // convert the byte array to a base64 encoded string to return
    const gaslessPayloadBase64 = btoa(gaslessPayloadBytes.reduce((data, byte) => data + String.fromCharCode(byte), ""));

    // Send the gasless programmable payload to Shinami Gas Station for sponsorship
    const sponsoredResponse = await sponsor.gas_sponsorTransactionBlock(gaslessPayloadBase64, await signer.getAddress(), gasBudget);

    // The transaction should be sponsored now, so its status will be "IN_FLIGHT"
    const sponsoredStatus = await sponsor.gas_getSponsoredTransactionBlockStatus(sponsoredResponse.txDigest);
    console.log("Sponsorship Status:", sponsoredStatus);

    // The sponsoredReponse will contain the full transaction payload and the signature of the gas object owner. To send it off for execution,
    // the full transaction payload still needs to be signed by the sender of the transaction.

    let transactionBlock = Uint8Array.from(atob(sponsoredResponse.txBytes), (c) => c.charCodeAt(0));

    // Sign the full transaction payload with the sender's key.
    const senderSig = await signer.signTransactionBlock({ transactionBlock });

    // Send the full transaction payload, along with the gas owner and sender's signatures for execution on the sui network
    const executeResponse = await provider.executeTransactionBlock({
        transactionBlock: sponsoredResponse.txBytes,
        signature: [senderSig.signature, sponsoredResponse.signature],
        options: { showEffects: true },
        requestType: "WaitForLocalExecution",
    });
    console.log("Execution Status:", executeResponse.effects?.status.status);
};
