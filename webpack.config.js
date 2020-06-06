const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = (env) => {
  // entry files
  return {

  entry: ['@babel/polyfill', './src/js/app.js', './src/sass/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `js/[name].[chunkhash].js`,
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    compress: true,
    port: 8080,
    open: "Google Chrome",
    watchContentBase: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: `css/style.[contenthash].css` }),
    new ManifestPlugin({
      fileName: "manifest.json",
    }),
    new HtmlPlugin({
      filename: 'index.html',
      template: require("html-webpack-template"),
      appMountId:'app',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/js')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env",'@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  mode: 'development'
  }
};