import { JsonRpcProvider, Connection } from "@mysten/sui.js";
import { getPortfolioVaults } from "../../utils/portfolio/single-collateral/portfolio-vault";

const connection = new Connection({ fullnode: "https://rpc-testnet.suiscan.xyz:443" });
// const connection = new Connection({ fullnode: "https://fullnode.testnet.sui.io:443" });
const provider = new JsonRpcProvider(connection); //for read only operations
const registry = "0x2cd75564b22f6ce4232d59d1780c13cfb95d4b9e859c937c07bd84cda89461e0";
const deposit_vault_registry = "0xa8c34c8ce2acc207c34118aa86e14ad40f50a35f4b40d1013d87c6790b934100";
const bid_vault_registry = "0x3961d77242ab5aa9f667feac353ffcdcd22f76eca8bbe6bafd06c1802695a88e";
(async () => {
    let result = await getPortfolioVaults(provider, registry, deposit_vault_registry, bid_vault_registry);
    console.log(JSON.stringify(result, (_, v) => typeof v === 'bigint' ? `${v}` : v, 2));
})();