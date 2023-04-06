import { JsonRpcProvider } from "@mysten/sui.js";
import { TOKEN_DECIMAL } from "../../constants";
import { Bid } from "../fetchData";

export async function getBid(vault: string, provider: JsonRpcProvider): Promise<Bid[]> {
  let obj = await provider.getObject({ id: vault });
  if (obj.error) {
    console.log("obj not exists");
    return [];
  }

  //@ts-ignore
  let bidTable: string = obj.details.data.fields.value.fields.auction.fields.bids.fields.id.id;
  let obj2 = (await provider.getDynamicFields({ parentId: bidTable })).data;

  let ids = obj2.map((e) => e.objectId);

  let tmp = await provider.multiGetObjects({
    ids,
    options: { showContent: true },
  });

  let bids: Bid[] = tmp.map((e) => {
    //@ts-ignore
    let bidData = e.data?.content.fields.value.fields;

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
