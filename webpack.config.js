var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./lib/main.js",
  output: {
    path: __dirname,
    filename: "dommmDaniel.js"
  },
  devtool: "source-map"
};
