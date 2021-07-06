const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "bundle-prod.js",
  },
});
