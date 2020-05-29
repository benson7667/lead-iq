const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
      {
        test: /\.(sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      description: '',
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[hash].css',
    }),
    new webpack.EnvironmentPlugin({
      BUILD_ENV: 'dev', // default: if BUILD_ENV is not provided
    }),
  ],
}
