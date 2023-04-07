const path = require("path");

module.exports = {
  mode: "development",
  entry: "./Code/SecondClassCitizens/main.js",
  module: {
    rules: [
      {
        test: /\.csv$/,
        loader: 'raw-loader',
      }
    ]
  },
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  resolve: {
    extensions: [".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./")
    },
    compress: true,
    port: 8000,
  },
};