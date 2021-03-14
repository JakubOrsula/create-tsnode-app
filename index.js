#!/usr/bin/env node

'use strict'

const fs = require('fs');
const { execSync } = require("child_process");


if (process.argv.length < 3) {
    console.log('Specify project name please')
    return;
}

console.log(`Project name is: ${JSON.stringify(process.argv[2])}`)
fs.mkdirSync(process.argv[2])
process.chdir(process.argv[2])
execSync(`npm init -y`)

// this is bad, todo find a better way

const contents = fs.readFileSync("package.json", {encoding: "utf-8", flag: 'r'}).replace("index.js", "index.ts");

fs.writeFileSync("package.json", contents);

[
    "npm i @types/node typescript ts-node",
    "npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/eslint-plugin-tslint @typescript-eslint/parser eslint eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-prefer-arrow tslint",
    "wget "
]
execSync('npm i -D ')
