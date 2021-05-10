const path = require('path');
const fs = require('fs');

const vkuiCommonDirectory = path.resolve(__dirname, '../');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const appTemplate = path.resolve(__dirname, './template/index.html');
const appDevClient = path.resolve(__dirname, './utils/WebpackDevServerClient.js');

const moduleFileExtensions = ['mjs', 'js', 'jsx', 'json', 'ts', 'tsx'];
const configFileExtensions = ['js', 'json'];

const resolveModule = (resolveFn, filePath, extensions) => {
  const extension = extensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

module.exports = {
  vkuiCommonPath: vkuiCommonDirectory,
  appTemplate,
  appDevClient,
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveModule(resolveApp, 'src/index', moduleFileExtensions),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  appExclude: resolveModule(resolveApp, 'babel.exclude', configFileExtensions),
  appNodeModules: resolveApp('node_modules'),
  publicUrlOrPath: '/',
  moduleFileExtensions,
};
