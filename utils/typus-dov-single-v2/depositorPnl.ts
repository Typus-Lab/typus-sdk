import { TxHistory } from "../../utils/typus-dov-single-v2/user-history";

export async function getDepositorCashFlows(userHistory: TxHistory[]) {
    let depositorCashFlows = new Map<string, DepositorCashFlow>();

    for (let history of userHistory) {
        const index = history.Index!;

        if (history.Action.startsWith("Harvest")) {
            const [amount, token] = history.Amount?.split(" ")!;
            if (depositorCashFlows.has(index)) {
                let depositorCashFlow = depositorCashFlows.get(index)!;
                let totalHarvest = depositorCashFlow.totalHarvest;
                if (totalHarvest.has(token)) {
                    let sum = totalHarvest.get(token)!;
                    totalHarvest.set(token, sum + Number(amount));
                } else {
                    totalHarvest.set(token, Number(amount));
                }
                depositorCashFlow.totalHarvest = totalHarvest;
                depositorCashFlows.set(index, depositorCashFlow);
            } else {
                let totalHarvest = new Map();
                totalHarvest.set(token, Number(amount));
                let depositorCashFlow: DepositorCashFlow = {
                    D_TOKEN: undefined,
                    totalDeposit: 0,
                    totalWithdraw: 0,
                    totalClaim: 0,
                    totalCompound: 0,
                    netDeposit: undefined,
                    totalHarvest,
                };
                depositorCashFlows.set(index, depositorCashFlow);
            }
        } else if (history.Action.startsWith("Deposit")) {
            const [amount, token] = history.Amount?.split(" ")!;
            if (depositorCashFlows.has(index)) {
                let depositorCashFlow = depositorCashFlows.get(index)!;
                depositorCashFlow.D_TOKEN = token;
                depositorCashFlow.totalDeposit += Number(amount);
                depositorCashFlows.set(index, depositorCashFlow);
            } else {
                let depositorCashFlow: DepositorCashFlow = {
                    D_TOKEN: token,
                    totalDeposit: Number(amount),
                    totalWithdraw: 0,
                    totalClaim: 0,
                    totalCompound: 0,
                    netDeposit: undefined,
                    totalHarvest: new Map(),
                };
                depositorCashFlows.set(index, depositorCashFlow);
            }
        } else if (history.Action.startsWith("Withdraw")) {
            const [amount, token] = history.Amount?.split(" ")!;
            if (depositorCashFlows.has(index)) {
                let depositorCashFlow = depositorCashFlows.get(index)!;
                depositorCashFlow.D_TOKEN = token;
                depositorCashFlow.totalWithdraw += Number(amount);
                depositorCashFlows.set(index, depositorCashFlow);
            } else {
                let depositorCashFlow: DepositorCashFlow = {
                    D_TOKEN: token,
                    totalDeposit: 0,
                    totalWithdraw: Number(amount),
                    totalClaim: 0,
                    totalCompound: 0,
                    netDeposit: undefined,
                    totalHarvest: new Map(),
                };
                depositorCashFlows.set(index, depositorCashFlow);
            }
        } else if (history.Action == "Claim") {
            const [amount, token] = history.Amount?.split(" ")!;
            if (depositorCashFlows.has(index)) {
                let depositorCashFlow = depositorCashFlows.get(index)!;
                depositorCashFlow.D_TOKEN = token;
                depositorCashFlow.totalClaim += Number(amount);
                depositorCashFlows.set(index, depositorCashFlow);
            } else {
                let depositorCashFlow: DepositorCashFlow = {
                    D_TOKEN: token,
                    totalDeposit: 0,
                    totalWithdraw: 0,
                    totalClaim: Number(amount),
                    totalCompound: 0,
                    netDeposit: undefined,
                    totalHarvest: new Map(),
                };
                depositorCashFlows.set(index, depositorCashFlow);
            }
        } else if (history.Action == "Compound") {
            const [amount, token] = history.Amount?.split(" ")!;
            if (depositorCashFlows.has(index)) {
                let depositorCashFlow = depositorCashFlows.get(index)!;
                depositorCashFlow.D_TOKEN = token;
                depositorCashFlow.totalCompound += Number(amount);
                depositorCashFlows.set(index, depositorCashFlow);
            } else {
                let depositorCashFlow: DepositorCashFlow = {
                    D_TOKEN: token,
                    totalDeposit: 0,
                    totalWithdraw: 0,
                    totalClaim: 0,
                    totalCompound: Number(amount),
                    netDeposit: undefined,
                    totalHarvest: new Map(),
                };
                depositorCashFlows.set(index, depositorCashFlow);
            }
        }
    }
    // console.log(depositorCashFlows);

    for (let [index, share] of depositorCashFlows.entries()) {
        share.netDeposit = share.totalDeposit + share.totalCompound - share.totalWithdraw - share.totalClaim;
        depositorCashFlows.set(index, share);
    }

    return depositorCashFlows;
}

interface DepositorCashFlow {
    D_TOKEN: string | undefined;
    totalDeposit: number;
    totalWithdraw: number;
    totalClaim: number;
    totalCompound: number;
    netDeposit: number | undefined;
    totalHarvest: Map<string, number>;
}
