const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const devMode = process.env.NODE_ENV === 'development';

module.exports = () => {
  const prodConfig = {
    mode: 'production',
    optimization: {
      minimize: true,
      splitChunks: { chunks: 'all' },
    },
  };
  const devConfig = {
    mode: 'development',
    devtool: 'eval',
    optimization: {
      minimize: false,
      splitChunks: false,
    },
    babelPlugins: [require.resolve('react-refresh/babel')].filter(Boolean),
  }

  const config = devMode ? devConfig : prodConfig;

  const {babelPlugins, ...restConfig} = config;

  const webpackConfig = {
    ...restConfig, 
    entry: './src/index',
    target: 'web',
    output: {
      publicPath: '/',
      path: path.join(__dirname, 'dist'),
      filename: '[name].[contenthash].entry.js',
      chunkFilename: '[name].[contenthash].chunk.js',
      assetModuleFilename: 'assets/[hash][ext][query]',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@components': path.resolve(__dirname, 'src', 'Components'),
        '@containers': path.resolve(__dirname, 'src', 'Containers'),
        '@pages': path.resolve(__dirname, 'src', 'Pages'),
        '@assets': path.resolve(__dirname, 'src', 'assets'),
        '@stores': path.resolve(__dirname, 'src', 'stores'),
        '@hooks': path.resolve(__dirname, 'src', 'hooks'),
        '@utils': path.resolve(__dirname, 'src', 'utils'),
        '@pages': path.resolve(__dirname, 'src', 'Pages'),
        '@api': path.resolve(__dirname, 'src', 'api'),
        '@app': path.resolve(__dirname, 'src', 'app'),
        '@styles': path.resolve(__dirname, 'src/assets', 'styles'),
      },
    },
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/u,
          exclude: /node_modules/u,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: babelPlugins,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'file-loader'],
        },
        {
          test: /\.css$/u,
          use: [
            config.optimization.minimize ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: false,
                importLoaders: 1,
              },
            },
          ].filter(Boolean),
        },
        {
          test: /\.s[ac]ss$/u,
          use: [
            config.optimization.minimize ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'local',
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
                importLoaders: 1,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [path.resolve(__dirname, './src')],
                },
              },
            },
          ].filter(Boolean),
        },
        {
          test: /\.woff(?:2)?(?:\?v=[0-9].[0-9].[0-9])?$/u,
          type: 'asset/resource',
        },
        {
          test: /\.(?:ttf|eot)(?:\?v=[0-9].[0-9].[0-9])?$/u,
          type: 'asset/resource',
        },
        {
          test: /\.(?:jpe?g|png|gif)$/iu,
          type: 'asset/resource',
        },
        {
          test: /\.m?js$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser"
    }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Menu',
        filename: 'index.html',
        favicon: './src/assets/favicon/favicon.ico',
        minify: config.optimization.minimize,
      }),
      new webpack.ProvidePlugin({ Buffer: ['buffer', 'Buffer'], process: 'process/browser' }),
      config.optimization.minimize &&
        new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[id].[contenthash].css',
        ignoreOrder: true,
      }),
      new GenerateSW({
        skipWaiting: true,
        clientsClaim: true,
        cacheId: 'menu-teste',
        maximumFileSizeToCacheInBytes: 1024 * 1024 * 5,
        cleanupOutdatedCaches: true
      }),
    ]
      .filter(Boolean)
      .concat(devMode ? [new ReactRefreshWebpackPlugin()] : []),
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
        publicPath: '/',
      },
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      },
      historyApiFallback: true,
    },
  };

  return webpackConfig;
};
