# typus-sdk

## install

```bash
npm i 
```

## run scripts
### simple test for important function

```bash
npx ts-node scripts/sui.ts 
```
### mint customized token
- get package object id and one of asset registry(for example:BTC )from sui-dev-token, and use the registry mint 10001 token:
    
    ```bash
    sui client call --gas-budget 10000 --package $PACKAGE --module "token_btc" --function "mint" --args $REGISTRY 10001
    ```
    
    you will get different object with balance every time after mint, and all of them created by a same registry.
- or run test to mint customized token:
   ```bash
    npx ts-node test/testMint.ts   
    ```
### deposit token to shark_fin vault
- token example: tokenA ,which is created by "mint customized token" step, and the **type argument** is *0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC*, which can be found wih tokenA object id from explorer
- steps to deposit token:
    - step0: insure PACKAGE and VAULT_REGISTRY are correct. (generate from shark_fin package)
    - step1: check shark_fin registry vault num (EX:1)
    - step2: create new vault(vaultA) with tokenA
        ```bash
        sui client call --gas-budget 1000 --package $PACKAGE --module "shark_fin" --function "new_shark_fin_vault" --type-args 0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC --args $VAULT_REGISTRY 1671344789 true 1 10
        ```
    - step3: check shark_fin registry vault num. In this example, should be 2
    - step4: deposit tokenA to vaultA
    in this deposit example, deposit 9999 tokenA to vaultA: 
        ```bash
        sui client call --gas-budget 1000 --package $PACKAGE --module "shark_fin" --function "deposit" --type-args 0x27b3674c685046f66cad1d5496d2967894fa5329::token::USDC --args $VAULT_REGISTRY 1 true $TOKENAID 9999
        ```
        note: "1" in script is vault index
- or run test to deposit token:
     ```bash
        npx ts-node test/testDeposit.ts
    ```
