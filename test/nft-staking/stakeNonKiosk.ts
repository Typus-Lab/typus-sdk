import "../load_env";
import config from "../../config.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection, GetOwnedObjectsResponse, TransactionBlock } from "@mysten/sui.js";
import { getTails, getTailsIds } from "../../utils/typus-nft/fetch";
import { getStakeNftFromNoKioskTx, getStakeNftTx } from "../../utils/nft-staking/user-entry";

import { createKiosk, getOwnedKiosks } from "@mysten/kiosk";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const gasBudget = 100000000;

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    var result = await provider.getOwnedObjects({
        owner: address,
        options: { showType: true, showContent: true },
    });

    var datas = result.data;

    while (result.hasNextPage) {
        result = await provider.getOwnedObjects({
            owner: address,
            options: { showType: true, showContent: true },
            cursor: result.nextCursor,
        });
        datas = datas.concat(result.data);
    }

    const tailsIds = datas.filter((data) => {
        // console.log(data);
        // @ts-ignore
        return data.data?.type! == `${nftConfig.NFT_PACKAGE}::typus_nft::Tails`;
    });
    // console.log(objs);

    if (tailsIds.length > 0) {
        let nft = tailsIds[0];

        let transactionBlock = await getStakeNftFromNoKioskTx(
            gasBudget,
            config.SINGLE_COLLATERAL_PACKAGE,
            config.NFT_PACKAGE,
            config.NFT_TRANSFER_POLICY,
            config.SINGLE_COLLATERAL_REGISTRY,
            nft.data?.objectId!,
            address
        );

        // let res = await client.signAndExecuteTransactionBlock({ signer: keypair, transactionBlock });
        let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });

        console.log(res);
    }
})();
