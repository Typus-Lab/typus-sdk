import { JsonRpcProvider } from "@mysten/sui.js";

export async function getWhiteListFromRegistry(
  registry: string,
  provider: JsonRpcProvider
): Promise<string[]> {
  const registryInfo = await provider.getObject({
    id: registry,
    options: { showContent: true },
  });
  // @ts-ignore
  const whiteListsTable: string =
    // @ts-ignore
    registryInfo.data?.content.fields.authority.fields.whitelist.fields.id.id;
  const whiteListsNodes = (
    await provider.getDynamicFields({ parentId: whiteListsTable })
  ).data;

  const whiteListsTablesId: string[] = whiteListsNodes.map((e) => e.objectId);
  const whiteListsTableAddress = await provider.multiGetObjects({
    ids: whiteListsTablesId,
    options: {
      showContent: true,
    },
  });

  // @ts-ignore
  return whiteListsTableAddress.map((w) => w.data?.content.fields.name);
}
