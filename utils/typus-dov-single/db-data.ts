const dbFilter = (functionName: string, vaultIndex: string | undefined = undefined) => ({
    collection: "typus_dov_single",
    database: "mainnet_1_0_0",
    dataSource: "typus",
    filter: {
        function: functionName,
        index: vaultIndex,
    },
});

const apiUrl = "https://data.mongodb-api.com/app/data-dwhde/endpoint/data/v1/action/find";

const headers = {
    "api-key": "ZnJu3wGqGoYotyvHl5Qis0UvUJRDJkBBwIsRaHdmBuzfy4jyPBH1LzazIfOO0GSm",
    "Content-Type": "application/json",
};

export async function getDb(functionName: string, vaultIndex: string | undefined = undefined) {
    const jsonData = JSON.stringify(dbFilter(functionName));

    let response = await fetch(apiUrl, {
        method: "POST",
        headers,
        body: jsonData,
    });

    if (response.ok) {
        let data = await response.json();
        data.documents.map((document) => {
            console.log(document);
        });
    }
}

export async function getNewAuction(vaultIndex: string | undefined = undefined) {
    await getDb("NewAuction", vaultIndex);
}

export async function getDelivery(vaultIndex: string | undefined = undefined) {
    await getDb("Delivery", vaultIndex);
}

export async function getSettle(vaultIndex: string | undefined = undefined) {
    await getDb("Settle", vaultIndex);
}

(async () => {
    await getSettle();
})();
