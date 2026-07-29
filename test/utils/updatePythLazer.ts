import { SuiJsonRpcClient } from "@mysten/sui/jsonRpc";
import { Transaction } from "@mysten/sui/transactions";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { PythLazerClient } from "@pythnetwork/pyth-lazer-sdk";
import { TypusConfig } from "src/utils";
import { PythLazerSuiClient } from "src/utils/pyth/pythClient";

(async () => {
    const network = "TESTNET";
    const config = await TypusConfig.default(network, null);
    config.package.oracle = "0xd2e030ab7f0fc956c7e683cf3c6faf3d22868dee81a4aae9f4a10a6d998a8a02";

    const sui = new SuiJsonRpcClient({ url: config.rpcEndpoint, network: network.toLowerCase() });
    const lazer = await PythLazerClient.create({ token: String(process.env.LAZER_TOKEN), webSocketPoolConfig: {} });
    const signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    console.log(signer.toSuiAddress());
    const oracleV2Id = "0x6378d4a139475984613344077a862972756e2bd0cb2aab7018e7f48eeee0742d";
    const lazerPackage = "0xacb76cbd636b83839153feff75b83157c400075717ce8c979fbbe88cf3564901";

    const pythClient = new PythLazerSuiClient({
        lazer,
        sui,
        network,
        lazerPackage,
        oraclePackage: config.package.oracle,
        oracleV2Id,
    });
    const tx = new Transaction();

    await pythClient.addLatestPriceNewToken(tx, "JPY");
    // await pythClient.addSettlePriceNewToken(tx, "SCA", 1778572800);
    // await pythClient.updateOracleV2WithPythLazer(tx, ["SUI"]);
    // await pythClient.updateOracleV2SettlePriceWithPythLazer(tx, ["SUI"], 1778572800);

    const res = await sui.signAndExecuteTransaction({ signer, transaction: tx });
    console.log(res);

    lazer.shutdown();
})();
