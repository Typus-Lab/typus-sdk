// 0.005 hourly exp per 1U
const divisor = 12000;

export function getExpEarn(u64_padding: Map<string, string>): number {
    const usd_in_deposit = Number(u64_padding.get("usd_in_deposit"));
    // console.log(`usd_in_deposit: ${usd_in_deposit}`);

    const snapshot_ms = Number(u64_padding.get("snapshot_ms"));
    // console.log(`snapshot_ms: ${snapshot_ms}`);

    const minutes = round((new Date().getTime() - snapshot_ms) / 60_000);
    // console.log(`minutes: ${minutes}`);

    const exp_earn = round((usd_in_deposit * minutes) / divisor);
    // console.log(`exp_earn: ${exp_earn}`);

    return exp_earn;
}

export function getExpEarnPerMinute(u64_padding: Map<string, string>): number {
    const usd_in_deposit = Number(u64_padding.get("usd_in_deposit"));
    // console.log(`usd_in_deposit: ${usd_in_deposit}`);

    const exp_earn = usd_in_deposit / divisor;
    // console.log(`exp_earn: ${exp_earn}`);

    return exp_earn;
}

export function getHourlyExpPerUSD(): number {
    const exp_earn = (1 * 60) / divisor;
    return exp_earn;
}

function round(a: number): number {
    return a - (a % 1);
}
