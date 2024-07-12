export declare const WrappedToken: {
    [key: string]: string;
};
export declare const UnwrappedToken: {
    [key: string]: string;
};
export declare const MillionToken: {
    [key: string]: string;
};
export declare const RemoveMillionToken: {
    [key: string]: string;
};
export declare const LST: {
    [key: string]: string;
};
export declare const StableCoin: string[];
export declare const getTokenName: ({ token, wrapped, million }: {
    token: string;
    wrapped?: boolean;
    million?: boolean;
}) => string;
