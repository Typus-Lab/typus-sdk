
import { JsonRpcProvider, Network } from '@mysten/sui.js';
const provider = new JsonRpcProvider(Network.DEVNET); //for read only operations
const decode = (str: string): string => Buffer.from(str, 'base64').toString('binary');

export interface SubVaults {
    rolling: string;
    maker: string;
    regular: string;
}

// typus_portfolio::portfolio

export interface PortfolioVault {
    vaultId: string;
    vaultIdx: string;
    asset: string;

    optionType: string;
    config: Config;
    depositorVault: DVault;
    bidderVault: BVault;
    auction: Auction;
    prev: string;
    next: string;
    totalBidSize: string;
    deliveryInfo: DeliveryInfo;
    owner: string;

    //  status:string; // Upcoming Or Active 
    tvl: string;//regular_sub_vault balance + rolling_sub_vault balance
    //  apy:string
    //  Capacity//not yet
    vaultBidPrice: string;
}

export interface Config {
    period: string;// daily:0 weekly:1 monthly:2
    activationTsMs: string
    expirationTsMs: string;
    dTokenDecimal: string;
    bTokenDecimal: string;
    oTokenDecimal: string;
    capacity: string,
    leverage: string,
    vaultConfig: VaultConfig,
    nextVaultConfig: VaultConfig,
}

export interface PayoffConfig {
    strikePct: string,
    weight: string;
    isBuyer: string;
    strike: string;
}

export interface VaultConfig {
    payoffConfig: PayoffConfig[];
    strikeIncrement: string,
    lotSize: string,
    decaySpeed: string,
    initialPrice: string,
    finalPrice: string,
    auctionDurationInMs: string,
}

export interface DeliveryInfo {
    deliveryPrice: string;
    deliverySize: string;
    // tsMs: string;
}

// typus_dov::vault

export interface DVault {
    ableToDeposit: boolean;
    ableToWithdraw: boolean;
    regularSubVault: SubVault;
    rollingSubVault: SubVault;
    refundSubVault: SubVault;
}

export interface BVault {
    bidder_sub_vault: SubVault,
    premium_sub_vault: SubVault,
    performance_fee_sub_vault: SubVault,
}

export interface SubVault {
    balance: string,
    shareSupply: string,
    // user_shares
}


// typus_dov::dutch

export interface Auction {
    startTsMs: string;
    endTsMs: string;
    priceConfig: PriceConfig;
    index: string;
    // bids
    // ownerships
}

export interface PriceConfig {
    decaySpeed: string;
    initialPrice: string;
    finalPrice: string;
}

export interface Bid {
    price: string;
    size: string;
    tsMs: string;
    tokenBalance: string;
    ownerAddress: string;
}



//new version: getVaultDataFromRegistry()
export async function getCoveredCallVaultsFromRegistry(registry: string): Promise<any> {
    console.log("registry: " + registry)
    let coveredCallVaults: any[] = (await provider.getDynamicFields(registry)).data
    console.log("under the registry, there are " + coveredCallVaults.length + " covered call vaults")
    return coveredCallVaults
}

export async function getTableFromCoveredCallVault(coveredCallVault: string): Promise<any> {
    console.log("coveredCallVault: " + coveredCallVault)
    let tmp: any = await provider.getObject(coveredCallVault)
    if (tmp.status != "Exists") {
        console.log("obj not exists")
        return
    }
    //@ts-ignore
    let tableUnderCoveredCallVault: string = tmp.details.data.fields.value.fields.vault.fields.sub_vaults.fields.id.id
    console.log("table : " + tableUnderCoveredCallVault)
    return tableUnderCoveredCallVault
}

export async function getSubVaultsFromTable(tableUnderCoveredCallVault: string): Promise<SubVaults> {
    let subVaults = (await provider.getDynamicFields(tableUnderCoveredCallVault)).data
    console.log("there are " + subVaults.length + " sub vault under table, representing rolling, regular and maker")
    let result = {} as SubVaults;
    for (let subVault of subVaults) {
        let txn = await provider.getObject(subVault.objectId)
        if (txn.status != "Exists") {
            console.log("obj not exists")
            return {} as SubVaults
        }
        //@ts-ignore
        let name = decode(txn.details.data.fields.name)//rolling / regular / maker
        //@ts-ignore
        result[name] = txn.details.data.fields.id.id
    }
    console.log("sub vaults:")
    console.log(result)
    return result
}

export async function getTableUnderSubVault(subVault: string): Promise<string> {
    console.log("sub vault: " + subVault)
    let tmp = await provider.getObject(subVault)
    if (tmp.status != "Exists") {
        console.log("obj not exists")
        return ""
    }
    //@ts-ignore
    let table: string = tmp.details.data.fields.value.fields.user_shares.fields.nodes.fields.id.id
    console.log("table under sub vault: ", table);
    return table
}

export async function getLinkedListNodesFromTable(table: string): Promise<any[]> {
    let linkedListNodes: any[] = (await provider.getDynamicFields(table)).data
    console.log("there are " + linkedListNodes.length + " linked list nodes in table")
    return linkedListNodes
}

export async function getUserDataFromLinkedListNode(linkedListNode: string): Promise<any> {
    let tmp = await provider.getObject(linkedListNode)
    if (tmp.status != "Exists") {
        console.log("obj not exists")
        return
    }
    //@ts-ignore
    let usersData: any = tmp.details.data.fields
    console.log("users data from linked list node:")
    console.log(usersData)
    return usersData
}