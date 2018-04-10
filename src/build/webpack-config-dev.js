const path = require('path')
const webpack = require('webpack')

var config = require('./config.js')

const entry = require('./blocks/entry')
const stats = require('./blocks/stats')
const resolve = require('./blocks/resolve.js')
const performance = require('./blocks/performance.js')
const optionsModule = require('./blocks/module.js')

module.exports = {
  mode: 'development',
  entry,
  stats,
  resolve,
  performance,
  module: optionsModule.main,
  devServer: {
    stats: 'errors-only',
    contentBase: config.FOLDERS.SRC + '/build',
    historyApiFallback: {
      disableDotRule: true,
      index: 'app.html',
      rewrites: [
        { from: /(\w)*/i, to: '/app.html' },
      ],
    },
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    optionsModule.extractor,
  ],
  devtool: '#eval-source-map',
}
