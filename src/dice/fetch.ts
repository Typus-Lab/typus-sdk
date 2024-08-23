import { SuiClient, SuiEventFilter } from "@mysten/sui.js/client";
import { assetToDecimal, typeArgToAsset } from "src/constants";
import { TypusConfig } from "src/utils";

export async function getPlaygrounds(
    config: TypusConfig,
    input: {
        module: "tails_exp" | "combo_dice";
    }
) {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let registry = "";
    switch (input.module) {
        case "tails_exp":
            registry = config.registry.dice.tailsExp;
            break;
        case "combo_dice":
            registry = config.registry.dice.comboDice;
            break;
        default:
            break;
    }
    let playgroundIds = (await provider.getDynamicFields({ parentId: registry })).data
        .filter((a) => a.objectType.endsWith("Playground"))
        .sort((a, b) => Number(a.name.value) - Number(b.name.value))
        .map((x) => x.objectId as string);

    // console.log(playgroundIds);

    let objects = await provider.multiGetObjects({
        ids: playgroundIds,
        options: { showContent: true },
    });

    let result = objects
        // @ts-ignore
        .filter((object) => object.data?.content?.type.endsWith("Playground"))
        .map((object) => {
            // @ts-ignore
            let fields = object.data?.content.fields;
            // console.log(fields);

            let opened_games = new Map<string, Game>();
            if (fields.opened_games.fields) {
                for (let curr of fields.opened_games.fields.contents) {
                    // console.log(curr);
                    opened_games.set(curr.fields.key, curr.fields.value.fields as Game);
                }
            }
            // console.log(opened_games);

            let game_config = fields.game_config.fields as GameConfig;
            // console.log(game_config);

            let playground: Playground = {
                id: fields.id.id,
                house_whitelist: fields.house_whitelist,
                public_key: fields.public_key,
                num_of_games: fields.num_of_games,
                stake_token: fields.stake_token.fields.name,
                opened_games,
                game_config,
                is_active: fields.is_active,
            };
            if (fields.exp_config) {
                playground.exp_config = fields.exp_config.fields;
            }
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
    exp_config?: ExpConfig;
}

export interface GameConfig {
    max_stake: string;
    min_stake: string;
    stake_lot_size: string;
    critical_hits_multiplier_bp: string;
    base_exp_divisor?: string; // e.g. 1_000_000_000, so 10^9 Mist SUI => 1 exp if odd = 1
    losses_multiplier_bp?: string;
    banker_edge_bp?: string;
    max_single_game_loss_ratio_bp?: string;
    u64_padding?: string[];
}

export interface ExpConfig {
    base_exp_divisor: string;
    u64_padding: string[];
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

export async function getHistory(
    config: TypusConfig,
    input: {
        module: "tails_exp" | "combo_dice";
        playgrounds: Playground[];
    }
): Promise<DrawDisplay[]> {
    let provider = new SuiClient({ url: config.rpcEndpoint });
    let registry = "";
    switch (input.module) {
        case "tails_exp":
            registry = config.registry.dice.tailsExp;
            break;
        case "combo_dice":
            registry = config.registry.dice.comboDice;
            break;
        default:
            break;
    }
    let eventFilter: SuiEventFilter = {
        MoveEventType: `${registry}::${input.module}::Draw`,
    };

    var result = await provider.queryEvents({ query: eventFilter, order: "descending" });
    // console.log(result);

    var history = await parseHistory(result.data, input.playgrounds);

    while (result.hasNextPage && history.length <= 60) {
        result = await provider.queryEvents({ query: eventFilter, order: "descending", cursor: result.nextCursor });
        let nextPage = await parseHistory(result.data, input.playgrounds);
        history = history.concat(nextPage);
    }

    return history;
}

export async function parseHistory(datas, playgrounds: Playground[]): Promise<DrawDisplay[]> {
    let result = datas.map((event) => {
        let drawEvent = event.parsedJson as DrawEvent;
        drawEvent.timestampMs = event.timestampMs;

        let playground = playgrounds[Number(drawEvent.index)];

        let coinType = "0x" + playground.stake_token;
        let asset = typeArgToAsset(coinType);
        let decimal = assetToDecimal(asset)!;

        let guess_1 = (drawEvent.larger_than_1 ? `> ` : `< `) + `${Number(drawEvent.guess_1) / 100}`;
        let guess_2 = (drawEvent.larger_than_2 ? `> ` : `< `) + `${Number(drawEvent.guess_2) / 100}`;
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

        let stake_amount = Number(drawEvent.stake_amount) / 10 ** decimal;
        let amount;
        if (asset == "FUD") {
            amount = `${stake_amount / 1000000}m`;
        } else {
            amount = stake_amount;
        }

        let exp = Number(drawEvent.exp) | Number(drawEvent.exp_amount);
        // console.log(drawEvent);

        let display: DrawDisplay = {
            game_id: drawEvent.game_id,
            player: drawEvent.player,
            guess_1,
            guess_2,
            result_1,
            result_2,
            bet_amount: `${amount} ${asset}`,
            exp: `${exp} EXP`,
            timestampMs: drawEvent.timestampMs,
        };

        if (drawEvent.reward) {
            let reward = Number(drawEvent.reward) / 10 ** decimal;
            if (asset == "FUD") {
                display.reward = `${reward / 1000000}m ${asset}`;
            } else {
                display.reward = `${reward} ${asset}`;
            }
        }

        return display;
    });

    return result;
}

export interface DrawEvent {
    answer_1: string;
    answer_2: string;
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
    exp?: string;
    exp_amount?: string;
    reward?: string;
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
    reward?: string;
}

// export interface LeaderBoard {
//     player: string;
//     total_bet_amount: number;
//     total_earn_exp: number;
// }

// export async function getLeaderBoard(drawDisplays: DrawDisplay[]): Promise<LeaderBoard[]> {
//     let leaderBoard: LeaderBoard[] = [];

//     for (let drawDisplay of drawDisplays) {
//         let i = leaderBoard.findIndex((x) => x.player == drawDisplay.player);
//         if (i == -1) {
//             leaderBoard.push({
//                 player: drawDisplay.player,
//                 total_bet_amount: Number(drawDisplay.bet_amount.split(" ")[0]),
//                 total_earn_exp: Number(drawDisplay.exp.split(" ")[0]),
//             } as LeaderBoard);
//         } else {
//             leaderBoard[i].total_bet_amount += Number(drawDisplay.bet_amount.split(" ")[0]);
//             leaderBoard[i].total_earn_exp += Number(drawDisplay.exp.split(" ")[0]);
//         }
//     }

//     return leaderBoard;
// }

// export interface ProfitSharing {
//     level_profits: string[];
//     level_users: string[];
//     pool: string;
//     remaining: string;
//     total: string;
//     tokenType: string;
// }

// export async function getProfitSharing(provider: SuiClient, diceProfitSharing: string) {
//     let object = await provider.getObject({
//         id: diceProfitSharing,
//         options: { showContent: true },
//     });

//     // @ts-ignore
//     let type: string = object.data?.content.type;
//     let tokenType = type.split("<").at(-1)?.replace(">>", "")!;

//     // @ts-ignore
//     let result = object.data?.content?.fields.value.fields as ProfitSharing;
//     result.tokenType = tokenType;

//     return result;
// }
