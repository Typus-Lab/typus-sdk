import { SuiJsonRpcClient } from "@mysten/sui/jsonRpc";
import { Transaction } from "@mysten/sui/transactions";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { PythLazerClient } from "@pythnetwork/pyth-lazer-sdk";
import { TypusConfig } from "src/utils";
import { feedIds, lazerStateId } from "src/utils/pyth/constant";
import {
    addLatestPriceNewToken,
    addSettlePriceNewToken,
    updateOracleV2SettlePriceWithPythLazer,
    updateOracleV2WithPythLazer,
    updatePythLazer,
} from "src/utils/pyth/pythClient";
import { tokenType } from "src/constants";

(async () => {
    const network = "TESTNET";
    const config = await TypusConfig.default(network, null);
    config.package.oracle = "0x834db2ed971e77d2b9379f6ba5042b7b6c930964154c9af74399a0e2918ba656";

    const sui = new SuiJsonRpcClient({ url: config.rpcEndpoint, network: network.toLowerCase() });
    const lazer = await PythLazerClient.create({ token: String(process.env.LAZER_TOKEN), webSocketPoolConfig: {} });
    const signer = Ed25519Keypair.deriveKeypair(String(process.env.AUTH_MNEMONIC));

    const oracleV2Id = "0xdf6ad9349192df7ad0823eda0828a051cf29e6ee37d8209490da878bf4642482";
    const lazerPackage = "0x162e08fec78a1e0eba06951abce9019fe9a270dfb574b1e05b133ba4aa6bc0df";
    const timestamp = 1778572800;

    const client = { lazer, sui, stateObjectId: lazerStateId[network], lazerPackage };
    const tx = new Transaction();

    const verifiedUpdate = await updatePythLazer(client, tx, ["AAPLX"]);
    addLatestPriceNewToken(tx, config.package.oracle, oracleV2Id, tokenType[network]["AAPLX"], feedIds["AAPLX"], verifiedUpdate);
    // addSettlePriceNewToken(tx, config.package.oracle, oracleV2Id, tokenType[network]["SUI"], feedIds["SUI"], verifiedUpdate);

    // updateOracleV2WithPythLazer(tx, config.package.oracle, oracleV2Id, verifiedUpdate);
    // updateOracleV2SettlePriceWithPythLazer(tx, config.package.oracle, oracleV2Id, verifiedUpdate, timestamp);

    const res = await sui.signAndExecuteTransaction({ signer, transaction: tx });
    console.log(res);

    lazer.shutdown();
})();
