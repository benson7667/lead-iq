const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new OptimizeCssAssetsPlugin(), // Minimize CSS in production
      new TerserPlugin({
        cache: true,
        extractComments: false,
        exclude: [/\.min\.js$/gi],
        parallel: true, // recommended to increase build time
        sourceMap: true,
        terserOptions: {
          ecma: 5, // to es5
          mangle: true,
          compress: true,
        },
      }),
    ],
  },
})
