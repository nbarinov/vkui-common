#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const paths = require('../../config/paths');

fs.copyFileSync(path.resolve(paths.vkuiCommonPath, 'tsconfig-app.json'), path.resolve(paths.appPath, 'tsconfig.json'));
