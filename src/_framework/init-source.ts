import * as package_1 from "../_dependencies/source/0x1/init";
import * as package_1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73 from "../_dependencies/source/0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73/init";
import * as package_2 from "../_dependencies/source/0x2/init";
import * as package_277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698 from "../_dependencies/source/0x277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698/init";
import * as package_2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a from "../_dependencies/source/0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a/init";
import * as package_4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277 from "../_dependencies/source/0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277/init";
import * as package_5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828 from "../_dependencies/source/0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828/init";
import * as package_6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f from "../_dependencies/source/0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f/init";
import * as package_7237ec8436ef7e927c45470db6db3a834dd84cf903aedee3844e847fe4805399 from "../_dependencies/source/0x7237ec8436ef7e927c45470db6db3a834dd84cf903aedee3844e847fe4805399/init";
import * as package_908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded from "../_dependencies/source/0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/init";
import * as package_98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e from "../_dependencies/source/0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e/init";
import * as package_bd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585 from "../_dependencies/source/0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585/init";
import * as package_cc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e from "../_dependencies/source/0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e/init";
import * as package_e76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3 from "../_dependencies/source/0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3/init";
import * as package_4c83d54c5b4fa3096550131d62cc28f01594a88e3a7ed2acb3fda8888ec653df from "../typus-perp/init";
import { structClassLoaderSource as structClassLoader } from "./loader";

let initialized = false;
export function initLoaderIfNeeded() {
    if (initialized) {
        return;
    }
    initialized = true;
    package_1.registerClasses(structClassLoader);
    package_2.registerClasses(structClassLoader);
    package_1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73.registerClasses(structClassLoader);
    package_277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698.registerClasses(structClassLoader);
    package_2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a.registerClasses(structClassLoader);
    package_4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277.registerClasses(structClassLoader);
    package_4c83d54c5b4fa3096550131d62cc28f01594a88e3a7ed2acb3fda8888ec653df.registerClasses(structClassLoader);
    package_5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828.registerClasses(structClassLoader);
    package_6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f.registerClasses(structClassLoader);
    package_7237ec8436ef7e927c45470db6db3a834dd84cf903aedee3844e847fe4805399.registerClasses(structClassLoader);
    package_908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded.registerClasses(structClassLoader);
    package_98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e.registerClasses(structClassLoader);
    package_bd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585.registerClasses(structClassLoader);
    package_cc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e.registerClasses(structClassLoader);
    package_e76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3.registerClasses(structClassLoader);
}
