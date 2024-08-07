import * as airdrop from "./airdrop/structs";
import * as bigVector from "./big-vector/structs";
import * as critbit from "./critbit/structs";
import * as ecosystem from "./ecosystem/structs";
import * as leaderboard from "./leaderboard/structs";
import * as linkedObjectTable from "./linked-object-table/structs";
import * as linkedSet from "./linked-set/structs";
import * as tgld from "./tgld/structs";
import * as user from "./user/structs";
import {StructClassLoader} from "../../../_framework/loader";

export function registerClasses(loader: StructClassLoader) { loader.register(ecosystem.Version);
loader.register(ecosystem.ManagerCap);
loader.register(ecosystem.FeeInfo);
loader.register(ecosystem.FeePool);
loader.register(ecosystem.SendFeeEvent);
loader.register(bigVector.BigVector);
loader.register(bigVector.Slice);
loader.register(airdrop.Airdrop);
loader.register(airdrop.AirdropInfo);
loader.register(airdrop.ClaimAirdropEvent);
loader.register(airdrop.RemoveAirdropEvent);
loader.register(airdrop.SetAirdropEvent);
loader.register(airdrop.TypusAirdropRegistry);
loader.register(critbit.CritbitTree);
loader.register(critbit.InternalNode);
loader.register(critbit.Leaf);
loader.register(linkedSet.Node);
loader.register(linkedSet.LinkedSet);
loader.register(linkedObjectTable.Node);
loader.register(linkedObjectTable.LinkedObjectTable);
loader.register(leaderboard.ActivateLeaderboardEvent);
loader.register(leaderboard.DeactivateLeaderboardEvent);
loader.register(leaderboard.ExtendLeaderboardEvent);
loader.register(leaderboard.Leaderboard);
loader.register(leaderboard.RemoveLeaderboardEvent);
loader.register(leaderboard.ScoreEvent);
loader.register(leaderboard.TypusLeaderboardRegistry);
loader.register(tgld.BurnEvent);
loader.register(tgld.MintEvent);
loader.register(tgld.TGLD);
loader.register(tgld.TgldRegistry);
loader.register(user.AddAccumulatedTgldAmount);
loader.register(user.AddTailsExpAmount);
loader.register(user.Metadata);
loader.register(user.RemoveTailsExpAmount);
loader.register(user.TypusUserRegistry);
 }
