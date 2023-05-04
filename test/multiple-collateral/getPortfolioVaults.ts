import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getPortfolioVaults } from "../../utils/typus-dov-double/portfolio-vault";

const connection = new Connection({
    fullnode: "https://rpc-testnet.suiscan.xyz:443",
});
// const connection = new Connection({ fullnode: "https://fullnode.testnet.sui.io:443" });
const provider = new JsonRpcProvider(connection); //for read only operations
const registry = "0x5083936779bd8bbc26f374baf90981ad5af8f57fe22920105aa47d4e012364de";
const token_deposit_vault_registry = "0x5a2a467af76e2fc84e98336478224ae81c222e5a8162af4a575302867edbcb56";
const usd_deposit_vault_registry = "0xe33913a1152396ea7efb726d1333e54efae3e48fe1ae3fd8ea5a9d5cfeae3f2f";
const bid_vault_registry = "0xd492fe560cba6f9aa061d4f4dbdfb48f13f5d1536a1583b2cf583b5a1e944fc6";
(async () => {
    let result = await getPortfolioVaults(provider, registry, token_deposit_vault_registry, usd_deposit_vault_registry, bid_vault_registry);
    console.log(JSON.stringify(result, (_, v) => (typeof v === "bigint" ? `${v}` : v), 2));
})();
