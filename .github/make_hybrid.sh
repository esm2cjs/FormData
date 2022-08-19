#!/bin/bash

mkdir -p esm cjs
mv esm.min.js esm/index.js
mv esm.min.d.ts esm/index.d.ts
rm *.js

sed -i "s#'fetch-blob#'@esm2cjs/fetch-blob#" esm/index.js

PJSON=$(cat package.json | jq --tab '
	del(.type)
	| .description = .description + ". This is a fork of jimmywarting/FormData, but with CommonJS support."
	| .repository = "esm2cjs/" + .name
	| .name |= "@esm2cjs/" + .
	| .author = { "name": "Dominic Griesel", "email": "d.griesel@gmx.net" }
	| .publishConfig = { "access": "public" }
	| .funding = "https://github.com/sponsors/AlCalzone"
	| .main = "cjs/index.js"
	| .module = "esm/index.js"
	| .files = ["cjs/", "esm/"]
	| .exports = {}
	| .exports["."].import = "./esm/index.js"
	| .exports["."].require = "./cjs/index.js"
	| .exports["./package.json"] = "./package.json"
	| .types = "esm/index.d.ts"
	| .typesVersions = {}
	| .typesVersions["*"] = {}
	| .typesVersions["*"]["esm/index.d.ts"] = ["esm/index.d.ts"]
	| .typesVersions["*"]["cjs/index.d.ts"] = ["esm/index.d.ts"]
	| .typesVersions["*"]["*"] = ["esm/*"]
	| .scripts = {}
	| .scripts["to-cjs"] = "esm2cjs --in esm --out cjs -t node12"
	| .dependencies["@esm2cjs/fetch-blob"] = .dependencies["fetch-blob"]
	| del(.dependencies["fetch-blob"])
	| del(.devDependencies["@types/google-closure-compiler"])
	| del(.devDependencies["google-closure-compiler"])
')
echo "$PJSON" > package.json

npm i -D @alcalzone/esm2cjs
npm run to-cjs
npm uninstall -D @alcalzone/esm2cjs

PJSON=$(cat package.json | jq --tab 'del(.scripts["to-cjs"])')
echo "$PJSON" > package.json
