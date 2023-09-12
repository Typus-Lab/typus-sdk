import "../load_env";
import config from "../../nft_config.json";
import { JsonRpcProvider, Ed25519Keypair, RawSigner, Connection } from "@mysten/sui.js";
import { getUserStake } from "../../utils/nft-staking/fetch";
import { getLevelExp } from "../../utils/typus-nft/fetch";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
// const client = new SuiClient({ url: config.RPC_ENDPOINT });
const provider = new JsonRpcProvider(new Connection({ fullnode: config.RPC_ENDPOINT }));
const signer = new RawSigner(keypair, provider);

const gasBudget = 100000000;

(async () => {
    const address = await signer.getAddress();
    console.log(address);

    let res_1 = await getUserStake(provider, config.NFT_TABLE, "0x978f65df8570a075298598a9965c18de9087f9e888eb3430fe20334f5c554cfd");
    console.log(res_1); // null

    let res = await getUserStake(provider, config.NFT_TABLE, "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9");
    console.log(res);

    const level = Number(res?.nft.level);
    const exp = Number(res?.nft.exp);

    const next_level_exp = getLevelExp(level + 1);

    console.log(`Level: ${level}`);
    console.log(`Next level exp: ${next_level_exp}`);

    if (exp > next_level_exp!) {
        console.log("Able to level up!");
    } else {
        const need_exp = next_level_exp! - exp;
        console.log(`Need ${need_exp} exp to level up!`);
    }
})();
