const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    port: 8000,
    contentBase: path.join(__dirname, "public"),
    compress: true,
    historyApiFallback: true,
    writeToDisk: true,
    open: true,
  },
});
