const config = require('./config.js')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const stats = require('./blocks/stats')
const resolve = require('./blocks/resolve')
const performance = require('./blocks/performance')
const optionsModule = require('./blocks/module')

module.exports = {
  mode: 'production',
  entry: path.join(config.FOLDERS.SRC, 'demo/app.ts'),
  stats,
  resolve,
  performance,
  module: optionsModule.main,
  output: {
    path: config.FOLDERS.DEMO,
    filename: 'src/index.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(['demo'], { root: config.FOLDERS.ROOT }),
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: './src/demo/index.html',
    }),
    optionsModule.extractor,
  ],
}
