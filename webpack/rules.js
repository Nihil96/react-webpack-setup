const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const jsRule = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
}

const tsRule = {
  test: /\.(ts)x?$/i,
  exclude: /node_modules/,
  use: {
    loader: "ts-loader",
  },
}

const cssRule = {
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
}

const imageRule = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
}

const fontRule = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: "asset/resource",
}

const rules = [jsRule, tsRule, cssRule, imageRule, fontRule]

module.exports = { rules }
