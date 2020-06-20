/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const cssnano = require('cssnano');
const autoPrefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');
const WorkboxPlugin = require('workbox-webpack-plugin');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [autoPrefixer, postcssPresetEnv]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      mode: 'production'
    })
  ],
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({
        cssProcessor: cssnano,
        cssProcessorOptions: {
          map: {
            inline: false,
            annotation: true
          }
        }
      }),
      new TerserPlugin({
        parallel: true,
        cache: true,
        sourceMap: true
      })
    ]
  }
});
