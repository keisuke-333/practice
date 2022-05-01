const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: "./index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "./assets/js/main.js",
    clean: {
      keep: /index.html/,
    }
  },
  devtool: "hidden-source-map",
  mode: "development",
  devServer: {
    static: "dist",
    open: true
  }
}