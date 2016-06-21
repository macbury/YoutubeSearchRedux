var webpack           = require("webpack");
var failPlugin        = require('webpack-fail-plugin');
var path              = require("path");
var CompressionPlugin = require("compression-webpack-plugin");

var production  = (process.env.NODE_ENV === 'production');
var development = !production;

var config = {
  entry: [
    './src/index.html',
    './src/index.tsx'
  ],

  output: {
    filename: './dist/bundle.js'
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      { test: /\.ts(x?)$/,           loaders: ['ts-loader'] },
      { test: /index\.html$/,        loader: "file-loader?name=[path][name].[ext]" },
      { test: /\.(jpe?g|png|gif)$/i, loader: "file?name=[path][name].[ext]?[hash]" }
    ],

    preLoaders: [
      { test: /\.js$/, loader: "source-map-loader" }
    ]
  },

  plugins: []
};

if (development) {
  config['devtool'] = 'source-map';
  config.devServer = {
    host: '0.0.0.0',
    port: 3000
  };

  config.plugins.push(
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
}


if (production) {
  config.plugins.push(
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      minimize: true,
      mangle: true,
      compressor: { warnings: false },
      sourceMap: false
    }),
    new CompressionPlugin({
      algorithm: "gzip",
      regExp: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  );
}


module.exports = config;
