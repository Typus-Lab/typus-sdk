const apiUrl = "https://us-central1-aqueous-freedom-378103.cloudfunctions.net/buck-price";

export async function getBuckUsdcPrice() {
    let response = await fetch(apiUrl, {
        method: "GET",
    });

    if (response.ok) {
        let data = await response.json();
        return data;
    }
}
