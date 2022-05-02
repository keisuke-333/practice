const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const MODE = 'development'
const sourceMapStatus = MODE === 'development'

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: "./index.js",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "main.js",
    clean: {
      keep: /index.html/,
    }
  },
  devtool: "hidden-source-map",
  mode: "development",
  devServer: {
    static: "dist",
    open: true
  },
  module: {
    rules: [
      {
        test:/\.(sass|scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              url: true,
              sourceMap: sourceMapStatus
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: sourceMapStatus
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpg|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../css/[name].css'
    })
  ]
}