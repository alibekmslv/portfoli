const path = require("path");

module.exports = {
  entry: "./src/scripts/scripts.js",
  output: {
    path: path.resolve(__dirname, "./src/js"),
    filename: "scripts-bundled.js"
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
