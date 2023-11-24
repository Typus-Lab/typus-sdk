import "../../load_env";
import config_v2 from "../../../config_v2.json";
import mnemonic from "../../../mnemonic.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import { getTails } from "../../../utils/typus-nft/fetch";
import { getAllocateProfitSharingTx, getSetProfitSharingTx } from "../../../utils/nft-staking/authorized-entry";

const keypair = Ed25519Keypair.deriveKeypair(String(mnemonic.MNEMONIC));
const provider = new JsonRpcProvider(new Connection({ fullnode: config_v2.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const gasBudget = 100000000;

const levelProfits = [0, 1, 2, 3, 4, 5, 6]; // MIST

(async () => {
    console.assert(levelProfits.length == 7);
    const address = await signer.getAddress();
    console.log(address);

    var result = await provider.getDynamicFields({
        parentId: config_v2.NFT_TABLE,
    });

    var datas = result.data;

    while (result.hasNextPage) {
        result = await provider.getDynamicFields({
            parentId: config_v2.NFT_TABLE,
            cursor: result.nextCursor,
        });
        datas = datas.concat(result.data);
    }
    // console.log(datas);

    const tails = await getTails(
        provider,
        datas.map((data) => data.objectId)
    );
    console.log(tails);

    const sum = tails.reduce((sum, tail) => (sum += levelProfits[Number(tail.level) - 1]), 0);
    console.log("total profit sharing: " + sum);

    const users = datas.map((d) => d.name.value);
    console.log("users.length: " + users.length);

    // STEP 1

    var transactionBlock = await getSetProfitSharingTx(
        gasBudget,
        config_v2.SINGLE_COLLATERAL_PACKAGE,
        config_v2.SINGLE_COLLATERAL_REGISTRY,
        levelProfits,
        sum
    );

    var res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(`getSetProfitSharingTx:`);
    console.log(res);

    // STEP 2

    var transactionBlock = await getAllocateProfitSharingTx(
        gasBudget,
        config_v2.SINGLE_COLLATERAL_PACKAGE,
        config_v2.SINGLE_COLLATERAL_REGISTRY,
        users
    );

    var res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(`getAllocateProfitSharingTx:`);
    console.log(res);
})();
