import { subVaults } from '../utils/utilsTs/getSubVault';
(async () => {
    let res = await subVaults()
    console.log(res)
})();
