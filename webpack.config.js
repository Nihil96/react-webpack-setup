const path = require("path")
const { rules } = require("./webpack/rules")
const { plugins } = require("./webpack/plugins")
const { getAliases } = require("./webpack/utils")

const mode = process.env.NODE_ENV === "production" ? "production" : "development"

module.exports = {
  mode,
  entry: "./src/index.tsx",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [...rules],
  },

  plugins: [...plugins],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: getAliases(),
  },

  devtool: "source-map",

  devServer: {
    static: "./dist",
    hot: true,
    port: 9000,
  },
}
