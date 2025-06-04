import "src/utils/load_env";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import { SuiClient } from "@mysten/sui/client";
import { TypusConfig, getMintTokenTx } from "src/utils";
import { TOKEN, tokenRegistry, tokenType } from "src/constants";
import { Transaction } from "@mysten/sui/transactions";
import mne from "mnemonic.json";

(async () => {
    let config = await TypusConfig.default("MAINNET", null);
    let signer = Ed25519Keypair.deriveKeypair(String(mne.MNEMONIC));
    let provider = new SuiClient({ url: config.rpcEndpoint });

    let token: TOKEN = "TYPUS";
    let amount = 1025640000000;

    let recipients = [
        "0x0ba70693c0c721629cdd2ca7dfa5615d96b76d6c8f9727890291c46dbec0e18c",
        "0x5c9631b6e7443b1b57ab080498db34f6fa7fca2759d77622d0ed98aa01a12e63",
        "0x9392728dc4693473f7d63efcc97f7585478ee7297e9c4b7f6390cb4bbd1f299f",
        "0x3fce2f6e10341bdc01411517db78b2484f616088b6cce75ccd6d682495fa2904",
        "0x6b0ecbf8c4454422554ef775931669194c8a2cf37abfac519ff111c18bff1517",
        "0xf876db1c3783ccd73872833482d6a01fbf5b980cbfd735e4f23db0976383aedc",
        "0x73e8e5c0d73cf33fa870915250e6cab0b3744f6e97b91308c83fb69bd500c070",
        "0x09ba60d1f1dcabce4078e49bc790a2fb565b13af422b5bc01c92beb17d36e286",
        "0x60b1bce05845f36922707424def30bf6b9c8964532073513e862e0d5bc5f68a5",
        "0x708623fb439c82eefa255b9e91cc8ac893d0763e8eed459dbda76b84c58e860f",
        "0x253bf73b6ae6099d1fc3b12083b87a51f2f3a31ca6599cc8edb4a7bacbfbf711",
        "0x34ccb9d463bace027c4845dcdac4152b42463c57f025236593afa7ee7ca65663",
        "0xeeba729e967b0f4c8d715dd1f40c34ade693855e32cb1821091f64a992b07c27",
        "0xe518e3a467b75d6a741bbc8cc538ca9aa6841b031401dc3ee6fe8d636432a2dc",
        "0xf65008e56ae4071ff96404ac5904fb03fffd7df6934d9e30e9fafbf537d6f665",
        "0x7c1f4886189c8273e52540804fc67fee58a1a6650ebc3c86f85d14995a5d73e3",
        "0xb645c9d8f710c232e47599563ab4d57366a5cd4198b0eb70befd5d935d8c41ff",
        "0x17df2f001ce40dbc015d38e686b5b2784278f7aeb0e808ef2bed8793d9980a45",
        "0xb1b9e0005831f1bb2d58f121c8d38bf930763bc49e93542e25ccb550279f8440",
        "0xb7b0ca3176aa849f9a66c02b5cecff7c6cee679d7e886940783fc1a8f3f02eaf",
        "0xd2ae9914e82fe8a381ea2877e915393150bcb02c5f9120651b68f0a0f66d5cc9",
        "0x0de5a09a0b029b0c4f1017a58dc78a2341511a7f6ba4925287aa836c1166dbbe",
        "0x03e3f1ca852358b50837758b5197fedf61e2ea69186c469595baa717560963f9",
        "0x229baf7728c942bf5716ef07a8c011e304b2ae962ef43b1188ed28a1a4d2ad82",
        "0xf14a609e4c4fae95fbeadcaf042cc98253040d98017bdd33cf6051818c53d427",
        "0x62401a5a2b5ab8e822bdac54ad50c16c4cc9c52ce6c834e9d6a7f988f2c6d6a1",
        "0x74433de497aec7dbf96eeb82c436e61e842dadd43b67228f4fd1f56a1ee907d2",
        "0x176fc6816074d30d848596bbfc2eadf5088d433b4316a7f595094960247349de",
        "0xe7649f28cc3a0e12213c8164b09f3e2d480cb8f65cf60972fe4f5f84e5589f3e",
        "0x444770924feff8b1b00bc1e2b286bbcfa6a256fcfc9222501a8ed55ae78a6762",
        "0x8ae0b0fa4af1b807a4cda0228ee527b6db0755f3bfc5a0ffbc7e0861ff29ac23",
        "0x09a26b9752107dfd2f6bffa474a0e47ea49faaeb7b9286cd0022e5e8534ffce0",
        "0x95f26ce574fc9ace2608807648d99a4dce17f1be8964613d5b972edc82849e9e",
        "0x454ccc8e040708da1fcd163ad625fab06d998e1ff37490acaf22dc4c6b57c5fa",
        "0xcfab9630428513ebd2f39dd5e00fde44f87a9f6fb968baf9be0baee64c4a4eb4",
        "0xfbbf26e16582ee56185d2600d79ba8d82d9dcba9d0122a6fe09ba19c7d605313",
        "0x0fe4b8f72b9724b2deb1b8791f80e568e2b9119bfe85c91f8b665f211a721b6b",
        "0xcb238e19df137279601a6cd8745189d4e1c1396ca24fc6e95b917f47a2c29a31",
        "0x16a3e914273427115230f0659b17bd4fd1cf3846797a3bc2fdc0b0bf0eb075ba",
        "0xe95ac5de8cf45e40933b624bec425081a634061d41c29ee43b1430eea7a3025b",
        "0x44c64dd9d9dcc66dbc0bb3d71487e55cd8911f92f14a02e64b36ba73f0d130f8",
        "0xc1cfa6d84f3e1bae26da3580b0dbdca6abd7ebed70c28760e005a7bc3ff91830",
        "0x6cc9d7135704aa1d849f8c428a2e9d39c0002f3db3c2a1445ce7e72eaa15fb13",
        "0x03110d327e8bf426df7156285faf6eb08fbd01edeffd7b0dbdb89e2f67dedb43",
        "0x1279632f9118c66a13752bffdacfffaef456f813dd65bde9a498c1d9eaeb0108",
        "0x271ae9e18d40764199d3f39a31d3277daedcd66cc821193174021ba2173b38ce",
        "0xb2e860a164d31d17333f056b760325aa0b08a81638aa1ef115b95922a43b1411",
        "0x7383b5e076553f79822374baca843c8fac02d510fb0f4ab344fc7ab591be94a7",
        "0xae303b554dfc53c0a0ba1f2fba37301dbf49588911994bd7959aa9ea293f293e",
        "0x8b16a58683baf885d92ce5655b206752a9702915559e468df7854240917f0232",
        "0xbd637af537b5d8d734bacb36477a71cc83251e5545af22d51d671fb94d484107",
        "0x3e3914e43a20123fb4ee0061bdc2d58e2e53dddca5ff2886895eb2af3c401c35",
        "0xbd72e8d1630f35ba3bfc6f6942da0dd00b3347954c0bee126531bf81f82cd24a",
        "0xe8c64a9421523209bd9063567dcc7b292a6e0d04cf285182ea0d720d445d384f",
        "0x9777ec5ca91296eea577e944db34e1a7b464330d6d5c73741126b51d0517e6be",
        "0x9998e0039ddee75bf4d200b0779f7dea6780620b483378758c01c6807dfb2301",
        "0x555607fc44e5ee2ca799d5d7c7655638ab31b5a3547c150a11344adeb16854c2",
        "0xc7444cc2a9b40956dff7f27a5c3f4b0e4da3e7167e08740f1eb4f77f69f6f4e2",
        "0xd15f079d5f60b8fdfdcf3ca66c0d3473790c758b04b6418929d5d2991c5443ee",
        "0xfd67dc60dc633bdd8ced113bf35e59e4afa87508caaa57341de29e1babf57f0c",
        "0xfe5da6c61591489bdf77aa81e84a7acf572db9f4dff3fab5e7aee3b44dc044bd",
        "0x481656e79fe09e76dd94d28e17bb77fe318d24a238432ae09d17e211c0a22d6f",
        "0xd3bbc8835a04806b1778756e286b90b08eb5df50c6d5977d9295f3cc3c73a383",
        "0xe95b8df26f1668528378dbe999b2e12cc44f649ada86bb4cc32b82cb8f34a300",
        "0xd40dd3515bc5a38836d0e32848713f4b1b672ce806ee4a733dbe3de983ed6308",
    ];

    // coins
    let coins = (
        await provider.getCoins({
            owner: signer.toSuiAddress(),
            coinType: tokenType["MAINNET"][token],
        })
    ).data.map((coin) => coin.coinObjectId);
    console.log(coins.length);

    let tx = new Transaction();

    let coin = coins.pop()!;
    if (coins.length > 0) {
        tx.mergeCoins(
            tx.object(coin),
            coins.map((id) => tx.object(id))
        );
    }

    console.log(recipients.length, amount);

    let vec = Array.from({ length: recipients.length }, () => tx.pure.u64(amount));

    let splitRes = tx.splitCoins(tx.object(coin), vec);

    for (let i = 0; i < recipients.length; i++) {
        tx.transferObjects([splitRes[i]], recipients[i]);
    }

    let res = await provider.signAndExecuteTransaction({ signer, transaction: tx });
    console.log(res);
})();
