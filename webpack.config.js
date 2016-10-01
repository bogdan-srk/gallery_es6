var path = require('path');

module.exports = {
  entry: [
    './src/main',
    './src/stl.less',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        query: {
          presets: ['es2015']
        }
      },
      {
        loader: "style!css!autoprefixer!less",
        test: /\.less$/
      }
    ]
  },
  watch: true,
  devServer: {
    contentBase: "./src"
  }
};

//webpack-dev-server --host 0.0.0.0 --port 8080 --inline