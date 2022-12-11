const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

let mode = "development"

if (process.env.NODE_ENV === "production") {
  mode = "production"
}

module.exports = {
  mode: mode,
  entry: "./src/index.tsx",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ts)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  devtool: "source-map",

  devServer: {
    static: "./dist",
    hot: true,
  },
}
