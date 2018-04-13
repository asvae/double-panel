const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

var config = require('./config.js')

const stats = require('./blocks/stats')
const resolve = require('./blocks/resolve.js')
const performance = require('./blocks/performance.js')
const optionsModule = require('./blocks/module.js')

module.exports = {
  mode: 'development',
  entry: path.join(config.FOLDERS.SRC, 'demo/app.ts'),
  stats,
  resolve,
  performance,
  module: optionsModule.main,
  devServer: {
    stats: 'errors-only',
    contentBase: path.join(config.FOLDERS.SRC, 'demo'),
    historyApiFallback: {
      disableDotRule: true,
      index: 'index.html',
      rewrites: [
        { from: /(\w)*/i, to: '/index.html' },
      ],
    },
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/demo/index.html',
    }),
    optionsModule.extractor,
  ],
  devtool: '#eval-source-map',
}
