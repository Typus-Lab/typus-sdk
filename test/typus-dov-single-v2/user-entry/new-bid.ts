import "../../load_env";
import { getNewBidTx } from "../../../utils/typus-dov-single-v2/user-entry";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import config from "../config.json";

const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    let depositToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::btc::BTC";
    let bidToken = "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::btc::BTC";
    let gasBudget = 100000000;
    let packageId = config.PACKAGE;
    let typeArguments = [depositToken, bidToken];
    let registry = config.REGISTRY;
    let index = "3";
    let coins = (await provider.getCoins({ owner: await signer.getAddress(), coinType: depositToken })).data.map(
        (coin) => coin.coinObjectId
    );
    let size = "4";
    let premium_required = "100000000";

    let transactionBlock = await getNewBidTx(gasBudget, packageId, typeArguments, registry, index, coins, size, premium_required);
    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
