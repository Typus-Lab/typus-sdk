import * as admin from "./admin/structs";
import * as critbit from "./critbit/structs";
import * as lpPool from "./lp-pool/structs";
import * as oracle from "./oracle/structs";
import * as position from "./position/structs";
import * as stakePool from "./stake-pool/structs";
import * as symbol from "./symbol/structs";
import * as tlp from "./tlp/structs";
import * as trading from "./trading/structs";
import * as treasuryCaps from "./treasury-caps/structs";
import { StructClassLoader } from "../_framework/loader";

export function registerClasses(loader: StructClassLoader) {
    loader.register(admin.Version);
    loader.register(admin.ManagerCap);
    loader.register(admin.FeeInfo);
    loader.register(admin.FeePool);
    loader.register(admin.SendFeeEvent);
    loader.register(critbit.CritbitTree);
    loader.register(critbit.InternalNode);
    loader.register(critbit.Leaf);
    loader.register(treasuryCaps.TreasuryCaps);
    loader.register(tlp.LpRegistry);
    loader.register(tlp.TLP);
    loader.register(oracle.PythPrice);
    loader.register(oracle.PythPriceInfoObject);
    loader.register(lpPool.Config);
    loader.register(lpPool.State);
    loader.register(lpPool.Registry);
    loader.register(lpPool.AddLiquidityTokenEvent);
    loader.register(lpPool.BurnLpEvent);
    loader.register(lpPool.LiquidityPool);
    loader.register(lpPool.LiquidityPoolInfo);
    loader.register(lpPool.MarginConfig);
    loader.register(lpPool.MintLpEvent);
    loader.register(lpPool.NewLiquidityPoolEvent);
    loader.register(lpPool.ResumePoolEvent);
    loader.register(lpPool.ResumeTokenPoolEvent);
    loader.register(lpPool.SpotConfig);
    loader.register(lpPool.SuspendPoolEvent);
    loader.register(lpPool.SuspendTokenPoolEvent);
    loader.register(lpPool.SwapEvent);
    loader.register(lpPool.TokenPool);
    loader.register(lpPool.UpdateFundingInfoEvent);
    loader.register(lpPool.UpdateLiquidityValueEvent);
    loader.register(lpPool.UpdateMarginConfigEvent);
    loader.register(lpPool.UpdateSpotConfigEvent);
    loader.register(symbol.Symbol);
    loader.register(position.OrderFilledEvent);
    loader.register(position.Position);
    loader.register(position.TradingOrder);
    loader.register(stakePool.HarvestEvent);
    loader.register(stakePool.UnsubscribeEvent);
    loader.register(stakePool.ActivateIncentiveTokenEvent);
    loader.register(stakePool.AddIncentiveTokenEvent);
    loader.register(stakePool.DeactivateIncentiveTokenEvent);
    loader.register(stakePool.DepositIncentiveEvent);
    loader.register(stakePool.HarvestPerUserShareEvent);
    loader.register(stakePool.Incentive);
    loader.register(stakePool.IncentiveConfig);
    loader.register(stakePool.IncentiveInfo);
    loader.register(stakePool.LpUserShare);
    loader.register(stakePool.NewStakePoolEvent);
    loader.register(stakePool.RemoveIncentiveTokenEvent);
    loader.register(stakePool.StakeEvent);
    loader.register(stakePool.StakePool);
    loader.register(stakePool.StakePoolConfig);
    loader.register(stakePool.StakePoolInfo);
    loader.register(stakePool.StakePoolRegistry);
    loader.register(stakePool.UnstakeEvent);
    loader.register(stakePool.UpdateIncentiveConfigEvent);
    loader.register(stakePool.UpdateUnlockCountdownTsMsEvent);
    loader.register(stakePool.WithdrawIncentiveEvent);
    loader.register(trading.AddTradingSymbolEvent);
    loader.register(trading.CancelTradingOrderEvent);
    loader.register(trading.CancelTradingOrderWithBidReceiptEvent);
    loader.register(trading.CreateTradingOrderEvent);
    loader.register(trading.CreateTradingOrderWithBidReceiptsEvent);
    loader.register(trading.IncreaseCollateralEvent);
    loader.register(trading.LinkedOrdersInfo);
    loader.register(trading.LiquidateEvent);
    loader.register(trading.ManagerReducePosition);
    loader.register(trading.MarketConfig);
    loader.register(trading.MarketInfo);
    loader.register(trading.MarketRegistry);
    loader.register(trading.Markets);
    loader.register(trading.MatchTradingOrderEvent);
    loader.register(trading.NewMarketsEvent);
    loader.register(trading.ReleaseCollateralEvent);
    loader.register(trading.ResumeMarketEvent);
    loader.register(trading.ResumeTradingSymbolEvent);
    loader.register(trading.SuspendMarketEvent);
    loader.register(trading.SuspendTradingSymbolEvent);
    loader.register(trading.SymbolMarket);
    loader.register(trading.USD);
    loader.register(trading.UpdateFundingRateEvent);
    loader.register(trading.UpdateMarketConfigEvent);
    loader.register(trading.UpdateProtocolFeeShareBpEvent);
}
