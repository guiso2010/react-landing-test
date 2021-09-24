const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DotEnv = require("dotenv-webpack");

const MODE = "development";

module.exports = {
  entry: "./src/index.js",
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: ["node_modules"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/",
  },
  cache: true,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename: "index.html",
      template: "./src/index.html",
      inject: true,
      chunkSortMode: "dependency",
    }),
    new DotEnv(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: MODE,
  optimization: {
    nodeEnv: MODE,
    usedExports: true,
  },
  devServer: {
    // contentBase: path.resolve(__dirname, "dist"),
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
};
