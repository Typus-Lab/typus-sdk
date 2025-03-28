// You can find the IDs of prices at https://pyth.network/developers/price-feed-ids
export const priceIDs = {
    MAINNET: {
        // Pyth EVM Stable
        SUI: "0x23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744",
        CETUS: "0xe5b274b2611143df055d6e7cd8d93fe1961716bcd4dca1cad87a83bc1e78c1ef",
        USDC: "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a",
        wBTC: "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
        wETH: "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
        wSOL: "0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d",
        TURBOS: "0xf9c2e890443dd995d0baafc08eea3358be1ffb874f93f99c30b3816c460bbac3",
        wAPT: "0x03ae4db29ed4ae33d323568895aa00337e658e348b37509f5372ae51f0af00d5",
        wUSDT: "0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b",
        // DOGE: "0xdcef50dd0a4cd2dcc17e45df1676dcb336a11a61c69df7a0299b0150c672d25c",
        INJ: "0x7a5bc1d2b56ad029048cd63964b3ad2776eadf812edc1a43a31406cb54bff592",
        SEI: "0x53614f1cb0c031d4af66c04cb9c756234adad0e1cee85303795091499a4084eb",
        JUP: "0x0a0408d619e9380abad35060f9192039ed5042fa6f82301d0e48bb52be830996",
        SCA: "0x7e17f0ac105abe9214deb9944c30264f5986bf292869c6bd8e8da3ccd92d79bc",
        AFSUI: "0x17cd845b16e874485b2684f8b8d1517d744105dbb904eec30222717f4bc9ee0d",
        NAVX: "0x88250f854c019ef4f88a5c073d52a18bb1c6ac437033f5932cd017d24917ab46",
        USDY: "0xe393449f6aff8a4b6d3e1165a7c9ebec103685f3b41e60db4277b5b6d10e7326",
        BUCK: "0xfdf28a46570252b25fd31cb257973f865afc5ca2f320439e45d95e0394bc7382",
        VSUI: "0x57ff7100a282e4af0c91154679c5dae2e5dcacb93fd467ea9cb7e58afdcfde27",
        HASUI: "0x6120ffcf96395c70aa77e72dcb900bf9d40dccab228efca59a17b90ce423d5e8",
        AUSD: "0xd9912df360b5b7f21a122f15bdd5e27f62ce5e72bd316c291f7c86620e07fb2a",
        FUD: "0x6a4090703da959247727f2b490eb21aea95c8684ecfac675f432008830890c75",
        DEEP: "0x29bdd5248234e33bd93d3b81100b5fa32eaa5997843847e2c2cb16d7c6d9f7ff",
        BLUE: "0x04cfeb7b143eb9c48e9b074125c1a3447b85f59c31164dc20c1beaa6f21f2b6b",
        BLUB: "0x5fc11ffe4975b624be495be038da30e30bee2004d8ae6282b5364577ef4ca92c",
        HIPPO: "0xf2c5249856da2fbe0221e163b3fed678dd6f76515ab933292dfb4f15a1de8f8c",
        STSUI: "0x0449948a9a210481464ea7030734fa79f59b751c2f411cfb1ba56b5f69e4a62a",
        NS: "0xbb5ff26e47a3a6cc7ec2fce1db996c2a145300edc5acaabe43bf9ff7c5dd5d32",
        WAL: "0xeba0732395fae9dec4bae12e52760b35fc1c5671e2da8b449c9af4efe5d54341",
    },
    TESTNET: {
        // Pyth EVM Beta
        SUI: "0x50c67b3fd225db8912a424dd4baed60ffdde625ed2feaaf283724f9608fea266", // SUI/USD price ID
        USDC: "0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722", // USDC/USD price ID
        wUSDC: "0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722", // USDC/USD price ID
        USDT: "0x1fc18861232290221461220bd4e2acd1dcdfbc89c84092c93c18bdc7756c1588", // USDT/USD price ID
        BTC: "0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b", // BTC/USD price ID
        ETH: "0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6", // ETH/USD price ID
        SOL: "0xfe650f0367d4a7ef9815a593ea15d36593f0643aaaf0149bb04be67ab851decd", // SOL/USD price ID
        CETUS: "0xcb324dafd531712dd31c39969ae0246ee4c6ae167257bcf8ac27e28ca35e6a0c", // CETUS/USD price ID
        NAVX: "0x946292ad3f481f36f5e558726cf4974e2a7a34598bf15d2abe3619e7b6a8db91", // NAVX/USD price ID
        SCA: "0xeacabc6304d11fc10a757f63286ef44415d8e91b7a1a525ae94a7ec9398b73f3", // SCA/USD price ID
        TURBOS: "0x3f545e3f4ec9fd8eb3b9d9d6071a1da361f6729fa1b93d1d1baca3379551d99e", // TURBOS/USD price ID
    },
};

export const priceInfoObjectIds = {
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
        wUSDC: "0x9c4dd4008297ffa5e480684b8100ec21cc934405ed9a25d4e4d7b6259aad9c81",
        USDT: "0x956fdcbf83a26c962319f7742f5728a0a7ce59c7f0cbe13c112b259e7ee953cd",
        BTC: "0x72431a238277695d3f31e4425225a4462674ee6cceeea9d66447b210755fffba",
        ETH: "0x4fde30cb8a5dc3cfee1c1c358fc66dc308408827efb217247c7ba54d76ccbee9",
        SOL: "0x33fbce1cad5ca155f2f5051430b23a694bc6e5de6df43e0f8aefe29f4a84336d",
        CETUS: "0xb0ba78106259b7ceefd288edc5f65b65f8b7bca0816e61dae5136616aac7d3da",
        NAVX: "0x94905bdcaa656b0908aa8a3a42cf72b0e8e2e849f7d0a7e0e39bb9e1dc3c9cf6",
        SCA: "0xf96e3c4b7d74efbde9df5b669188421196e6164adf6fbaaa92903c42569807c8",
        TURBOS: "0xfe38289883c3afed692e5856f4896b3e094d4793e2ccf0a2715b890a718fa5c0",
    },
};

// Get the state IDs of the Pyth and Wormhole contracts from
// https://docs.pyth.network/price-feeds/contract-addresses/sui
export const wormholeStateId = {
    MAINNET: "0xaeab97f96cf9877fee2883315d459552b2b921edc16d7ceac6eab944dd88919c",
    TESTNET: "0x31358d198147da50db32eda2562951d53973a0c0ad5ed738e9b17d88b213d790",
};
export const pythStateId = {
    MAINNET: "0x1f9310238ee9298fb703c3419030b35b22bb1cc37113e3bb5007c99aec79e5b8",
    TESTNET: "0x243759059f4c3111179da5878c12f68d612c21a8d54d85edc86164bb18be1c7c",
};

// Get the Stable Hermes service URL from https://docs.pyth.network/price-feeds/api-instances-and-providers/hermes

export const endpoint = {
    MAINNET: "https://hermes.pyth.network",
    TESTNET: "https://hermes-beta.pyth.network",
};
