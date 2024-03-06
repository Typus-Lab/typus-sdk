import "../load_env";
import config from "../../config_v2.json";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getUnstakeNftTx } from "../../utils/nft-staking/user-entry";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new SuiClient({
    url: getFullnodeUrl("testnet"),
});
const gasBudget = 100000000;

(async () => {
    const address = await keypair.toSuiAddress();
    console.log(address);

    const kioskClient = new KioskClient({
        client: provider,
        network: Network.MAINNET,
    });

    const kiosks = await kioskClient.getOwnedKiosks({ address });
    const typeArguments = ["0x2::sui::SUI"];

    if (kiosks.kioskOwnerCaps.length > 0) {
        let kioskOwnerCap = kiosks.kioskOwnerCaps.filter((k) => !k.isPersonal!)[0];

        let transactionBlock = await getUnstakeNftTx(
            gasBudget,
            config.SINGLE_COLLATERAL_PACKAGE,
            config.SINGLE_COLLATERAL_REGISTRY,
            kioskOwnerCap.kioskId,
            kioskOwnerCap.objectId,
            typeArguments
        );

        let res = await provider.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });

        console.log(res);
    }
})();
