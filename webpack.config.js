var webpack = require('webpack')

module.exports = {
  entry: {
    // per-page js
    home: './src/js/containers/home.js',

    // common bundle of js files that will be on every page
    common: [
      'preact',
      './src/js/containers/nav.js',
      './src/js/vendor/spf.js',
      './src/js/spf.js',
      './src/js/pubsub.js'
    ]
  },
  output: {
    //path: -- gulp handles dst path --
    filename: "[name].bundle.js"
  },

  plugins: ([
    new webpack.optimize.CommonsChunkPlugin("common", "common.bundle.js"),
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.UglifyJsPlugin({sourceMap: false, mangle: true})
  ]),

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /vendor|node_modules/,
        loader: 'babel'
      }
    ]
  }

}