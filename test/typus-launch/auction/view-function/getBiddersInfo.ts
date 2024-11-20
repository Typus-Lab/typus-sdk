import { getBiddersInfo } from "src/typus-launch/auction";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let bidders = [
        "0x5c22733d496e38828e74ce3c361ccfc5fc566f0fc9da7e16ee623543ef2b6b9f",
        "0xe347045b6f10cd3390aaa6971cd4b2395842ff9eac5fb4eac0cf2eee52e4fa2c",
        "0x2679d10a99fde34ef57bf28e22cc11c78bf2d9e8353530992df35b2160cf4b9a",
        "0x83a2d5f495ad4dfd9f4c39c0eb0f626ad9dfd31bdd483ee9ea3087681a29bfad",
        "0x772c7c0846d5beb61c22038919c043bf4c305717320114ee84c7516d5b82041b",
    ];
    let auction = await getBiddersInfo(config, bidders);
    console.log(auction);
})();
