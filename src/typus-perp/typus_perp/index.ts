// export const PACKAGE_ID = "0x68b590a418f3779994f6bc3de49df4e0ef0b0f77499c2ecb6a8950264d250371";
// export const PUBLISHED_AT = "0x68b590a418f3779994f6bc3de49df4e0ef0b0f77499c2ecb6a8950264d250371";
export const PKG_V1 = "0x68b590a418f3779994f6bc3de49df4e0ef0b0f77499c2ecb6a8950264d250371";

import { TypusConfig } from "src/utils";
import { NETWORK } from "..";

export const PUBLISHED_AT = async () => {
    return (await TypusConfig.default(NETWORK, null)).package.perp.perp;
};
