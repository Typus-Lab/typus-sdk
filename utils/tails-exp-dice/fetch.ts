// import { SuiClient } from "@mysten/sui.js/dist/cjs/client";
// import { JsonRpcProvider } from "@mysten/sui.js/dist/cjs/providers/json-rpc-provider";
import { SuiClient, SuiEventFilter } from "@mysten/sui.js/client";
import { assetToDecimal, typeArgToAsset } from "../token";

export async function getPlaygrounds(provider: SuiClient, diceRegistry: string) {
    const playgroundIds = (await provider.getDynamicFields({ parentId: diceRegistry })).data
        .filter((a) => a.objectType.endsWith("Playground"))
        .sort((a, b) => Number(a.name.value) - Number(b.name.value))
        .map((x) => x.objectId as string);

    // console.log(playgroundIds);

    const objects = await provider.multiGetObjects({
        ids: playgroundIds,
        options: { showContent: true },
    });

    const result = objects
        // @ts-ignore
        .filter((object) => object.data?.content?.type.endsWith("Playground"))
        .map((object) => {
            // @ts-ignore
            const fields = object.data?.content.fields;
            // console.log(fields);

            const opened_games = fields.opened_games.fields.contents.reduce((acc, curr) => {
                acc.set(curr.fields.key, curr.fields.value.fields as Game);
                return acc;
            }, new Map<number, Game>());
            const game_config = fields.game_config.fields as GameConfig;

            // console.log(opened_games);
            // console.log(game_config);

            const playground: Playground = {
                id: fields.id.id,
                house_whitelist: fields.house_whitelist,
                public_key: fields.public_key,
                num_of_games: fields.num_of_games,
                stake_token: fields.stake_token.fields.name,
                opened_games,
                game_config,
                is_active: fields.is_active,
            };
            // console.log(playground);
            return playground;
        });

    return result;
}

export interface Playground {
    id: string;
    house_whitelist: string[];
    public_key: string; // Public key used to verify the beacon produced by the back-end.
    num_of_games: string; // use for creating vrf_input
    stake_token: string;
    opened_games: Map<string, Game>; // <address, Game>
    game_config: GameConfig;
    is_active: boolean;
}

export interface GameConfig {
    max_stake: string;
    min_stake: string;
    stake_lot_size: string;
    base_exp_divisor: string; // e.g. 1_000_000_000, so 10^9 Mist SUI => 1 exp if odd = 1
    losses_multiplier_bp: string;
    critical_hits_multiplier_bp: string;
}

export interface Game {
    game_id: string;
    player: string;
    stake_amount: string;
    guess_1: string | null;
    larger_than_1: boolean | null;
    vrf_input_1: number[] | null;
    guess_2: string | null;
    larger_than_2: boolean | null;
    vrf_input_2: number[] | null;
}

export async function getHistory(provider: SuiClient, dicePackage: string, playgrounds: Playground[]): Promise<DrawDisplay[]> {
    const eventFilter: SuiEventFilter = {
        MoveEventType: `${dicePackage}::tails_exp::Draw`,
    };

    var result = await provider.queryEvents({ query: eventFilter, order: "descending" });
    // console.log(result);

    var history = await parseHistory(result.data, playgrounds);

    while (result.hasNextPage && history.length <= 60) {
        result = await provider.queryEvents({ query: eventFilter, order: "descending", cursor: result.nextCursor });
        const nextPage = await parseHistory(result.data, playgrounds);
        history = history.concat(nextPage);
    }

    return history;
}

export async function waitHistory(provider: SuiClient, dicePackage: string, onMessage) {
    const eventFilter: SuiEventFilter = {
        MoveEventType: `${dicePackage}::tails_exp::Draw`,
    };
    const unsubscribe = await provider.subscribeEvent({
        filter: eventFilter,
        onMessage,
    });

    return unsubscribe;
}

export async function parseHistory(datas, playgrounds: Playground[]): Promise<DrawDisplay[]> {
    const result = datas.map((event) => {
        const drawEvent = event.parsedJson as DrawEvent;
        drawEvent.timestampMs = event.timestampMs;

        const playground = playgrounds[Number(drawEvent.index)];

        const coinType = "0x" + playground.stake_token;
        const asset = typeArgToAsset(coinType);
        const decimal = assetToDecimal(asset)!;

        const guess_1 = (drawEvent.larger_than_1 ? `> ` : `< `) + `${Number(drawEvent.guess_1) / 100}`;
        const guess_2 = (drawEvent.larger_than_2 ? `> ` : `< `) + `${Number(drawEvent.guess_2) / 100}`;
        var result_1 = `${Number(drawEvent.answer_1) / 100}`;
        switch (drawEvent.result_1) {
            case "0":
                result_1 += " W";
                break;
            case "1":
                result_1 += " L";
                break;
            case "2":
                result_1 += " C";
                break;
        }
        var result_2 = `${Number(drawEvent.answer_2) / 100}`;
        switch (drawEvent.result_2) {
            case "0":
                result_2 += " W";
                break;
            case "1":
                result_2 += " L";
                break;
            case "2":
                result_2 += " C";
                break;
        }

        const stake_amount = Number(drawEvent.stake_amount) / 10 ** decimal;
        const amount = stake_amount > 1000000 ? `${stake_amount / 1000000}m` : stake_amount;

        const display: DrawDisplay = {
            game_id: drawEvent.game_id,
            player: drawEvent.player,
            guess_1,
            guess_2,
            result_1,
            result_2,
            bet_amount: `${amount} ${asset}`,
            exp: `${Number(drawEvent.exp)} EXP`,
            timestampMs: drawEvent.timestampMs,
        };

        return display;
    });

    return result;
}

export interface DrawEvent {
    answer_1: string;
    answer_2: string;
    exp: string;
    game_id: string;
    guess_1: string;
    guess_2: string;
    index: string;
    larger_than_1: boolean;
    larger_than_2: boolean;
    player: string;
    public_key: number[];
    result_1: string; // 0 = win, 1 = lose, 2 = critical hit
    result_2: string;
    signature_1: number[];
    signature_2: number[];
    signer: string;
    stake_amount: string;
    timestampMs: string;
}

export interface DrawDisplay {
    game_id: string;
    player: string;
    guess_1: string;
    guess_2: string;
    result_1: string;
    result_2: string;
    bet_amount: string;
    exp: string;
    timestampMs: string;
}

export interface LeaderBoard {
    player: string;
    total_bet_amount: number;
    total_earn_exp: number;
}

export async function getLeaderBoard(drawDisplays: DrawDisplay[]): Promise<LeaderBoard[]> {
    let leaderBoard: LeaderBoard[] = [];

    for (let drawDisplay of drawDisplays) {
        let i = leaderBoard.findIndex((x) => x.player == drawDisplay.player);
        if (i == -1) {
            leaderBoard.push({
                player: drawDisplay.player,
                total_bet_amount: Number(drawDisplay.bet_amount.split(" ")[0]),
                total_earn_exp: Number(drawDisplay.exp.split(" ")[0]),
            } as LeaderBoard);
        } else {
            leaderBoard[i].total_bet_amount += Number(drawDisplay.bet_amount.split(" ")[0]);
            leaderBoard[i].total_earn_exp += Number(drawDisplay.exp.split(" ")[0]);
        }
    }

    return leaderBoard;
}

export interface ProfitSharing {
    level_profits: string[];
    level_users: string[];
    pool: string;
    remaining: string;
    total: string;
    tokenType: string;
}

export async function getProfitSharing(provider: SuiClient, diceProfitSharing: string) {
    const object = await provider.getObject({
        id: diceProfitSharing,
        options: { showContent: true },
    });

    // @ts-ignore
    const type: string = object.data?.content.type;
    const tokenType = type.split("<").at(-1)?.replace(">>", "")!;

    // @ts-ignore
    const result = object.data?.content?.fields.value.fields as ProfitSharing;
    result.tokenType = tokenType;

    return result;
}

export function calculateLevelReward(totalRewards: number, levelShares: number[], numOfHolders: number[]): number[] {
    // Step 1: Calculate original level rewards (per holder)
    const totalShares: number = levelShares.reduce((acc, share) => acc + share, 0);
    const originalRewardPerHolder: number[] = levelShares.map((levelShare, index) => {
        const num: number = numOfHolders[index];
        const levelRewardPerHolder: number = num > 0 ? (totalRewards * levelShare) / totalShares / num : 0;
        return Math.floor(levelRewardPerHolder);
    });

    const originalLevelRewards: number[] = originalRewardPerHolder.map((reward, index) => reward * numOfHolders[index]);
    const distributedRewards: number = originalLevelRewards.reduce((acc, reward) => acc + reward, 0);
    const emptyLevelRewards: number = totalRewards - distributedRewards;
    // console.log("Step 1 - ", originalRewardPerHolder);

    // Step 2: Distribute rewards from empty levels
    let reversedOriginalRewardPerHolder: number[] = originalRewardPerHolder.slice().reverse();
    let reversedNumOfHolders: number[] = numOfHolders.slice().reverse();
    let reversedScaledRewardPerHolder: number[] = [];
    if (emptyLevelRewards > 0) {
        let undistributedRewards: number = emptyLevelRewards;
        let uncalculatedDistributedRewards: number = distributedRewards;
        reversedScaledRewardPerHolder = reversedOriginalRewardPerHolder.map((rewardPerHolder, index) => {
            const num: number = reversedNumOfHolders[index];
            const scaledRewardPerHolder: number =
                num > 0
                    ? uncalculatedDistributedRewards > 0
                        ? (rewardPerHolder * (uncalculatedDistributedRewards + undistributedRewards)) / uncalculatedDistributedRewards
                        : rewardPerHolder
                    : 0;

            undistributedRewards -= (scaledRewardPerHolder - rewardPerHolder) * num;
            uncalculatedDistributedRewards -= rewardPerHolder * num;
            return Math.floor(scaledRewardPerHolder);
        });
    } else {
        reversedScaledRewardPerHolder = reversedOriginalRewardPerHolder.slice();
    }
    // let scaledRewardPerHolder: number[] = reversedScaledRewardPerHolder.slice().reverse();
    // console.log("Step 2 - ", scaledRewardPerHolder);

    // Step 3: Capped level reward
    let reversedCappedRewardPerHolder: number[] = [reversedOriginalRewardPerHolder[0]];
    var tempHighLevelReward: number = 0;
    reversedScaledRewardPerHolder.forEach((highLevelReward, index) => {
        const lowLevelReward: number = reversedScaledRewardPerHolder[index + 1] || 0;
        tempHighLevelReward =
            highLevelReward > 0
                ? tempHighLevelReward > 0
                    ? Math.min(highLevelReward, tempHighLevelReward)
                    : highLevelReward
                : tempHighLevelReward;
        reversedCappedRewardPerHolder.push(tempHighLevelReward > 0 ? Math.min(lowLevelReward, tempHighLevelReward) : lowLevelReward);
    });
    reversedCappedRewardPerHolder.pop();
    let cappedRewardPerHolder: number[] = reversedCappedRewardPerHolder.slice().reverse();
    // console.log("Step 3 - ", cappedRewardPerHolder);

    // Step 4: Distribute capped reward from Step 3 into each level
    const distributedRewardsStep4: number = reversedCappedRewardPerHolder.reduce(
        (acc, reward, index) => acc + reward * reversedNumOfHolders[index],
        0
    );
    var undistributedRewardsStep4: number = totalRewards - distributedRewardsStep4;
    var uncalculatedDistributedRewardsStep4: number = distributedRewardsStep4;

    // console.log(distributedRewardsStep4);

    // console.log(totalRewards);
    // console.log(undistributedRewardsStep4);
    // console.log(uncalculatedDistributedRewardsStep4);

    var levelReward: number[] = cappedRewardPerHolder.map((rewardPerHolder, index) => {
        const num: number = reversedNumOfHolders[index];
        const scaledRewardPerHolder: number =
            uncalculatedDistributedRewardsStep4 > 0
                ? (rewardPerHolder * (uncalculatedDistributedRewardsStep4 + undistributedRewardsStep4)) /
                  uncalculatedDistributedRewardsStep4
                : rewardPerHolder;

        undistributedRewardsStep4 -= (scaledRewardPerHolder - rewardPerHolder) * num;
        uncalculatedDistributedRewardsStep4 -= rewardPerHolder * num;
        // console.log(undistributedRewardsStep4);
        return Math.floor(scaledRewardPerHolder);
    });
    // console.log("Step 4 - ", levelReward);

    return levelReward;
}
