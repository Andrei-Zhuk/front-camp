var webpack = require('webpack');

module.exports = {
    entry: {
        app: __dirname + "/app/assets/scripts/app.jsx"
    },
    output: {
        path: __dirname + "/app/dist",
        filename: "[name].js"
    },
    resolve: {
        alias: {
            Main: __dirname + '/app/assets/scripts/components/Main.jsx',
            Toolbar: __dirname + '/app/assets/scripts/components/Toolbar.jsx',
            AddPost: __dirname + '/app/assets/scripts/components/AddPost.jsx',
            Posts: __dirname + '/app/assets/scripts/components/Posts.jsx',
            appStyles: __dirname + '/app/assets/styles/styles.scss',
            articlesStyles: __dirname + '/app/assets/styles/modules/_articles.scss'
        }
    },
  module: {
    rules: [
      {
        test: /\.jsx$/,
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
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: './loader.js'
          }
        ]
      }
    ]
  }
}
