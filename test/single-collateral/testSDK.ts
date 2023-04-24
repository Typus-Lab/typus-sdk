import { JsonRpcProvider, devnetConnection, Connection, Ed25519Keypair, RawSigner, SuiEvent } from "@mysten/sui.js";
import { TEST_MNEMONIC } from "../../constants";
import { getVaultDataFromRegistry } from "../../utils/portfolio/single-collateral/getVaultData";

const keypair = Ed25519Keypair.deriveKeypair(TEST_MNEMONIC);
const provider = new JsonRpcProvider(
    new Connection({
        fullnode: "wss://node.shinami.com:443/ws/v1/sui_devnet_cfbd006037ff239969283dca8229432d",
    })
); //for read only operations
const signer = new RawSigner(keypair, provider);
const packageAddress = "0xca767e24d77798642a1a5985824247282b1b11532cd3e77c9d54a394568301d0";
const registry = "0xcfeb92f91aabe41c760b408018beaa315cf1bd91a5b22e1182742161fd468548";
const BTC = "0x01b9cf11792b0d5f044aad0b02b62ead616dda2449976b9b7b3a29b979beae07";
const typeArgs = [
    "0x29fc31d3927124688cc9abee4431b6dec9611beb4677b4e55cebca58641854b6::sui::SUI",
    "0x29fc31d3927124688cc9abee4431b6dec9611beb4677b4e55cebca58641854b6::sui::SUI",
    "0x29fc31d3927124688cc9abee4431b6dec9611beb4677b4e55cebca58641854b6::sui::SUI",
];

const test = async () => {
    const subscriptionId = await provider.subscribeEvent({
        filter: {
            Sender: "0x6c6d47e87f44c3d738113a6b7a7320ce49d0664b4b130b601f8176e706c1cc7e",
        },
        onMessage(event: SuiEvent) {
            // handle subscription notification message here. This function is called once per subscription message.
            console.log(event);
        },
    });
    console.log(subscriptionId);
};

test();
