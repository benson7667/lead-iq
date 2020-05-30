const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(less)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
    ],
  },
  devServer: {
    hot: true,
    inline: true,
    open: true,
    historyApiFallback: true,
    port: 3000,
  },
})
