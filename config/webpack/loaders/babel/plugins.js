const path = require('path');

module.exports = (mode = 'development') => {
  const isEnvProduction = mode === 'production';

  const plugins = [[
    require.resolve('babel-plugin-named-asset-import'), {
      loaderMap: {
        svg: {
          ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
        },
      },
    }], [
    require.resolve('@babel/plugin-proposal-class-properties'), {
      loose: true
    }], [
    require.resolve('@babel/plugin-proposal-numeric-separator'), {
    }], [
    require.resolve('@babel/plugin-transform-runtime'), {
      corejs: false,
      helpers: true,
      version: require('@babel/runtime/package.json').version,
      regenerator: false,
      useESModules: true,
      absoluteRuntime: path.dirname(require.resolve('@babel/runtime/package.json')),
    }], [
    require.resolve('@babel/plugin-proposal-optional-chaining'), {
      loose: true,
    }], [
    require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'), {
      loose: true,
    }], [
    require.resolve('fast-async'), {
      spec: true,
    }]
  ];

  if (isEnvProduction) {
    plugins.push([
      require.resolve('babel-plugin-transform-react-remove-prop-types'), {
        mode: 'remove',
        removeImport: true,
        additionalLibraries: ['react-immutable-proptypes'],
      }
    ]);
  }

  return plugins;
};
