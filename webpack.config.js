const MODE = "development";

const isDev = MODE == "development";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: MODE,
  entry: {
    bundle: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [{
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: isDev,
              importLoaders: 2
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: isDev,
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        generator: {
          filename: "./assets/[name][ext]"
        },
        type: 'asset/resource'
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

  target: ["web", "es5"],

  devServer: {
    static: "dist",
    open: true,
  }
}