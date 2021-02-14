#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const paths = require('../../config/paths');

fs.copyFileSync(path.resolve(paths.vkuiCommonPath, '.eslint-common.json'), path.resolve(paths.appPath, '.eslintrc.json'));
fs.copyFileSync(path.resolve(paths.vkuiCommonPath, '.eslintignore'), path.resolve(paths.appPath, '.eslintignore'));
