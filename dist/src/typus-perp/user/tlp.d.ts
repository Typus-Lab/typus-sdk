import { TransactionBlock } from "@mysten/sui.js/transactions";
import { LiquidityPool } from "../lp-pool/structs";
import { PythClient } from "src/utils/pyth/pythClient";
import { TOKEN } from "src/constants/token";
export declare function mintStakeLp(config: {
    REGISTRY: {
        LP_POOL_REGISTRY: string;
        TREASURY_CAPS: string;
        STAKE_POOL_REGISTRY: string;
    };
    OBJECT: {
        TYPUS_PERP_VERSION: string;
    };
    TOKEN: {
        TLP: string;
    };
}, input: {
    pythClient: PythClient;
    tx: TransactionBlock;
    lpPool: LiquidityPool;
    coins: string[];
    cTOKEN: TOKEN;
    amount: string;
    userShareId: string | null;
}): Promise<TransactionBlock>;
export declare function unstakeBurn(config: {
    REGISTRY: {
        LP_POOL_REGISTRY: string;
        TREASURY_CAPS: string;
        STAKE_POOL_REGISTRY: string;
    };
    OBJECT: {
        TYPUS_PERP_VERSION: string;
    };
    TOKEN: {
        TLP: string;
    };
}, input: {
    pythClient: PythClient;
    tx: TransactionBlock;
    lpPool: LiquidityPool;
    cTOKEN: TOKEN;
    userShareId: string;
    share: string | null;
    user: string;
}): Promise<TransactionBlock>;
export declare function swap(config: {
    REGISTRY: {
        LP_POOL_REGISTRY: string;
        TREASURY_CAPS: string;
        STAKE_POOL_REGISTRY: string;
    };
    OBJECT: {
        TYPUS_PERP_VERSION: string;
    };
    TOKEN: {
        TLP: string;
    };
}, input: {
    pythClient: PythClient;
    tx: TransactionBlock;
    coins: string[];
    FROM_TOKEN: TOKEN;
    TO_TOKEN: TOKEN;
    amount: string;
    user: string;
}): Promise<TransactionBlock>;
export declare function unsubscribe(config: {
    REGISTRY: {
        STAKE_POOL_REGISTRY: string;
    };
    OBJECT: {
        TYPUS_PERP_VERSION: string;
    };
    TOKEN: {
        TLP: string;
    };
}, input: {
    tx: TransactionBlock;
    userShareId: string;
    share: string | null;
}): Promise<TransactionBlock>;
export declare function harvest(config: {
    REGISTRY: {
        STAKE_POOL_REGISTRY: string;
    };
    OBJECT: {
        TYPUS_PERP_VERSION: string;
    };
}, input: {
    tx: TransactionBlock;
    userShareId: string;
}): Promise<TransactionBlock>;
