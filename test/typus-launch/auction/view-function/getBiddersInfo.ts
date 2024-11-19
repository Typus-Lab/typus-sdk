import { getBiddersInfo } from "src/typus-launch/auction";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let bidders = [
        "0xf616641be44eefc283ffe1d89c00dca06df48a3caf0fa1b97c28d4fe36732972",
        "0x66cc84fc4bd5e06a3654ffc744b3819832c7861b2feeab2f85b7f6b867f4021e",
        "0xa625325b6f2f955a2db9183f450419df276fbf171e5e63293799f797bd79673b",
        "0x7820a145d3d95e4e30308479b6b8e7c7fc89c65f2d526f2b2efe2d18aee928ae",
        "0x871005d7c23c6e2d29eef04f90cd59f4cbc9a07453ea1b212699386543f73527",
        "0x2ec3e2184dde62e5e1609cbe484de84ac11c4e69d95ba7e90ddd40ac21e7dcc9",
        "0xc15bd44a8053d48ed95803c44358f72a2655e771099e0f675bb7c3bc3fabaf7c",
        "0xd56e2f877e3b2b7a68a593b16f0b860e1213d7ba21ccbb31fefa4197e76e19a7",
    ];
    let auction = await getBiddersInfo(config, bidders);
    console.log(auction);
})();
