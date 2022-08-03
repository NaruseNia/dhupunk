const MODE = "production";

const isDev = MODE == "development";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: MODE,
  entry: {
    bundle: path.resolve(__dirname, "src/js/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js",
    assetModuleFilename: "assets/[name][ext]",
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: isDev,
              importLoaders: 2,
            },
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
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: "asset/resource",
      },
      // {
      //   test: /\.html$/i,
      //   type: "asset/resource",
      //   generator: {
      //     filename: "static/[hash][ext][query]",
      //   },
      // },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "DHUPunk | Top",
      template: "src/index.html",
    })
  ],

  target: ["web", "es5"],

  devServer: {
    static: "docs",
    open: true,
  },
};
