const config = require('./webpack/common.config');

const isEnvProduction =
  process.env.NODE_ENV === 'production' ||
  process.env.BABEL_ENV === 'production';

const mode = isEnvProduction ? 'production' : 'development';

module.exports = isEnvProduction
  ? [
    config(mode, false),
    config(mode, true),
  ]
  : config(mode, false);
