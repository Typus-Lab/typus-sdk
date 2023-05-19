const { rpcClient } = require("typed-rpc");
const { TransactionBlock, JsonRpcProvider, Connection } = require("@mysten/sui.js");

const sponserRpcUrl = "https://api.shinami.com/gas/v1/sui_testnet_2f6c5fa7b5a77b76a8d930612f08b8d3";
const RPC_ENDPOINT = "https://api.shinami.com:443/node/v1/sui_testnet_2f6c5fa7b5a77b76a8d930612f08b8d3";

// Setup for issuing json rpc calls to the gas station for sponsorship. We use typed-rpc typescript lib here.
const sponsorRpcClient = (sponserRpcUrl) => rpcClient(sponserRpcUrl);

const sponsorTransactionBlock = async (gaslessTxb, sponsor, provider, gasBudget, signerAddress) => {
    // generate the bcs serialized transaction data without any gas object data
    const gaslessPayloadBytes = await gaslessTxb.build({
        provider: provider,
        onlyTransactionKind: true,
    });

    // convert the byte array to a base64 encoded string to return
    const gaslessPayloadBase64 = Buffer.from(gaslessPayloadBytes).toString("base64");

    // Send the gasless programmable payload to Shinami Gas Station for sponsorship
    const sponsoredResponse = await sponsor.gas_sponsorTransactionBlock(gaslessPayloadBase64, signerAddress, gasBudget);

    // The transaction should be sponsored now, so its status will be "IN_FLIGHT"
    const sponsoredStatus = await sponsor.gas_getSponsoredTransactionBlockStatus(sponsoredResponse.txDigest);
    console.log("Sponsorship Status:", sponsoredStatus);

    // The sponsoredReponse will contain the full transaction payload and the signature of the gas object owner. To send it off for execution,
    // the full transaction payload still needs to be signed by the sender of the transaction.

    const transactionBlock = Buffer.from(sponsoredResponse.txBytes, "base64");

    return [sponsoredResponse, transactionBlock];
};

async function getDepositTx(gasBudget, packageId, typeArguments, registry, index, coins, amount) {
    let tx = new TransactionBlock();
    if (typeArguments[0] == "0x2::sui::SUI" || typeArguments[0] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI") {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(amount)]);
        tx.moveCall({
            target: `${packageId}::typus_dov_single::deposit`,
            typeArguments,
            arguments: [tx.pure(registry), tx.pure(index), tx.makeMoveVec({ objects: [coin] }), tx.pure(amount)],
        });
    } else {
        tx.moveCall({
            target: `${packageId}::typus_dov_single::deposit`,
            typeArguments,
            arguments: [tx.pure(registry), tx.pure(index), tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }), tx.pure(amount)],
        });
    }
    tx.setGasBudget(gasBudget);

    return tx;
}

const GasBudget = 50000000;

export async function sponsoredDeposit(packageId, typeArguments, registry, index, coins, amount, signerAddress) {
    const sponsor = sponsorRpcClient(sponserRpcUrl);

    const provider = new JsonRpcProvider(new Connection({ fullnode: RPC_ENDPOINT }));

    const deposit = await getDepositTx(GasBudget, packageId, typeArguments, registry, index, coins, amount);

    const [sponsoredResponse, transactionBlock] = await sponsorTransactionBlock(deposit, sponsor, provider, GasBudget, signerAddress);

    return [sponsoredResponse, transactionBlock];
}

async function getCompoundTx(gasBudget, packageId, typeArguments, registry, index) {
    let tx = new TransactionBlock();
    tx.moveCall({
        target: `${packageId}::typus_dov_single::compound`,
        typeArguments,
        arguments: [tx.pure(registry), tx.pure(index)],
    });
    tx.setGasBudget(gasBudget);

    return tx;
}

async function getNewBidTx(
    gasBudget,
    packageId,
    typeArguments,
    registry,
    index,
    priceOracle,
    coins,
    size,
    premium_required // fe float * b_token_decimal
) {
    let tx = new TransactionBlock();
    if (typeArguments[1] == "0x2::sui::SUI" || typeArguments[1] == "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI") {
        let [coin] = tx.splitCoins(tx.gas, [tx.pure(premium_required)]);
        tx.moveCall({
            target: `${packageId}::typus_dov_single::new_bid`,
            typeArguments,
            arguments: [tx.pure(registry), tx.pure(index), tx.pure(priceOracle), tx.pure("0x6"), tx.makeMoveVec({ objects: [coin] }), tx.pure(size)],
        });
    } else {
        tx.moveCall({
            target: `${packageId}::typus_dov_single::new_bid`,
            typeArguments,
            arguments: [
                tx.pure(registry),
                tx.pure(index),
                tx.pure(priceOracle),
                tx.pure("0x6"),
                tx.makeMoveVec({ objects: coins.map((id) => tx.object(id)) }),
                tx.pure(size),
            ],
        });
    }
    tx.setGasBudget(gasBudget);

    return tx;
}
