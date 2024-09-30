import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getRaiseFundTx } from "src/typus-dov-single-v2";
import { SuiClient } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions";
import { TypusConfig } from "src/utils";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(process.env.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });
})();

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

    return [tx, { depositVault: result[0], receipt: result[1] } as TakeDepositVaultResult];
}
function putDepositVault(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        index: string;
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

    return [tx, { depositVault: result[0], receipt: result[1] } as TakeDepositVaultResult];
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

    return [tx, { bidVault: result[0], receipt: result[1] } as TakeBidVaultResult];
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

    return [tx, { bidVault: result[0], receipt: result[1] } as TakeBidVaultResult];
}
function putBidVault(
    config: TypusConfig,
    tx: TransactionBlock,
    input: {
        index: string;
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

    return [tx, { bidVault: result[0], receipt: result[1] } as TakeBidVaultResult];
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

    return [tx, { balance: result[0], receipt: result[1] } as TakeDepositVaultDepositTokenResult];
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

    return [tx, { depositVault: result[0], receipt: result[1] } as TakeDepositVaultResult];
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

    return [tx, { balance: result[0], receipt: result[1] } as TakeDepositVaultBidTokenResult];
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

    return [tx, { depositVault: result[0], receipt: result[1] } as TakeDepositVaultResult];
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

    return [tx, { balance: result[0], receipt: result[1] } as TakeBidVaultDepositTokenResult];
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

    return [tx, { bidVault: result[0], receipt: result[1] } as TakeBidVaultResult];
}
