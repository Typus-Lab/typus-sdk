// import { SuiClient } from "@mysten/sui.js/dist/cjs/client";
// import { JsonRpcProvider } from "@mysten/sui.js/dist/cjs/providers/json-rpc-provider";
import { JsonRpcProvider, SuiEventFilter } from "@mysten/sui.js";
import { assetToDecimal, typeArgToAsset } from "../token";

export async function getPlaygrounds(provider: JsonRpcProvider, diceRegistry: string) {
    const playgroundIds = (await provider.getDynamicFields({ parentId: diceRegistry })).data
        .sort((a, b) => Number(a.name.value) - Number(b.name.value))
        .map((x) => x.objectId as string);

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

export async function getHistory(provider: JsonRpcProvider, dicePackage: string, playgrounds: Playground[]): Promise<DrawDisplay[]> {
    const eventFilter: SuiEventFilter = {
        MoveEventType: `${dicePackage}::tails_exp::Draw`,
    };

    const events = await provider.queryEvents({ query: eventFilter, order: "descending" });
    // console.log(events);

    const result = events.data.map((event) => {
        const drawEvent = event.parsedJson as DrawEvent;

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

        const display: DrawDisplay = {
            game_id: drawEvent.game_id,
            player: drawEvent.player,
            guess_1,
            guess_2,
            result_1,
            result_2,
            bet_amount: `${Number(drawEvent.stake_amount) / 10 ** decimal} ${asset}`,
            exp: `${Number(drawEvent.exp)} EXP`,
        };

        return display;
    });

    return result;
}

interface DrawEvent {
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
}

interface DrawDisplay {
    game_id: string;
    player: string;
    guess_1: string;
    guess_2: string;
    result_1: string;
    result_2: string;
    bet_amount: string;
    exp: string;
}

export interface ProfitSharing {
    level_profits: string[];
    level_users: string[];
    pool: string;
    remaining: string;
    total: string;
}

export async function getProfitSharing(provider: JsonRpcProvider, diceProfitSharing: string) {
    const object = await provider.getObject({
        id: diceProfitSharing,
        options: { showContent: true },
    });

    // @ts-ignore
    const result = object.data?.content?.fields.value.fields as ProfitSharing;

    return result;
}
