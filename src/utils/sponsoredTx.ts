import { Transaction } from "@mysten/sui/transactions";
import { GasStationClient, createSuiClient, buildGaslessTransaction, GaslessTransaction } from "@shinami/clients/sui";
import { SuiClient } from "@mysten/sui/client";

export async function getSponsoredTx(provider: SuiClient, sender: string, tx: Transaction) {
    let gaslessTx = await buildGaslessTransaction(tx, {
        sui: provider,
        sender,
    });

    let body = JSON.stringify(gaslessTx);

    let apiUrl = "https://sponsored-gas-752051381467.asia-southeast1.run.app";
    const headers = {
        "Content-Type": "application/json",
    };
    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body,
    });
    // console.log(response);

    let sponsoredResponse = await response.json();
    // console.log(sponsoredResponse);

    if (!sponsoredResponse.txBytes) {
        console.error("getSponsoredTx error: ", sponsoredResponse);
    }

    return sponsoredResponse as sponsoredResponse;

    // let sponsoredResponse = await gasStationClient.sponsorTransaction(
    //     await buildGaslessTransaction(gaslessTx, {
    //         sui: provider,
    //         sender,
    //     }) // when gaslessTx.gasBudget is undefined we take advantage of Shinami auto-budgeting
    // );
    // console.log(sponsoredResponse);
}

interface sponsoredResponse {
    txBytes: string;
    sponsorSig: string;
}
