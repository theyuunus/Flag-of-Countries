const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "src/js/index.js"),
    about: path.resolve(__dirname, "src/js/about.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Countries | Home",
      template: path.resolve(__dirname, "src/index.html"),
      filename: 'index.html',
      chunks: ['index'], 
    }),

    new HtmlWebpackPlugin({
        title: "Countries | About",
        template: path.resolve(__dirname, "src/pages/about.html"),
        filename: 'about.html',
        chunks: ['about']
    })
  ]
};
