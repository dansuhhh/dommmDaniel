var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./dommmDaniel/main.js",
  output: {
    path: __dirname,
    filename: "dommmDaniel/dommmDaniel.js"
  },
  devtool: "source-map"
};
