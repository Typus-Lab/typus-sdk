import "../load_env";
import config from "../../config_v2.json";
import { KioskClient, Network } from "@mysten/kiosk";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { getTailsIds } from "../../utils/typus-nft/fetch";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getStakeNftTx } from "../../utils/nft-staking/user-entry";

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

    const tailsIds = await getTailsIds(kioskClient, config, address);
    console.log(tailsIds);
    if (tailsIds.length > 0) {
        let nft = tailsIds[0];

        let transactionBlock = await getStakeNftTx(
            gasBudget,
            config.SINGLE_COLLATERAL_PACKAGE,
            config.SINGLE_COLLATERAL_REGISTRY,
            nft.kiosk,
            nft.kioskCap,
            nft.nftId
        );

        const result = await provider.signAndExecuteTransactionBlock({
            signer: keypair,
            transactionBlock,
        });
        console.log(result);
    }
})();
