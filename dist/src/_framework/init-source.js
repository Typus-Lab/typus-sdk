"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initLoaderIfNeeded = initLoaderIfNeeded;
var package_1 = __importStar(require("../_dependencies/source/0x1/init"));
var package_1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73 = __importStar(require("../_dependencies/source/0x1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73/init"));
var package_2 = __importStar(require("../_dependencies/source/0x2/init"));
var package_277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698 = __importStar(require("../_dependencies/source/0x277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698/init"));
var package_2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a = __importStar(require("../_dependencies/source/0x2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a/init"));
var package_4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277 = __importStar(require("../_dependencies/source/0x4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277/init"));
var package_5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828 = __importStar(require("../_dependencies/source/0x5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828/init"));
var package_6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f = __importStar(require("../_dependencies/source/0x6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f/init"));
var package_7237ec8436ef7e927c45470db6db3a834dd84cf903aedee3844e847fe4805399 = __importStar(require("../_dependencies/source/0x7237ec8436ef7e927c45470db6db3a834dd84cf903aedee3844e847fe4805399/init"));
var package_908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded = __importStar(require("../_dependencies/source/0x908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded/init"));
var package_98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e = __importStar(require("../_dependencies/source/0x98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e/init"));
var package_bd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585 = __importStar(require("../_dependencies/source/0xbd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585/init"));
var package_cc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e = __importStar(require("../_dependencies/source/0xcc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e/init"));
var package_e76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3 = __importStar(require("../_dependencies/source/0xe76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3/init"));
var package_4c83d54c5b4fa3096550131d62cc28f01594a88e3a7ed2acb3fda8888ec653df = __importStar(require("../typus-perp/init"));
var loader_1 = require("./loader");
var initialized = false;
function initLoaderIfNeeded() {
    if (initialized) {
        return;
    }
    initialized = true;
    package_1.registerClasses(loader_1.structClassLoaderSource);
    package_2.registerClasses(loader_1.structClassLoaderSource);
    package_1d17058789bd1e1e79f1a92424519a88146f191f58a06cc4d9ab23d17d46ab73.registerClasses(loader_1.structClassLoaderSource);
    package_277f90d256d1015a78cad646db091bec451c5bbab834b9fb70bace7885b5c698.registerClasses(loader_1.structClassLoaderSource);
    package_2fdff17b86e34ab722c8ba5e63f0da070d9a4163705b3fdc6a95802cab40a72a.registerClasses(loader_1.structClassLoaderSource);
    package_4213e12a2220f15f1837a76897110d2260786558169bd8d0847f21e9b551f277.registerClasses(loader_1.structClassLoaderSource);
    package_4c83d54c5b4fa3096550131d62cc28f01594a88e3a7ed2acb3fda8888ec653df.registerClasses(loader_1.structClassLoaderSource);
    package_5cfd0819411be98034cba544cbffab192c2c35674a05ff57f4f1c5042875b828.registerClasses(loader_1.structClassLoaderSource);
    package_6c9a394a43844fc09d9617bc8a8e775a4521f0e28e83de1da780d043a498671f.registerClasses(loader_1.structClassLoaderSource);
    package_7237ec8436ef7e927c45470db6db3a834dd84cf903aedee3844e847fe4805399.registerClasses(loader_1.structClassLoaderSource);
    package_908a10789a1a6953e0b73a997c10e3552f7ce4e2907afd00a334ed74bd973ded.registerClasses(loader_1.structClassLoaderSource);
    package_98670585b87e06628ef2d7f7cb1e7bee8ada65b43b82997935225a7e6e21d18e.registerClasses(loader_1.structClassLoaderSource);
    package_bd8fc1947cf119350184107a3087e2dc27efefa0dd82e25a1f699069fe81a585.registerClasses(loader_1.structClassLoaderSource);
    package_cc029e2810f17f9f43f52262f40026a71fbdca40ed3803ad2884994361910b7e.registerClasses(loader_1.structClassLoaderSource);
    package_e76d8a37d4132278a7a752183e90e04890b9e7d0f6657eadb68821609a2a56a3.registerClasses(loader_1.structClassLoaderSource);
}
