import { rpcClient } from "typed-rpc";

// Setup for issuing json rpc calls to the gas station for sponsorship. We use typed-rpc typescript lib here.
export interface SponsoredTransaction {
    txBytes: string;
    txDigest: string;
    signature: string;
    expireAtTime: number;
    expireAfterEpoch: number;
}
export type SponsoredTransactionStatus = "IN_FLIGHT" | "COMPLETE" | "INVALID";

export const sponsorRpcClient = (sponserRpcUrl) => rpcClient<SponsorRpc>(sponserRpcUrl);

export interface SponsorRpc {
    gas_sponsorTransactionBlock(txBytes: string, sender: string, gasBudget: number): SponsoredTransaction;
    gas_getSponsoredTransactionBlockStatus(txDigest: string): SponsoredTransactionStatus;
}

export const sponsorTransactionBlock = async (
    gaslessTxb,
    sponsor,
    provider,
    gasBudget,
    signerAddress
): Promise<[SponsoredTransaction, Uint8Array]> => {
    // generate the bcs serialized transaction data without any gas object data
    const gaslessPayloadBytes = await gaslessTxb.build({ provider: provider, onlyTransactionKind: true });

    // convert the byte array to a base64 encoded string to return
    const gaslessPayloadBase64 = btoa(gaslessPayloadBytes.reduce((data, byte) => data + String.fromCharCode(byte), ""));

    // Send the gasless programmable payload to Shinami Gas Station for sponsorship
    const sponsoredResponse = await sponsor.gas_sponsorTransactionBlock(gaslessPayloadBase64, signerAddress, gasBudget);

    // The transaction should be sponsored now, so its status will be "IN_FLIGHT"
    const sponsoredStatus = await sponsor.gas_getSponsoredTransactionBlockStatus(sponsoredResponse.txDigest);
    console.log("Sponsorship Status:", sponsoredStatus);

    // The sponsoredReponse will contain the full transaction payload and the signature of the gas object owner. To send it off for execution,
    // the full transaction payload still needs to be signed by the sender of the transaction.

    let transactionBlock = Uint8Array.from(atob(sponsoredResponse.txBytes), (c) => c.charCodeAt(0));

    return [sponsoredResponse, transactionBlock];
};

// // Sign the full transaction payload with the sender's key.
// const senderSig = await signer.signTransactionBlock({ transactionBlock });

export const executeSponsorTransactionBlock = async (provider, sponsoredResponse, senderSig) => {
    // Send the full transaction payload, along with the gas owner and sender's signatures for execution on the sui network
    const executeResponse = await provider.executeTransactionBlock({
        transactionBlock: sponsoredResponse.txBytes,
        signature: [senderSig.signature, sponsoredResponse.signature],
        options: { showEffects: true },
        requestType: "WaitForLocalExecution",
    });
    console.log("Execution Status:", executeResponse.effects?.status.status);
};

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

export async function getSponsoredDeposit(
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    coins: string[],
    amount: string,
    signerAddress: string
): Promise<[SponsoredTransaction, Uint8Array]> {
    const jsonData = JSON.stringify({
        functionName: "deposit",
        packageId: packageId,
        typeArguments: typeArguments,
        registry: registry,
        index: index,
        coins: coins,
        amount: amount,
        signerAddress: signerAddress,
    });

    let response = await fetch("https://function-1-jbw5emju3a-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonData,
    });

    const data = await response.json();
    console.log(data);
    const sponsoredResponse = data[0];
    const transactionBlock = Buffer.from(data[1].data);

    return [sponsoredResponse, transactionBlock];
}

export async function getSponsoredCompound(
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    signerAddress: string
): Promise<[SponsoredTransaction, Uint8Array]> {
    const jsonData = JSON.stringify({
        functionName: "compound",
        packageId: packageId,
        typeArguments: typeArguments,
        registry: registry,
        index: index,
        signerAddress: signerAddress,
    });

    let response = await fetch("https://function-1-jbw5emju3a-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonData,
    });

    const data = await response.json();
    console.log(data);
    const sponsoredResponse = data[0];
    const transactionBlock = Buffer.from(data[1].data);

    return [sponsoredResponse, transactionBlock];
}

export async function getSponsoredNewBid(
    packageId: string,
    typeArguments: string[],
    registry: string,
    index: string,
    priceOracle: string,
    coins: string[],
    size: string,
    signerAddress: string
): Promise<[SponsoredTransaction, Uint8Array]> {
    const jsonData = JSON.stringify({
        functionName: "newBid",
        packageId: packageId,
        typeArguments: typeArguments,
        registry: registry,
        index: index,
        priceOracle: priceOracle,
        coins: coins,
        size: size,
        signerAddress: signerAddress,
    });

    let response = await fetch("https://function-1-jbw5emju3a-uc.a.run.app", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonData,
    });

    const data = await response.json();
    console.log(data);
    const sponsoredResponse = data[0];
    const transactionBlock = Buffer.from(data[1].data);

    return [sponsoredResponse, transactionBlock];
}
