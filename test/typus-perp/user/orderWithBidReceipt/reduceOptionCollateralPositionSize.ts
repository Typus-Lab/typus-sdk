import configs from "config.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { reduceOptionCollateralPositionSize, NETWORK, getUserPositions } from "src/typus-perp";
import { createPythClient } from "src/utils";
import "src/utils/load_env";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));

const config = configs.TESTNET;

const provider = new SuiClient({
    url: config.RPC_ENDPOINT,
});

(async () => {
    const user = keypair.toSuiAddress();
    console.log(user);

    const positions = await getUserPositions(provider, config, user);
    // console.log(positions);

    const bidReceiptPositions = positions.filter((p) => p.collateralToken.name.endsWith("TypusBidReceipt"));
    const bidReceiptPosition = bidReceiptPositions[0];
    console.log(bidReceiptPosition);

    const pythClient = createPythClient(provider, NETWORK);

    var tx = new TransactionBlock();
    tx.setGasBudget(100000000);

    const size: string | null = "1000000000";

    reduceOptionCollateralPositionSize(config, {
        pythClient,
        tx,
        position: bidReceiptPosition,
        size,
    });
})();
