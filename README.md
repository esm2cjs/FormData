# @esm2cjs/formdata-polyfill

This is a fork of https://github.com/jimmywarting/FormData, but automatically patched to support ESM **and** CommonJS, unlike the original repository.
This fork does NOT include browser support, only Node.js.

> **Note:** FormData is built in to NodeJS v18 globally so that you no longer need this.

## Install

You can use an npm alias to install this package under the original name:

```
npm i formdata-polyfill@npm:@esm2cjs/formdata-polyfill
```

```jsonc
// package.json
"dependencies": {
    "formdata-polyfill": "npm:@esm2cjs/formdata-polyfill"
}
```
but `npm` might dedupe this incorrectly when other packages depend on the replaced package. If you can, prefer using the scoped package directly:

```
npm i @esm2cjs/formdata-polyfill
```

```jsonc
// package.json
"dependencies": {
    "@esm2cjs/formdata-polyfill": "^ver.si.on"
}
```

## Usage

```js
// Using ESM import syntax
import { FormData } from "formdata-polyfill";

// Using CommonJS require()
const { FormData } = require("formdata-polyfill");
```

For more details, please see the original [repository](https://github.com/jimmywarting/FormData).

## Sponsoring

To support my efforts in maintaining the ESM/CommonJS hybrid, please sponsor [here](https://github.com/sponsors/AlCalzone).

To support the original author of the module, please sponsor [here](https://github.com/jimmywarting/FormData).

