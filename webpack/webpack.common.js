const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[hash].[ext]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[hash].[ext]',
        },
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'LeadIQ',
      description:
        'An assignment given by LeadIQ to create a Github user search page.',
      template: './public/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.join(__dirname, '../public/favicon.ico') }],
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash].css',
    }),
    new webpack.EnvironmentPlugin({
      BUILD_ENV: 'dev', // default: if BUILD_ENV is not provided
    }),
    new Dotenv({
      path: path.join(__dirname, '../.env'),
    }),
  ],
}
