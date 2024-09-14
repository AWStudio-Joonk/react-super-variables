import { resolve } from "path";

export const mode = "production";
export const entry = "./";
export const output = {
  path: resolve("lib"),
  filename: "index.js",
  libraryTarget: "commonjs2",
};
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      exclude: /(node_modules)/,
      use: "babel-loader",
    },
  ],
};
