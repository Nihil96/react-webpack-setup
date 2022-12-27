const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { HotModuleReplacementPlugin } = require("webpack")

const plugins = [
  new CleanWebpackPlugin(),
  new HotModuleReplacementPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({ template: "./src/index.html" }),
]

module.exports = { plugins }
