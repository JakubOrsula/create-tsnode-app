#!/usr/bin/env node

'use strict'

const path = require('path');
const fs = require('fs');
const {execSync} = require('child_process');

if (process.argv.length < 3) {
  console.log('Specify project name please')
  return;
}

console.log(`Project name is: ${JSON.stringify(process.argv[2])}`)
fs.mkdirSync(process.argv[2])
process.chdir(process.argv[2])
execSync(`npm init -y`)

// this is bad, todo find a better way

const contents = fs.readFileSync('package.json', {encoding: 'utf-8', flag: 'r'}).replace('index.js', 'index.ts');
fs.writeFileSync('package.json', contents);

console.log('copying files');


//todo create a build script which will inject these files
  [
  ['.eslintignore', 'REPLACE.eslintignore'],
    ['.eslintrc.js', 'REPLACE.eslintrc.js'],
      ['index.ts', 'REPLACEindex.ts'],
    ['tsconfig.json', 'REPLACEtsconfig.json'],
    ['.prettierrc.js', 'REPLACE.prettierrc.js']
  ].forEach(([f, contents]) => fs.writeFileSync(f, contents)) //todo maybe parallelize

console.log('installing...');

[
  'npm i @types/node typescript ts-node',
  'npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/eslint-plugin-tslint @typescript-eslint/parser eslint eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-prefer-arrow tslint',
].forEach((command) => {
  try {
    console.log(`Executing: ${command}`)
    execSync(command);
  } catch (e) {
    console.log(e)
    console.log('Sorry something went wrong. Try to read the errors, delete created dir and try again.')
    process.exit(1);
  }})
