import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

(async () => {
})();

function migrateDepositVault(config, tx, input: { index: string; migrateDepositToken: boolean; migrateBidToken: boolean }) {
    let takeDepositVaultResult = takeDepositVault(config, tx, { index: input.index });
    if (input.migrateDepositToken) {
        let takeDepositVaultDepositTokenResult = takeDepositVaultDepositToken(config, tx, {
            typeArguments: [config.token.wusdc, config.token.usdc],
            depositVault: takeDepositVaultResult.depositVault,
        });
        let balance = takeDepositVaultDepositTokenResult.balance; // TODO: swap
        putDepositVaultDepositToken(config, tx, {
            depositVault: takeDepositVaultResult.depositVault,
            takeDepositVaultDepositTokenResult,
            balance,
        });
    }
    if (input.migrateBidToken) {
        let takeDepositVaultBidTokenResult = takeDepositVaultBidToken(config, tx, {
            typeArguments: [config.token.wusdc, config.token.usdc],
            depositVault: takeDepositVaultResult.depositVault,
        });
        let balance = takeDepositVaultBidTokenResult.balance; // TODO: swap
        putDepositVaultBidToken(config, tx, {
            depositVault: takeDepositVaultResult.depositVault,
            takeDepositVaultBidTokenResult,
            balance,
        });
    }
    putDepositVault(config, tx, { takeDepositVaultResult });
}

function migrateBidVault(config, tx, input: { index: string }) {
    let takeBidVaultResult = takeBidVault(config, tx, { index: input.index });
    let takeBidVaultDepositTokenResult = takeBidVaultDepositToken(config, tx, {
        typeArguments: [config.token.wusdc, config.token.usdc],
        bidVault: takeBidVaultResult.bidVault,
    });
    let balance = takeBidVaultDepositTokenResult.balance; // TODO: swap
    putBidVaultDepositToken(config, tx, {
        bidVault: takeBidVaultResult.bidVault,
        takeBidVaultDepositTokenResult,
        balance,
    });
    putBidVault(config, tx, { takeBidVaultResult });
}

function migrateSettledBidVault(config, tx, input: { id: string }) {
    let takeBidVaultResult = takeSettledBidVault(config, tx, { id: input.id });
    let takeBidVaultDepositTokenResult = takeBidVaultDepositToken(config, tx, {
        typeArguments: [config.token.wusdc, config.token.usdc],
        bidVault: takeBidVaultResult.bidVault,
    });
    let balance = takeBidVaultDepositTokenResult.balance; // TODO: swap
    putBidVaultDepositToken(config, tx, {
        bidVault: takeBidVaultResult.bidVault,
        takeBidVaultDepositTokenResult,
        balance,
    });
    putBidVault(config, tx, { takeBidVaultResult });
}

interface TakeDepositVaultResult {
    depositVault;
    receipt;
}
function takeDepositVault(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        index: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_registry_authorized_entry::take_deposit_vault`,
        typeArguments: [],
        arguments: [tx.object(config.registry.dov.dovSingle), tx.pure(input.index)],
    });

    return { depositVault: result[0], receipt: result[1] } as TakeDepositVaultResult;
}
function putDepositVault(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        takeDepositVaultResult: TakeDepositVaultResult;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_registry_authorized_entry::put_deposit_vault`,
        typeArguments: [],
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(input.takeDepositVaultResult.depositVault),
            tx.object(input.takeDepositVaultResult.receipt),
        ],
    });

    return { depositVault: result[0], receipt: result[1] } as TakeDepositVaultResult;
}

interface TakeBidVaultResult {
    bidVault;
    receipt;
}
function takeBidVault(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        index: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_registry_authorized_entry::take_bid_vault`,
        typeArguments: [],
        arguments: [tx.object(config.registry.dov.dovSingle), tx.pure(input.index)],
    });

    return { bidVault: result[0], receipt: result[1] } as TakeBidVaultResult;
}
function takeSettledBidVault(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        id: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_registry_authorized_entry::take_settled_bid_vault`,
        typeArguments: [],
        arguments: [tx.object(config.registry.dov.dovSingle), tx.pure(input.id)],
    });

    return { bidVault: result[0], receipt: result[1] } as TakeBidVaultResult;
}
function putBidVault(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        takeBidVaultResult: TakeBidVaultResult;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_registry_authorized_entry::put_bid_vault`,
        typeArguments: [],
        arguments: [
            tx.object(config.registry.dov.dovSingle),
            tx.object(input.takeBidVaultResult.bidVault),
            tx.object(input.takeBidVaultResult.receipt),
        ],
    });

    return { bidVault: result[0], receipt: result[1] } as TakeBidVaultResult;
}

interface TakeDepositVaultDepositTokenResult {
    balance;
    receipt;
}
function takeDepositVaultDepositToken(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        depositVault;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.framework}::vault::take_deposit_vault_deposit_token`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(input.depositVault)],
    });

    return { balance: result[0], receipt: result[1] } as TakeDepositVaultDepositTokenResult;
}
function putDepositVaultDepositToken(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        depositVault;
        takeDepositVaultDepositTokenResult: TakeDepositVaultDepositTokenResult;
        balance;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.framework}::vault::put_deposit_vault_deposit_token`,
        typeArguments: [],
        arguments: [tx.object(input.depositVault), tx.object(input.takeDepositVaultDepositTokenResult.receipt), tx.object(input.balance)],
    });

    return { depositVault: result[0], receipt: result[1] } as TakeDepositVaultResult;
}

interface TakeDepositVaultBidTokenResult {
    balance;
    receipt;
}
function takeDepositVaultBidToken(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        depositVault;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.framework}::vault::take_deposit_vault_bid_token`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(input.depositVault)],
    });

    return { balance: result[0], receipt: result[1] } as TakeDepositVaultBidTokenResult;
}
function putDepositVaultBidToken(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        depositVault;
        takeDepositVaultBidTokenResult: TakeDepositVaultBidTokenResult;
        balance;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.framework}::vault::put_deposit_vault_bid_token`,
        typeArguments: [],
        arguments: [tx.object(input.depositVault), tx.object(input.takeDepositVaultBidTokenResult.receipt), tx.object(input.balance)],
    });

    return { depositVault: result[0], receipt: result[1] } as TakeDepositVaultResult;
}

interface TakeBidVaultDepositTokenResult {
    balance;
    receipt;
}
function takeBidVaultDepositToken(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        typeArguments: string[];
        bidVault;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.framework}::vault::take_bid_vault_deposit_token`,
        typeArguments: input.typeArguments,
        arguments: [tx.object(input.bidVault)],
    });

    return { balance: result[0], receipt: result[1] } as TakeBidVaultDepositTokenResult;
}
function putBidVaultDepositToken(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        bidVault;
        takeBidVaultDepositTokenResult: TakeBidVaultDepositTokenResult;
        balance;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.framework}::vault::put_bid_vault_deposit_token`,
        typeArguments: [],
        arguments: [tx.object(input.bidVault), tx.object(input.takeBidVaultDepositTokenResult.receipt), tx.object(input.balance)],
    });

    return { bidVault: result[0], receipt: result[1] } as TakeBidVaultResult;
}
