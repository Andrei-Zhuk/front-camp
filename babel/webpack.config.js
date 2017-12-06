module.exports = {
  entry: {
    App: __dirname + "/app/assets/scripts/App.js"
  },
  output: {
    path: __dirname + "/app/temp/scripts",
    filename: "[name].js"
  },
  module: {
    rules: [
        {
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: {
           loader: 'babel-loader'
         }
       }
    ]
  }
}
