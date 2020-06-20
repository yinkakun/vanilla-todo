/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, 'static', './index.html'),
      favicon: './static/favicon.ico'
    }),
    new WebpackPwaManifest({
      name: 'Vanilla Todo',
      description: 'A Simple Todo App PWA built with React',
      background_color: '#ffffff',
      icons: [
        {
          src: path.resolve('./static/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    })
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /[\\/]node_modules[\\/]/,
        use: {
          loader: 'babel-loader'
        }
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
};
