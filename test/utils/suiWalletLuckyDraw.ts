const url = "https://app.sentio.xyz/api/v1/analytics/typus/typus_v2/sql/execute";
const apiKey = "-";
const data = {
    sqlQuery: {
        sql: "WITH tab AS (\nSELECT\n    d.timestamp, \n    d.distinct_id as distinct_id, \n    d.balance_value as deposit, \n    w.value as withdraw\nFROM SafuDeposit d\nLEFT JOIN SafuWithdraw w\n  ON d.distinct_id = w.distinct_id\n  AND DATE(d.timestamp) = DATE(w.timestamp)\nWHERE (d.index = 0 OR d.index = 23) \n  AND d.timestamp >= 1731427200\n  AND d.timestamp < 1732694400\n)\n\nSELECT DISTINCT distinct_id\nFROM tab\nWHERE deposit > withdraw",
        size: 1000000,
    },
    version: 96,
};

async function getSuiWallet() {
    const apiUrl = "https://data.mongodb-api.com/app/data-dwhde/endpoint/data/v1/action/find";

    const headers = {
        "api-key": "-",
        "Content-Type": "application/json",
    };

    const jsonData = JSON.stringify({
        dataSource: "typus",
        database: "wallet",
        collection: "wallet",
        filter: { wallet: "Sui Wallet" },
        limit: 20000,
    });

    let response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: jsonData,
    });

    if (response.ok) {
        let data = await response.json();
        return data.documents;
    }
}

function getUniqueRandomNumbers(N, count) {
    if (count > N + 1) {
        throw new Error("Count cannot be greater than the range size.");
    }

    const numbers = Array.from({ length: N + 1 }, (_, i) => i); // Create an array [0, 1, ..., N]

    // Fisher-Yates Shuffle
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Swap
    }

    return numbers.slice(0, count); // Take the first `count` numbers
}

(async () => {
    const deposit_addresses = await fetch(url, {
        method: "POST",
        headers: {
            "api-key": apiKey,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Do something with the data
            return data.result.rows.map((x) => x.distinct_id);
        })
        .catch((error) => {
            // Handle the error
            console.error("Error:", error);
        });

    console.log(deposit_addresses.length);

    const wallet = await getSuiWallet();
    const sui_wallet_addresses = wallet.map((x) => x.address);
    console.log(sui_wallet_addresses.length);

    const users = deposit_addresses.filter((r) => sui_wallet_addresses.includes(r));
    console.log(users.length);

    const randomNumbers = getUniqueRandomNumbers(users.length, 100);
    console.log(randomNumbers);

    const luckyUsers = randomNumbers.map((i) => users[i]);
    console.log(luckyUsers);

    // Deduplicate using Set
    const deduplicated = [...new Set(randomNumbers)];
    console.log(deduplicated.length);
})();
