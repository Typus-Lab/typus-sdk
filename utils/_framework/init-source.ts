import * as package_1 from "../_dependencies/source/0x1/init";
import * as package_123 from "../_dependencies/source/0x123/init";
import * as package_1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f from "../_dependencies/source/0x1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f/init";
import * as package_1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6 from "../_dependencies/source/0x1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6/init";
import * as package_17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d from "../_dependencies/source/0x17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d/init";
import * as package_2 from "../_dependencies/source/0x2/init";
import * as package_277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698 from "../_dependencies/source/0x277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698/init";
import * as package_2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a from "../_dependencies/source/0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a/init";
import * as package_6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455 from "../_dependencies/source/0x6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455/init";
import * as package_7237ec8436ef7e927c45470db6db3a834dd84cf903aedee3844e847fe4805399 from "../_dependencies/source/0x7237ec8436ef7e927c45470db6db3a834dd84cf903aedee3844e847fe4805399/init";
import * as package_779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162 from "../_dependencies/source/0x779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162/init";
import * as package_855eb2d260ee42b898266e6df90bfd3c4ed821ccb253a352c159c223244a4b8a from "../_dependencies/source/0x855eb2d260ee42b898266e6df90bfd3c4ed821ccb253a352c159c223244a4b8a/init";
import * as package_98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e from "../_dependencies/source/0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e/init";
import * as package_9c564002970ce40370b0c1a8328d2e91924dab43ca2cb483af67aaf0f7cbe44e from "../_dependencies/source/0x9c564002970ce40370b0c1a8328d2e91924dab43ca2cb483af67aaf0f7cbe44e/init";
import * as package_a2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118 from "../_dependencies/source/0xa2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118/init";
import * as package_ad013d5fde39e15eabda32b3dbdafd67dac32b798ce63237c27a8f73339b9b6f from "../_dependencies/source/0xad013d5fde39e15eabda32b3dbdafd67dac32b798ce63237c27a8f73339b9b6f/init";
import * as package_bd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585 from "../_dependencies/source/0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585/init";
import * as package_ca5a5a62f01c79a104bf4d31669e29daa387f325c241de4edbe30986a9bc8b0d from "../_dependencies/source/0xca5a5a62f01c79a104bf4d31669e29daa387f325c241de4edbe30986a9bc8b0d/init";
import * as package_cc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e from "../_dependencies/source/0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e/init";
import * as package_e76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3 from "../_dependencies/source/0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3/init";
import * as package_e87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a from "../_dependencies/source/0xe87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a/init";
import * as package_efe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf from "../_dependencies/source/0xefe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf/init";
import * as package_0 from "../typus_perp/init";
import { structClassLoaderSource as structClassLoader } from "./loader";

let initialized = false;
export function initLoaderIfNeeded() {
    if (initialized) {
        return;
    }
    initialized = true;
    package_0.registerClasses(structClassLoader);
    package_1.registerClasses(structClassLoader);
    package_2.registerClasses(structClassLoader);
    package_123.registerClasses(structClassLoader);
    package_17117e8e181c236a3d1706f8a60486676cc9a5c82dc58d132a2f8270598271d.registerClasses(structClassLoader);
    package_1318fdc90319ec9c24df1456d960a447521b0a658316155895014a6e39b5482f.registerClasses(structClassLoader);
    package_1478a432123e4b3d61878b629f2c692969fdb375644f1251cd278a4b1e7d7cd6.registerClasses(structClassLoader);
    package_277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698.registerClasses(structClassLoader);
    package_2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a.registerClasses(structClassLoader);
    package_6cddbfa30141e0332f8995a12453fc2cb07a2fa3dad52b342493780c7784f455.registerClasses(structClassLoader);
    package_7237ec8436ef7e927c45470db6db3a834dd84cf903aedee3844e847fe4805399.registerClasses(structClassLoader);
    package_779b5c547976899f5474f3a5bc0db36ddf4697ad7e5a901db0415c2281d28162.registerClasses(structClassLoader);
    package_855eb2d260ee42b898266e6df90bfd3c4ed821ccb253a352c159c223244a4b8a.registerClasses(structClassLoader);
    package_98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e.registerClasses(structClassLoader);
    package_9c564002970ce40370b0c1a8328d2e91924dab43ca2cb483af67aaf0f7cbe44e.registerClasses(structClassLoader);
    package_a2de2f04907b77ef03800a8969bb4f88c821737ee133aba4bc0485b267ad2118.registerClasses(structClassLoader);
    package_ad013d5fde39e15eabda32b3dbdafd67dac32b798ce63237c27a8f73339b9b6f.registerClasses(structClassLoader);
    package_bd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585.registerClasses(structClassLoader);
    package_ca5a5a62f01c79a104bf4d31669e29daa387f325c241de4edbe30986a9bc8b0d.registerClasses(structClassLoader);
    package_cc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e.registerClasses(structClassLoader);
    package_e76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3.registerClasses(structClassLoader);
    package_e87f1b2d498106a2c61421cec75b7b5c5e348512b0dc263949a0e7a3c256571a.registerClasses(structClassLoader);
    package_efe8b36d5b2e43728cc323298626b83177803521d195cfb11e15b910e892fddf.registerClasses(structClassLoader);
}
