const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');


const srcRoot = "./resources/assets/js/changeme-app/src/"
mix.webpackConfig({
  devtool: 'eval',
  entry: [
    "babel-polyfill",
    srcRoot + "app.js"
  ],
  output: {
      path: path.join(__dirname, 'public/js'),
      filename: 'bundle.min.js',
      publicPath: '/public/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      query: {
        presets: ["es2015", "react"],
        plugins: ["transform-object-rest-spread"]
      },
      include: path.join(__dirname, 'public/js/lib')
    }]
  }
})
