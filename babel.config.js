const DEVELOPMENT = process.env.NODE_ENV === "development";
const PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: "last 2 versions",
        },
        modules: false,
        loose: false,
      },
    ],
    ["@babel/preset-react", { development: DEVELOPMENT }],
  ],
  plugins: [
    PRODUCTION && "minify-dead-code-elimination",
    PRODUCTION && "babel-plugin-transform-react-remove-prop-types",
    PRODUCTION && "babel-plugin-lodash",
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "syntax-dynamic-import",
    "transform-class-properties",
    "react-hot-loader/babel",
    [
      "@babel/plugin-transform-runtime",
      {
        absoluteRuntime: false,
        corejs: false,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
  ].filter(Boolean),
  env: {
    test: {
      plugins: ["transform-es2015-modules-commonjs"],
    },
  },
};
