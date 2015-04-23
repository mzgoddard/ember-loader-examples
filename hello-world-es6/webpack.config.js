const webpack = require('webpack');

const ResolverPlugin = webpack.ResolverPlugin;

module.exports = {
  context: __dirname,
  entry: __dirname + '/main.js',
  // source-map is slow but very useful. Use eval-source-map for speed with
  // source-maps. Disable this key to drop source-maps and get the most speed.
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|bower_components/,
        loader: 'babel-loader'
      },
      { test: /\.hbs$/, loader: 'ember-templates-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  },
  resolve: {
    modulesDirectories: ['./bower_components', './node_modules'],
  },
  plugins: [
    new ResolverPlugin(
      new ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ],
};
