"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.endpoint = exports.pythStateId = exports.wormholeStateId = exports.priceInfoObjectIds = exports.priceIDs = void 0;
// You can find the IDs of prices at https://pyth.network/developers/price-feed-ids
exports.priceIDs = {
    MAINNET: {
        // Pyth EVM Stable
        SUI: "0x23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744", // SUI/USD price ID
        USDC: "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a", // USDC/USD price ID
        USDT: "0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b", // USDT/USD price ID
        BTC: "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43", // BTC/USD price ID
        ETH: "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace", // ETH/USD price ID
        SOL: "0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d", // SOL/USD price ID
        CETUS: "0xe5b274b2611143df055d6e7cd8d93fe1961716bcd4dca1cad87a83bc1e78c1ef", // CETUS/USD price ID
        NAVX: "0x88250f854c019ef4f88a5c073d52a18bb1c6ac437033f5932cd017d24917ab46", // NAVX/USD price ID
        SCA: "0x7e17f0ac105abe9214deb9944c30264f5986bf292869c6bd8e8da3ccd92d79bc", // SCA/USD price ID
    },
    TESTNET: {
        // Pyth EVM Beta
        SUI: "0x50c67b3fd225db8912a424dd4baed60ffdde625ed2feaaf283724f9608fea266", // SUI/USD price ID
        USDC: "0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722", // USDC/USD price ID
        USDT: "0x1fc18861232290221461220bd4e2acd1dcdfbc89c84092c93c18bdc7756c1588", // USDT/USD price ID
        BTC: "0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b", // BTC/USD price ID
        ETH: "0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6", // ETH/USD price ID
        SOL: "0xfe650f0367d4a7ef9815a593ea15d36593f0643aaaf0149bb04be67ab851decd", // SOL/USD price ID
        CETUS: "0xcb324dafd531712dd31c39969ae0246ee4c6ae167257bcf8ac27e28ca35e6a0c", // CETUS/USD price ID
        NAVX: "0x946292ad3f481f36f5e558726cf4974e2a7a34598bf15d2abe3619e7b6a8db91", // NAVX/USD price ID
        SCA: "0xeacabc6304d11fc10a757f63286ef44415d8e91b7a1a525ae94a7ec9398b73f3", // SCA/USD price ID
    },
};
exports.priceInfoObjectIds = {
    // MAINNET: {
    //     // Pyth EVM Stable
    //     SUI: "0x23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744", // SUI/USD price ID
    //     USDC: "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a", // USDC/USD price ID
    //     USDT: "0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b", // USDT/USD price ID
    //     BTC: "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43", // BTC/USD price ID
    //     ETH: "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace", // ETH/USD price ID
    //     SOL: "0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d", // SOL/USD price ID
    //     CETUS: "0xe5b274b2611143df055d6e7cd8d93fe1961716bcd4dca1cad87a83bc1e78c1ef", // CETUS/USD price ID
    //     NAVX: "0x88250f854c019ef4f88a5c073d52a18bb1c6ac437033f5932cd017d24917ab46", // NAVX/USD price ID
    //     SCA: "0x7e17f0ac105abe9214deb9944c30264f5986bf292869c6bd8e8da3ccd92d79bc", // SCA/USD price ID
    // },
    TESTNET: {
        SUI: "0x1ebb295c789cc42b3b2a1606482cd1c7124076a0f5676718501fda8c7fd075a0",
        USDC: "0x9c4dd4008297ffa5e480684b8100ec21cc934405ed9a25d4e4d7b6259aad9c81",
        USDT: "0x956fdcbf83a26c962319f7742f5728a0a7ce59c7f0cbe13c112b259e7ee953cd",
        BTC: "0x72431a238277695d3f31e4425225a4462674ee6cceeea9d66447b210755fffba",
        ETH: "0x4fde30cb8a5dc3cfee1c1c358fc66dc308408827efb217247c7ba54d76ccbee9",
        SOL: "0x33fbce1cad5ca155f2f5051430b23a694bc6e5de6df43e0f8aefe29f4a84336d",
        CETUS: "0xb0ba78106259b7ceefd288edc5f65b65f8b7bca0816e61dae5136616aac7d3da",
        NAVX: "0x94905bdcaa656b0908aa8a3a42cf72b0e8e2e849f7d0a7e0e39bb9e1dc3c9cf6",
        SCA: "0xf96e3c4b7d74efbde9df5b669188421196e6164adf6fbaaa92903c42569807c8",
    },
};
// Get the state IDs of the Pyth and Wormhole contracts from
// https://docs.pyth.network/price-feeds/contract-addresses/sui
exports.wormholeStateId = {
    MAINNET: "0x5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a",
    TESTNET: "0x31358d198147da50db32eda2562951d53973a0c0ad5ed738e9b17d88b213d790",
};
exports.pythStateId = {
    MAINNET: "0x1f9310238ee9298fb703c3419030b35b22bb1cc37113e3bb5007c99aec79e5b8",
    TESTNET: "0x243759059f4c3111179da5878c12f68d612c21a8d54d85edc86164bb18be1c7c",
};
// Get the Stable Hermes service URL from https://docs.pyth.network/price-feeds/api-instances-and-providers/hermes
exports.endpoint = {
    MAINNET: "https://hermes.pyth.network",
    TESTNET: "https://hermes-beta.pyth.network",
};
