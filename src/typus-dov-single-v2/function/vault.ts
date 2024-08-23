import { Info } from "src/typus-dov-single-v2";
import { typeArgsToAssets } from "src/constants";

export const Period: { [key: number]: string } = {
    0: "daily",
    1: "weekly",
    2: "monthly",
    3: "hourly",
};

export const AbbrStrategyName: { [key: string]: string } = {
    0: "Call",
    1: "Put",
    2: "Call Spread",
    4: "Capped Call",
    5: "Capped Put",
    6: "Capped Call",
};

export const parseAssets = (info: Info) => {
    const { depositToken: dToken, bidToken: bToken, settlementBase: oToken } = info;

    return typeArgsToAssets([dToken, bToken, oToken]);
};
