import "src/utils/load_env";
import { newTip } from "src/typus-launch/improvement-proposal";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    // let config = TypusConfig.local("../typus-config/config-testnet.json");
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transactionBlock = new TransactionBlock();
    newTip(config, transactionBlock, {
        description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
        image_url: "https://www.spicybaboon.com.au/cdn/shop/products/rick-roll-magic-mug-15739811823694_1572x.png",
        proposal:
            "Lorem ipsum odor amet, consectetuer adipiscing elit. Nostra ad tincidunt pellentesque eget purus porta penatibus auctor montes. Auctor facilisi volutpat; nibh malesuada bibendum senectus consectetur libero bibendum. Habitasse feugiat mauris lobortis elementum; sodales accumsan vestibulum. Ante curabitur dolor mus sodales, cubilia mattis porttitor maximus. Lacus odio sit interdum placerat blandit cursus maximus. Himenaeos euismod venenatis integer, volutpat dapibus mus viverra. Dolor accumsan vulputate arcu vehicula nullam nullam. Pellentesque curae ridiculus diam habitasse tempus finibus, torquent venenatis metus.",
        config: ["1735113600000", "1735200000000", "500"],
    });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
