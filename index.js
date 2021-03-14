#!/usr/bin/env node

'use strict'

const fs = require('fs');
const path = require('path');
const yargs = require('yargs').usage(`
    Usage: $0 name-of-your-app
`)

const argv = yargs.argv()
fs.mkdirSync(argv)