const config = require('./../config')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const path = require('path')

const isDevelop = process.env.NODE_ENV === 'development'

const extractor = new ExtractTextPlugin({
  filename: 'css/[name].css',
  disable: isDevelop,
})

exports.extractor = extractor

exports.main = {
  rules: [
    {
      test: /\.scss$/,
      use: extractor.extract({
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
        fallback: 'style-loader',
      }),
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: extractor.extract({
            use: [
              { loader: 'css-loader' },
              { loader: 'sass-loader' },
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: path.join(config.FOLDERS.SRC, 'scss/resources/resources-main.scss'),
                },
              },
            ],
            fallback: isDevelop ? 'vue-style-loader' : 'style-loader',
          }),
        },
      },
    },
    {
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      },
    },
  ],
}
