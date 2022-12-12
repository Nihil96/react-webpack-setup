const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let mode = "development"

if (process.env.NODE_ENV === "production") {
  mode = "production"
}

module.exports = {
  mode,
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
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  devtool: "source-map",

  devServer: {
    static: "./dist",
    hot: true,
  },
}
