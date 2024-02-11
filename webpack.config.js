const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: process.env.MODE ?? "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.[contenthash].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: "babel-loader",
      exclude: /node-modules/,
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html",
  })],
  devServer: {
    open: true,
  }
}