import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { getVaults } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";
import { getUserOtcConfigs, otc } from "src/typus-dov-single-v2/otc-entry";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let user = signer.toSuiAddress();
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let index = "41";
    let vault = (await getVaults(config, { indexes: [index] }))[index];
    let otcConfig = (await getUserOtcConfigs(config, { user, indexes: [index] }))[0];
    console.log(otcConfig);
    let amount = (
        (BigInt(otcConfig.price) * BigInt(otcConfig.size)) /
        BigInt(Math.pow(10, Number.parseInt(vault.info.oTokenDecimal)))
    ).toString();
    let transaction = new Transaction();
    otc(config, transaction, {
        typeArguments: ["0x" + vault.info.depositToken, "0x" + vault.info.bidToken],
        index,
        coins: (await provider.getCoins({ owner: user, coinType: "0x" + vault.info.bidToken })).data.map((coin) => coin.coinObjectId),
        amount,
    });
    let res = await provider.signAndExecuteTransaction({ signer, transaction });

    console.log(res);
})();
