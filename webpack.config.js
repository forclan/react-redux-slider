var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: {
    'Slider': [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './demo/example.js'
    ],
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    library: 'shared-components',
    libraryTarget: 'umd',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: [path.join(__dirname, 'src'), path.join(__dirname, 'demo')]
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: path.join(__dirname, 'src')
    }]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.scss']
  }
  // externals: {
  //   'react': 'react',
  //   'react-dom': 'react-dom',
  //   'redux': 'redux',
  //   'react-redux': 'react-redux'
  // }
};