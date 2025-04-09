import { TOKEN } from "src/constants";

// You can find the IDs of prices at https://pyth.network/developers/price-feed-ids
export const priceIDs: { MAINNET: { [key in TOKEN]?: string }; TESTNET: { [key in TOKEN]?: string } } = {
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
        LBTC: "0x8f257aab6e7698bb92b15511915e593d6f8eae914452f781874754b03d0c612b",
    },
    TESTNET: {
        // Pyth EVM Beta
        SUI: "0x50c67b3fd225db8912a424dd4baed60ffdde625ed2feaaf283724f9608fea266",
        CETUS: "0xcb324dafd531712dd31c39969ae0246ee4c6ae167257bcf8ac27e28ca35e6a0c",
        USDC: "0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722",
        wUSDC: "0x41f3625971ca2ed2263e78573fe5ce23e13d2558ed3f2e47ab0f84fb9e7ae722", // USDC/USD price ID
        wBTC: "0xf9c0172ba10dfa4d19088d94f5bf61d3b54d5bd7483a322a982e1373ee8ea31b",
        wETH: "0xca80ba6dc32e08d06f1aa886011eed1d77c77be9eb761cc10d72b7d0a2fd57a6",
        wSOL: "0xfe650f0367d4a7ef9815a593ea15d36593f0643aaaf0149bb04be67ab851decd",
        TURBOS: "0x3f545e3f4ec9fd8eb3b9d9d6071a1da361f6729fa1b93d1d1baca3379551d99e",
        wAPT: "0x44a93dddd8effa54ea51076c4e851b6cbbfd938e82eb90197de38fe8876bb66e",
        wUSDT: "0x1fc18861232290221461220bd4e2acd1dcdfbc89c84092c93c18bdc7756c1588",
        // DOGE: "0x31775e1d6897129e8a84eeba975778fb50015b88039e9bc140bbd839694ac0ae",
        INJ: "0x2d9315a88f3019f8efa88dfe9c0f0843712da0bac814461e27733f6b83eb51b3",
        SEI: "0x95f1aef92c74670d40f1f37ee6fb158ffd6a0f8913b07b9e61087f9b7273b11c",
        JUP: "0xe92860f24d56f9ba9894658202633062744556e98fb3e924b4a2694d82f05737",
        SCA: "0xeacabc6304d11fc10a757f63286ef44415d8e91b7a1a525ae94a7ec9398b73f3",
        AFSUI: "0xd213e2929116af56c3ce71a1acee874f1dd03f42567b552085fa9d8ce8ce7134",
        NAVX: "0x946292ad3f481f36f5e558726cf4974e2a7a34598bf15d2abe3619e7b6a8db91",
        USDY: "0xc222a1d2b89218c034b515e738b19ee268c105d8ede44d95b279f1c8bfbb68af",
        BUCK: "0xed0899e3a021f1e59031ad365bb3014d78f9ba5556e263692d3508b9272daabf",
        VSUI: "0xabb2661c87ecac9f93eade3dd089dbb6e9eb4083eba3b35371ee6f8fa1133752",
        HASUI: "0xb675212df51f05b159e31e3047895778df9df1c870587102a06fc96100853361",
        AUSD: "0xf1882d28af56a63960f0c313e6c76eab8f802f15e801ebfca223412b55375fe3",
        FUD: "0x15f63843dcccf30510f48ff6e363f9ead3b0b05d7f7dde6e3890a7e9e4d83e4a",
        DEEP: "0xe18bf5fa857d5ca8af1f6a458b26e853ecdc78fc2f3dc17f4821374ad94d8327",
        BLUE: "0x64559fcff99ed360543d7f4778f4712d2dc5c303ec1ac98f084c88c647ff7689",
        BLUB: "0xc171055a63e9b4c09e29cc018129379e0a8581512f6726f5bfe5429985773312",
        HIPPO: "0x082736b80698caf1379f0ad10a637668ccd531a96133d1f5053df97bffd2933b",
        STSUI: "0xda703fbee4d7ee09aba630ef809efd79d162202bdf976ae8258875207ebd5557",
        NS: "0x65aca56071505735c09091deb8733fdeba265bd9723dd4fb326b5ffd6843b3a3",
        WAL: "0xa6ba0195b5364be116059e401fb71484ed3400d4d9bfbdf46bd11eab4f9b7cea",
        LBTC: "0x29448db25efe8c72afe3a3c0c0631337408bd3cbc5f09d3dab0754460a965dae",
    },
};

export const priceInfoObjectIds: { MAINNET: { [key in TOKEN]?: string }; TESTNET: { [key in TOKEN]?: string } } = {
    MAINNET: {
        SUI: "0x801dbc2f0053d34734814b2d6df491ce7807a725fe9a01ad74a07e9c51396c37",
        USDC: "0x5dec622733a204ca27f5a90d8c2fad453cc6665186fd5dff13a83d0b6c9027ab",
        wUSDT: "0x985e3db9f93f76ee8bace7c3dd5cc676a096accd5d9e09e9ae0fb6e492b14572",
        wBTC: "0x9a62b4863bdeaabdc9500fce769cf7e72d5585eeb28a6d26e4cafadc13f76ab2",
        wETH: "0x9193fd47f9a0ab99b6e365a464c8a9ae30e6150fc37ed2a89c1586631f6fc4ab",
        wSOL: "0x9d0d275efbd37d8a8855f6f2c761fa5983293dd8ce202ee5196626de8fcd4469",
        CETUS: "0x24c0247fb22457a719efac7f670cdc79be321b521460bd6bd2ccfa9f80713b14",
        TURBOS: "0x442e52f04392b0dcb48c6aaf7940568acd510281021be9f9b3a449c559c79613",
        SCA: "0xf6de1d3279a269a597d813cbaca59aa906543ab9a8c64e84a4722f1a20863985",
        SEI: "0xde2dd2684b3ff808cebdfb23afbf8b6ac3822832029dae744f81d9eb44b5c9b8",
        INJ: "0x353a36a5b3d6809b4cc349dca627e2775e1d19b6b9c86f0eabe138fd3d772023",
        AFSUI: "0xd779885c5246357e24cbde7348f2d81f756d9650975c02d81346b15d8b557ebf",
        NAVX: "0x5b117a6a2de70796bffe36495bad576b788a34c33ca0648bd57852ead3f41e32",
        HASUI: "0x4c1d831576b60fec657e0c310943eff8c1f28197c552e57d1fefdc55edddb263",
        VSUI: "0xf3bc79117acc3636d57778d9d0f83a871df1b7a53eb61fe893ff108d9664ec8b",
        DEEP: "0x8c7f3a322b94cc69db2a2ac575cbd94bf5766113324c3a3eceac91e3e88a51ed",
        BLUE: "0x5515a34fc610bba6b601575ed1d2535b2f9df1f339fd0d435fef487c1ee3df9c",
        NS: "0xc6352e1ea55d7b5acc3ed690cc3cdf8007978071d7bfd6a189445018cfb366e0",
        JUP: "0xb804ada6f77feb30a73fbed7fc53dc66ff25133dee0815109d4267e43b2e6bdd",
        WAL: "0xeb7e669f74d976c0b99b6ef9801e3a77716a95f1a15754e0f1399ce3fb60973d",
        LBTC: "0xeba15840ddf425dacb5ff0990334fc03d034487f4ad416280859b96bf2af89f8",
    },
    TESTNET: {
        SUI: "0x1ebb295c789cc42b3b2a1606482cd1c7124076a0f5676718501fda8c7fd075a0",
        CETUS: "0xb0ba78106259b7ceefd288edc5f65b65f8b7bca0816e61dae5136616aac7d3da",
        USDC: "0x9c4dd4008297ffa5e480684b8100ec21cc934405ed9a25d4e4d7b6259aad9c81",
        wUSDC: "0x9c4dd4008297ffa5e480684b8100ec21cc934405ed9a25d4e4d7b6259aad9c81",
        wBTC: "0x72431a238277695d3f31e4425225a4462674ee6cceeea9d66447b210755fffba",
        wETH: "0x4fde30cb8a5dc3cfee1c1c358fc66dc308408827efb217247c7ba54d76ccbee9",
        wSOL: "0x33fbce1cad5ca155f2f5051430b23a694bc6e5de6df43e0f8aefe29f4a84336d",
        TURBOS: "0xfe38289883c3afed692e5856f4896b3e094d4793e2ccf0a2715b890a718fa5c0",
        wAPT: "0x9eeb8cb349d8e89fa9e6c94a97d6d30096f5b3c16bd50d9de96608f67a278c18",
        wUSDT: "0x956fdcbf83a26c962319f7742f5728a0a7ce59c7f0cbe13c112b259e7ee953cd",
        // DOGE: "0x17b358d730663caa888c8b621b9994a60af422cd83f32237c6b2a8b3230d71b9",
        INJ: "0x459e2e0dd757715449fc1d36925f384446bf192c9f86a4ca02d587c82de51802",
        SEI: "0xb3e7f40e8268fb2539a03b29c1b38366e061c3c8222f7ad4c8db998eb0a02f8d",
        JUP: "0x23817c9edbbfbdef6add3800cd52751eff5bb0f7abd32e54a8f2225d6a6523d3",
        SCA: "0xf96e3c4b7d74efbde9df5b669188421196e6164adf6fbaaa92903c42569807c8",
        AFSUI: "0x6785a8c69da40c9435d41a2585cf92643d2ed2c5cd12938ecff28eaf54efadcd",
        NAVX: "0x94905bdcaa656b0908aa8a3a42cf72b0e8e2e849f7d0a7e0e39bb9e1dc3c9cf6",
        USDY: "0x1fec4ed70f870911948d93eb2abe6fa4a3a4b1e4633cf36c7e91adfb4af1733f",
        BLUE: "0xcc9016bcfaf1839f1dd63b0929a0d62dfb93e84442fd5b4598552605e365b3ec",
        BLUB: "0xdcd4cc5f06fac1ca72e8551ab1a2e847298afa6f19e370ad9891199a59d2c22e",
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
