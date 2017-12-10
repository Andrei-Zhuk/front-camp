var webpack = require('webpack');

module.exports = {
  entry: {
    App: __dirname + "/app/assets/scripts/App.js"
  },
  output: {
    path: __dirname + "/app/dist",
    filename: "[name].js",
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    alias: {
      appStyles: __dirname + '/app/assets/styles/styles.scss',
      articlesStyles: __dirname + '/app/assets/styles/modules/_articles.scss'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {}
          },
          {
            loader: 'sass-loader',
            options: {}
          }
        ]
      }
    ]
  }
}
