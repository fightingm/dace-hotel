
const { reduxConfig } = require('dace-plugin-redux');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  modify(config, { target, dev }) {
    const appConfig = config;
    const IS_NODE = target === 'node';
    const IS_DEV = dev;

    reduxConfig.modify(appConfig, { target, dev });

    appConfig.resolve.modules = [...appConfig.resolve.modules, path.resolve('src')];

    appConfig.resolve.extensions.push('.scss');
    // appConfig.resolve.alias = {
    //   ...appConfig.resolve.alias,
    //   '$self-yo-config': path.resolve('src/yo-config'),
    //   '$self-yo-component': path.resolve('src/yo-component')
    // };

    appConfig.module.rules.push({
      test: /\.scss$/,
      use: IS_NODE ? [
        {
          loader: require.resolve('css-loader'),
        },
        {
          loader: require.resolve('fast-sass-loader')
        }
      ] : (IS_DEV ? [
        {
          loader: require.resolve('style-loader')
        },
        {
          loader: require.resolve('css-loader')
        },
        {
          loader: require.resolve('fast-sass-loader')
        }
      ] : [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: false,
            minimize: true
          }
        },
        {
          loader: require.resolve('fast-sass-loader')
        }
      ])
    });

    // appConfig.plugins.push(
    //   new MiniCssExtractPlugin({
    //     filename: '[name].css',
    //     // allChunks: true because we want all css to be included in the main
    //     // css bundle when doing code splitting to avoid FOUC:
    //     // https://github.com/facebook/create-react-app/issues/2415
    //     chunkFilename: "[id].css"
    //   })
    // );
    return appConfig;
  }
};