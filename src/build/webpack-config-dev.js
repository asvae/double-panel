const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = require('./config.js')

const stats = require('./blocks/stats')
const resolve = require('./blocks/resolve.js')
const performance = require('./blocks/performance.js')
const optionsModule = require('./blocks/module.js')

module.exports = {
  mode: 'development',
  entry: {
    app: config.FOLDERS.DEMO + '/app.ts',
  },
  stats,
  resolve,
  performance,
  module: optionsModule.main,
  devServer: {
    stats: 'errors-only',
    contentBase: config.FOLDERS.DEMO,
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
      template: './demo/index.html',
    }),
    optionsModule.extractor,
  ],
  devtool: '#eval-source-map',
}
