var path = require('path');

module.exports = {
  entry: './frontend/aqua_log.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'eval-source-map',
  resolve: {
    fallback: {
      buffer: false,
      path: false,
      assert: false,
      fs: false
    },
    extensions: ['.js', '.jsx', '*']
  }
};