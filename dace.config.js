
const { reduxConfig } = require('dace-plugin-redux');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  modify(config, { target, dev }) {
    const appConfig = config;
    const IS_NODE = target === 'node';
    const IS_DEV = dev;
    console.log('IS_NODE', target, 'IS_DEV', IS_DEV)

    reduxConfig.modify(appConfig, { target, dev });

    appConfig.resolve.alias = {
      ...appConfig.resolve.alias,
      '$self-yo-config': '/src/yo-config',
      '$self-yo-component': '/src/yo-component',
      '$self-component': '/src/component',
      '$self-util': '/src/util',
      '$self-config': '/src/config'
    };

    appConfig.module.rules.push({
      test: /\.scss$/,
      use: IS_NODE ? [
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1
          }
        }
      ] : (IS_DEV ? [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1
          }
        },
        {
          loader: require.resolve('sass-loader')
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
          loader: require.resolve('sass-loader')
        }
      ])
    });

    return appConfig;
  }
};