const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // Gunakan file entry TypeScript
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // Membersihkan folder output sebelum build
  },
  mode: "development", // Ubah ke 'production' untuk build akhir
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@app": path.resolve(__dirname, "src/app"), // Pastikan mengarah ke 'src/app'
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Loader untuk file TypeScript
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Menambahkan CSS ke DOM dengan tag <style>
          "css-loader", // Memproses @import dan url()
          "sass-loader", // Mengkompilasi SCSS menjadi CSS
        ],
      },
      {
        test: /\.css$/, // Loader untuk file CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Template HTML
    }),
  ],
};
