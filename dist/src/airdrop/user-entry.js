"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClaimAirdropTx = getClaimAirdropTx;
function getClaimAirdropTx(input) {
    var result = input.tx.moveCall({
        target: "".concat(input.typusPackageId, "::airdrop::claim_airdrop"),
        typeArguments: input.typeArguments,
        arguments: [input.tx.object(input.typusEcosystemVersion), input.tx.object(input.typusAirdropRegistry), input.tx.pure(input.key)],
    });
    input.tx.moveCall({
        target: "".concat(input.typusPackageId, "::utility::transfer_balance_opt"),
        typeArguments: [input.typeArguments[0]],
        arguments: [input.tx.object(result[0]), input.tx.pure(input.user)],
    });
    return input.tx;
}
