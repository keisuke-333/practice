module.exports = {
  context: `${__dirname}/src`,
  entry: "./index.js",
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