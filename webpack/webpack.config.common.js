const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { EnvironmentPlugin } = require("webpack");

const rootPath = path.resolve(__dirname, "..");
const srcPath = path.resolve(__dirname, "..", "src");
const distPath = path.resolve(__dirname, "..", "dist");

module.exports = {
  entry: path.resolve(srcPath, "index.ts"),
  output: {
    path: distPath,
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", "..."],
    alias: {
      "@api": path.resolve(srcPath, "api/"),
      "@assets": path.resolve(srcPath, "assets/"),
      "@pages": path.resolve(srcPath, "pages"),
      "@components": path.resolve(srcPath, "components"),
      "@controllers": path.resolve(srcPath, "controllers/"),
      "@helpers": path.resolve(srcPath, "helpers/"),
      handlebars: "handlebars/dist/handlebars.min.js",
    },
  },
  module: {
    rules: [
      /* {
        test: /\.tpl$/,
        use: path.resolve(__dirname, "tpl-loader.js"),
      }, */
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.svg$/i,
        type: "asset",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            /*  options: {
              configFile: path.resolve(rootPath, "tsconfig.json"),
            }, */
          },
        ],
        exclude: /(node_modules)/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(srcPath, "index.html"),
      filename: path.resolve(distPath, "index.html"),
    }),
    new EnvironmentPlugin({
      API_ENDPOINT: "https://ya-praktikum.tech/api/v2",
      WS_CHAT_ENDPOINT: "wss://ya-praktikum.tech/ws/chats",
    }),
  ],
};
