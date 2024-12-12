import { normalizeSuiAddress } from "@mysten/sui.js/utils";

export function typeArgsToAssets(typeArgs: string[]): string[] {
    let assets = typeArgs.map((x) => typeArgToAsset(x));
    return assets;
}

export function typeArgToAsset(typeArg: string): string {
    let typeArgs = typeArg.split("::");
    switch (normalizeSuiAddress(typeArgs[0])) {
        case "0x549e8b69270defbfafd4f94e17ec44cdbdd99820b33bda2278dea3b9a32d3f55":
            return "VSUI";
        case "0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881":
            return "WBTC";
        case "0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5":
            return "WETH";
        case "0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8":
            return "WSOL";
        case "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf":
            return "wUSDC";
        case "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c":
            return "USDT";
        case "0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a":
            return "TURBOS";
        case "0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37":
            return "APT";
        case "0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1":
            return "FUD";
        case "0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc":
            return "AFSUI";
        case "0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6":
            return "SCA";
        case "0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb":
            return "USDY";
        case "0x8993129d72e733985f7f1a00396cbd055bad6f817fee36576ce483c8bbb8b87b":
            return "HIPPO";
        case "0x83556891f4a0f233ce7b05cfe7f957d4020492a34f5405b2cb9377d060bef4bf":
            return "sSUI";
        case "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519":
            if (typeArgs[1] === "usdc") {
                return "wUSDC";
            } else if (typeArgs[1] === "btc") {
                return "WBTC";
            } else if (typeArgs[1] === "eth") {
                return "WETH";
            }
        default:
            if (typeArgs[2] == "BTC") {
                return "WBTC";
            } else if (typeArgs[2] == "ETH") {
                return "WETH";
            } else if (typeArgs[2] == "SOL") {
                return "WSOL";
            }
            return typeArgs[2];
    }
}

export function assetToDecimal(asset: string): number | undefined {
    switch (asset) {
        case "SUI":
        case "sSUI":
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
            return 9;
        case "BTC":
        case "WBTC":
        case "ETH":
        case "WETH":
        case "SOL":
        case "WSOL":
        case "APT":
        case "INJ":
        case "SEI":
        case "JUP":
            return 8;
        case "USDC":
        case "wUSDC":
        case "USDT":
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

export const tokenType = {
    MAINNET: {
        SUI: "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI",
        BTC: "0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881::coin::COIN",
        ETH: "0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN",
        wUSDC: "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN",
        USDT: "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN",
        CETUS: "0x06864a6f921804860930db6ddbe2e16acdf8504495ea7481637a1c8b9a8fe54b::cetus::CETUS",
        BUCK: "0xce7ff77a83ea0cb6fd39bd8748e2ec89a3f41e8efdc3f4eb123e0ca37b184db2::buck::BUCK",
        SOL: "0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8::coin::COIN",
        TURBOS: "0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a::turbos::TURBOS",
        APT: "0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37::coin::COIN",
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
    },
    TESTNET: {
        SUI: "0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI",
        CETUS: "0xb69a412ba4b22137088183da5e5042d37ba17580897884f00f959d4135d3e1a7::cetus::CETUS",
        BUCK: "0x879cd4804fe865897090e26eceb9f7a7cfda7dda1b2529a81631fa567e67375c::buck::BUCK",
        SOL: "0x879cd4804fe865897090e26eceb9f7a7cfda7dda1b2529a81631fa567e67375c::sol::SOL",
        TURBOS: "0xebc68999f399a5ba121f8e59c0940eaa0e074e30454403357b93b25af9f30117::turbos::TURBOS",
        APT: "0xdede697a5748d20ebff2aabf3f2fd5bd9e41afb1a624b636cddc6df69078bd22::apt::APT",
        FUD: "0x461efa7ee5aa1b27e44450d79e2104e7fc0991461e9eb1c2a3fc1f44cd554856::fud::FUD",
        MFUD: "0x7755ff79f0f27256c73e6c197e25b407ef6d4b9bd6e1af8cdd50fef28f84712c::mfud::MFUD",
        USDT: "0xa38dad920880f81ea514de6db007d3a84e9116a29c60b3e69bbe418c2d9f553c::usdt::USDT",
        AFSUI: "0xd31923b6821fb7ba32d23e514b43d307da6ef991f9ef1af2cc4e26a0992ac87a::afsui::AFSUI",
        INJ: "0xfd3d56e007e3ae44d74b6a6840de0bd04a3724360abd89ae683ca7d592bbb49e::inj::INJ",
        SEI: "0xfd3d56e007e3ae44d74b6a6840de0bd04a3724360abd89ae683ca7d592bbb49e::sei::SEI",
        USDY: "0x579809c614d4388ed821c9f304bb741715cdf4a718707eb7c6fcf7b7189870ef::usdy::USDY",
        TEXP: "0x9b43ee208a3b235810c145bca1161d1a71d08bfe76b1e55bb3db319ea95d0149::tails_exp::TAILS_EXP",
        SCA: "0xd33ea459d9e667c112f5168464a885a654d7bc3fd6903720aaa8cf495a32a77e::sca::SCA",
        BTC: "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::btc::BTC",
        ETH: "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::eth::ETH",
        wUSDC: "0x949572061c09bbedef3ac4ffc42e58632291616f0605117cec86d840e09bf519::usdc::USDC",
        BLUB: "0x94b8f6dcceeb2be160f6837089cc7502458f4f070fa0814380737acb0c41fd5b::blub::BLUB",
        MBLUB: "0x4b5d0a097ee8a309a89bb2bc589403a4a9a39de639d576495b697be2a60f69bb::mblub::MBLUB",
    },
};

export type TOKEN =
    | "SUI"
    | "CETUS"
    | "BUCK"
    | "SOL"
    | "TURBOS"
    | "APT"
    | "FUD"
    | "MFUD"
    | "BLUB"
    | "MBLUB"
    | "USDT"
    | "AFSUI"
    | "INJ"
    | "SEI"
    | "USDY"
    | "TEXP"
    | "SCA"
    | "BTC"
    | "ETH"
    | "USDC"
    | "LIQ"
    | "MLIQ"
    | "HIPPO"
    | "DEEP"
    | "BLUE"
    | "wUSDC";

export function typeArgToToken(typeArg: string): string {
    // console.log(typeArg);
    let typeArgs = typeArg.split("::");
    switch (normalizeSuiAddress(typeArgs[0])) {
        case "0x027792d9fed7f9844eb4839566001bb6f6cb4804f66aa2da6fe1ee242d896881":
            return "BTC";
        case "0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5":
            return "ETH";
        case "0xb7844e289a8410e50fb3ca48d69eb9cf29e27d223ef90353fe1bd8e27ff8f3f8":
            return "SOL";
        case "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf":
            return "wUSDC";
        case "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c":
            return "USDT";
        case "0x5d1f47ea69bb0de31c313d7acf89b890dbb8991ea8e03c6c355171f84bb1ba4a":
            return "TURBOS";
        case "0x3a5143bb1196e3bcdfab6203d1683ae29edd26294fc8bfeafe4aaa9d2704df37":
            return "APT";
        case "0x76cb819b01abed502bee8a702b4c2d547532c12f25001c9dea795a5e631c26f1":
            return "FUD";
        case "0xf325ce1300e8dac124071d3152c5c5ee6174914f8bc2161e88329cf579246efc":
            return "AFSUI";
        case "0x7016aae72cfc67f2fadf55769c0a7dd54291a583b63051a5ed71081cce836ac6":
            return "SCA";
        case "0x960b531667636f39e85867775f52f6b1f220a058c4de786905bdf761e06a56bb":
            return "USDY";
        case "0x9c86d1926a0a39e906f20674d6a35f337be8625ebcb6b799ee8ff011f328bee2":
            return "LIQ";
        case "0x8993129d72e733985f7f1a00396cbd055bad6f817fee36576ce483c8bbb8b87b":
            return "HIPPO";
        case "0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270":
            return "DEEP";
        case "0xe1b45a0e641b9955a20aa0ad1c1f4ad86aad8afb07296d4085e349a50e90bdca":
            return "BLUE";
        default:
            return typeArgs[2];
    }
}
