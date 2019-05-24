const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js')
  },
  output: {
    path: Path.join(__dirname, '../docs'),
    filename: 'js/[name].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../public'), to: 'public' }
    ]),
    new HtmlWebpackPlugin({
      title: 'Hero',
      template: Path.resolve(__dirname, '../src/index.html'),
      filename: '../docs/index.html' //relative to root of the application
    }),
    new HtmlWebpackPlugin({
      title: 'ScrollMagic',
      template: Path.resolve(__dirname, '../src/scrollmagic.html'),
      filename: '../docs/scrollmagic.html' //relative to root of the application
    }),

  ],
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
      'Modules': Path.resolve(__dirname, '../node_modules'),
      'ScrollMagic': Path.resolve(__dirname, '../node_modules/scrollmagic/scrollmagic/minified'),
      'TimelineMax': Path.resolve(__dirname, '../node_modules/gsap/src/minified'),
      'TweenLite':  Path.resolve(__dirname, '../node_modules/gsap/src/minified/TweenLite.min.js'),
    }
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      },
    ]
  }
};
