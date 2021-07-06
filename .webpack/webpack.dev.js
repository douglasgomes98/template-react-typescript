const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "bundle-dev.js",
  },
  devServer: {
    port: 3333,
    contentBase: path.join(__dirname, "..", "public"),
    compress: true,
    writeToDisk: false,
    open: true,
    hot: true,
    liveReload: true,
  },
});
