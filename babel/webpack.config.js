var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    entry: {
        server: __dirname + "/server.js"
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    target: 'node',
    node: {
      console: false,
      global: false,
      process: false,
      Buffer: false,
      __filename: false,
      __dirname: false
    },
    externals: nodeExternals(),
    resolve: {
        alias: {
            Main$: __dirname + '/app/assets/scripts/components/Main.jsx',
            Toolbar$: __dirname + '/app/assets/scripts/components/Toolbar.jsx',
            AddPost$: __dirname + '/app/assets/scripts/components/AddPost.jsx',
            PostList$: __dirname + '/app/assets/scripts/components/PostList.jsx',
            Post$: __dirname + '/app/assets/scripts/components/Post.jsx',
            appStyles$: __dirname + '/app/assets/styles/styles.scss',
            articlesStyles$: __dirname + '/app/assets/styles/modules/_articles.scss'
        }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader'
        }
      ]
    }
  },
  {
      entry: {
          app: __dirname + "/app/assets/scripts/app.jsx"
      },
      output: {
          path: __dirname + "/dist",
          filename: "[name].bundle.js"
      },
      resolve: {
          alias: {
              Main$: __dirname + '/app/assets/scripts/components/Main.jsx',
              Toolbar$: __dirname + '/app/assets/scripts/components/Toolbar.jsx',
              AddPost$: __dirname + '/app/assets/scripts/components/AddPost.jsx',
              PostList$: __dirname + '/app/assets/scripts/components/PostList.jsx',
              Post$: __dirname + '/app/assets/scripts/components/Post.jsx',
              appStyles$: __dirname + '/app/assets/styles/styles.scss',
              articlesStyles$: __dirname + '/app/assets/styles/modules/_articles.scss'
          }
      },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
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
]
