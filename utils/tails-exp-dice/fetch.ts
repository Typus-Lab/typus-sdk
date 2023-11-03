// import { SuiClient } from "@mysten/sui.js/dist/cjs/client";
// import { JsonRpcProvider } from "@mysten/sui.js/dist/cjs/providers/json-rpc-provider";
import { JsonRpcProvider } from "@mysten/sui.js";

export async function getPlaygrounds(provider: JsonRpcProvider, diceRegistry: string) {
    let playgroundIds = (await provider.getDynamicFields({ parentId: diceRegistry })).data.map((x) => x.objectId as string);

    let objects = await provider.multiGetObjects({
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
    opened_games: Map<number, Game>; // <game_id, Game>
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
