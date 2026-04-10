(() => {
    let addresses = ["address1", "address2", "address3"];
    let publicBase64Keys = ["key1", "key2", "key3"]; // can be found using command "sui keytool list"
    let weights = [3, 2, 1];
    let threshold = 3;
    console.log("#1 Sign");
    addresses.forEach((address) => {
        console.log(`sui keytool sign --address ${address} --data $(cat data.txt)`);
    });
    console.log("#2 Merge Signature");
    console.log(
        `sui keytool multi-sig-combine-partial-sig --pks ${publicBase64Keys.join(" ")} --weights ${weights.join(" ")} --threshold ${threshold} --sigs SIGNATURES_GENERATED_BY_PREVIOUS_STEP`
    );
    console.log("#3 Execute");
    console.log("sui client execute-signed-tx --tx-bytes $(cat data.txt) --signatures SIGNATURES_GENERATED_BY_PREVIOUS_STEP");
})();
