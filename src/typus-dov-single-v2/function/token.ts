export const WrappedToken: { [key: string]: string } = {
    ETH: "WETH",
    BTC: "WBTC",
    SOL: "WSOL",
};

export const UnwrappedToken: { [key: string]: string } = {
    WETH: "ETH",
    WBTC: "BTC",
    WSOL: "SOL",
};

export const MillionToken: { [key: string]: string } = {
    FUD: "MFUD",
    BLUB: "MBLUB",
};

export const RemoveMillionToken: { [key: string]: string } = {
    MFUD: "FUD",
    MBLUB: "MBLUB",
};

export const LST: { [key: string]: string } = {
    AFSUI: "SUI",
    HASUI: "SUI",
    VSUI: "SUI",
};

export const StableCoin = ["USDC", "USDT", "BUCK", "USDY", "wUSDC"];

export const getTokenName = ({ token, wrapped, million }: { token: string; wrapped?: boolean; million?: boolean }) => {
    let tokenName = token;
    if (wrapped) {
        tokenName = WrappedToken[token] ?? token;
    } else {
        tokenName = UnwrappedToken[token] ?? token;
    }

    return million ? MillionToken[tokenName] ?? tokenName : RemoveMillionToken[tokenName] ?? tokenName;
};
