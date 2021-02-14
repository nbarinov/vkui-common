const path = require('path');
const moduleAlias = require('module-alias');
const paths = require('./paths');
const appPackageJson = require(paths.appPackageJson);

const npm = name => path.resolve(paths.appNodeModules, name);
const resolutions = Object.keys(appPackageJson.resolutions || {})
  .reduce((acc, name) => {
    acc[name] = npm(name);
    return acc;
  }, {});

moduleAlias.addAliases(resolutions);

module.exports = resolutions;
