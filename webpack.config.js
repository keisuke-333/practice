module.exports = {
  entry: "./src/index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js"
  },
  mode: "development",
  devServer: {
    static: "dist",
    open: true
  }
}