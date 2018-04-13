const config = require('./config.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const stats = require('./blocks/stats')
const resolve = require('./blocks/resolve')
const performance = require('./blocks/performance')
const optionsModule = require('./blocks/module')

module.exports = {
  stats,
  resolve,
  performance,
  entry: config.FOLDERS.SRC + '/index.ts',
  module: optionsModule.main,
  mode: 'production',
  output: {
    path: config.FOLDERS.DIST,
    filename: 'src/index.js',
    library: 'AsvaDoublePanel',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: config.FOLDERS.ROOT }),
    optionsModule.extractor,
  ],
}
