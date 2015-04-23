const webpack = require('webpack');

const ResolverPlugin = webpack.ResolverPlugin;

module.exports = {
  context: __dirname,
  entry: __dirname + '/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
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
