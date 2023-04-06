import { JsonRpcProvider } from "@mysten/sui.js";

export async function getTypeArgumentFromToken(token: string, provider: JsonRpcProvider) {
  try {
    const tokenInfo = await provider.getObject({
      id: token,
      options: { showContent: true },
    });

    if (tokenInfo.error !== undefined) {
      console.log("obj not exists, but is:");
      console.log(tokenInfo.error.tag);
      return;
    }
    1;
    console.log(tokenInfo);

    //@ts-ignore
    let typeArgument: string = tokenInfo.data.content.type;
    console.log(typeArgument);
    typeArgument = typeArgument.split("<")[1];
    typeArgument = typeArgument.split(">")[0];
    return typeArgument;
  } catch (e) {
    console.error(e);
  }
}
