import assert from "assert";
import { assertSafeTypusConfigBranch } from "src/utils/typusConfigBranch";
import { parseFullTypusOracleData, type TypusOracleData } from "src/utils/oracle";

describe("typus-config branch validation", () => {
    it("accepts normal branch names", () => {
        assertSafeTypusConfigBranch("main");
        assertSafeTypusConfigBranch("release/1.2");
    });

    it("rejects path traversal and encoded slashes", () => {
        assert.throws(() => assertSafeTypusConfigBranch("main/../other"), /invalid/);
        assert.throws(() => assertSafeTypusConfigBranch("x%2fy"), /invalid/);
    });
});

describe("oracle payload parsing", () => {
    it("returns parsed data when success is true", () => {
        const raw: TypusOracleData = {
            success: true,
            data: {
                price: "1",
                volume: "1",
                server_ts_ms: 0,
                local_ts_ms: 0,
                twap: "1",
            },
            signed: { pair: "p", price: "1", twap: "1", timestamp: 1, signature: "0x" },
        };
        const out = parseFullTypusOracleData(raw);
        assert.ok(out);
        assert.strictEqual(out?.signed.pair, "p");
    });

    it("returns null when success is false", () => {
        const raw = { success: false } as TypusOracleData;
        assert.strictEqual(parseFullTypusOracleData(raw), null);
    });
});
