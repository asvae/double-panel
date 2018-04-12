const config = require('./config.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const stats = require('./blocks/stats')
const resolve = require('./blocks/resolve')
const performance = require('./blocks/performance')
const optionsModule = require('./blocks/module')

module.exports = {
  mode: 'production',
  entry: {
    app: config.FOLDERS.DEMO + '/app.ts',
  },
  stats,
  resolve,
  performance,
  module: optionsModule.main,
  output: {
    path: config.FOLDERS.DIST,
    filename: 'src/index.js',
    publicPath: '/',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: config.FOLDERS.ROOT }),
    new HtmlWebpackPlugin({
      filename: 'app.html',
      // chunks: ['app'],
      template: config.FOLDERS.SRC + '/build/app.html',
    }),
    optionsModule.extractor,
  ],
}
