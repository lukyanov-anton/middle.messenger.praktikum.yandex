const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const prodConfig = {
  mode: "production",
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
module.exports = merge(common, prodConfig);
