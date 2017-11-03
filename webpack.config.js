const path = require('path');

module.exports = {
  devtool: "cheap-module-source-map",
  entry: './src/client/index.js',
  output: {
    pathinfo: true,
    filename: 'client.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [ 'env' ]
        }
      }
    ]
  }
};