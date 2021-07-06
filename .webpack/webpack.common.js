const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: { main: "./src/index.tsx" },
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "bundle-prod.js",
  },
  target: "web",
  resolve: {
    extensions: ["tsx", ".js", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "..", "public", "index.html"),
    }),
  ],
};
