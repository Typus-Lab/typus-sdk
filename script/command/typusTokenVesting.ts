(() => {
    let coinObject = "0xeb2d80b9596296a27c08090b6d251041f79809ebcc0a3ead34b7916e186c5f7d";
    let addresses = [
        "0xbd637af537b5d8d734bacb36477a71cc83251e5545af22d51d671fb94d484107",
        "0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0",
        "0x60b1bce05845f36922707424def30bf6b9c8964532073513e862e0d5bc5f68a5",
        "0x0d4db045b72decaba99218197a1b72c040263455101a124bcd6b530c61bb8bcb",
        "0xb42b8ae270bcc4424b580eda93c1b72ef5f8dfca144c1ab22c348b886cd33084",
        "0xb6b29d18c728503fb59cc59ecbe52611d26b2746b2cedc8d38cabf81428cae6c",
        "0x31d8f4152867442e1e2d3cc04a512107a2f869e0fd9fb778499597df2c241531",
        "0x2a25e5d858849bf2af0bf30aaa106bff8cdce25b9ae8ec3acfe1f2c346f30c36",
        "0xfdb1d5cf225c1892ce10a6a8baa8bb716fd47d6d31eb6b27de085e7125b222e2",
        "0x0c178ab8bae1aed826b4e8a78e78b551bc56cc1642fc645f0c2e60a85a5cddf2",
        "0xb55065c0f7521d2aa98dd84111aa55f8b75a55c9a1b063565f2bacede30f198c",
        "0x207ed41f9ae143edf2238802596bbef3dfecad4952471ee50f71ae6baba2ce92",
    ];
    let amounts = [
        1666667000000000, 1416667000000000, 1083333000000000, 1416667000000000, 625000000000000, 416667000000000, 555556000000000,
        33333000000000, 41667000000000, 31250000000000, 31250000000000, 600000000000000,
    ];
    let gasCoinObject = "0x15466b6df9e2607fe961986efc33ab6147b10710c3cf3f2cbef2003e86122474";
    let dryRun = true;
    console.log("sui client ptb \\");
    console.log(`--split-coins @${coinObject} \\[${amounts.join(",")}\\] --assign coins \\`);
    addresses.forEach((address, i) => {
        console.log(`--transfer-objects \\[coins.${i}\\] @${address} \\`);
    });
    if (dryRun) {
        console.log(`--gas-coin @${gasCoinObject} --gas-budget 100000000 --dry-run`);
    } else {
        console.log(`--gas-coin @${gasCoinObject} --gas-budget 100000000 --serialize-unsigned-transaction > data.txt`);
    }
})();
