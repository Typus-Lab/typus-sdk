import { subVaults } from '../utils/getSubVault';
(async () => {
    let res = await subVaults()
    console.log(res)
})();
