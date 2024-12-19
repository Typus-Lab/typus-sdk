// export const PACKAGE_ID = "0xe4b92f096c1b6fdcd41e576ed7716ff5c3985aa45b9ef17191de0b3ca2746a35";
// export const PUBLISHED_AT = "0xe4b92f096c1b6fdcd41e576ed7716ff5c3985aa45b9ef17191de0b3ca2746a35";
export const PKG_V1 = "0xe4b92f096c1b6fdcd41e576ed7716ff5c3985aa45b9ef17191de0b3ca2746a35";

import { TypusConfig } from "src/utils";
import { NETWORK } from "..";

export const PUBLISHED_AT = async () => {
    return (await TypusConfig.default(NETWORK, null)).package.perp.stakePool;
};
