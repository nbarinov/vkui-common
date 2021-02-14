#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const paths = require('../../config/paths');

const appPublicPath = path.resolve(paths.appPath, 'public');

if (!fs.existsSync(appPublicPath)) {
  fs.mkdirSync(appPublicPath);
}

fs.copyFileSync(path.resolve(paths.vkuiCommonPath, 'config/template/index.html'), path.resolve(appPublicPath, 'index.html'));
