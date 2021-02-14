const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const safePostCssParser = require('postcss-safe-parser');

const paths = require('../../../paths');
const targets = require('../../../targets');

/**
 * @param {'production'|'development'} mode
 */
module.exports = (mode = 'development', options = {}) => {
  const isEnvProduction = mode === 'production';

  const emit = isEnvProduction ? {
    loader: MiniCssExtractPlugin.loader,
    options: paths.publicUrlOrPath.startsWith('.') ? {
      publicPath: '../../'
    } : {}
  } : require.resolve('style-loader');

  const loaders = [emit, {
    loader: require.resolve('css-loader'),
    options
  }, {
      loader: require.resolve('postcss-loader'),
      options: {
        sourceMap: !isEnvProduction,
        postcssOptions: {
          parser: safePostCssParser,
          plugins: [
            require('postcss-import'),
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              browsers: targets[mode].postcss
            }),
          ].concat(isEnvProduction ? require('postcss-custom-properties')({ preserve: true }) : []),
        }
      }
    }];

  return loaders;
};
