module.exports = {
  context: `${__dirname}/src`,
  entry: "./index.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "./assets/js/main.js",
    clean: {
      keep: /index.html/,
    }
  },
  mode: "development",
  devServer: {
    static: "dist",
    open: true
  }
}