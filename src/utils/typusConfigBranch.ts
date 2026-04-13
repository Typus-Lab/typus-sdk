/**
 * GitHub raw URLs embed `branch` in the path; reject values that could alter
 * the request (path traversal, odd encodings) or are implausibly long.
 */
export function assertSafeTypusConfigBranch(branch: string): void {
    if (!branch || branch.length > 256) {
        throw new Error("typus-config branch must be a non-empty string at most 256 characters");
    }
    if (branch.includes("..") || branch.includes("%")) {
        throw new Error("typus-config branch contains invalid characters");
    }
    if (!/^[a-zA-Z0-9/_.-]+$/.test(branch)) {
        throw new Error("typus-config branch must match git ref characters (alphanumeric, /, _, ., -)");
    }
}
