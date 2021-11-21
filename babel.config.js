module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        loose: true,
        modules: false,
      },
    ],
  ],
  plugins: ["./babel-transform-less-to-css"],
};
