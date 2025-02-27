import { normalizeSuiAddress } from "@mysten/sui/utils";

export function typeArgsToAssets(typeArgs: string[]): string[] {
    let assets = typeArgs.map((x) => typeArgToAsset(x));
    return assets;
}

export function typeArgToAsset(typeArg: string): TOKEN {
    let typeArgs = typeArg.split("::");
    switch (`${normalizeSuiAddress(typeArgs[0])}::${typeArgs[1]}::${typeArgs[2]}`) {
        // native

        // SUI
        case "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI":
            return "SUI";
        // CETUS
        case "0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS": // MAINNET
        case "0xb69a412ba4b22137088183da5e5042d37ba17580897884f00f959d4135d3e1a7::cetus::CETUS": // TESTNET
            return "CETUS";
        // TURBOS
        case "0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a::turbos::TURBOS": // MAINNET
        case "0xebc68999f399a5ba121f8e59c0940eaa0e074e30454403357b93b25af9f30117::turbos::TURBOS": // TESTNET
            return "TURBOS";
        // NAVX
        case "0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5::navx::NAVX":
            return "NAVX";
        // SCA
        case "0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6::sca::SCA":
        case "0xd33ea459d9e667c112f5168464a885a654d7bc3fd6903720aaa8cf495a32a77e::sca::SCA":
            return "SCA";
        // DEEP
        case "0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP":
            return "DEEP";
        // BLUE
        case "0xe1b45a0e641b9955a20aa0ad1c1f4ad86aad8afb07296d4085e349a50e90bdca::blue::BLUE":
            return "BLUE";
        // TYPUS
        case "0xf82dc05634970553615eef6112a1ac4fb7bf10272bf6cbe0f80ef44a6c489385::typus::TYPUS":
        case "0xaded0918624ba1a31a9818ae73ccb557d46f35cb0d754b34597356ce38e6004d::typus::TYPUS":
            return "TYPUS";

        // meme

        // FUD
        case "0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD": // MAINNET
        case "0x461efa7ee5aa1b27e44450d79e2104e7fc0991461e9eb1c2a3fc1f44cd554856::fud::FUD": // TESTNET
            return "FUD";
        // MFUD
        case "0xd8f04cd2a16c19c17428c3b4c22b01dd06740423b93fb7ee88fbe2676a82849d::mfud::MFUD": // MAINNET
        case "0x7755ff79f0f27256c73e6c197e25b407ef6d4b9bd6e1af8cdd50fef28f84712c::mfud::MFUD": // TESTNET
            return "MFUD";
        // BLUB
        case "0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB":
        case "0x94b8f6dcceeb2be160f6837089cc7502458f4f070fa0814380737acb0c41fd5b::BLUB::BLUB":
            return "BLUB";
        // MBLUB
        case "0x494e1772851793ed39e2aee9990740fe3fc4d50476572b6192adea9268e8b40c::mblub::MBLUB":
        case "0x4b5d0a097ee8a309a89bb2bc589403a4a9a39de639d576495b697be2a60f69bb::mblub::MBLUB":
            return "MBLUB";
        // LIQ
        case "0x9c86d1926a0a39e906f20674d6a35f337be8625ebcb6b799ee8ff011f328bee2::liq::LIQ":
            return "LIQ";
        // MLIQ
        case "9614657c9d7e8799be4f49781ef1a9247b83ee178976df6c92d29b6026b9dadf::mliq::MLIQ":
            return "MLIQ";
        // HIPPO
        case "0x8993129d72e733985f7f1a00396cbd055bad6f817fee36576ce483c8bbb8b87b::sudeng::SUDENG":
            return "HIPPO";

        // native USD

        // BUCK
        case "0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::buck::BUCK": // MAINNET
        case "0x879cd4804fe865897090e26eceb9f7a7cfda7dda1b2529a81631fa567e67375c::buck::BUCK": // TESTNET
            return "BUCK";
        // USDY
        case "0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb::usdy::USDY": // MAINNET
        case "0x579809c614d4388ed821c9f304bb741715cdf4a718707eb7c6fcf7b7189870ef::usdy::USDY": // TESTNET
            return "USDY";
        // AUSD
        case "0x2053d08c1e2bd02791056171aab0fd12bd7cd7efad2ab8f6b9c8902f14df2ff2::ausd::AUSD": // MAINNET
        case "0x087653e9ffcc8ffe85e0e20523388aa27af2a5997ae64224444f0d98a2ba8279::ausd::AUSD": // TESTNET
            return "AUSD";
        // USDC
        case "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC":
        case "0xa1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29::usdc::USDC":
            return "USDC";

        // wormhole bridge

        // wBTC
        case "0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881::coin::COIN": // MAINNET
        case "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::btc::BTC": // TESTNET
            return "wBTC";
        // wETH
        case "0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN": // MAINNET
        case "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::eth::ETH": // TESTNET
            return "wETH";
        // wUSDC
        case "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN": // MAINNET
        case "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC": // TESTNET
            return "wUSDC";
        // wUSDT
        case "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN": // MAINNET
        case "0xa38dad920880f81ea514de6db007d3a84e9116a29c60b3e69bbe418c2d9f553c::usdt::USDT": // TESTNET
            return "wUSDT";
        // wSOL
        case "0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN": // MAINNET
        case "0x879cd4804fe865897090e26eceb9f7a7cfda7dda1b2529a81631fa567e67375c::sol::SOL": // TESTNET
            return "wSOL";
        // wAPT
        case "0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37::coin::COIN": // MAINNET
        case "0xdede697a5748d20ebff2aabf3f2fd5bd9e41afb1a624b636cddc6df69078bd22::apt::APT": // TESTNET
            return "wAPT";

        // native bridge

        // sbETH
        case "0xd0e89b2af5e4910726fbcd8b8dd37bb79b29e5f83f7491bca830e94f7f226d29::eth::ETH":
            return "sbETH";
        // sbUSDT
        case "0x375f70cf2ae4c00bf37117d0c85a2c71545e6ee05c4a5c7d282cd66a4504b068::usdt::USDT":
            return "sbUSDT";

        // LST

        // VSUI
        case "0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55::cert::CERT":
            return "VSUI";
        // HASUI
        case "0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d::hasui::HASUI":
            return "HASUI";
        // AFSUI
        case "0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc::afsui::AFSUI":
        case "0xd31923b6821fb7ba32d23e514b43d307da6ef991f9ef1af2cc4e26a0992ac87a::afsui::AFSUI":
            return "AFSUI";
        // SPSUI
        case "0x83556891f4a0f233ce7b05cfe7f957d4020492a34f5405b2cb9377d060bef4bf::spring_sui::SPRING_SUI":
            return "SPSUI";

        // INJ
        case "0xcac46c81bbe1e516c65f4c3e5da81e7092cc2e70218deafb31f1c8d5fcc9dae3::inj::INJ": // MAINNET
        case "0xfd3d56e007e3ae44d74b6a6840de0bd04a3724360abd89ae683ca7d592bbb49e::inj::INJ": // TESTNET
            return "INJ";
        // JUP
        case "0x3dc8710253682b53706bd110d51fd9b298d5bb923b535fb7bca88e049208c508::jup::JUP": // MAINNET
            return "JUP";
        // SEI
        case "0xcac46c81bbe1e516c65f4c3e5da81e7092cc2e70218deafb31f1c8d5fcc9dae3::sei::SEI": // MAINNET
        case "0xfd3d56e007e3ae44d74b6a6840de0bd04a3724360abd89ae683ca7d592bbb49e::sei::SEI": // TESTNET
            return "SEI";

        // sSCA
        case "0x5ca17430c1d046fae9edeaa8fd76c7b4193a00d764a0ecfa9418d733ad27bc1e::scallop_sca::SCALLOP_SCA":
            return "sSCA";

        // TEXP
        case "0x37816d28c34cc0df82655ca97b3f066112a5f3c202cbb4aaa76c8af54e779750::tails_exp::TAILS_EXP":
            return "TEXP";

        default:
            throw new Error(`Unknown typeArg: ${typeArg}`);
    }
}

export function assetToDecimal(asset: TOKEN): number | undefined {
    switch (asset) {
        case "SUI":
        case "SPSUI":
        case "CETUS":
        case "TURBOS":
        case "BUCK":
        case "AFSUI":
        case "NAVX":
        case "SCA":
        case "HASUI":
        case "VSUI":
        case "HIPPO":
        case "TYPUS":
        case "BLUE":
        case "sSCA":
            return 9;
        case "wBTC":
        case "sbETH":
        case "wETH":
        case "wSOL":
        case "wAPT":
        case "INJ":
        case "SEI":
        case "JUP":
            return 8;
        case "USDC":
        case "wUSDC":
        case "wUSDT":
        case "sbUSDT":
        case "USDY":
        case "AUSD":
        case "DEEP":
        case "LIQ":
        case "MLIQ":
        case "MFUD":
        case "MBLUB":
            return 6;
        case "FUD":
            return 5;
        case "BLUB":
            return 2;
    }
}

export const tokenType: { MAINNET: { [key in TOKEN]: string }; TESTNET: { [key in TOKEN]: string } } = {
    MAINNET: {
        SUI: "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI",
        wBTC: "0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881::coin::COIN",
        wETH: "0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN",
        wUSDC: "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN",
        wUSDT: "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN",
        wSOL: "0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN",
        wAPT: "0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37::coin::COIN",
        CETUS: "0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS",
        BUCK: "0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::buck::BUCK",
        TURBOS: "0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a::turbos::TURBOS",
        FUD: "0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1::fud::FUD",
        MFUD: "0xd8f04cd2a16c19c17428c3b4c22b01dd06740423b93fb7ee88fbe2676a82849d::mfud::MFUD",
        INJ: "0xcac46c81bbe1e516c65f4c3e5da81e7092cc2e70218deafb31f1c8d5fcc9dae3::inj::INJ",
        SEI: "0xcac46c81bbe1e516c65f4c3e5da81e7092cc2e70218deafb31f1c8d5fcc9dae3::sei::SEI",
        AFSUI: "0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc::afsui::AFSUI",
        JUP: "0x3dc8710253682b53706bd110d51fd9b298d5bb923b535fb7bca88e049208c508::jup::JUP",
        NAVX: "0xa99b8952d4f7d947ea77fe0ecdcc9e5fc0bcab2841d6e2a5aa00c3044e5544b5::navx::NAVX",
        USDY: "0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb::usdy::USDY",
        TEXP: "0x37816d28c34cc0df82655ca97b3f066112a5f3c202cbb4aaa76c8af54e779750::tails_exp::TAILS_EXP",
        SCA: "0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6::sca::SCA",
        VSUI: "0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55::cert::CERT",
        HASUI: "0xbde4ba4c2e274a60ce15c1cfff9e5c42e41654ac8b6d906a57efa4bd3c29f47d::hasui::HASUI",
        LIQ: "0x9c86d1926a0a39e906f20674d6a35f337be8625ebcb6b799ee8ff011f328bee2::liq::LIQ",
        HIPPO: "0x8993129d72e733985f7f1a00396cbd055bad6f817fee36576ce483c8bbb8b87b::sudeng::SUDENG",
        MLIQ: "9614657c9d7e8799be4f49781ef1a9247b83ee178976df6c92d29b6026b9dadf::mliq::MLIQ",
        BLUE: "0xe1b45a0e641b9955a20aa0ad1c1f4ad86aad8afb07296d4085e349a50e90bdca::blue::BLUE",
        TYPUS: "0xf82dc05634970553615eef6112a1ac4fb7bf10272bf6cbe0f80ef44a6c489385::typus::TYPUS",
        DEEP: "0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP",
        BLUB: "0xfa7ac3951fdca92c5200d468d31a365eb03b2be9936fde615e69f0c1274ad3a0::BLUB::BLUB",
        MBLUB: "0x494e1772851793ed39e2aee9990740fe3fc4d50476572b6192adea9268e8b40c::mblub::MBLUB",
        AUSD: "0x2053d08c1e2bd02791056171aab0fd12bd7cd7efad2ab8f6b9c8902f14df2ff2::ausd::AUSD",
        USDC: "0xdba34672e30cb065b1f93e3ab55318768fd6fef66c15942c9f7cb846e2f900e7::usdc::USDC",
        sbETH: "0xd0e89b2af5e4910726fbcd8b8dd37bb79b29e5f83f7491bca830e94f7f226d29::eth::ETH",
        sbUSDT: "0x375f70cf2ae4c00bf37117d0c85a2c71545e6ee05c4a5c7d282cd66a4504b068::usdt::USDT",
        SPSUI: "0x83556891f4a0f233ce7b05cfe7f957d4020492a34f5405b2cb9377d060bef4bf::spring_sui::SPRING_SUI",
        sSCA: "0x5ca17430c1d046fae9edeaa8fd76c7b4193a00d764a0ecfa9418d733ad27bc1e::scallop_sca::SCALLOP_SCA",
    },
    TESTNET: {
        SUI: "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI",
        CETUS: "0xb69a412ba4b22137088183da5e5042d37ba17580897884f00f959d4135d3e1a7::cetus::CETUS",
        BUCK: "0x879cd4804fe865897090e26eceb9f7a7cfda7dda1b2529a81631fa567e67375c::buck::BUCK",
        wSOL: "0x879cd4804fe865897090e26eceb9f7a7cfda7dda1b2529a81631fa567e67375c::sol::SOL",
        TURBOS: "0xebc68999f399a5ba121f8e59c0940eaa0e074e30454403357b93b25af9f30117::turbos::TURBOS",
        wAPT: "0xdede697a5748d20ebff2aabf3f2fd5bd9e41afb1a624b636cddc6df69078bd22::apt::APT",
        FUD: "0x461efa7ee5aa1b27e44450d79e2104e7fc0991461e9eb1c2a3fc1f44cd554856::fud::FUD",
        MFUD: "0x7755ff79f0f27256c73e6c197e25b407ef6d4b9bd6e1af8cdd50fef28f84712c::mfud::MFUD",
        wUSDT: "0xa38dad920880f81ea514de6db007d3a84e9116a29c60b3e69bbe418c2d9f553c::usdt::USDT",
        AFSUI: "0xd31923b6821fb7ba32d23e514b43d307da6ef991f9ef1af2cc4e26a0992ac87a::afsui::AFSUI",
        INJ: "0xfd3d56e007e3ae44d74b6a6840de0bd04a3724360abd89ae683ca7d592bbb49e::inj::INJ",
        SEI: "0xfd3d56e007e3ae44d74b6a6840de0bd04a3724360abd89ae683ca7d592bbb49e::sei::SEI",
        USDY: "0x579809c614d4388ed821c9f304bb741715cdf4a718707eb7c6fcf7b7189870ef::usdy::USDY",
        TEXP: "0x9b43ee208a3b235810c145bca1161d1a71d08bfe76b1e55bb3db319ea95d0149::tails_exp::TAILS_EXP",
        SCA: "0xd33ea459d9e667c112f5168464a885a654d7bc3fd6903720aaa8cf495a32a77e::sca::SCA",
        wBTC: "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::btc::BTC",
        wETH: "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::eth::ETH",
        wUSDC: "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC",
        USDC: "0xa1ec7fc00a6f40db9693ad1415d0c193ad3906494428cf252621037bd7117e29::usdc::USDC",
        BLUB: "0x94b8f6dcceeb2be160f6837089cc7502458f4f070fa0814380737acb0c41fd5b::blub::BLUB",
        MBLUB: "0x4b5d0a097ee8a309a89bb2bc589403a4a9a39de639d576495b697be2a60f69bb::mblub::MBLUB",
        TYPUS: "0xaded0918624ba1a31a9818ae73ccb557d46f35cb0d754b34597356ce38e6004d::typus::TYPUS",
        NAVX: "",
        DEEP: "",
        BLUE: "",
        LIQ: "",
        HIPPO: "",
        MLIQ: "",
        AUSD: "0x087653e9ffcc8ffe85e0e20523388aa27af2a5997ae64224444f0d98a2ba8279::ausd::AUSD",
        sbETH: "",
        sbUSDT: "",
        VSUI: "",
        HASUI: "",
        SPSUI: "",
        JUP: "",
        sSCA: "",
    },
};

export type TOKEN =
    // native
    | "SUI"
    | "CETUS"
    | "TURBOS"
    | "NAVX"
    | "SCA"
    | "DEEP"
    | "BLUE"
    | "TYPUS"

    // meme
    | "FUD"
    | "BLUB"
    | "LIQ"
    | "HIPPO"

    // Typus M token
    | "MFUD"
    | "MBLUB"
    | "MLIQ"

    // native USD
    | "BUCK"
    | "USDY"
    | "AUSD"
    | "USDC"

    // wormhole bridge
    | "wSOL"
    | "wAPT"
    | "wBTC"
    | "wETH"
    | "wUSDC"
    | "wUSDT"

    // native bridge
    | "sbETH"
    | "sbUSDT"

    // LST
    | "VSUI"
    | "HASUI"
    | "AFSUI"
    | "SPSUI" // suilend spring SUI

    // Typus underlying asset token
    | "INJ"
    | "JUP"
    | "SEI"

    // scallop token
    | "sSCA"

    // Other
    | "TEXP";

export const oracle: { MAINNET: { [key in TOKEN]?: string }; TESTNET: { [key in TOKEN]?: string } } = {
    MAINNET: {},
    TESTNET: {
        SUI: "0x7b30b7740b4d3975eca8ef4dd3723853ac676acbc334e5a64bb5aab3bcfd06a8",
        USDC: "0xaee20b37552f4c74e8c391479a21560022453c3b72544acaec8e5b69e90747eb",
        wUSDT: "0xcc0233a4ad637b479931cfbba64bab61647787215b10e0bd57998228cff4cd5e",
        wBTC: "0x4321fc6ec1bcff91f8064296ac44d240b2812b81619c52b2c649c5452fdbaca9",
        wETH: "0xbc0410a38f6cb069eee34d2519a5beea667d5a43d61b7e355f4b7ed8d705efda",
        wSOL: "0xb6ea41a8212a35621256446c6df68741831c4b801d811a0f3ebfe8a842794b9f",
        CETUS: "0xc4128130b7f3fed9893df8cfa372bdb1b30794e365e16e93f8617d3a9a578a9a",
        TURBOS: "0x6818486c76eabaa24156ccd84cd1a3df188c94ccc19bb601e7c3589d9766f7a8",
        SCA: "0xb59cb2a1df03bdbdb9af858d883dc5ea3a90dd1d616497e244a8e7f3165fe929",
        SEI: "0x5de032cf3643705efbc749ddd271bd783f5cedc3e6555ebea70b681ad305a848",
        INJ: "0x77fb65d1e1d3b30428ef624af83d40dc5d5240c882795a05d862b7d17b6df62b",
        AFSUI: "0xe1a840db2b433946837a724a12f8152d9812428227684f59886b4e32a8d96bda",
        MFUD: "0xa360c6637e84b3182545c6cb8029cbb189a1a447ee2871112ffbb7b5fb42dabe",
        MBLUB: "0x7852083dafac5dddf42e46912114a87c81c092268e18412f4bb9ec7ec4a255d2",
        TYPUS: "0x70253c784b82c61cb1341d6e5589f969324ac2e325278fa071ed27cbb33d7a37",
    },
};

export const tokenRegistry: { MAINNET: { [key in TOKEN]?: string }; TESTNET: { [key in TOKEN]?: string } } = {
    MAINNET: {
        MFUD: "0xb8d7e7ab783e56700c0212bd9f0938bba9dd3e7241c149e6c52b21334ec45ece",
        MBLUB: "0x37c31cfd324a8fdafc6dff5a083822c65b360c9dc04e2b6c4453f051754c7c3a",
        MLIQ: "0x70acdb4a2978d2d99edf9ce0297e34e314cd097fd243a7ddbc00af1eb77f2454",
    },
    TESTNET: {
        wBTC: "0xcf5184b85f47cb1ffe421249e48b2cd34807534e1a4b4ad384009295bbbd3bf4",
        wETH: "0x5cd3726a1d1ef32bffaaeb2ec4964f0ffac56cfb919f7d13d4672aed5059bfa1",
        wSOL: "0x1186a198ebd006e4f444ff88334307d6b376c02a040cfdad380ca06090f52472",
        wAPT: "0xf8d1edd32c4847c6d2c0e5fbf61291ae393092540e5e0723e7c6cf52089d670f",
        wUSDT: "0xc0bd93d1c77ff19bef3f3cd55564aa55acb46cbcc77905d2fa4893ac16cffea7",
        wUSDC: "0xf7df3c68a7d3ffc54065565c94a9fa3f5342957340bce78be74373846241a833",
        CETUS: "0x24a7a5297a3656ebea71ed72a4974a7710943d9a598fda60fe60b44262da9f27",
        BUCK: "0x441cf46a499c6e4d0560c4c9000351f34a928e53018d65857a1591ca1aa2bd58",
        TURBOS: "0x45179ff4beedfc94c29044081f3722d34ba36813b99d416bb868d1769a85bb57",
        FUD: "0x694d47bedc6a80b405fc5c1051f065e33b2a3c5f7b79f76cb2905233b2a8c885",
        AFSUI: "0xfee32f5338f70a782f25fabf7fa934130b43715ad6fa2aefbf91305c825c3e23",
        INJ: "0xcfd839650442dce7ec74b2c2b2f0c5ee0d8fe1bc542d1c71062ae34192c4514c",
        SEI: "0x2b2015fa8cad497e9673734d66ac66f411dadf2ee11be6d370ab8418331c0132",
        SCA: "0xdb322211ad67d01232dc296fc9a1dae89fcf6188b1e6cf16e7a48e4061d23b78",
        BLUB: "0xd470dbb74ae3f4cea5b39f1edaf729145fcdc8da023c81346fce1c1de046e6e4",
        AUSD: "0xd87ea623f4f2635d66f59d7defaeb96e0147e0cdd8f5406756433d8d8849f785",
        MFUD: "0x7ad87901531693f1baa541712947860dcc543617e11b14993ad70d20daf159c6",
        MBLUB: "0x7c36d8c1b2b569676d9a3f4c73487ec49b483111cc0abf4b0d5654e026ac3d3a",
    },
};
