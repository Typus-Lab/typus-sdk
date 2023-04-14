import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getPortfolioVaults } from "../../utils/portfolio/multiple-collateral/portfolio-vault";

const connection = new Connection({ fullnode: "https://fullnode.testnet.sui.io:443" });
const provider = new JsonRpcProvider(connection); //for read only operations
const registry = "0xbb8abceca4104136a0deded4bfc81c12a8d4f3a3b55cd11482dd9a569c6c2dce";
const token_deposit_vault_registry = "0xe44c1cc639e907b3e2f8566e965ce50fb25ff64222c5a299ad151a3baa0e49aa";
const usd_deposit_vault_registry = "0x7b6fae932422805248b898ea3e747ee8084964724883248324ad935c36c35e2c";
const bid_vault_registry = "0x1bb220857be6b19c647474b8dff3b904f0c6b9f626b82f63351b41f24e2352b8";
(async () => {
    let result = await getPortfolioVaults(provider, registry, token_deposit_vault_registry, usd_deposit_vault_registry, bid_vault_registry);
    console.log(JSON.stringify(result, (_, v) => typeof v === 'bigint' ? `${v}` : v, 2));
})();