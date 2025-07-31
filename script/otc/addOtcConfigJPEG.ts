import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { getNumberStringWithDecimal, sleep, TypusConfig } from "src/utils";
import { addOtcConfig, getUserOtcConfigs } from "src/typus-dov-single-v2/otc-entry";
import { getVaults } from "src/typus-dov-single-v2";
import { promptYesNo } from "script/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    let index = "125";
    let user = "0x74c7a18d6de49f31bc6007e24afa3ea0693fefa5db6c7174c68730540c82d275";
    let now = Date.now();
    let vault = (await getVaults(config, { indexes: [index] }))[index];
    // console.log(vault);
    let size = (BigInt(vault.info.deliveryInfos.maxSize) - BigInt(vault.info.deliveryInfos.totalDeliverySize)).toString();
    let price = "500000";
    let fee_bp = "0";
    console.log({
        user,
        index,
        round: vault.info.round,
        size: getNumberStringWithDecimal(size, 8),
        price: getNumberStringWithDecimal(price, 8),
        fee_bp,
        // expiration_ts_ms: (BigInt(vault.info.activationTsMs) + BigInt(120 * 60 * 1000)).toString(),
        // expiration_ts_ms: "1752829200000",
        expiration_ts_ms: (now + 5 * 60 * 1000).toString(),
    });
    let result = await promptYesNo("Proceed?");
    if (result) {
        addOtcConfig(config, transaction, {
            user,
            index,
            round: vault.info.round,
            size,
            price,
            fee_bp,
            // expiration_ts_ms: (BigInt(vault.info.activationTsMs) + BigInt(120 * 60 * 1000)).toString(),
            // expiration_ts_ms: "1752829200000",
            expiration_ts_ms: (now + 5 * 60 * 1000).toString(),
        });
        let res = await provider.signAndExecuteTransaction({ signer, transaction });
        console.log(
            config.network == "MAINNET"
                ? `https://suivision.xyz/txblock/${res.digest}`
                : `https://testnet.suivision.xyz/txblock/${res.digest}`
        );
        await sleep(1000);
        let otcConfig = await getUserOtcConfigs(config, { user, indexes: [index] });
        console.log(otcConfig);
    }
})();
