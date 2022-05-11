const { merge } = require("webpack-merge");
const common = require("./webpack.config.common.js");
const devConfig = {
  mode: "development",
  devtool: "inline-source-map",
};
module.exports = merge(common, devConfig);
