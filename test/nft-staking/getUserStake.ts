import "../load_env";
import config from "../../config_v2.json";
import { SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getUserStake } from "../../utils/nft-staking/fetch";
import { getLevelExp } from "../../utils/typus-nft/fetch";
import { getExpEarn, getExpEarnPerMinute } from "../../utils/nft-staking/calculation";

const keypair = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
const client = new SuiClient({ url: config.RPC_ENDPOINT });

(async () => {
    const address = keypair.toSuiAddress();
    console.log(address);

    let res_1 = await getUserStake(client, config.NFT_TABLE, "0x978f65df8570a075298598a9965c18de9087f9e888eb3430fe20334f5c554cfd");
    console.log(res_1); // null

    let res = await getUserStake(client, config.NFT_TABLE, "0xb6c7e3b1c61ee81516a8317f221daa035f1503e0ac3ae7a50b61834bc7a3ead9");
    console.log(res);

    const level = Number(res?.level);
    const exp = Number(res?.exp);

    const next_level_exp = getLevelExp(level + 1);

    console.log(`Level: ${level}`);
    console.log(`Next level exp: ${next_level_exp}`);

    if (exp > next_level_exp!) {
        console.log("Able to level up!");
    } else {
        const need_exp = next_level_exp! - exp;
        console.log(`Need ${need_exp} exp to level up!`);
    }

    const exp_earn = getExpEarn(res?.u64_padding!);
    console.log(`exp_earn: ${exp_earn}`);

    const exp_earn_per_min = getExpEarnPerMinute(res?.u64_padding!);
    console.log(`exp_earn_per_min: ${exp_earn_per_min}`);
})();
