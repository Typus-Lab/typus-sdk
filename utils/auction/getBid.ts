import { JsonRpcProvider } from "@mysten/sui.js";
import { TOKEN_DECIMAL } from "../../constants";
import { Bid, PortfolioVault } from "../portfolio/single-collateral/fetchData";

export async function getBid(
  portfolioVault: PortfolioVault,
  provider: JsonRpcProvider
): Promise<Bid[]> {
  let obj2 = (
    await provider.getDynamicFields({ parentId: portfolioVault.auction.bids })
  ).data;
  let ids = obj2.map((e) => e.objectId);

  let tmp = await provider.multiGetObjects({
    ids,
    options: { showContent: true },
  });

  let bids: Bid[] = tmp.map((e) => {
    //@ts-ignore
    let bidData = e.data?.content.fields.value.fields;

    // console.log(bidData);

    let res: Bid = {
      price: bidData.price,
      size: Number(bidData.size / 10 ** TOKEN_DECIMAL).toString(),
      tsMs: bidData.ts_ms,
      tokenBalance: bidData.balance,
      ownerAddress: bidData.bidder,
    };
    return res;
  });

  return bids;
}
