import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";
import { setAirdrop } from "src/typus-launch/airdrop";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    // let config = TypusConfig.local("../typus-config/config-testnet.json");
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let transactionBlock = new TransactionBlock();
    setAirdrop(config, transactionBlock, {
        typeArguments: ["0xd31923b6821fb7ba32d23e514b43d307da6ef991f9ef1af2cc4e26a0992ac87a::afsui::AFSUI"],
        key: "Typus Improvement Proposal #0",
        coins: ["0xc610b74b358199e9ca63298a55e4cbfc1a96aeb37cf09f3806b1428145cffe1c"],
        amount: "100000000000",
        users: [
            "0x978f65df8570a075298598a9965c18de9087f9e888eb3430fe20334f5c554cfd",
            "0x603272d1e61de086a18751482684f882642eb080144aee425c4c34b5e56470b0",
        ],
        values: ["60000000000", "40000000000"],
    });
    let res = await provider.signAndExecuteTransactionBlock({ signer, transactionBlock });
    console.log(res);
})();
