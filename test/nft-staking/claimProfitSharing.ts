import "../load_env";
import config_v2 from "../../config_v2.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import { getClaimProfitSharingTx } from "../../utils/nft-staking/authorized-entry";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const provider = new JsonRpcProvider(new Connection({ fullnode: config_v2.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const gasBudget = 100000000;

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    let transactionBlock = await getClaimProfitSharingTx(
        gasBudget,
        config_v2.SINGLE_COLLATERAL_PACKAGE,
        config_v2.SINGLE_COLLATERAL_REGISTRY
    );
    let res = await signer.signAndExecuteTransactionBlock({ transactionBlock });
    console.log(res);
})();
