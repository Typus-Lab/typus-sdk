import { JsonRpcProvider, Ed25519Keypair, RawSigner, devnetConnection, TransactionBlock, testnetConnection, Connection } from "@mysten/sui.js";
const connection = new Connection({ fullnode: "https://rpc-testnet.suiscan.xyz:443" });
const provider = new JsonRpcProvider(connection); //for read only operations
const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const signer = new RawSigner(keypair, provider);

(async () => {
    const coin_type = "0x2::sui::SUI";

    var coins = (
        await provider.getAllCoins({
            owner: await signer.getAddress(),
        })
    ).data;

    // console.log(coins);

    coins = coins.filter((c) => c.coinType == coin_type && c.lockedUntilEpoch == null);

    let payment = coins.pop();

    // console.log("payment", payment);

    let coin_ids = coins.map((c) => c.coinObjectId);

    const tx = new TransactionBlock();

    tx.mergeCoins(
        tx.pure(coin_ids.pop()),
        coin_ids.map((id) => tx.object(id))
    );

    tx.setGasBudget(100000000);

    let gas = { objectId: payment!.coinObjectId, version: payment!.version, digest: payment!.digest };
    tx.setGasPayment([gas]);

    console.log(payment);

    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock: tx });

    console.log(res);
})();
