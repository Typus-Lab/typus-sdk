import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("TESTNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let transaction = new Transaction();
    // migrateDepositVault(config, transaction, { index: "0", migrateDepositToken: false, migrateBidToken: false });

    let res = await provider.signAndExecuteTransaction({ signer, transaction });
    console.log(res);
})();

function migrateDepositVault(config, tx, input: { index: string; migrateDepositToken: boolean; migrateBidToken: boolean }) {
    let takeDepositVaultResult = takeDepositVault(config, tx, { index: input.index });
    if (input.migrateDepositToken) {
        let takeDepositVaultDepositTokenResult = takeDepositVaultDepositToken(config, tx, {
            typeArguments: [config.token.wusdc, config.token.usdc],
            depositVault: takeDepositVaultResult.depositVault,
        });
        let balance = swapUsdc(config, tx, { balance: takeDepositVaultDepositTokenResult.balance });
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
        let balance = swapUsdc(config, tx, { balance: takeDepositVaultBidTokenResult.balance });
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
    let balance = swapUsdc(config, tx, { balance: takeBidVaultDepositTokenResult.balance });
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
    let balance = swapUsdc(config, tx, { balance: takeBidVaultDepositTokenResult.balance });
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
    tx: Transaction,
    input: {
        index: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_registry_authorized_entry::take_deposit_vault`,
        typeArguments: [],
        arguments: [tx.object(config.registry.dov.dovSingle), tx.pure.u64(input.index)],
    });

    return { depositVault: result[0], receipt: result[1] } as TakeDepositVaultResult;
}
function putDepositVault(
    config: TypusConfig,
    tx: Transaction,
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
    tx: Transaction,
    input: {
        index: string;
    }
) {
    let result = tx.moveCall({
        target: `${config.package.dovSingle}::tds_registry_authorized_entry::take_bid_vault`,
        typeArguments: [],
        arguments: [tx.object(config.registry.dov.dovSingle), tx.pure.u64(input.index)],
    });

    return { bidVault: result[0], receipt: result[1] } as TakeBidVaultResult;
}
function takeSettledBidVault(
    config: TypusConfig,
    tx: Transaction,
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
    tx: Transaction,
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
    tx: Transaction,
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
    tx: Transaction,
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
    tx: Transaction,
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
    tx: Transaction,
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
    tx: Transaction,
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
    tx: Transaction,
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

function swapUsdc(
    config: TypusConfig,
    tx: Transaction,
    input: {
        balance;
    }
) {
    let coin = tx.moveCall({
        target: `0x0::circle_usdc::swap`,
        typeArguments: [config.token.wusdc],
        arguments: [tx.object("registry"), tx.object(input.balance)],
    });
    let balance = tx.moveCall({
        target: `0x2::coin::into_balance`,
        typeArguments: [config.token.usdc],
        arguments: [tx.object(coin)],
    });

    return balance;
}
