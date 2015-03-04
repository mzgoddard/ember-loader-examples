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
    alias: {
      ember: 'ember/ember',
      handlebars: 'handlebars/handlebars',
      jquery: 'jquery/dist/jquery'
    }
  },
};
