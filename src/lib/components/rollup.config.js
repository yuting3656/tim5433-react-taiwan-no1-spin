import styles from "rollup-plugin-styles";
import babel from "@rollup/plugin-babel";
import sourcemaps from "rollup-plugin-sourcemaps";
const autoprefixer = require("autoprefixer");

// the entry point for the library
const input = "src/index.js";

//
var MODE = [
  {
    fomart: "cjs",
  },
  {
    fomart: "esm",
  },
  {
    fomart: "umd",
  },
];

var config = [];

MODE.map((m) => {
  var conf = {
    input: input,
    output: {
      // then name of your package
      name: "tim5433-react-taiwanNo1-spin",
      file: `dist/index.${m.fomart}.js`,
      format: m.fomart,
      exports: "auto",
    },
    // this externelizes react to prevent rollup from compiling it
    external: ["react", /@babel\/runtime/],
    plugins: [
      // these are babel comfigurations
      babel({
        exclude: "node_modules/**",
        plugins: ["@babel/transform-runtime"],
        babelHelpers: "runtime",
      }),
      // this adds sourcemaps
      sourcemaps(),
      // this adds support for styles
      styles({
        postcss: {
          plugins: [autoprefixer()],
        },
      }),
    ],
  };
  config.push(conf);
});

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [...config];